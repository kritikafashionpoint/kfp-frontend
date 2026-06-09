import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// 🔥 Safe cookie read (only runs on client)
const getUserFromCookie = () => {
    try {
        const user = Cookies.get("user");
        return user ? JSON.parse(user) : null;
    } catch (err) {
        return null;
    }
};

const getTokenFromCookie = () => {
    return Cookies.get("token") || null;
};

const initialState = {
    user: getUserFromCookie(),
    token: getTokenFromCookie(),
    isAuthenticated: !!getTokenFromCookie(),
};

const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        loginSuccess: (state, action) => {
            const { user, token } = action.payload;

            Cookies.set("user", JSON.stringify(user), { expires: 7 });
            Cookies.set("token", token, { expires: 7 });

            state.user = user;
            state.token = token;
            state.isAuthenticated = true;
        },

        logout: (state) => {
            Cookies.remove("user");
            Cookies.remove("token");

            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },
    },
});

export const { loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;