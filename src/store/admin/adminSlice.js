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

       getInitialAcademicInfo: (state, action)=>{
        state.CurrentAcademicYear = action.payload.CurrentAcademicYear;
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
export const { getInitialAcademicInfo, setPeriod, setNewAcademicYear, setSubjects } = adminSlice.actions;