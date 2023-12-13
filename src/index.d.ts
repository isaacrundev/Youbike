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

enum ActionType {
  CHANGE_CITY = "CHANGE_CITY",
  SET_AREA_CHECKBOXES = "SET_AREA_CHECKBOXES",
  CHANGE_AREA_CHECKBOX = "CHANGE_AREA_CHECKBOX",
  FILTER_BY_AREAS = "FILTER_BY_AREAS",
  FILTER_BY_SPOT_NAMES = "FILTER_BY_SPOT_NAMES",
}

type Action = {
  type: ActionType;
  payload: { city: string; areas: Area[]; each: Area };
};

export { CityData, YouBikeData, State, Area, Action };
