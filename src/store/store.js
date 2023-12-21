import { configureStore } from '@reduxjs/toolkit'
import { superadminSlice } from './superadmin'
import { assistantSlice } from './assistant'

export const store = configureStore({
    reducer: {
        superadmin: superadminSlice.reducer,
        assistant: assistantSlice.reducer,
    },
})
