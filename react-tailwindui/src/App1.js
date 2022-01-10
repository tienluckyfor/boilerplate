import {BrowserRouter, Routes, Route,} from "react-router-dom"
import React, {useEffect} from "react"
import {authRoutes} from "pages/auth/authRoutes";
import {homeRoutes} from "pages/home/homeRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {[
              // ...projectRoutes,
              ...authRoutes,
              ...homeRoutes
            ].map((props, key) => <Route key={key} {...props} />)}
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
