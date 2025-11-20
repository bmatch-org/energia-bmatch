import { ConsentForm } from './components/ConsentForm';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center p-4">
      {/* Logos */}
      <div className="flex items-center justify-center gap-8 mb-8 flex-wrap">
        <div className="w-24 h-20 flex items-center justify-center">
          <ImageWithFallback 
            src="/images/logo_santander.png"
            alt="Santander Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="w-24 h-20 flex items-center justify-center">
          <ImageWithFallback 
            src="/images/logo_imelsa.png"
            alt="Imelsa Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="w-24 h-20 flex items-center justify-center">
          <ImageWithFallback 
            src="/images/logo_bmatch.png"
            alt="BMatch Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Texto + formulario */}
      <div className="w-full max-w-4xl">
        <h1 className="text-center text-primary">
          Convenio de Descuento en Energía
        </h1>
        <p className="text-center text-muted-foreground mt-2 mb-6">
          Autorización para el uso de datos de consumo
        </p>

        <ConsentForm />
      </div>

      <Toaster position="bottom-right" richColors />
    </div>
  );
}

