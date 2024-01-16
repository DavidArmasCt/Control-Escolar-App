import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        CurrentAcademicYear: null,
        CurrentPeriod: null,
        Subjects: [],
        Grades: [],
        CurrentGeneration: null,
    },
    reducers: {
       getAcademicInfo: (state, action)=>{
        state.CurrentAcademicYear = action.CurrentAcademicYear;
        state.CurrentPeriod = action.CurrentPeriod;
       }, 
       setPeriod: (state, action)=>{
        state.CurrentPeriod = action.payload.CurrentPeriod;
       },
       setNewAcademicYear: (state, action)=>{
        state.CurrentAcademicYear = action.payload.CurrentAcademicYear;
       },
       setSubjects: (state, action) => {
        state.Subjects = action.payload.Subjects;
       }
    }

});


// Action creators are generated for each case reducer function
export const { setPeriod, setNewAcademicYear, setSubjects } = adminSlice.actions;