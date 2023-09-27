import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Jadval from './components/Jadval';
import Users from './components/Users';
import Elements from './components/Elements';
import Components from './components/Components';
import Widgets from './components/Widgets';
import DataTables from './components/DataTables';
import Forms from './components/Forms';
import Pages from './components/Pages';
import Blog from './components/Blog';
import FaqTw from './components/FaqTw';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="components" element={<Components />} />
          <Route path="elements" element={<Elements />} />
          <Route path="tables" element={<Jadval />} />
          <Route path="users" element={<Users />} />
          <Route path="widgets" element={<Widgets />} />
          <Route path="tables" element={<Jadval />} />
          <Route path="forms" element={<Forms />} />
          <Route path="pages" element={<Pages />} />
          <Route path="data-tables" element={<DataTables />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="faq" element={<FaqTw />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
