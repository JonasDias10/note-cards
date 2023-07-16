import { useUser } from "../../contexts/userContext"
import "./menu.css"

export function Menu() {
    const { handleSignOut, handleDeleteAccount } = useUser()

    return (
        <div id="menu">
            <ul>
                <li onClick={handleSignOut}>
                    <p>Sair</p> 
                </li>
                <li onClick={handleDeleteAccount}>
                    <p>Deletar conta</p>
                </li>
            </ul>
        </div>
    )
}