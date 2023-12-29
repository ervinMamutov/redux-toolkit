import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'Ti', age: 20 },
  { id: '1', name: 'Teo', age: 21 },
  { id: '2', name: 'Tun', age: 22 },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
