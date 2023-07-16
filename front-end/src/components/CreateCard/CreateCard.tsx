import { useRef } from "react"
import { useCreateCard } from "../../contexts/createCardContext"
import { useUser } from "../../contexts/userContext"
import { CardSaveType } from "../../types/cardTypes"
import "./createCard.css"

export function CreateCard() {
    const { userLogged } = useUser()
    const { setShowCreateCard, handleCreateCard } = useCreateCard()
    const titleInput = useRef<HTMLInputElement>(null)
    const descriptionTextarea = useRef<HTMLTextAreaElement>(null)

    async function handleCreate(): Promise<void> {
        if (titleInput.current && descriptionTextarea.current) {
            const card: CardSaveType = {
                title: titleInput.current.value,
                description: descriptionTextarea.current.value,
                user: {
                    id: userLogged.id 
                }
            }

            handleCreateCard(card)
            setShowCreateCard(false)
        }
    }

    return (
        <div id="create-card">
            <h1>
                Criar Card
            </h1>

            <div className="form-inputs">
                <input type="text" name="title" id="title" placeholder="Título" ref={titleInput} required/>
                <textarea name="description" id="description" placeholder="Descrição" ref={descriptionTextarea}>
                </textarea>
            </div>

            <div className="form-buttons">
                <button type="button" onClick={() => setShowCreateCard(false)}>
                    Cancelar
                </button>
                <button type="button" onClick={handleCreate}>
                    Criar
                </button>
            </div>
        </div>
    )
}