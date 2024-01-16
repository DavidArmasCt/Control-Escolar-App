import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        CurrentAcademicYear: null,
        CurrentPeriod: null,
    },
    reducers: {
       setPeriod: (state, action)=>{
        state.CurrentPeriod = action.payload.CurrentPeriod;
       },
       setNewAcademicYear: ()=>{
        state.CurrentAcademicYear = action.payload.CurrentAcademicYear;
       }
    }   
});


// Action creators are generated for each case reducer function
export const { setPeriod, setNewAcademicYear } = adminSlice.actions;