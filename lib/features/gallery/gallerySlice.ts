import { createAppSlice } from "@/lib/createAppSlice";
import type { AppThunk } from "@/lib/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { addGallery, deleteGallery, galleryList, singleGallery } from "./galleryAPI";

export interface GalleryInterface {
    _id?: string,
    picture?: string,
    createdAt?: Date
    updatedAt?: Date
}

export interface gallerySliceState {
    value: GalleryInterface[],
    state: "idle" | "loading" | "success" | "failed"
    single: object,
    errorMessage?: string
}

const initialState: gallerySliceState = {
    value: [],
    state: "idle",
    single: {},
    errorMessage: ""
};

export const gallerySlice = createAppSlice({
    name: "gallery",
    initialState,
    reducers: (create) => ({
        add: create.asyncThunk(
            async (payload: GalleryInterface) => {
                return await addGallery(payload);
            }, {
            pending: (state) => {
                state.state = "loading";
            },
            fulfilled: (state, action) => {
                state.value.push(action.payload.response);
                state.state = "success";
            },
            rejected: (state, action) => {
                state.state = "failed";
                state.errorMessage = action.error.message;
            }
        }),
        get: create.asyncThunk(
            async (payload: { page: number, limit: number }) => {
                return await galleryList(payload.page, payload.limit);
            }, {
            pending: (state) => {
                state.state = "loading";
            },
            fulfilled: (state, action) => {
                state.value = action.payload.response;
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
                return await singleGallery(payload);
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
                return await deleteGallery(payload);
            }, {
            pending: (state) => {
                state.state = "loading";
            },
            fulfilled: (state) => {
                state.single = {};
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
        selectStatus: (counter) => counter.state,
        singleValue: (counter) => counter.single,
        errorValue: (counter) => counter.errorMessage
    }
});

export const { add, remove, get, getSingle } = gallerySlice.actions;

export const {selectValue, selectStatus, errorValue, singleValue} = gallerySlice.selectors;
