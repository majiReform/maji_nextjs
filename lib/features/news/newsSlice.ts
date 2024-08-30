import { createAppSlice } from "@/lib/createAppSlice";
import type { AppThunk } from "@/lib/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { newsList, addNews, deleteNews, editNews, singleNews } from "./newsAPI";

export interface NewsInterface {
    _id?: string
    title?: string
    picture?: string
    details?: string | Buffer
    createdAt?: Date
    updatedAt?: Date
}

export interface newsSliceState {
    value: NewsInterface[],
    single: object,
    state: "idle" | "pre-load" | "loading" | "success" | "failed",
    errorMessage?: string,
    page: number,
    totalPages: number
}

const initialState: newsSliceState = {
    value: [],
    single: {},
    state: "pre-load",
    errorMessage: "",
    page: 1,
    totalPages: 0
};

export const newsSlice = createAppSlice({
    name: "news",
    initialState,
    reducers: (create) => ({
        add: create.asyncThunk(
            async (payload: NewsInterface) => {
                await addNews(payload);
                return payload;
            }, {
            pending: (state) => {
                state.state = "loading";
            },
            fulfilled: (state, _action) => {
                
                // if(state.value.length < 10) state.value.push(action.payload);
                state.state = "success";
            },
            rejected: (state, action) => {
                state.state = "failed";
                state.errorMessage = action.error.message;
            }
        }),
        edit: create.asyncThunk(
            async (payload: NewsInterface) => {
                await editNews(payload);
                return payload;
            }, {
            pending: (state) => {
                state.state = "loading";
            },
            fulfilled: (state, _action) => {
                
                // if(state.value.length < 10) state.value.push(action.payload);
                state.state = "success";
            },
            rejected: (state, action) => {
                state.state = "failed";
                state.errorMessage = action.error.message;
            }
        }),
        get: create.asyncThunk(
            async (payload: { page: number, limit: number }) => {
                return await newsList(payload.page, payload.limit);
            }, {
            pending: (state) => {
                state.state = "loading";
            },
            fulfilled: (state, action) => {
                console.log(action.payload.response);
                state.page = action.payload.response.news.currentPage;
                state.value = action.payload.response.news.results;
                state.totalPages = action.payload.response.news.totalPages;
                state.state = "idle";
            },
            rejected: (state, action) => {
                state.state = "failed";
                state.errorMessage = action.error.message;
            }
        }
        ),
        getSingle: create.asyncThunk(
            async (payload: string) => {
                return await singleNews(payload);
            }, {
            pending: (state) => {
                state.state = "loading";
            },
            fulfilled: (state, action) => {
                state.single = action.payload.response;
                state.state = "idle";
            },
            rejected: (state, action) => {
                state.state = "failed";
                state.errorMessage = action.error.message;
            }
        }
        ),
        remove: create.asyncThunk(
            async (payload: string) => {
                return await deleteNews(payload);
            }, {
            pending: (state) => {
                state.state = "loading";
            },
            fulfilled: (state, action) => {
                state.single = {};
                state.value = state.value.filter(s => s._id != action.payload.response.deletedId);
                state.state = "idle";
            },
            rejected: (state, action) => {
                state.state = "failed";
                state.errorMessage = action.error.message;
            }
        }
        ),
    }),
    selectors: {
        selectValue: (counter) => counter.value,
        selectSingle: (counter) => counter.single,
        selectStatus: (counter) => counter.state,
        selectPage: (counter) => counter.page,
        selectTotalPages: (counter) => counter.totalPages,
        errorValue: (counter) => counter.errorMessage
    }
});

export const { add, edit, remove, get, getSingle } = newsSlice.actions;

export const {selectValue, selectStatus, errorValue, selectPage, selectSingle, selectTotalPages} = newsSlice.selectors;
