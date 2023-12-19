import { createSlice } from '@reduxjs/toolkit';

export const superadminSlice = createSlice({
    name: 'superadmin',
    initialState: {
        superAdminID: null,
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
        users: [],
    },
    reducers: {
        savingUser: (state, action) => {
            state.status = 'Saving-New-User'; // 'checking', 'not-authenticated', 'authenticated'
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
        },

        gettingUsersList: (state, action)=>{
            state.users = action.payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const { savingUser, gettingUsersList } = superadminSlice.actions;