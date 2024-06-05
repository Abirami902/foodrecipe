import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    fav: [],
};

const dataSlice = createSlice({
    name: 'favstore',
    initialState,
    reducers: {
        setFav: (state, action) => {
            const newItem = action.payload;
            console.log(action.payload,'====');
            const isDuplicate = state.fav.find(item => item.id === newItem.id);
            console.log(state.fav,'----')
            if (!isDuplicate) {
                state.fav.push(newItem);
            }
        },
        removeFav: (state, action) => {
            const itemIdToRemove = action.payload;
            // Directly update the state using filter to remove the item
            state.fav = state.fav.filter(item => item.id !== itemIdToRemove);
        },
    },
});

// Export the action creators
export const { setFav, removeFav } = dataSlice.actions;

// Export the reducer
export default dataSlice.reducer;