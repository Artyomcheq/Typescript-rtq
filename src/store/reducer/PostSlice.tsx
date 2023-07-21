import { IPost, ITodos } from "../../models/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface TodoState {
    todos: ITodos[];
    isLoading: boolean;
    error: string;
}

const initialState: TodoState = {
    todos: [],
    isLoading: false,
    error: '',
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postsFetching(state) {
            state.isLoading = true
        },
        postsFetchingSuccsess(state, action: PayloadAction<ITodos[]>) {
            state.isLoading = false
            state.error = ""
            state.todos = action.payload
        },
        postsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload

        },
    }
})


export default postSlice.reducer;