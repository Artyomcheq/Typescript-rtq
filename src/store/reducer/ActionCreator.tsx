import axios from "axios";
import { IPost } from "../../models/models";
import { AppDispatch } from "../store";
import { postSlice } from "./PostSlice";

export const fetchPosts = (limit: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postSlice.actions.postsFetching());
        const response = await axios.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
        dispatch(postSlice.actions.postsFetchingSuccsess(response.data));
    } catch (e) {
        // dispatch(postSlice.actions.postsFetchingError(e.message))
    }
}