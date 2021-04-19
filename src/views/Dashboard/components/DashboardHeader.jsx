import * as React from "react";
import {DatePicker, ORIENTATION} from 'baseui/datepicker';
import {Select, SIZE, TYPE} from 'baseui/select';

export default () => {
  const [shopValue, setShopValue] = React.useState([]);

  const [value, setValue] = React.useState([
    new Date("2020-10-19T10:00:00.388Z"),
    new Date("2021-04-19T10:00:00.388Z")
  ]);
  return (
    <div className="flex px-8 py-4 border-b border-gray-300 items-center">
      <div className="headerTitle flex-1">
        <h2 className="text-2xl tracking-tight leading-tight font-semibold">Insights</h2>
      </div>
      <div className="w-1/3 bg-red-500 mr-2">
        <Select
          options={[
            { label: "Reabler", id: "#F0F8FF" },
            { label: "L´Phone Boutiqe", id: "#FAEBD7" },
            { label: "RePhones", id: "#00FFFF" }
          ]}
          value={shopValue}
          multi
          placeholder="All Channels"
          type={TYPE.search}
          onChange={params => setShopValue(params.value)}
        />
      </div>
      <div className="max-w-sm">
        <DatePicker
          value={value}
          onChange={({ date }) =>
            setValue(Array.isArray(date) ? date : [date])
          }
          quickSelect
          clearable
          range
        />
      </div>
    </div>
  );
}