import { Header } from "../../components/Header/Header"
import { Cards } from "../../components/Cards/Cards"
import { Footer } from "../../components/Footer/Footer"
import { CreateCard } from "../../components/CreateCard/CreateCard"
import { EditCard } from "../../components/EditCard/EditCard"
import { useCreateCard } from "../../contexts/createCardContext"
import { useEditCard } from "../../contexts/editCardContext"

export function Home() {
    const { showCreateCard } = useCreateCard()
    const { showEditCard } = useEditCard()
    
    return (
        <>
            <Header />
            <Cards />
            <Footer />
            {showCreateCard && <CreateCard />}
            {showEditCard && <EditCard />}
        </>
    )
}