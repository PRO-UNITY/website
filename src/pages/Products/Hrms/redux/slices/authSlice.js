import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { registerUser, loginUser } from '../../service/index'

// const initialState = {
//     email: '',
//     token: '',
//     loading: false,
//     error: '',
// };

const initialState = {
    user: {},
};

export const signUpUser = createAsyncThunk('signupuser', async (body) => {
    const response = await registerUser(body)
    return response.data
})

export const signInUser = createAsyncThunk('signinuser', async (body) => {
    const response = await loginUser(body);
    if (!response || !response.token) {
        throw new Error('Invalid response structure. Token property missing.');
    }
    return response;
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
                console.log(payload);
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
            .addCase(signUpUser.fulfilled, (state, { payload: { error, msg } }) => {
                state.loading = false;
                if (error) {
                    state.error = error;
                } else {
                    state.msg = msg;
                }
            })
            .addCase(signUpUser.rejected, (state) => {
                state.loading = false;
            });
    },
})

export const { addToken, logOut, addUser } = authSlice.actions
