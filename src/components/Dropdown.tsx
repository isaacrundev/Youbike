import { Dispatch } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { cityData } from "@/data/data";
import { v4 } from "uuid";
import { Action } from "..";

export default function Dropdown({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <Select
        defaultValue="0"
        onValueChange={(value: string) =>
          dispatch({ type: "CHANGE_CITY", payload: { city: cityData[+value] } })
        }
      >
        <SelectTrigger className="w-full md:w-[143px] rounded-md bg-youbikeWhite">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {cityData.map((i, index) => (
            <SelectItem key={v4()} value={index.toString()}>
              {i.nameCn}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}
