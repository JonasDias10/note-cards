import { useQuery } from "react-query"
import { Card } from "../Card/Card"
import { useUser } from "../../contexts/userContext"
import { CardType } from "../../types/cardTypes"
import { api } from "../../services/api"
import { Loading } from "../Loading/Loading"
import "./cards.css"

export function Cards() {
    const { userLogged } = useUser()

    const { isLoading, data } = useQuery("cards", 
        async (): Promise<Array<CardType>> => {
            const { data } = await api.get("card/userCards/" + userLogged?.id)
            return data
        },
        {
            staleTime: (1000 * 60) * 10 // 10 minutes
        }
    )
    
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="cards">
            {
                data?.map(card => (
                    <Card card={card} key={card.id}/>
                ))
            }
        </div>
    )
}