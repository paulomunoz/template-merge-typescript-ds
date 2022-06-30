import React, { PropsWithChildren, ReactNode, useEffect } from "react";
import { Box, Button as MuiButton, Tab, Tabs } from "@mui/material";

interface Testing {
  myProp: number;
}

interface AnotherButtonProps {
  label?: string;
  disabled?: boolean;
  /**
   * Width of the Chart in px. Accepts only numbers.
   * @uxpindescription width of the chart
   * */
  somethingElse?: Testing;

  /**
   * @uxpinignoreprop
   * */
  uxpId?: string;

  onUpdateTestValue?: (someValue: number) => void;

  /**
   * @uxpinbind onUpdateTestValue 0
   */
  testValue?: number;

  /**
   * @uxpinignoreprop
   * */
  children?: ReactNode;

  activeTab?: number;
}

export default function AnotherButton(props: AnotherButtonProps) {
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log(props.testValue);
  //     props.onUpdateTestValue?.(props.testValue !== undefined ? props.testValue + 1 : 0);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <Box>{props.testValue}</Box>

      <MuiButton
        onClick={() => {
          props.onUpdateTestValue?.(props.testValue !== undefined ? props.testValue + 1 : 0);
        }}
        disabled={props.disabled}
      >
        {props.label}
      </MuiButton>
    </>
  );
}
