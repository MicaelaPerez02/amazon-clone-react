import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import './App.css';
import { auth } from './firebase';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';

function App() {
  const [{basket}, dispatch]  = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route path="/login" element={< Login />} />
          <Route path="/checkout" element={< Checkout />} />
        </Routes>
      </BrowserRouter>
    );
  };

  export default App;