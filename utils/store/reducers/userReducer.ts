import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IUserState {
  uid: string;
  userType: 'Employee' | 'Employer' | 'Hybrid';
  displayName: string | null;
  email: string | null;
  emailVerified: boolean;
  metadata: {};
  photoUrl: string | null;
  providerId: string;
  loading: boolean;
//   jobsApplied?: IJobPostMini[];
//   jobsCreated?: IJobPostMini[];
//   invoices: IInvoiceMini[];
//   subscribed: boolean;
}

export interface IUserMini {
    uid: IUserState['uid'];
    userType: IUserState['userType'];
    photoUrl: IUserState['photoUrl'];
    displayName: IUserState['displayName'];
}

export const initialUserState = {
  uid: '',
  userType: 'Employee',
  displayName: '',
  email: '',
  emailVerified: false,
  metadata: {},
  photoUrl: '',
  providerId: '',
  loading: false,
} as IUserState;

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser(state, action: PayloadAction<IUserState>) {
      const { payload } = action;
      Object.assign(state, payload);
    },
    logoutUser() {},
    clearUserState() {
      return initialUserState;
    },
    signInWithGPopUp() {},
    loginUser(state, action: PayloadAction<IUserState>) {},
    setUserLoading(state, action: PayloadAction<IUserState['loading']>) {
      state.loading = action.payload;
    },
  },
});

export const { loginUser, logoutUser, clearUserState, signInWithGPopUp, setUser, setUserLoading } = userSlice.actions;
export default userSlice.reducer;
