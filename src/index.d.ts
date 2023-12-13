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
};

//

type Action =
  | { type: "CHANGE_CITY"; payload: { city: CityData } }
  | { type: "SET_AREA_CHECKBOXES"; payload: { areas: Area[] } }
  | { type: "CHANGE_AREA_CHECKBOX"; payload: { each: Area } }
  | { type: "FILTER_BY_KEYWORDS"; payload: { keywords: string } };

export { CityData, YouBikeData, State, Area, Action };
