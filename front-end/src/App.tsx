import { AppProviders } from "./contexts/appProviders"
import { AllRoutes } from "./routes/routes"

export function App() {
  return (
    <AppProviders>
        <AllRoutes/>
    </AppProviders>  
  )
}