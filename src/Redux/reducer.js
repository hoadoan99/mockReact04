/** @format */

const url = "https://api.github.com/users/defunkt/repos";

const initialState = {
  reposs: [],
};
export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, reposs: action.payload };
      console.log(...state);
    case "ADD_DATA":
      return { ...state, reposs: [...state.reposs, action.payload] };
    case "DEL_DATA":
      const newRepos = state.reposs.filter((item) => {
        return item.id !== action.payload;
      });
      return { ...state, reposs: newRepos };
    default:
      return state;
  }
}
export async function fetchData(dispatch) {
  const result = await fetch(url);
  const data = await result.json();
  dispatch({ type: "FETCH_DATA", payload: data });
}
