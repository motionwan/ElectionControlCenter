import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import { BASE_URL } from "../Config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const login = async (email, password) => {
    try {
      setLoading(true);
      const res = await axios.post(`${BASE_URL}/users/signin`, {
        email,
        password,
      });
      console.log(res.data.token);
      let info = res.data;
      setUserInfo(info);
      setToken(res.data.token);
      AsyncStorage.setItem("token", res.data.token);
      AsyncStorage.setItem("info", JSON.stringify(info));
      setLoading(false);
    } catch (err) {
      console.log(err.code);
    }
  };

  const logout = () => {
    setLoading(false);
    setToken(null);
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("info");
    setLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setLoading(false);
      let userToken = await AsyncStorage.getItem("token");
      let info = await AsyncStorage.getItem("info");
      info = JSON.parse(info);
      if (info) {
        setToken(userToken);
        setUserInfo(info);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, loading, token }}>
      {children}
    </AuthContext.Provider>
  );
};
