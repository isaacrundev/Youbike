import { Dispatch } from "react";
import { Checkbox } from "./ui/checkbox";
import { Action, Area } from "..";
import { v4 } from "uuid";

export default function Checkboxes({
  areas,
  dispatch,
}: {
  areas: Area[];
  dispatch: Dispatch<Action>;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <div className="flex items-center gap-3">
          <Checkbox
            checked={areas && areas.every((obj) => obj.checked === true)}
            onCheckedChange={(checked) => {
              areas.map((obj) => {
                dispatch({
                  type: "CHANGE_AREA_CHECKBOX",
                  payload: { each: { ...obj, checked: !!checked } },
                });
              });
            }}
            id="check-all"
          />
          <label htmlFor="check-all">全部勾選</label>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 md:grid-cols-4">
        {areas &&
          areas.map((i) => (
            <div key={v4()} className="flex items-center gap-3">
              <Checkbox
                checked={i.checked}
                onCheckedChange={(checked) => {
                  dispatch({
                    type: "CHANGE_AREA_CHECKBOX",
                    payload: { each: { ...i, checked: !!checked } },
                  });
                }}
                id={i.name}
              />
              <label htmlFor={i.name}>{i.nameCn}</label>
            </div>
          ))}
      </div>
    </div>
  );
}
