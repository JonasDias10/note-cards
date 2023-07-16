import { PromiseReturnType } from "./basicTypes"

interface UserType {
    id: string
    email: string
    name: string
}

interface UserSaveType { 
    name: string
    email: string
    password: string
}

interface UserLoginType {
    email: string
    password: string
}

interface UserPropsType {
    handleSignIn: (userLogin: UserLoginType) => Promise<PromiseReturnType>
    handleSignOut: () => void
    handleSignUp: (userSave: UserSaveType) => Promise<PromiseReturnType>
    handleDeleteAccount: () => Promise<PromiseReturnType>
    userLogged: UserType
}

export type { UserType, UserPropsType, UserLoginType, UserSaveType }