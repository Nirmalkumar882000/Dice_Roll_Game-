import GameArea from "./components/GameArea";
import Header from "./components/Header";
import "./App.css"
import Board from "./components/board"
import Footer from "./components/Footer"





function App() {
  return (
    <>
      <div className="h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-main">
        <Header />
        <div className="flex items-center justify-center mt-12 sm:mt-2 md:mt-1.5 lg:mt-2">
          <GameArea/>
        </div>
        <div className="flex items-center justify-center mt-10 sm:mt-2 md:mt-3 lg:mt-2 ">
          <Board/>
        </div>
        <div className="mt-20 sm:mt-3 md:mt-3 lg:mt-3 2xl:mt-8 "> 
          <Footer/>
        </div>
      </div>   

 


    </>
  );
}

export default App;
