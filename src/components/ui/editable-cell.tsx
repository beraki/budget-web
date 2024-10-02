import { useEffect, useState } from "react";
import { Input } from "./input";
import { CellContext } from "@tanstack/react-table";

export const EditableCell = ({
  getValue,
  row,
  column,
  table,
}: CellContext<any, string>) => {
  const initialValue = getValue() ?? "0";

  const [value, setValue] = useState<string>(initialValue);

  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue, setValue]);

  return (
    <Input
      className="whitespace-nowra overflow-hidden text-ellipsis border-0 bg-transparent hover:bg-gray-200 focus:border-0 focus:bg-white focus-visible:ring-transparent"
      value={value}
      onBlur={onBlur}
      step="0.01"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
