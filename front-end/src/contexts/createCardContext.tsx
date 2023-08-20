import { createContext, useContext, useState } from "react"
import { CardSaveType, CreateCardPropsType } from "../types/cardTypes"
import { PromiseReturnType, ProviderPropsType } from "../types/basicTypes"
import { queryClient } from "../services/queryClient"
import { api } from "../services/api"

const CreateCardContext = createContext<CreateCardPropsType | null>(null)

function CreateCardProvider({children}: ProviderPropsType) {
    const [showCreateCard, setShowCreateCard] = useState<boolean>(false)

    async function handleCreateCard(card: CardSaveType): Promise<PromiseReturnType> {
        const message = await api.post("card/", card)
        .then(() => {
            queryClient.invalidateQueries({
                queryKey: "cards"
            })
        })
        .catch(error => error.response.data)
        return {success: false, message: message}
    }

    const CreateCardContextValue: CreateCardPropsType = {
        showCreateCard: showCreateCard,
        setShowCreateCard: setShowCreateCard,
        handleCreateCard: handleCreateCard
    }

    return (
        <CreateCardContext.Provider value={CreateCardContextValue}>
            {children}
        </CreateCardContext.Provider>
    )
}

function useCreateCard(): CreateCardPropsType {
    const context = useContext(CreateCardContext)

    if (!context) {
        throw new Error("useCreateCard must be used within a CreateCardProvider")
    }

    return context
}

export { CreateCardProvider, useCreateCard }