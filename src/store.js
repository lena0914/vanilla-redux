import { configureStore, createSlice } from "@reduxjs/toolkit";

// pattern 2
// const addToDo = createAction("ADD");
// const deleteTodo = createAction("DELETE");

// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteTodo]: (state, action) =>
//     state.filter((toDo) => toDo.id !== action.payload),
// });

// pattern 1
// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteTodo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
