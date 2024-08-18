import { createAppSlice } from "@/lib/createAppSlice";
import type { AppThunk } from "@/lib/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { addThematicArea, deleteThematicArea, editThematicArea, singleThematicArea, thematicAreaList } from "./thematicAPI";

export interface ThematicAreaInterface {
    _id?: string
    category?: string
    title?: string
    picture?: string
    details?: string | Buffer
    createdAt?: Date
    updatedAt?: Date
}

export interface thematicSliceState {
    value: ThematicAreaInterface[],
    single: object,
    state: "idle" | "pre-load" | "loading" | "success" | "failed",
    errorMessage?: string,
    page: number,
    totalPages: number
}

const initialState: thematicSliceState = {
    value: [],
    single: {},
    state: "pre-load",
    errorMessage: "",
    page: 1,
    totalPages: 0
};

export const thematicSlice = createAppSlice({
    name: "thematic",
    initialState,
    reducers: (create) => ({
        add: create.asyncThunk(
            async (payload: ThematicAreaInterface) => {
                return await addThematicArea(payload);
            }, {
            pending: (state) => {
                state.state = "loading";
            },
            fulfilled: (state, action) => {
                
                if(state.value.length < 10) state.value.push(action.payload.response.addedDetails);
                state.state = "success";
            },
            rejected: (state, action) => {
                state.state = "failed";
                state.errorMessage = action.error.message;
            }
        }),
        edit: create.asyncThunk(
            async (payload: ThematicAreaInterface) => {
                return await editThematicArea(payload);
            }, {
            pending: (state) => {
                state.state = "loading";
            },
            fulfilled: (state, action) => {
                
                if(state.value.length < 10) state.value.push(action.payload.response.addedDetails);
                state.state = "success";
            },
            rejected: (state, action) => {
                state.state = "failed";
                state.errorMessage = action.error.message;
            }
        }),
        get: create.asyncThunk(
            async (payload: { page: number, limit: number }) => {
                return await thematicAreaList(payload.page, payload.limit);
            }, {
            pending: (state) => {
                state.state = "loading";
            },
            fulfilled: (state, action) => {
                state.page = action.payload.response.thematicAreas.currentPage;
                state.value = action.payload.response.thematicAreas.results;
                state.totalPages = action.payload.response.thematicAreas.totalPages;
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
                return await singleThematicArea(payload);
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
                return await deleteThematicArea(payload);
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

export const { add, edit, remove, get, getSingle } = thematicSlice.actions;

export const {selectValue, selectStatus, errorValue, selectPage, selectSingle, selectTotalPages} = thematicSlice.selectors;
