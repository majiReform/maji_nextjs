import { createAppSlice } from "@/lib/createAppSlice";
import type { AppThunk } from "@/lib/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { addResearch, deleteResearch, researchList, singleResearch } from "./researchAPI";

export interface ResearchAndReportInterface {
    _id?: string
    title?: string
    category?: string
    pictureURL?: string
    document?: string
    details?: string
    createdAt?: Date
    updatedAt?: Date
}

export interface researchSliceState {
    value: ResearchAndReportInterface[],
    single: object,
    state: "idle" | "pre-load" | "loading" | "success" | "failed",
    errorMessage?: string,
    page: number
}

export interface PageAndNumber { page: number, limit: number }

const initialState: researchSliceState = {
    value: [],
    state: "pre-load",
    single: {},
    errorMessage: "",
    page: 1
};

export const researchSlice = createAppSlice({
    name: "research",
    initialState,
    reducers: (create) => ({
        add: create.asyncThunk(
            async (payload: ResearchAndReportInterface) => {
                return await addResearch(payload);
            }, {
            pending: (state) => {
                state.state = "loading";
            },
            fulfilled: (state, action) => {
                if(state.value.length < 10) state.value.push(action.payload.response.details);
                state.state = "success";
            },
            rejected: (state, action) => {
                state.state = "failed";
                state.errorMessage = action.error.message;
            }
        }),
        get: create.asyncThunk(
            async (payload: PageAndNumber) => {
                return await researchList(payload.page, payload.limit);
            }, {
            pending: (state) => {
                state.state = "loading";
            },
            fulfilled: (state, action) => {
                state.value = action.payload.response.details.results;
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
                return await singleResearch(payload);
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
                return await deleteResearch(payload);
            }, {
            pending: (state) => {
                state.state = "loading";
            },
            fulfilled: (state, action) => {
                state.single = {};
                state.value = state.value.filter(s => s._id != action.payload.response.deletedId);
                state.state = "success";
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
        errorValue: (counter) => counter.errorMessage
    }
});

export const { add, remove, get, getSingle } = researchSlice.actions;

export const { selectValue, selectStatus, errorValue, selectSingle } = researchSlice.selectors;
