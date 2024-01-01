import { ILoggedUserData } from "@/types";

export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

export const addUser = (user:ILoggedUserData) => ({
  type: ADD_USER,
  payload: user,
});

export const updateUser = (user:ILoggedUserData) => ({
  type: UPDATE_USER,
  payload: user,
});
export const deleteUser = (id:ILoggedUserData) => ({
  type: DELETE_USER,
  payload: id,
});