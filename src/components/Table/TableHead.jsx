import * as React from "react";

export default ({
  cols = []
}) => {
  return (
    <thead className="tableHead">
      <tr>
        {cols && cols.length && cols.map((col, i) => {
          return (
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
            >
              {col}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}