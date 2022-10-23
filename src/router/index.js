import {BrowserRouter, Route,  Routes} from "react-router-dom";
import {RacePage} from "../pages/race";


export function ApplicationRouter(){
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/race'} element={<RacePage/>} />
            </Routes>
        </BrowserRouter>
    )
}