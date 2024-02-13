import { Route, Routes } from "react-router-dom";
import Main from '../pages/main';

export default function Routing() {
    return(
        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/1" element={<div>1</div>}></Route>
            <Route path="/2" element={<div>2</div>}></Route>
        </Routes>
    )
}