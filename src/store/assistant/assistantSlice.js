import { createSlice } from '@reduxjs/toolkit';

export const assistantSlice = createSlice({
    name: 'superadmin',
    initialState: {
        assistanID: null,
        status: 'Empty User', // 'checking', 'not-authenticated', 'authenticated'
        id: null,
        Name: null,
        LastNameP: null,
        LastNameM: null,
        Address: null,
        City: null,
        State: null,
        Country: null,
        Nation: null,
        BloodType: null,
        Group: null,
        Grade: null,
        AsesorID: null,
        TutorName: null,
        TutorLastNameP: null,
        TutorLastNameM: null,
        TutorUniqueID: null,
    },
    reducers: {
        savingStudent: (state, action) => {
            state.status = 'Saving New Student'; // 'checking', 'not-authenticated', 'authenticated'
            state.id = action.payload.id;
            state.Name = action.payload.Name;
            state.LastNameP = action.payload.LastNameP;
            state.LastNameM = action.payload.LastNameM;
            state.Address = action.payload.Address;
            state.City = action.payload.City;
            state.State = action.payload.State;
            state.Country = action.payload.Country;
            state.Nation = action.payload.Nation;
            state.BloodType = action.payload.BloodType;
            state.Group = action.payload.Group;
            state.Grade = action.payload.Grade;
            state.AsesorID = action.payload.AsesorID;
            state.TutorName = action.payload.TutorName;
            state.TutorLastNameP = action.payload.TutorLastNameP;
            state.TutorLastNameM = action.payload.TutorLastNameM;
            state.TutorUniqueID = action.payload.TutorUniqueID;
        },

        gettingStudents: (state, action)=>{
            state.users = action.payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const { savingStudent, gettingStudents } = assistantSlice.actions;