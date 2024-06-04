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
    state: "idle" | "pre-load" | "loading" | "success" | "failed"
    single: object,
    errorMessage?: string,
    page: number,
    totalPages: number
}

const initialState: gallerySliceState = {
    single: {},
    value: [],
    state: "pre-load",
    errorMessage: "",
    page: 1,
    totalPages: 0
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
                if(state.value.length < 10) {
                    state.value.push(action.payload.response.newPicture);
                }
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
                state.value = action.payload.response.pictures.results;
                state.page = action.payload.response.pictures.currentPage;
                state.totalPages = action.payload.response.pictures.totalPages;
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
        selectStatus: (counter) => counter.state,
        selectPage: (counter) => counter.page,
        selectTotalPages: (counter) => counter.totalPages,
        singleValue: (counter) => counter.single,
        errorValue: (counter) => counter.errorMessage
    }
});

export const { add, remove, get, getSingle } = gallerySlice.actions;

export const {selectValue, selectStatus, errorValue, singleValue, selectPage, selectTotalPages} = gallerySlice.selectors;
