import { configureStore } from '@reduxjs/toolkit'
import { superadminSlice } from './superadmin'
import { assistantSlice } from './assistant'
import { adminSlice } from './admin'

export const store = configureStore({
    reducer: {
        superadmin: superadminSlice.reducer,
        assistant: assistantSlice.reducer,
        admin: adminSlice.reducer
    },
})
