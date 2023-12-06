import { Container } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import UserPage from "./pages/UserPage"
import PostPage from "./pages/PostPage"
import Header from "./components/Header"
// import AuthPage from "./pages/authPage"
// import HomePage from "./pages/HomePage"

function App() {

  return (
    <Container maxW="620px">
      <Header/>
     <Routes>
     {/* <Routes path="/" element={<HomePage />} /> */}
     <Routes path="/auth" element={<authPage />} />


      <Route path="/:username" element={<UserPage/>}/>
      <Route path="/:username/post/:pid" element={<PostPage/>}/>
     </Routes>
    </Container> 
  ) 
}

export default App
