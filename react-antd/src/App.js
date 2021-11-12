import React, {useEffect} from "react"
import {BrowserRouter, Routes, Route,} from "react-router-dom"
import {Loading} from "components/Loading";
import {authRoutes} from "pages/auth/authRoutes";
import {homeRoutes} from "./pages/home/homeRoutes";
// import {projectRoutes} from "./pages/project/projectRoutes";
import {apiCodeby} from "./configs/apiCodeby";

function App() {

    useEffect(() => {
        (async () => {
            const res = await apiCodeby.get('/configs')
            console.log('res', res)
        })()
    })
    return (
        <div className="App font-sans">
            <BrowserRouter>
                <React.Suspense fallback={<Loading/>}>
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
    )
}

export default App;
