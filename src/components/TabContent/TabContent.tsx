import { ReactNode, useContext } from "react";
import { Box } from "@mui/material";
import { ActiveTabStateContext } from "../TabContents/TabContents";

interface TabContentProps {
  /**
   * @uxpinignoreprop
   * */
  uxpId?: string;

  /**
   * @uxpinignoreprop
   * */
  children?: ReactNode;

  id?: string;
}

export default function TabContent(props: TabContentProps) {
  const activeTab = useContext(ActiveTabStateContext);
  return <Box sx={{ display: activeTab === props.id ? "block" : "none" }}>{props.children}</Box>;
}
