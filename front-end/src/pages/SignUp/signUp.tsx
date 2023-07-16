import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useUser } from "../../contexts/userContext"
import "./signUp.css"
import { UserSaveType } from "../../types/userTypes"

export function SignUp() {
    const { handleSignUp } = useUser()
    const [showAlert, setShowAlert] = useState<boolean>(false)
    const [alertMessage, setAlertMessage] = useState<string>()
    const nameInput = useRef<HTMLInputElement>(null)
    const emailInput = useRef<HTMLInputElement>(null)
    const passwordInput = useRef<HTMLInputElement>(null)
    const confirmPasswordInput = useRef<HTMLInputElement>(null)

    function getInputsData(): any {
        return {
            name: nameInput.current?.value,
            email: emailInput.current?.value,
            password: passwordInput.current?.value,
            confirmPassword: confirmPasswordInput.current?.value
        }
    }
    
    async function handleSubmit(event: any) {
        event.preventDefault()
        const formData = getInputsData()

        const userSave: UserSaveType = {
            name: formData.name, 
            email: formData.email, 
            password: formData.password
        }

        if (formData.password === formData.confirmPassword) {
            const response = await handleSignUp(userSave)
            setAlertMessage(response.message)
        } else {
            setAlertMessage("Passwords don't match.")
        }

        setTimeout(() => {
            setShowAlert(false)
        }, 2000) // After two seconds
        
        return setShowAlert(true)
    }

    return (
        <div id="sign-up">
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
                    <h1>Cadastro</h1>
                    <div className="form-inputs">
                        <input type="text" name="name" id="name" placeholder="Nome completo" ref={nameInput} required/>
                        <input type="email" placeholder="E-mail" ref={emailInput} required/>
                        <input type="password" placeholder="Senha" ref={passwordInput} required/>
                        <input type="password" placeholder="Confirmar senha" ref={confirmPasswordInput} required/>
                    </div>
                    {showAlert && <span>{alertMessage}</span>}
                    <button type="submit">Criar Conta</button>
                </form>
            </main>
            <footer>
                <p>
                    Já possui conta?
                </p>
                <Link to="/sign-in" className="link"> 
                    Fazer Login
                </Link>
            </footer>
        </div>
    )
}