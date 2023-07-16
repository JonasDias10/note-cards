import { createContext, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserLoginType, UserPropsType, UserSaveType, UserType } from "../types/userTypes"
import { PromiseReturnType, ProviderPropsType } from "../types/basicTypes"
import { api } from "../services/api"

const UserContext = createContext<UserPropsType | null>(null)

function UserProvider({children}: ProviderPropsType) {
    const navigate = useNavigate()

    function getUser(): UserType {
        const userLogged = localStorage.getItem("userLogged")
        return userLogged ? JSON.parse(userLogged) : undefined
    }

    async function handleSignIn(userLogin: UserLoginType): Promise<PromiseReturnType> {
        const message = await api.post("user/login", userLogin)
        .then(response => {
            localStorage.setItem("userLogged", JSON.stringify(response.data))
            navigate("/")
        })
        .catch(error => error.response.data)

        return { success: false, message: message }
    }

    async function handleDeleteAccount(): Promise<PromiseReturnType> {
        const message = await api.delete("user/" + getUser().id)
        .then(() => {
            localStorage.removeItem("userLogged")
            navigate("/sign-in")
        })
        .catch(error => error.response.data)

        return { success: false, message: message }
    }

    function handleSignOut(): void {
        localStorage.removeItem("userLogged")
        navigate("/sign-in")
    }

    async function handleSignUp(userSave: UserSaveType): Promise<PromiseReturnType> {
        const message = await api.post("user/", userSave)
        .then(() => navigate("/sign-in"))
        .catch(error => error.response.data)
        
        return { success: false, message: message}
    }

    const AuthContextValue: UserPropsType = {    
        handleSignIn: handleSignIn,
        handleSignOut: handleSignOut,
        handleSignUp: handleSignUp,
        handleDeleteAccount: handleDeleteAccount,
        userLogged: getUser()
    }

    useEffect(() => {
        if (AuthContextValue.userLogged) {
            return navigate("/")
        } 
        return navigate("/sign-in")
    },[])

    return (
        <UserContext.Provider value={AuthContextValue}>
            {children}
        </UserContext.Provider>
    )
}

function useUser(): UserPropsType {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error("useUser must be used within a AuthProvider")
    }

    return context
}

export { UserProvider, useUser }