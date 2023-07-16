import { QueryClientProvider } from "react-query"
import { queryClient } from "../services/queryClient"
import { ProviderPropsType } from "../types/basicTypes"
import { UserProvider } from "./userContext"
import { CreateCardProvider } from "./createCardContext"
import { EditCardProvider } from "./editCardContext"

export function AppProviders({children}: ProviderPropsType){
    return (
        <QueryClientProvider client={queryClient}>
            <UserProvider>
                <CreateCardProvider>
                    <EditCardProvider>
                        {children}
                    </EditCardProvider>
                </CreateCardProvider>
            </UserProvider>
        </QueryClientProvider>
    )
}