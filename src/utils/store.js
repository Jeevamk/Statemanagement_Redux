import {configureStore} from '@reduxjs/toolkit'
import countReducer from './CountSlice'

const appStore = configureStore({
    reducer:{
        count :countReducer
    }
})

export default appStore