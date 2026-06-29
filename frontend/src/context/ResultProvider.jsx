import { useState } from "react";
import { ResultContext } from "./ResultContext";

export function ResultProvider({ children }) {
  const [result, setResult] = useState(null);
  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {children}
    </ResultContext.Provider>
  );
}