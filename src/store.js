import { configureStore } from '@reduxjs/toolkit';
import PasteReducer from './redux/PasteSlice'; // Ensure this is correctly imported

export const store = configureStore({
  reducer: {
    paste: PasteReducer, // The key 'paste' is used in Redux state
  },
});

// ❌ REMOVE: export default PasteSlice.reducer;
