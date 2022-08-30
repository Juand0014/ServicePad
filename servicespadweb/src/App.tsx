import { useQuery } from "@tanstack/react-query"
import { Header } from "./components/atoms"
import { AppRouter } from "./routes/AppRoutes"
import { services } from "./services/services"

const App = () => {

  const onSuccess = () => {
    console.log('success')
  }

  const onError = () => {
    console.log('error')
  }

  const { data, error, isLoading } = useQuery(["articles"], async () => services.findAll(), {
    onSuccess,
    onError
  })

  console.log(data);

  return (
    <>
      <Header />
      <AppRouter />
    </>
  )
}

export default App
