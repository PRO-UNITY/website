import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { registerUser, loginUser } from '../../service/index'
import { editUserProfile } from '../../service/user'

const initialState = {
    user: {},
};

export const signUpUser = createAsyncThunk('signupuser', async (body) => {
    try {
        const response = await registerUser(body);
        console.log('Response from registerUser:', response);

        if (!response || !response.data || !response.data.token || !response.data.token.accsess) {
            throw new Error('Invalid response structure. Token property missing.');
        }
        return response.data;
    } catch (error) {
        console.error('Error during signUpUser:', error.message);
        throw error;
    }
});

export const signInUser = createAsyncThunk('signinuser', async (body) => {
    const response = await loginUser(body);
    if (!response || !response.token) {
        throw new Error('Invalid  response structure. Token property missing.');
    }
    return response;
});

export const editUser = createAsyncThunk('edituser', async (body) => {
    try {
        const response = await editUserProfile(body);
        if (!response || response.error) {
            throw new Error(response.error || 'Invalid response structure.');
        }
        return response.data;
    } catch (error) {
        console.error('Error during editUser:', error.message);
        throw error;
    }
});

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.token = localStorage.getItem('token');
        },
        logOut: (state, action) => {
            state.token = null;
            localStorage.clear();
        },
        addUser: (state, action) => {
            state.user = localStorage.getItem('user');
        },
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
    },
    extraReducers: (builder) => {
        // login
        builder
            .addCase(signInUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(signInUser.fulfilled, (state, { payload, meta }) => {
                state.loading = false;
                if (!payload || !payload.token) {
                    console.error('Invalid response structure. Actual payload:', payload);
                    state.error = 'Invalid response structure';
                    return;
                }

                state.token = payload.token.access;
                state.email = meta.arg.email || '';
                console.log(payload.token.accsess);

                if (payload.token.accsess) {
                    localStorage.setItem('token', payload.token.accsess);
                }
                authSlice.actions.setUser(state, { payload: payload.token.user });
            })
            .addCase(signInUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
        // signup
        builder
            .addCase(signUpUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(signUpUser.fulfilled, (state, action) => {
                state.loading = false;
                const payload = action.payload;

                if (!payload || !payload.token || !payload.token.accsess) {
                    console.error('Invalid response structure. Actual payload:', payload);
                    state.error = 'Invalid response structure. Token property missing.';
                    return;
                }

                state.token = payload.token.accsess;
                localStorage.setItem('token', state.token);
                authSlice.actions.setUser(state, { payload: payload.token.user });
            })
            .addCase(signUpUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'An error occurred during signup.';
            });
        // edit profile
        builder
            .addCase(editUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(editUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.user = { ...state.user, ...payload };
                localStorage.setItem('user', JSON.stringify(state.user));
            })
            .addCase(editUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'An error occurred during profile edit.';
            });
    },
})

export const { addToken, logOut, addUser } = authSlice.actions
