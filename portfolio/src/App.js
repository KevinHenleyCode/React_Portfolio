import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {
  return (
    <div className='bg-white flex flex-col h-screen justify-between'>
        <Header/>
        <Footer/>
    </div>
  );
}

export default App;
