import { Pencil, Trash } from "lucide-react"
import { useEditCard } from "../../contexts/editCardContext"
import { queryClient } from "../../services/queryClient"
import { CardPropsType } from "../../types/cardTypes"
import { api } from "../../services/api"
import "./card.css"

export function Card({ card }: CardPropsType) {
    const { setCardData, showEditCard, setShowEditCard } = useEditCard()

    async function handleDeleteCard(): Promise<void> {
        await api.delete("card/" + card.id)
        queryClient.invalidateQueries({
            queryKey: "cards"
        })
    }

    function openEditCard() {
        setCardData(card)
        setShowEditCard(!showEditCard)
    }

    return (
        <div className="card">
            <div className="card-content">
                <h1>
                    {card.title}
                </h1>
                
                <p>
                    {card.description}
                </p>
            </div>

            <hr />
            
            <div className="card-footer">
                <button type="button" onClick={openEditCard}>
                    <Pencil className="icon"/>
                </button>
                
                <button type="button" onClick={handleDeleteCard}>
                    <Trash className="icon"/>
                </button>
                
                <span>
                    Data: {card.creation}
                </span>
            </div>
        </div>
    )
}