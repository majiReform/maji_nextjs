import { createAppSlice } from "@/lib/createAppSlice";
import { addVideo, singleVideo, videosList } from "./videosAPI";

export interface VideoInterface {
    _id?: string,
    title?: string,
    details?: string,
    youtubeURL?: string
    createdAt?: Date
    updatedAt?: Date
}

export interface videosSliceState {
    value: VideoInterface[],
    state: "idle" | "pre-load" | "loading" | "success" | "failed",
    single: object,
    errorMessage?: string,
    page: number
}

const initialState: videosSliceState = {
    value: [],
    state: "pre-load",
    single: {},
    errorMessage: "",
    page: 1
};

export const videosSlice = createAppSlice({
    name: "videos",
    initialState,
    reducers: (create) => ({
        add: create.asyncThunk(
            async (payload: VideoInterface) => {
                return await addVideo(payload);
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
                return await videosList(payload.page, payload.limit);
            }, {
            pending: (state) => {
                state.state = "loading";
            },
            fulfilled: (state, action) => {
                state.value = action.payload.response.videos.results;
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
                return await singleVideo(payload);
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
                return await singleVideo(payload);
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
        selectSingle: (counter) => counter.single,
        errorValue: (counter) => counter.errorMessage,
    }
});

export const { add, remove, get, getSingle } = videosSlice.actions;

export const {selectValue, selectStatus, selectSingle, errorValue} = videosSlice.selectors;
