import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home/home"
import { SignUp } from "../pages/SignUp/signUp"
import { SignIn } from "../pages/SignIn/signIn"
import { NotFound } from "../components/NotFound/NotFound"

export function AllRoutes() {
    return (
        <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} /> 
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}