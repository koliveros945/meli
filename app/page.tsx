import Image from "next/image";
import LatestVisits from "./components/LatestVisits";

export default function Home() {
  return (
    <div className="mt-4">
      {/* Un banner de ejemplo responsive */}
      <div className="w-full rounded-md overflow-hidden shadow-sm bg-white">
         {/* Usando una imagen de placeholder que simula el banner de ASUS */}
         <Image 
           src="/bruce_banner.webp"
           alt="Banner Principal"
           width={1200}
           height={300}
           className="w-full h-auto object-cover hidden md:block" // Desktop
           priority
         />
          <Image 
           src="/bruce_banner.webp"
           alt="Banner Principal Móvil"
           width={600}
           height={300}
           className="w-full h-auto object-cover md:hidden" // Móvil
           priority
         />
      </div>
      
      <LatestVisits />
    </div>
  );
}