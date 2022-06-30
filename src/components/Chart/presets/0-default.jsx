import * as React from "react";
import Chart from "../Chart";

const data = {
  dates: [
    {
      date: "Dec '20",
      keyEvents: ["EVE022 - Marketing Campaign/Promo - Full month of 3 months free (2/2)"],
    },
    {
      date: "Jan '21",
      keyEvents: ["EVE022 - Marketing Campaign/Promo - Full month of 3 months free (2/2)"],
    },
    {
      date: "Feb '21",
      keyEvents: ["EVE022 - Marketing Campaign/Promo - Full month of 3 months free (2/2)"],
    },
    {
      date: "Mar '21",
      keyEvents: ["EVE022 - Marketing Campaign/Promo - Full month of 3 months free (2/2)"],
    },
    {
      date: "Apr '21",
      keyEvents: ["EVE022 - Marketing Campaign/Promo - Full month of 3 months free (2/2)"],
    },
    {
      date: "May '21",
      keyEvents: ["EVE022 - Marketing Campaign/Promo - Full month of 3 months free (2/2)"],
    },
    {
      date: "Jun '21",
      keyEvents: ["EVE022 - Marketing Campaign/Promo - Full month of 3 months free (2/2)"],
    },
    {
      date: "Jul '21",
      keyEvents: ["EVE022 - Marketing Campaign/Promo - Full month of 3 months free (2/2)"],
    },
    {
      date: "Aug '21",
      keyEvents: ["EVE022 - Marketing Campaign/Promo - Full month of 3 months free (2/2)"],
    },
    {
      date: "Sep '21",
      keyEvents: ["EVE022 - Marketing Campaign/Promo - Full month of 3 months free (2/2)"],
    },
    {
      date: "Oct '21",
      keyEvents: ["EVE022 - Marketing Campaign/Promo - Full month of 3 months free (2/2)"],
    },
    {
      date: "Nov '21",
      keyEvents: ["EVE022 - Marketing Campaign/Promo - Full month of 3 months free (2/2)"],
    },
  ],
  series: [
    {
      name: "Realised + Forecasted LTR before implementation",
      values: [425, 410, 410, 410, 430, 440, 430, 440, 448, 497, null, null],
    },
    {
      name: "Realised + Forecasted LTR before implementation",
      values: [null, null, null, null, null, null, null, null, null, 497, 580, 600],
    },
    {
      name: "Baseline",
      values: [null, null, null, null, null, null, null, null, null, 497, 497, 497],
    },
  ],
};

export default (
  <Chart uxpId="chart1" data={data}/>
);
