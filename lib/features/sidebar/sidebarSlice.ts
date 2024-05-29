import { createAppSlice } from "@/lib/createAppSlice";


export interface SidebarState {
    isOpen: boolean
}

const initialState: SidebarState = {
    isOpen: false
};

export const sidebarSlice = createAppSlice({
    name: "sidebar",
    initialState,
    reducers: (create) => ({
        openSidebar: create.reducer((state) => {
            state.isOpen = true;
        }),
        closeSidebar: create.reducer((state) => {
            state.isOpen = false;
        })
    }),
    selectors: {
        isOpenValue: (init) => init.isOpen
    }
});

export const { openSidebar, closeSidebar } = sidebarSlice.actions;

export const { isOpenValue } = sidebarSlice.selectors;
