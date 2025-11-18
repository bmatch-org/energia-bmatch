import { useState } from 'react';
import { ConsentForm } from './components/ConsentForm';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header with logos */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-center gap-8 mb-4 flex-wrap">
            <div className="w-24 h-24 flex items-center justify-center">
              <ImageWithFallback 
                src="/images/logo_santander.png"
                alt="Santander Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-24 h-28 flex items-center justify-center">
              <ImageWithFallback 
                src="/images/logo_imelsa.png"
                alt="Imelsa Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-24 h-25 flex items-center justify-center">
              <ImageWithFallback 
                src="/images/logo_bmatch.png"
                alt="BMatch Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <h1 className="text-center text-primary">
            Convenio de Descuento en Energía
          </h1>
          <p className="text-center text-muted-foreground mt-2">
            Autorización para el uso de datos de consumo
          </p>
        </div>

        {/* Main content */}
        <ConsentForm />
        <Toaster position="bottom-right" richColors />
      </div>
    </div>
  );
}
