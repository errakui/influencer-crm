import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import Dashboard from './components/admin/AdminDashboard'; // Supponiamo che la dashboard sia per l'admin

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        {/* Aggiungi qui le altre rotte necessarie */}
      </Switch>
    </Router>
  );
};

export default Routes;