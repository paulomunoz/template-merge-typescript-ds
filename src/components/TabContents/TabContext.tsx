import { createContext, useContext, useMemo, useState } from "react";

type ActiveTabProviderProps = { children: React.ReactNode };

const ActiveTabStateContext = createContext<
  { state: {}; setState: React.Dispatch<React.SetStateAction<{}>> } | undefined
>(undefined);

function ActiveTabProvider({ children }: ActiveTabProviderProps) {
  const [state, setState] = useState({});

  const value = useMemo(
    () => ({
      state,
      setState,
    }),
    [state]
  );

  return <ActiveTabStateContext.Provider value={value}>{children}</ActiveTabStateContext.Provider>;
}

function useActiveTab() {
  const context = useContext(ActiveTabStateContext);
  if (context === undefined) {
    throw new Error("useActiveTab must be used within a ActiveTabProvider");
  }
  return {
    activeTab: context.state,
    setActiveTab: (newActiveTAb: string) =>
      context.setState({
        state: newActiveTAb,
        setState: context.setState,
      }),
  };
}

export { ActiveTabProvider, useActiveTab };
