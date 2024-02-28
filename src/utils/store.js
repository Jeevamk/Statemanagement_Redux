import {configureStore} from '@reduxjs/toolkit'
import CountReducer from './CountSlice'

const appStore = configureStore({
    reducer:{
        count :CountReducer
    }
})

export default appStore