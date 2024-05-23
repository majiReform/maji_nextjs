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
    state: "idle" | "pre-load" | "success" | "loading" | "failed",
    errorMessage?: string,
    successMessage: string
}

const initialState: profileSliceState = {
    value: {},
    state: "pre-load",
    successMessage: "",
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
                state.state = "pre-load";
            },
            fulfilled: (state, action) => {
                state.value = action.payload.response.details;
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
                state.value = action.payload.response.details;
                state.successMessage = "Profile update successful";
                state.state = "success";
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
                console.log("Profile", action.payload.response.newProfilePicture, action.payload.status);
                state.value.profilePicture = action.payload.response.newProfilePicture;
                state.successMessage = "Profile picture update successful";
                state.state = "success";
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
            fulfilled: (state, action) => {
                console.log(action.payload.response);
                state.state = "success";
                state.successMessage = "Password update successful";
            },
            rejected: (state, action) => {
                console.log("Error details:", action.error);
                state.state = "failed";
                if(action.error.code == "ERR_BAD_REQUEST") {
                    state.errorMessage = "Invalid current password";
                }
            }
        }
        ),
    }),
    selectors: {
        selectValue: (counter) => counter.value,
        errorValue: (counter) => counter.errorMessage,
        successValue: (counter) => counter.successMessage,
        selectStatus: (counter) => counter.state,
    }
});

export const { get, update, updatePicture, updateProfilePassword } = profileSlice.actions;

export const { selectValue, selectStatus, errorValue, successValue } = profileSlice.selectors;
