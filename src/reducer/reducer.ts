import { Action, State } from "..";

export const initialState: State = {
  category: {
    city: { name: "", nameCn: "", apiUrl: "" },
    areas: [],
  },
  keywords: "",
  page: { current: 1, total: 1 },
  paginatedData: [],
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "CHANGE_CITY":
      return {
        ...state,
        category: { ...state.category, city: action.payload.city },
      };
    case "SET_AREA_CHECKBOXES":
      return {
        ...state,
        category: { ...state.category, areas: action.payload.areas },
      };
    case "CHANGE_AREA_CHECKBOX":
      return {
        ...state,
        category: {
          ...state.category,
          areas: state.category.areas.map((area) =>
            area.name === action.payload.each.name ? action.payload.each : area
          ),
        },
      };
    case "FILTER_BY_KEYWORDS":
      return { ...state, keywords: action.payload.keywords };
    case "CURRENT_PAGE_UPDATE":
      return {
        ...state,
        page: { ...state.page, current: action.payload.current },
      };
    case "TOTAL_PAGE_UPDATE":
      return {
        ...state,
        page: { ...state.page, total: action.payload.total },
      };
    case "SET_PAGINATED_DATA":
      return {
        ...state,
        paginatedData: action.payload.paginatedData,
      };
    default:
      return state;
  }
};
