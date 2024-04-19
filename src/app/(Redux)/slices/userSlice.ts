import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    "users/getAllUsers",
    async (thunkApi) => {
        const response = await fetch(
            "https://fakestoreapi.com/products"
        );
        const data = await response.json();
        return data;
    }
);

const initialState = {
    entities: [],
    loading: false,
    value: 10,
    error: false,
} as any;

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        increment: (state) => {
            state.value++;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.entities.push(...action.payload);
        });

        builder.addCase(fetchUsers.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            console.log("Error",action.payload);

        });
    },
});

export const { increment } = userSlice.actions;

export default userSlice.reducer;