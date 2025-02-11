// catGallerySlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { catGallerytypes } from "../../types/catGallerytypes";

const initialState: catGallerytypes = {
  isLoading: false,
  error: null,
  token: "",
  active: "true",
  data: [],
  counter: 0,
};

const slice = createSlice({
  name: "gallerySlice",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    galleryDetailsSuccess(state) {
      state.isLoading = false;
      state.counter += 1;
      state.data.push({
        id: state.counter,
        title: `Number ${state.counter}`,
      });
    },
    galleryDetailsFailure(state, action) {
      state.isLoading = false;
    },
  },
});

export function galleryDetais() {
  return (dispatch: any) => {
    dispatch(slice.actions.startLoading());
    try {
      dispatch(slice.actions.galleryDetailsSuccess());
    } catch (error) {
      dispatch(slice.actions.galleryDetailsFailure(error));
    }
  };
}

export default slice.reducer;
