import { Box } from "@mui/material";
import { createContext, ReactNode } from "react";

export const ActiveTabStateContext = createContext<string | undefined>(undefined);

interface TabContentsProps {
  /**
   * @uxpinignoreprop
   * */
  uxpId?: string;

  /**
   * @uxpinignoreprop
   * */
  children?: ReactNode;

  activeTab?: string;
}

export default function TabContents(props: TabContentsProps) {
  // const { setActiveTab } = useActiveTab();

  // useEffect(() => {
  //   setActiveTab(props.activeTab || "");
  // }, [props.activeTab, setActiveTab]);

  return (
    <Box>
      <ActiveTabStateContext.Provider value={props.activeTab}>
        <>Tab Contents {props.children}</>
      </ActiveTabStateContext.Provider>
    </Box>
  );
}
