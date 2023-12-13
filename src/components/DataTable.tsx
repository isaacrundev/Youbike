import { v4 } from "uuid";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { State, YouBikeData } from "..";

export default function DataTable({
  data,
  state,
}: {
  data: YouBikeData[];
  state: State;
}) {
  return (
    <>
      <Table>
        <TableHeader className=" bg-[#B5CC22]">
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
              .map((i) => (
                <TableRow key={v4()}>
                  <TableCell>{state.category.city.nameCn}</TableCell>
                  <TableCell>{i.sarea}</TableCell>
                  <TableCell>{i.ar}</TableCell>
                  <TableCell className="text-[#B5CC22]">{i.sbi}</TableCell>
                  <TableCell className="text-[#B5CC22]">{i.bemp}</TableCell>
                </TableRow>
              ))
          ) : (
            <TableRow>
              <TableCell>No Data</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell className="text-[#B5CC22]"></TableCell>
              <TableCell className="text-[#B5CC22]"></TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
