import { createAppSlice } from "@/lib/createAppSlice";
import type { AppThunk } from "@/lib/store";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface valueInterface {
    _id?: string,
    title: string,
    details: string,
    youtubeURL: string
}

export interface videosSliceState {
    value: valueInterface[],
    state: "idle" | "loading" | "failed"
}

const initialState: videosSliceState = {
    value: [],
    state: "idle"
};

export const videosSlice = createAppSlice({
    name: "videos",
    initialState,
    reducers: (create) => ({
        add: create.reducer((state, action: PayloadAction<valueInterface>) => {
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

export const { add, remove } = videosSlice.actions;

export const {selectValue, selectStatus} = videosSlice.selectors;
