import { configureStore } from '@reduxjs/toolkit'
import usersSlice from "../features/users/usersSlice";
import todosSlice from "../features/todos/todosSlice";
const store = configureStore({
  reducer: {
    users: usersSlice,
    todos: todosSlice,
  }
})
export default store