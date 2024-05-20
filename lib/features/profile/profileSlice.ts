import { createAppSlice } from "@/lib/createAppSlice";
import type { AppThunk } from "@/lib/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getProfile, updatePassword, updateProfile, updateProfilePicture } from "./profileAPI";

export interface UserInterface {
    _id?: string
    fullName?: string
    email?: string
    profilePicture?: string
    phoneNumber?: string
    password?: string
    createdAt?: Date
    updatedAt?: Date
}

export interface profileSliceState {
    value: UserInterface,
    state: "idle" | "loading" | "failed",
    errorMessage?: string
}

const initialState: profileSliceState = {
    value: {},
    state: "idle",
    errorMessage: ""
};

export const profileSlice = createAppSlice({
    name: "profile",
    initialState,
    reducers: (create) => ({
        get: create.asyncThunk(
            async () => {
                return await getProfile();
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
        }),
        update: create.asyncThunk(
            async (payload: UserInterface) => {
                return await updateProfile(payload);
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
        updatePicture: create.asyncThunk(
            async (payload: string) => {
                return await updateProfilePicture(payload);
            }, {
            pending: (state) => {
                state.state = "loading";
            },
            fulfilled: (state, action) => {
                console.log("Profile", action.payload.response, action.payload.status);
                state.value.profilePicture = action.payload.response;
                state.state = "idle";
            },
            rejected: (state, action) => {
                state.state = "failed";
                state.errorMessage = action.error.message;
            }
        }
        ),
        updateProfilePassword: create.asyncThunk(
            async (payload: { currentPassword: string, newPassword: string }) => {
                return await updatePassword(payload);
            }, {
            pending: (state) => {
                state.state = "loading";
            },
            fulfilled: (state) => {
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
        errorValue: (counter) => counter.errorMessage,
        selectStatus: (counter) => counter.state,
    }
});

export const { get, update, updatePicture, updateProfilePassword } = profileSlice.actions;

export const { selectValue, selectStatus, errorValue } = profileSlice.selectors;
