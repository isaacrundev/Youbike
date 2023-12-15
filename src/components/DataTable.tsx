import { v4 } from "uuid";
import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { State, YouBikeData } from "..";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Dispatch } from "react";

export default function DataTable({
  data,
  state,
}: // dispatch,
{
  data: YouBikeData[];
  state: State;
  // dispatch: Dispatch<Action>;
}) {
  // const handleClickPrev = () => {
  //   if (state.page.currentPage > 0) {
  //     dispatch({
  //       type: "UPDATE_CURRENT_PAGE",
  //       payload: { currentPage: state.page.currentPage },
  //     });
  //   }
  // };
  // const handleClickNext = () => {
  //   if (
  //     state.page.currentPage < Math.round(data.length / state.page.countPerPage)
  //   ) {
  //     dispatch({
  //       type: "UPDATE_CURRENT_PAGE",
  //       payload: { currentPage: state.page.currentPage },
  //     });
  //   }
  // };

  return (
    <>
      <Table>
        {/* <TableCaption className="space-x-8">
          <button
            className="w-20 h-10 rounded-sm bg-youbikeGreen"
            onClick={handleClickPrev}
          >
            <ChevronLeft className="mx-auto" />
          </button>
          <button
            className="w-20 h-10 rounded-sm bg-youbikeGreen "
            onClick={handleClickNext}
          >
            <ChevronRight className="mx-auto" />
          </button>
        </TableCaption> */}
        {/* <TableHeader className=" bg-youbikeGreen"> */}
        <TableHeader className=" bg-youbikeGreen">
          <TableRow>
            <TableHead className="text-white">縣市</TableHead>
            <TableHead className="text-white">區域</TableHead>
            <TableHead className="text-white">站點名稱</TableHead>
            <TableHead className="text-white">可借車輛</TableHead>
            <TableHead className="text-white">可還空位</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data ? (
            data
              ?.filter((j) =>
                state.category.areas.find(
                  (i) => i.name === j.sareaen && i.checked === true
                )
              )
              .filter((i) => i.ar.includes(state.keywords))
              // .slice(
              //   state.page.currentPage,
              //   state.page.currentPage + state.page.countPerPage
              // )
              .map((i) => (
                <TableRow key={v4()}>
                  <TableCell>{state.category.city.nameCn}</TableCell>
                  <TableCell>{i.sarea}</TableCell>
                  <TableCell>{i.ar}</TableCell>
                  <TableCell className="text-youbikeGreen">{i.sbi}</TableCell>
                  <TableCell className="text-youbikeGreen">{i.bemp}</TableCell>
                </TableRow>
              ))
          ) : (
            <TableRow>
              <TableCell>No Data</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell className="text-youbikeGreen"></TableCell>
              <TableCell className="text-youbikeGreen"></TableCell>
            </TableRow>
          )}
          {/* {data ? (
            data
              ?.filter((j) =>
                state.category.areas.find(
                  (i) => i.name === j.sareaen && i.checked === true
                )
              )
              .filter((i) => i.ar.includes(state.keywords))
              .map((i) => (
                <TableRow key={v4()}>
                  <TableCell>{state.category.city.nameCn}</TableCell>
                  <TableCell>{i.sarea}</TableCell>
                  <TableCell>{i.ar}</TableCell>
                  <TableCell className="text-youbikeGreen">{i.sbi}</TableCell>
                  <TableCell className="text-youbikeGreen">{i.bemp}</TableCell>
                </TableRow>
              ))
          ) : (
            <TableRow>
              <TableCell>No Data</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell className="text-youbikeGreen"></TableCell>
              <TableCell className="text-youbikeGreen"></TableCell>
            </TableRow>
          )} */}
        </TableBody>
      </Table>
    </>
  );
}
