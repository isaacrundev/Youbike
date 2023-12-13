import { ChangeEvent, Dispatch, useState } from "react";
import { Input } from "./ui/input";
import closeIcon from "../assets/close_24px.png";
import searchIcon from "../assets/search_24px.png";
import { v4 } from "uuid";

export default function SearchInput({
  keywordsValue,
  dispatch,
}: {
  keywordsValue: string;
  dispatch: Dispatch<object>;
}) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "FILTER_BY_KEYWORDS",
      payload: { keywords: e.target.value },
    });
  };
  return (
    <div className="relative">
      <div className="w-full md:max-w-[277px] bg-[#F6F6F6] rounded-md flex relative">
        <Input
          onChange={handleInputChange}
          type="text"
          className="bg-[#F6F6F6]"
          placeholder="搜尋站點"
          value={keywordsValue}
        />
        <div className="absolute top-3 right-2">
          {keywordsValue ? (
            <img
              alt="closeIcon"
              src={closeIcon}
              width={18}
              height={18}
              onClick={() =>
                dispatch({
                  type: "FILTER_BY_KEYWORDS",
                  payload: { keywords: "" },
                })
              }
            />
          ) : (
            <img alt="search_icon" src={searchIcon} width={18} height={18} />
          )}
        </div>
      </div>
      {/* {deBounceInput && (
        <div className="absolute top-11 rounded-[8px] w-full bg-[#F6F6F6] flex flex-col">
          {searchResult.length !== 0 ? (
            searchResult.map((i) => (
              <div
                key={v4()}
                className="px-3 py-2 text-[#B5CC22] hover:cursor-pointer"
                onClick={() => {
                  setCity(i);
                  setInput("");
                }}
              >
                <p>{i.name}</p>
              </div>
            ))
          ) : (
            <div>
              <p className="px-3 py-2">查無站點</p>
            </div>
          )}
        </div>
      )} */}
    </div>
  );
}
