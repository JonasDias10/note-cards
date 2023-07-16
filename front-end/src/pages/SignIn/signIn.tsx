import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useUser } from "../../contexts/userContext"
import { UserLoginType } from "../../types/userTypes"
import "./signIn.css"

export function SignIn() {
    const { handleSignIn } = useUser()
    const [showAlert, setShowAlert] = useState<boolean>(false)
    const [alertMessage, setAlertMessage] = useState<string>()
    const emailInput = useRef<HTMLInputElement>(null)
    const passwordInput = useRef<HTMLInputElement>(null)

    async function handleSubmit(event: any) {
        event.preventDefault()
        
        if (emailInput.current != null && passwordInput.current != null) {
            const userLogin: UserLoginType = {
                email: emailInput.current.value, 
                password: passwordInput.current.value
            }

            const response = await handleSignIn(userLogin)

            setAlertMessage(response.message) 
                
            setTimeout(() => {
                setShowAlert(false)
            }, 2000) // After two seconds
            
            return setShowAlert(true)
        }
    }

    return (
        <div id="sign-in">
            <header>
                <h1>
                    NOTE CARDS
                </h1>
                <h2>
                    Bem-vindo(a)
                </h2>
            </header>
            <main>
                <form onSubmit={handleSubmit}>
                    <h1>Fazer Login</h1>
                    <div className="form-inputs">
                        <input type="email" placeholder="E-mail" ref={emailInput} required/>
                        <input type="password" placeholder="Senha" ref={passwordInput} required/>
                    </div>
                    {showAlert && <span>{alertMessage}</span>}
                    <button type="submit">Entrar</button>
                </form>
            </main>
            <footer>
                <p>
                    Não possui conta?
                </p>
                <Link to="/sign-up" className="link"> 
                    Criar Conta
                </Link>
            </footer>
        </div>
    )
}