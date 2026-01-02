// types.ts

import { Document } from 'mongoose';

export interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
  accessToken: string | null;
}

export interface RefreshTokenDocument extends Document {
  user: UserDocument['_id'];
  token: string;
  expiresAt: Date;
}