import { FormEvent, useRef } from "react"
import { useEditCard } from "../../contexts/editCardContext"
import { CardUpdateType } from "../../types/cardTypes"
import { useUser } from "../../contexts/userContext"
import "./editCard.css"

export function EditCard() {
    const { userLogged } = useUser()
    const { cardData, setShowEditCard, handleEditCard } = useEditCard()
    const titleInput = useRef<HTMLInputElement>(null)
    const descriptionTextarea = useRef<HTMLTextAreaElement>(null)

    async function handleEdit(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault()

        if (titleInput.current && descriptionTextarea.current) {
            const card: CardUpdateType = {
                id: cardData.id,
                title: titleInput.current.value,
                description: descriptionTextarea.current.value,
                creation: cardData.creation,
                user: {
                    id: userLogged.id 
                }
            }

            handleEditCard(card)
            setShowEditCard(false)
        }
    }

    return (
        <div id="edit-card">
            <h1>
                Editar Card
            </h1>

            <form id="form-edit-card" onSubmit={(event) => handleEdit(event)}>
                <input type="text" name="title" id="title" placeholder="Título" defaultValue={cardData.title} ref={titleInput} required/>
                <textarea name="description" id="description" placeholder="Descrição" defaultValue={cardData.description} ref={descriptionTextarea} required>
                </textarea>
            </form>

            <div className="form-buttons">
                <button type="button" onClick={() => setShowEditCard(false)}>
                    Cancelar
                </button>
                <button type="submit" form="form-edit-card">
                    Editar
                </button>
            </div>
        </div>
    )
}