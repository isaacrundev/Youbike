import Checkboxes from "./components/Checkboxes";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import bikes from "./assets/Frame.png";
import DataTable from "./components/DataTable";
import { Dispatch, useEffect, useReducer } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { cityData } from "./data/data";
import { Area } from ".";
import { initialState, reducer } from "./reducer/reducer";

const getDataTaipei = async () => {
  const { data } = await axios(cityData[0].apiUrl);
  return data;
};

const getDataTaoyuan = async () => {
  const { data } = await axios(cityData[1].apiUrl);
  console.log(data.result);
  return data;
};

const App = () => {
  const { data } = useQuery({
    queryKey: ["Taipei"],
    queryFn: getDataTaipei,
  });
  // const { data } = useQuery({
  //   queryKey: ["Taoyuan"],
  //   queryFn: getDataTaoyuan,
  // });
  const [state, dispatch]: [
    state: typeof initialState,
    dispatch: Dispatch<object>
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "CHANGE_CITY", payload: { city: cityData[0] } });
  }, []);

  useEffect(() => {
    let result: Area[] = [];
    if (data) {
      for (const i of data) {
        if (!result.find((j) => j.name === i["sareaen"])) {
          result = [
            ...result,
            { name: i["sareaen"], nameCn: i["sarea"], checked: true },
          ];
        }
      }
    }
    dispatch({ type: "SET_AREA_CHECKBOXES", payload: { areas: result } });
  }, [data]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <Header />
      <hr />
      <main className="flex flex-col justify-center w-full gap-5 px-6 py-5 md:px-24">
        <div>
          <p className="text-[#B5CC22] text-2xl">站點資訊</p>
        </div>
        <div className="flex flex-col-reverse gap-3 md:flex-row">
          <Dropdown dispatch={dispatch} />
          <SearchInput dispatch={dispatch} keywordsValue={state.keywords} />
        </div>
        <div className="flex justify-between">
          <Checkboxes areas={state.category.areas} dispatch={dispatch} />
          <img
            className="hidden md:block"
            alt="bikes"
            src={bikes}
            width={502}
            height={172}
          />
        </div>
        <DataTable data={data} state={state} />
      </main>
    </>
  );
};

export default App;
