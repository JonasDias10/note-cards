import { createContext, useContext, useState } from "react"
import { CardType, CardUpdateType, EditCardPropsType } from "../types/cardTypes"
import { PromiseReturnType, ProviderPropsType } from "../types/basicTypes"
import { queryClient } from "../services/queryClient"
import { api } from "../services/api"

const EditCardContext = createContext<EditCardPropsType | null>(null)

function EditCardProvider({children}: ProviderPropsType) {
    const [showEditCard, setShowEditCard] = useState<boolean>(false)
    
    async function handleEditCard(card: CardUpdateType): Promise<PromiseReturnType> {
        const message = await api.put("card/update", card)
        .then(() => {
            queryClient.invalidateQueries({
                queryKey: "cards"
            })
        })
        .catch(error => error.response.data)
        return { success: false, message: message}
    }
    
    const cardDefaultValue: CardType = {
        id: "",
        title: "",
        description: "",
        creation: ""
    }

    const [cardData, setCardData] = useState<CardType>(cardDefaultValue)
    
    const EditCardContextValue: EditCardPropsType = {
        showEditCard: showEditCard,
        setShowEditCard: setShowEditCard,
        cardData: cardData,
        setCardData: setCardData,
        handleEditCard: handleEditCard
    }
    
    return (
        <EditCardContext.Provider value={EditCardContextValue}>
            {children}
        </EditCardContext.Provider>
    )
}

function useEditCard(): EditCardPropsType {
    const context = useContext(EditCardContext)

    if (!context) {
        throw new Error("useEditCard must be used within a EditCardProvider")
    }

    return context
}

export { EditCardProvider, useEditCard }