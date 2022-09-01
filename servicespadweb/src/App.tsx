import { Title } from "./components/atoms"
// import { weights } from "./components/atoms/Texts/texts.types"
import { Header } from "./components/organisms"
import { HeaderProps } from "./components/organisms/header/header.type"
import { AppRouter } from "./routes/AppRoutes"
import { BsFacebook, BsTwitter, BsPinterest, BsInstagram, BsYoutube } from "react-icons/bs"
import './styles/app.styles.scss'
import { Footer } from "./components/organisms/footer"
import { Card } from "./components/organisms/Card/Card"

const App = () => {

  const headerProps: HeaderProps = {
    title: "easybank",
    contentList: [
      {
        content: "Home",
        link: "/",
        active: true
      },
      {
        content: "About",
        link: "/About",
        active: true
      },
      {
        content: "Contact",
        link: "/Contact",
        active: true
      },
      {
        content: "Blog",
        link: "/Blog",
        active: true
      },
      {
        content: "Careers",
        link: "/Careers",
        active: true
      }
    ],
    textButton: "Request Invite",
    bottonRef: "/add-article"
  }

  return (
    <>
      <Header {...headerProps}/>
      <AppRouter />
      <Card />
      <Footer />
    </>
  )
}

export default App
