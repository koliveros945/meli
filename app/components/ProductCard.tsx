import Image from 'next/image';

interface ProductProps {
  image: string;
  title: string;
  price: number;
  installments: string;
  freeShipping?: boolean;
  discount?: string;
}

const ProductCard = ({ image, title, price, installments, freeShipping, discount }: ProductProps) => {
  return (
    <div className="bg-white min-w-[180px] max-w-[224px] flex flex-col p-4 cursor-pointer hover:shadow-md transition-shadow duration-200 border-l border-gray-100 first:border-l-0 group">
      {/* Imagen del Producto */}
      <div className="relative w-full aspect-square mb-4 border-b border-gray-50 pb-4">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-contain"
        />
      </div>

      {/* Información */}
      <div className="flex flex-col gap-1">
        <h3 className="text-sm-meli text-meli-dark font-light line-clamp-2 leading-tight h-9">
          {title}
        </h3>
        
        <div className="flex flex-col mt-1">
          {/* Precio principal */}
          <div className="flex items-center gap-2">
            <span className="text-2xl text-meli-dark font-normal">
              $ {price.toLocaleString('es-CO')}
            </span>
            {discount && (
              <span className="text-meli-green text-xs font-medium">{discount}</span>
            )}
          </div>
          
          {/* Cuotas */}
          <p className="text-meli-green text-xs-meli mt-1">
            {installments}
          </p>

          {/* Envío gratis */}
          {freeShipping && (
            <p className="text-meli-green text-xs-meli font-semibold mt-0.5">
              Envio full
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;