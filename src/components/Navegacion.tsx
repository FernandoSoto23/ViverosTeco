import Logo from "./Logo";


export default function Navegacion() {
  return (
    <nav className="z-50 flex justify-between sm:justify-evenly ml-0 lg:m-0 items-center">
      <ul className="m-2 p-0">
        <li><Logo /></li>
      </ul>
      <ul className="sm:flex  hidden gap-4 text-white text-2xl items-center m-0">
        <li><a href="#nosotros" className=" list-none no-underline text-green-400 font-bold hover:text-green-100" >Inicio</a></li>
        <li><a href="#nosotros" className=" list-none no-underline text-green-400 font-bold" >Nosotros</a></li>
        <li><a href="#servicios" className=" list-none no-underline text-green-400 font-bold" >Servicios</a></li>
        <li><a href="#" className=" list-none no-underline text-green-400 font-bold " >Contacto</a></li>
      </ul>

      <ul className="sm:hidden m-2 p-0">
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-14 text-green-400 border-4 rounded-lg border-green-400 lg:hidden m-2 lg:m-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </li>
      </ul>
    </nav>

  )
}
