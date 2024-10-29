import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DataProvider from "./components/context/DataContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DataProvider >,
);


