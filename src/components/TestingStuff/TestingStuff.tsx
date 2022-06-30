import React, { createContext, ReactNode } from "react";
import { Box } from "@mui/material";
interface TestingStuffProps {
  /**
   * @uxpinignoreprop
   * */
  uxpId?: string;

  /**
   * @uxpinignoreprop
   * */
  children?: ReactNode;
}

const ActiveTabStateContext = createContext<string | undefined>(undefined);

export default function TestingStuff(props: TestingStuffProps) {
  return (
    <Box>
      Content outside provider
      <ActiveTabStateContext.Provider value="1">
        asodm aoskd aoskd oak
        <Box>{props.children}</Box>
      </ActiveTabStateContext.Provider>
    </Box>
  );
}
