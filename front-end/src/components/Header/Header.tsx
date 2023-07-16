import { useState } from "react"
import { Menu } from "../Menu/Menu"
import { useCreateCard } from "../../contexts/createCardContext"
import { useUser } from "../../contexts/userContext"
import { Plus, Menu as MenuIcon } from "lucide-react"
import "./header.css"

export function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const { showCreateCard, setShowCreateCard } = useCreateCard()
    const { userLogged } = useUser()

    return (
        <header id="home-header">
            <button type="button" onClick={() => setShowMenu(!showMenu)}>
                <MenuIcon className="icon"/>
            </button>
            {showMenu && <Menu />}
            <h1>
                Bem-vindo(a), {userLogged?.name}!
            </h1>
            <button type="button" onClick={() => setShowCreateCard(!showCreateCard)}>
                <Plus className="icon"/>
            </button>
        </header>
    )
}