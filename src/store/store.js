import { configureStore } from '@reduxjs/toolkit'
import { superadminSlice } from './superadmin'

export const store = configureStore({
    reducer: {
        superadmin: superadminSlice.reducer
    },
})
