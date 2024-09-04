
import './App.css'
import Navegacion from './components/Navegacion'
import Contact from './views/Contact';
import Nosotros from './views/Nosotros'
import Servicios from './views/Servicios';
function App() {



  return (
    <>
      <div className='w-full scroll-container'>
        <header
          className='h-screen w-full bg-cover bg-no-repeat bg-center'
          style={{ backgroundImage: "url('./img/hero.jpg')" }}
        >
          <div>
            <Navegacion />
            <div className='flex flex-col items-center justify-center mt-56'>
              <h1 className=" text-white text-6xl font-bold flex justify-center items-center h-full">
                Viveros <span className='text-green-400'>Teco</span>
              </h1>
              <p className=' text-white text-2xl text-center'>Consultorias especializadas en agronegocios</p>
            </div>

          </div>
        </header>

        <main className='flex flex-col gap-10'>
          <Nosotros />
          <Servicios />
          <Contact />
        </main>
        <footer className='bg-slate-600 p-10 flex items-center justify-center'>
          <p className='text-white text-center text-xl'>Todos los derechos reservados SekyhSoft</p>
        </footer>
      </div>

    </>
  )
}

export default App
