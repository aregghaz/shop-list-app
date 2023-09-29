import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    category: [],
    subCategory: [],
    products: [],
    new: [],
    sale: [],
    best: [],
    saleTeg: [],
    companies: [],
    home: true,
    isLoading: false,
}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setData: (state, action) => {

            state.category = action.payload.category,
                state.subCategory = action.payload.subCategory,
                state.products = action.payload.products,
                state.new = action.payload.new,
                state.sale = action.payload.sale,
                state.best = action.payload.best,
                state.saleTeg = action.payload.saleTeg,
                state.companies = action.payload.companies,
                state.home = action.payload.home,
                state.isLoading = true

        },

    },
})

// Action creators are generated for each case reducer function
export const {setData} = homeSlice.actions

export default homeSlice.reducer

