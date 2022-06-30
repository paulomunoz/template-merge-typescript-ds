import { useMemo, useRef, useState } from "react";

import GoogleChart from "react-google-charts";
import { ReactGoogleChartEvent } from "react-google-charts/dist/types";
import _isEqual from "lodash/isEqual";
import _zip from "lodash/zip";
import { renderToString } from "react-dom/server";
import useElementSize from "../../hooks/useElementSize";
import { Box, Divider } from "@mui/material";

const Tooltip = ({ date, value }: { date: any; value: number }) => (
  <Box sx={{ p: 3, maxWidth: 400 }}>
    <Box sx={{ display: "flex", justifyContent: "space-between" }} className="flex justify-between">
      <span>{date.date}</span>
      <span>
        {value !== null &&
          value.toLocaleString("en-Gb", {
            style: "currency",
            currency: "GBP",
          })}
      </span>
    </Box>
    {/* <hr className="my-1" /> */}
    <Divider />
    <p className="italic">Key events:</p>
    <ul>
      {date.keyEvents.map((keyEvent: string) => (
        <li key={keyEvent}>- {keyEvent}</li>
      ))}
    </ul>
  </Box>
);

interface DataType {
  dates: {
    date: string;
    keyEvents: string[];
  }[];
  series: {
    values: (number | null)[];
    name: string;
  }[];
}

interface ChartProps {
  data: DataType;
}

const Chart = ({ data }: ChartProps) => {
  const [annotationXPos, setAnnotationXPos] = useState(0);
  const [innerChartArea, setInnerChartArea] = useState<google.visualization.ChartBoundingBox>();
  const chartContainerRef = useRef(null);
  const labelRef = useRef(null);

  const chartSize = useElementSize(chartContainerRef);
  const labelSize = useElementSize(labelRef);

  const headers = useMemo(
    () => [
      [
        { type: "string", label: "Date" },
        ...data.series.flatMap((seriesLine: any) => [
          { type: "number", label: seriesLine.name },
          { role: "tooltip", type: "string", p: { html: true } },
        ]),
      ],
    ],
    [data]
  );

  const seriesData = useMemo(
    () =>
      data.series
        .map((seriesLine: any) => [
          seriesLine.values,
          seriesLine.values.map((value: any, index: number) =>
            renderToString(<Tooltip date={data.dates[index]} value={value} />)
          ),
        ])
        .flat(),
    [data.dates, data.series]
  );

  const datesData = useMemo(() => data.dates.map(({ date }: any) => date), [data.dates]);

  // Concatenates headers with dates and series data
  // We've prepared each series as a separate array, zip merges the arrays (https://lodash.com/docs/4.17.15#zip)
  const renderData: any = useMemo(
    () => [...headers, ..._zip(datesData, ...seriesData)],
    [datesData, headers, seriesData]
  );

  const chartEvents: ReactGoogleChartEvent[] = useMemo(
    () => [
      {
        callback: ({ chartWrapper, google }) => {
          // Forcing cast to google.visualization.LineChart because react-google-charts types
          // seem to be missing important properties and methods
          const chart = chartWrapper.getChart() as unknown as google.visualization.LineChart;
          var cli = chart.getChartLayoutInterface();

          const labelX = Math.floor(cli.getXLocation(renderData.length - 4));
          const maxX = chartSize.width - labelSize.width / 2;

          const chartArea = cli.getChartAreaBoundingBox();
          if (!_isEqual(innerChartArea, chartArea)) {
            setInnerChartArea(chartArea);
          }

          setAnnotationXPos(Math.min(labelX, maxX));
        },
        eventName: "ready",
      },
    ],
    [chartSize.width, innerChartArea, labelSize.width, renderData.length]
  );

  return (
    <div className="my-8">
      <div ref={chartContainerRef} className="relative">
        <GoogleChart
          width={"100%"}
          height={"400px"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={renderData}
          chartEvents={chartEvents}
          options={{
            chartArea: { top: 30, width: "90%", left: 70, height: "300" },
            tooltip: { isHtml: true, trigger: "visible" },
            interpolateNulls: false,
            lineWidth: 2,
            series: {
              0: { color: "#8E8A81" },
              1: { color: "#3D8D79" },
              2: { color: "#F6B543" },
            },
            vAxis: {
              title: "Realised + Forecasted LTR (£)",
              maxValue: 650,
            },
            legend: { position: "bottom" },
            pointSize: 5,
          }}
        />
        <Box
          style={{ left: annotationXPos, top: innerChartArea?.top, height: innerChartArea?.height }}
          sx={{ top: 0, position: "absolute", height: "100%", width: "1px", bgcolor: "black" }}
          className="top-0 absolute h-full w-px bg-blue-800"
        >
          <Box
            ref={labelRef}
            sx={{
              position: "absolute",
              whiteSpace: "nowrap",
              top: "-1.75rem",
              transform: "translateX(-50%)",
              color: "blue",
            }}
            className="absolute whitespace-nowrap -top-7 transform -translate-x-2/4 text-blue-800"
          >
            Model Implemented
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Chart;
