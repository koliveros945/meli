import ProductCard from "./ProductCard";

const LatestVisits = () => {
  // Datos de ejemplo basados en tu captura (Tablets)
  const products = [
    {
      image: "/products/product0001.webp",
      title: "Tablet Facetel 10 12gb Ram 128gb + Teclado Y Mouse...",
      price: 489900,
      installments: "3 cuotas de $ 163.300 con 0% interés",
      freeShipping: true
    },
    {
      image: "/products/product0001.webp",
      title: "Tablet 10 Android 12gb Ram 128gb Con Teclado...",
      price: 479900,
      installments: "3 cuotas de $ 159.967 con 0% interés",
      freeShipping: true
    },
    {
        image: "/products/product0001.webp",
        title: "Tablet Lenovo Ideatab 5g Lte 8gb 256gb Teclado +...",
        price: 1340910,
        installments: "6 cuotas de $ 223.485 con 0% interés",
        freeShipping: true,
        discount: "10% OFF"
    },
        {
      image: "/products/product0001.webp",
      title: "Tablet Facetel 10 12gb Ram 128gb + Teclado Y Mouse...",
      price: 489900,
      installments: "3 cuotas de $ 163.300 con 0% interés",
      freeShipping: true
    },
    {
      image: "/products/product0001.webp",
      title: "Tablet 10 Android 12gb Ram 128gb Con Teclado...",
      price: 479900,
      installments: "3 cuotas de $ 159.967 con 0% interés",
      freeShipping: true
    },
    {
        image: "/products/product0001.webp",
        title: "Tablet Lenovo Ideatab 5g Lte 8gb 256gb Teclado +...",
        price: 1340910,
        installments: "6 cuotas de $ 223.485 con 0% interés",
        freeShipping: true,
        discount: "10% OFF"
    }
    // Agrega más según necesites
  ];

  return (
    <section className="mt-10 mb-10">
      <div className="flex items-baseline gap-4 mb-4">
        <h2 className="text-2xl font-light text-meli-dark">Inspirado en lo último que viste</h2>
        <a href="#" className="text-sm-meli text-meli-blue hover:underline">Ver historial</a>
      </div>

      <div className="bg-white rounded-md shadow-meli-card relative group overflow-hidden">
        {/* Contenedor de scroll horizontal */}
        <div className="flex overflow-x-auto no-scrollbar">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* Botón de flecha (Estética) */}
        <button className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100 z-10 translate-x-1/2 group-hover:translate-x-0 transition-transform duration-300">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-meli-blue"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        </button>
      </div>
    </section>
  );
};

export default LatestVisits;