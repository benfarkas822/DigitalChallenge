import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Drivers from "./pages/Drivers/Drivers";

const App = () => {
    return (
        <Routes>
            <Route path={"/drivers"} element={<Drivers/>}/>
            <Route exact path={'/'} element={<Navigate replace to="/drivers"/>}/>

        </Routes>
    );
}

export default App;
