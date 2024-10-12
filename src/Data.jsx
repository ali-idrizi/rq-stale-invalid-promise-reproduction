import { use } from "react";
import { useData } from "./data";

function Data({ q, query }) {
  // const response = use(useData(q).promise);
  const response = use(query.promise);

  return (
    <div>
      [{q}]: &quot;<strong>{response.q}</strong>&quot;
    </div>
  );
}

export default Data;
