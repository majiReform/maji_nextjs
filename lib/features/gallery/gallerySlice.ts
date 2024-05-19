import { createAppSlice } from "@/lib/createAppSlice";
import type { AppThunk } from "@/lib/store";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GalleryInterface {
    _id?: string,
    picture?: string,
    createdAt?: Date
    updatedAt?: Date
}

export interface gallerySliceState {
    value: GalleryInterface[],
    state: "idle" | "loading" | "failed"
}

const initialState: gallerySliceState = {
    value: [],
    state: "idle"
};

export const gallerySlice = createAppSlice({
    name: "gallery",
    initialState,
    reducers: (create) => ({
        add: create.reducer((state, action: PayloadAction<GalleryInterface>) => {
            state.value.push(action.payload);
            console.log(state.value);
        }),
        remove: create.reducer((state, action: PayloadAction<string>) => {
            
            console.log(action.payload);

            state.value = state.value.filter(v => v._id != action.payload);
        })
    }),
    selectors: {
        selectValue: (counter) => counter.value,
        selectStatus: (counter) => counter.state,
    }
});

export const { add, remove } = gallerySlice.actions;

export const {selectValue, selectStatus} = gallerySlice.selectors;
