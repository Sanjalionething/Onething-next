// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import contactReducer from "../redux/slice/ContactSlice";
// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";

// const persistConfig = {
//   key: "root",
//   storage,
// };
// const rootReducer = combineReducers({
//   contact: contactReducer,

//   //more reducers
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });
// export const persistor = persistStore(store);
