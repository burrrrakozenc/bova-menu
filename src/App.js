import Menu from './Menu'
import './App.css';
import {Route, Routes} from "react-router";
import IndexPage from "./pages/Index";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div className="App">
            {/*<header className="App-header">*/}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<IndexPage/>}/>
                    <Route path="/menu" element={<Menu/>}/>
                </Routes>
            </BrowserRouter>
            {/*</header>*/}
        </div>
    );
}

export default App;
