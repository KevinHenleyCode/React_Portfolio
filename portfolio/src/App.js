import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Container from "./components/Container"


function App() {
  return (
    <div className=' bg-gray-800 flex flex-col h-screen'>
      <Header/>
      <Container className='flex-grow'/>
      <Footer/>
    </div>
  );
}

export default App;
