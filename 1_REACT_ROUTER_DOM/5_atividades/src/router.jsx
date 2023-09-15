import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Pag1 from "./pages/Pag1"

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pag1" element={<Pag1 />} />
        </Routes>
    )
}

export default Router