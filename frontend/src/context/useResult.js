import { useContext } from "react";
import { ResultContext } from "./ResultContext";

export function useResult() {
  return useContext(ResultContext);
}