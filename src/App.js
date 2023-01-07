import React from 'react';
import './App.css';
import {Route, Routes} from "react-router";
import IndexPage from "./pages/Index";
import {BrowserRouter} from "react-router-dom";
import Redirect from "./pages/Redirect";
// import Menu from "./Menu";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<IndexPage/>}/>
                    <Route path="/menu" element={<Redirect/> }/>
                </Routes>
            </BrowserRouter>
            {/*</header>*/}
        </div>
    );
}

export default App;
