import './App.css';
import Welcome from './pages/Welcome';
import PlanLayout from './pages/Layout/PlanLayout';
import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import PhoneConfirmation from './pages/PhoneConfirmation';

// <PlanLayout>

function App() {
  return (
  <BrowserRouter>
  <PlanLayout>
  <Route exact path='/' component={Welcome} />
  <Route exact path='/invite' component={PhoneConfirmation} />
  </PlanLayout>
  </BrowserRouter>
  );
}

export default App;
