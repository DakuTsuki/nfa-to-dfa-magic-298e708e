import { useContext } from "react";

import { AppContext } from "../store/Context";
import { FAGraph } from "./FAGraph";

export const NFAGraph = () => {
  const { state } = useContext(AppContext);

  return <FAGraph data={state} title={"NFA Graph"} />;
};
