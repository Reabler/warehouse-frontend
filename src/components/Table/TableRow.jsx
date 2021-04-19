import * as React from "react";

export default ({
  children,
  key,
  even = true
}) => {
  return (
    <tr key={key} className={`${even ? 'tableRowEven' : 'tableRowOdd'} tableRow`}>
      {children}
    </tr>
  )
}