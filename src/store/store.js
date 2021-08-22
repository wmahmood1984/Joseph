import { adopreducer } from './ui/index'





//export const store = createStore(() => [], {}, applyMiddleware());
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
export const store = configureStore({
    reducer : {
        adoptReducer : adopreducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck:false,
        
    })
})