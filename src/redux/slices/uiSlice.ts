import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WindowSize {
  innerWidth: number;
  innerHeight: number;
}

export interface UIState {
  viewportIsVertical: boolean;
  viewportIsPortable: boolean;
  animatedElements: Record<string, boolean>;
}

const initialState: UIState = {
  viewportIsVertical: false,
  viewportIsPortable: false,
  animatedElements: {},
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    updateLayout(state, action: PayloadAction<WindowSize>) {
      const { innerWidth, innerHeight } = action.payload;
      state.viewportIsVertical = innerWidth < innerHeight;
      state.viewportIsPortable = 
        (state.viewportIsVertical && innerWidth < 1080) ||
        (!state.viewportIsVertical && innerWidth < 1200);
    },
    setElementAnimated(state, action: PayloadAction<string>) {
      state.animatedElements[action.payload] = true;
    },
  },
});

export const { updateLayout, setElementAnimated } = uiSlice.actions;

export default uiSlice.reducer;