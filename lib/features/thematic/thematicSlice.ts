import { createAppSlice } from "@/lib/createAppSlice";
import type { AppThunk } from "@/lib/store";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ThematicAreaInterface {
    _id?: string
    category?: string
    title?: string
    picture?: string
    details?: string
    createdAt?: Date
    updatedAt?: Date
}

export interface thematicSliceState {
    value: ThematicAreaInterface[],
    state: "idle" | "loading" | "failed"
}

const initialState: thematicSliceState = {
    value: [],
    state: "idle"
};

export const thematicSlice = createAppSlice({
    name: "thematic",
    initialState,
    reducers: (create) => ({
        add: create.reducer((state, action: PayloadAction<ThematicAreaInterface>) => {
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

export const { add, remove } = thematicSlice.actions;

export const {selectValue, selectStatus} = thematicSlice.selectors;
