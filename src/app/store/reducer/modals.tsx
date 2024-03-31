import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { modals } from "./config";

const ModalSlice = createSlice({
  name: "modalSlice",
  initialState: modals,
  reducers: {
    openModal: (store, action: PayloadAction<keyof typeof modals>) => {
      const key = action.payload;
      return {
        ...store,
        [key]: true,
      };
    },
    closeModal: (store, action: PayloadAction<keyof typeof modals>) => {
      const key = action.payload;
      return {
        ...store,
        [key]: false,
      };
    },
  },
});

const modalReducer = ModalSlice.reducer;
export const { closeModal, openModal } = ModalSlice.actions;
export default modalReducer;
