import { Suspense, useState } from "react";
import Data from "./Data";
import { useData } from "./data";

function Search() {
  const [q, setQ] = useState("");

  const query = useData(q);

  console.log(
    `<Search> requested query: "${q}". `,
    `received promise: `,
    query.promise.status,
    query.promise.value
  );

  return (
    <>
      <input value={q} onChange={(e) => setQ(e.target.value)} />
      {query.isFetching && "query fetching..."}
      <Suspense fallback={<div>suspending...</div>}>
        <Data q={q} query={query} />
      </Suspense>
    </>
  );
}

export default Search;
