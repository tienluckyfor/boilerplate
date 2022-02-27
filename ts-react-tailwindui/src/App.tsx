import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {draftRoutes} from "./pages-draft/draftRoutes";
import {homeRoutes} from "./pages/home/homeRoutes";
import {authRoutes} from "./pages/auth/authRoutes";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        {[
                            ...draftRoutes,
                            ...homeRoutes,
                            ...authRoutes,
                        ].map((props, key) => <Route key={key} {...props} />)}
                    </Routes>
                </React.Suspense>
            </BrowserRouter>
        </div>
    );
}

export default App;
