// import Menu from './Menu'
import './App.css';
import {Route, Routes} from "react-router";
import IndexPage from "./pages/Index";
import {BrowserRouter} from "react-router-dom";
import RedirectTo from "./pages/Redirect";
import Menu from "./Menu";

function App() {
    return (
        <div className="App">
            {/*<header className="App-header">*/}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<IndexPage/>}/>
                    <Route path="/menu" element={<RedirectTo/>}/>
                    <Route path="/menu-test" element={<Menu/>}/>
                </Routes>
            </BrowserRouter>
            {/*</header>*/}
        </div>
    );
}

export default App;
