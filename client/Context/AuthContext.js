import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';
import { BASE_URL } from '../Config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const login = async (email, password) => {
    try {
      const res = await axios.post(`${BASE_URL}/users/signin`, {
        email,
        password,
      });
      console.log(res);
      const error = res.data.message;
      if (error) {
        AsyncStorage.setItem('errorMessage', JSON.stringify(error));
        setErrorMessage(error);
        setLoading(false);
        console.log(res);
      } else {
        setLoading(true);
        if (res) {
          console.log(res);
          let info = res.data;
          setUserInfo(info);
          setToken(res.data.token);
          AsyncStorage.setItem('token', res.data.token);
          AsyncStorage.setItem('info', JSON.stringify(info));
          setErrorMessage(null);
          setLoading(false);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    setLoading(true);
    setToken(null);
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('info');
    AsyncStorage.removeItem('errorMessage');
    setLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setLoading(true);
      let userToken = await AsyncStorage.getItem('token');
      let info = await AsyncStorage.getItem('info');
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
    <AuthContext.Provider
      value={{ login, logout, loading, token, errorMessage, userInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};
