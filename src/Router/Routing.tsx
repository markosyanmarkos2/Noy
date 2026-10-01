import { Routes, Route } from "react-router-dom"
import HomePage from "../Pages/Home"

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
        </Routes>
    )
}

export default Routing