import Image from 'next/image';
import Link from 'next/link';

// Iconos SVG en línea para no depender de librerías externas en este ejemplo.
// En un proyecto real, usa lucide-react o heroicons.
const SearchIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>);
const MenuIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-meli-dark"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>);
const CartIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-meli-dark"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>);
const PinIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>);

const Header = () => {
  return (
    <header className="bg-meli-yellow p-2 lg:pt-2 lg:pb-1 border-b border-gray-200 font-sans">
      <div className="max-w-[1200px] mx-auto">
        
        {/* --- FILA SUPERIOR (Logo, Buscador, Menú Móvil) --- */}
        <div className="flex items-center justify-between gap-2 lg:gap-6">
          
          {/* Menú Hamburguesa (Solo Móvil) */}
          <button className="lg:hidden p-1">
            <MenuIcon />
          </button>

          {/* Logo (Cambia ligeramente de posición en desktop) */}
          <Link href="/" className="flex-shrink-0 relative -top-[2px] lg:top-0">
             {/* Usamos un placeholder para el logo. Reemplaza src con el logo real de ML */}
             <Image 
                src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.22.13/mercadolibre/logo__large_plus.png"
                alt="Mercado Libre" 
                width={134} 
                height={34} 
                className="w-[120px] lg:w-[134px] h-auto"
                priority
             />
          </Link>

          {/* Barra de Búsqueda (Se expande en desktop) */}
          <div className="flex-grow flex relative max-w-[600px]">
            <form className="w-full bg-white rounded-sm shadow-meli-search flex items-center relative z-10">
              <input 
                type="text" 
                placeholder="Buscar productos, marcas y más…" 
                className="flex-grow p-2 pl-4 text-sm-meli text-meli-dark outline-none bg-transparent rounded-sm placeholder:text-gray-400 font-light"
              />
              <button type="submit" className="p-2 pr-3 bg-white border-l border-gray-100 h-full flex items-center justify-center">
                <SearchIcon />
              </button>
            </form>
          </div>

          {/* Iconos Derecha (Solo Móvil: Carrito) */}
          <div className="lg:hidden flex items-center">
             <CartIcon />
          </div>

          {/* Banner de Descuentos/Meli+ (Solo Desktop) */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0 max-w-[340px]">
             {/* Placeholder para el banner de Meli+ Essential */}
             <div className="h-[39px] bg-cover bg-center w-full rounded overflow-hidden" style={{backgroundImage: `url('https://http2.mlstatic.com/D_NQ_857361-MLA74094229827_012024-OO.webp')`}}>
             </div>
          </div>

        </div>

        {/* --- FILA INFERIOR (Navegación y Ubicación - Solo Desktop) --- */}
        <div className="hidden lg:flex items-center justify-between mt-2 pt-1">
          
          {/* Ubicación */}
          <div className="flex items-center gap-1 text-xs-meli text-meli-dark hover:border-gray-300 border border-transparent p-1 rounded cursor-pointer min-w-[160px]">
            <PinIcon />
            <div className="flex flex-col leading-tight">
              <span className="text-gray-500 font-light">Enviar a Kevin</span>
              <span className="font-medium">Carrera carrera 56a...</span>
            </div>
          </div>

          {/* Enlaces de Navegación */}
          <nav>
            <ul className="flex items-center gap-5 text-xs-meli text-meli-dark/80 font-light">
              <li><Link href="#" className="hover:text-meli-blue">Categorías</Link></li>
              <li><Link href="#" className="hover:text-meli-blue">Ofertas</Link></li>
              <li><Link href="#" className="hover:text-meli-blue">Cupones</Link></li>
              <li><Link href="#" className="hover:text-meli-blue">Supermercado</Link></li>
              <li><Link href="#" className="hover:text-meli-blue">Moda</Link></li>
              <li><Link href="#" className="hover:text-meli-blue">Vender</Link></li>
              <li><Link href="#" className="hover:text-meli-blue">Ayuda / PQR</Link></li>
            </ul>
          </nav>

           {/* Menú de Usuario Derecha */}
           <div className="flex items-center gap-4 text-xs-meli text-meli-dark">
             {/* Placeholder para el Avatar */}
             <div className="flex items-center gap-2 cursor-pointer">
                 <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">K</div>
                 <span className="font-light">Kevin Ol...</span>
             </div>
             <Link href="#" className="font-light hover:text-meli-blue">Mis compras</Link>
             <Link href="#" className="font-light hover:text-meli-blue">Favoritos</Link>
             {/* Icono de carrito desktop */}
             <CartIcon />
           </div>

        </div>
      </div>
    </header>
  );
};

export default Header;