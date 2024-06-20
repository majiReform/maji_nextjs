import { createAppSlice } from "@/lib/createAppSlice";
import { addVideo, deleteVideo, editVideo, singleVideo, videosList } from "./videosAPI";

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
    page: number,
    totalPages: number
}

const initialState: videosSliceState = {
    value: [],
    state: "pre-load",
    single: {},
    errorMessage: "",
    page: 1,
    totalPages: 0
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
                if (state.value.length < 10) state.value.push(action.payload.response.addedDetails);
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
                state.page = action.payload.response.videos.currentPage;
                state.totalPages = action.payload.response.videos.totalPages;
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
        edit: create.asyncThunk(
            async (payload: VideoInterface) => {
                return await editVideo(payload);
            }, {
            pending: (state) => {
                state.state = "loading";
            },
            fulfilled: (state, action) => {
                // state.single = action.payload.response;
                state.state = "success";
            },
            rejected: (state, action) => {
                state.state = "failed";
                state.errorMessage = action.error.message;
            }
        }
        ),
        remove: create.asyncThunk(
            async (payload: string) => {
                return await deleteVideo(payload);
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
        selectTotalPages: (counter) => counter.totalPages,
        selectPage: (counter) => counter.page,
        selectStatus: (counter) => counter.state,
        selectSingle: (counter) => counter.single,
        errorValue: (counter) => counter.errorMessage,
    }
});

export const { add, remove, edit, get, getSingle } = videosSlice.actions;

export const { selectValue, selectStatus, selectSingle, errorValue, selectPage, selectTotalPages } = videosSlice.selectors;
