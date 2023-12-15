import { Action, State } from "..";

export const initialState: State = {
  category: {
    city: { name: "", nameCn: "", apiUrl: "" },
    areas: [],
  },
  keywords: "",
  page: { currentPage: 1, countPerPage: 30 },
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
    case "UPDATE_CURRENT_PAGE":
      return {
        ...state,
        page: { ...state.page, currentPage: action.payload.currentPage },
      };
    case "UPDATE_COUNT_PER_PAGE":
      return {
        ...state,
        page: { ...state.page, countPerPage: action.payload.countPerPage },
      };

    default:
      return state;
  }
};
