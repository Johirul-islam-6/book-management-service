// import { Schema, model } from 'mongoose';

import { Model } from 'mongoose'

// 1. Create an interface representing a document in MongoDB.

export type IUser = {
  id: string
  role: string
  password: string
}

// Create a new Model type that knows about IUserMethods...
export type UserModel = Model<IUser, Record<string, unknown>>
