import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        Active: null,
        CurrentAcademicYear: null,
        CurrentPeriod: null,
        Grades: [],
        Groups: [],
        CurrentGeneration: null,
        FormApproved: null
    },
    reducers: {        

       getInitialAcademicInfo: (state, action)=>{
        state.CurrentAcademicYear = action.payload.CurrentAcademicYear;
        state.CurrentGeneration = action.payload.CurrentGeneration;
        state.CurrentPeriod = action.payload.CurrentPeriod;
        state.Grades = action.payload.Grades;
        state.Groups = action.payload.Groups;
       }, 
       setPeriod: (state, action)=>{
        state.CurrentPeriod = action.payload.CurrentPeriod;
       },
       setNewAcademicYear: (state, action)=>{
        state.CurrentAcademicYear = action.payload.CurrentAcademicYear;
        state.Active = action.payload.Active;
       },
       setSubjects: (state, action) => {
        state.Subjects = action.payload.Subjects;
       },
       getFormApprovation: (state, action)=>{
        state.FormApproved = action.payload.FormApproved
       }
    }

});


// Action creators are generated for each case reducer function
export const { getInitialAcademicInfo, setPeriod, setNewAcademicYear, setSubjects, getFormApprovation } = adminSlice.actions;