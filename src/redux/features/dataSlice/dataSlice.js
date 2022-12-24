import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";
import { BASE_URL } from '../../../api/api';

export const fetchData = (page) => async (dispatch) => {
  try {
    dispatch(isLoading(true))
    const response = await axios({
      method: 'get',
      // url: 'http://www.omdbapi.com/?t=' + `${searchText}` + '&apikey=72a3fbe1',
      url: `${BASE_URL}` + "?limit=10&skip=" + page,
      responseType: 'json',
    })
    dispatch(getData(response.data.products));
    dispatch(isLoading(false));
  } catch (err) {
    throw new Error(err);
  }
};

export const dataSlice = createSlice({
  name: "mydata",
  initialState: {
    data: [],
    page: 0,
    loading: true,
    error: ""
  },
  reducers: {
    // addTodo: (state, action) => {
    //   state.data.push(action.payload);
    // },
    getData: (state, action) => {
      console.log(action.payload)
      state.data = state.data.concat(action.payload);
    },
    isLoading: (state, action) => {
      state.loading = action.payload
    }
  }
});


export const { getData, isLoading } = dataSlice.actions;
export const selectData = (state) => state.mydata.data;
export const selectPage = (state) => state.mydata.page;
export const selectLoading = (state) => state.mydata.loading;
export default dataSlice.reducer;