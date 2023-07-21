import axios from "axios";
import { IPost, ITodos } from "../../models/models";
import { AppDispatch } from "../store";
import { postSlice } from "./PostSlice";

export const fetchPosts = (limit: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postSlice.actions.postsFetching());
        const response = await axios.get<ITodos[]>(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        dispatch(postSlice.actions.postsFetchingSuccsess(response.data));
    } catch (e) {
        // dispatch(postSlice.actions.postsFetchingError(e.message))
    }
}