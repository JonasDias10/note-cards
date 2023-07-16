import { PromiseReturnType } from "./basicTypes"

interface CardType {
    id: string
    title: string
    description: string
    creation: string
}

interface CardSaveType {
    title: string
    description: string
    user: {
        id: string
    }
}

interface CardUpdateType extends CardType {
    user: {
        id: string
    }
}

interface CardPropsType {
    card: CardType
}

interface EditCardPropsType {
    showEditCard: boolean
    setShowEditCard: (showCreateCard: boolean) => void
    cardData: CardType
    setCardData: (cardData: CardType) => void
    handleEditCard: (card: CardUpdateType) => Promise<PromiseReturnType>
}

interface CreateCardPropsType {
    showCreateCard: boolean
    setShowCreateCard: (showCreateCard: boolean) => void
    handleCreateCard: (card: CardSaveType) => Promise<PromiseReturnType>
}

export type { CardType, CardSaveType, CardUpdateType, CardPropsType, EditCardPropsType, CreateCardPropsType } 