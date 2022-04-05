/** @format */

const url = "https://api.github.com/users/defunkt/repos";

const initialState = {
  items: [],
};
export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, items: action.payload };
    default:
      return state;
  }
}
export async function fetchData(dispatch) {
  const result = await fetch(url);
  const data = await result.json();
  dispatch({ type: "FETCH_DATA", payload: data });
}
