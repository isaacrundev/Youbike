type CityData = {
  name: string;
  nameCn: string;
  apiUrl: string;
};

type YouBikeData = {
  sarea: string;
  ar: string;
  sbi: string;
  bemp: string;
  sareaen: string;
};

type Area = { name: string; nameCn: string; checked: boolean };

type State = {
  category: { city: CityData; areas: Area[] };
  keywords: string;
  page: { current: number; total: number };
  paginatedData: YouBikeData[][];
};

type Action =
  | { type: "CHANGE_CITY"; payload: { city: CityData } }
  | { type: "SET_AREA_CHECKBOXES"; payload: { areas: Area[] } }
  | { type: "CHANGE_AREA_CHECKBOX"; payload: { each: Area } }
  | { type: "FILTER_BY_KEYWORDS"; payload: { keywords: string } }
  | { type: "CURRENT_PAGE_UPDATE"; payload: { current: number } }
  | { type: "TOTAL_PAGE_UPDATE"; payload: { total: number } }
  | { type: "SET_PAGINATED_DATA"; payload: { paginatedData: YouBikeData[][] } };

export { CityData, YouBikeData, State, Area, Action };
