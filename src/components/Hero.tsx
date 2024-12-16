import React from 'react';
import { Truck, Building2, Star } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Conectando Caminhoneiros e Empresas
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-blue-100">
            A melhor plataforma para encontrar fretes e motoristas qualificados
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Sou Motorista
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Sou Empresa
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 p-4 rounded-full mb-4">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Motoristas Verificados</h3>
              <p className="text-blue-100">Profissionais qualificados e avaliados pela comunidade</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 p-4 rounded-full mb-4">
                <Building2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Empresas Confiáveis</h3>
              <p className="text-blue-100">Parceria com as melhores empresas do mercado</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 p-4 rounded-full mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sistema de Avaliação</h3>
              <p className="text-blue-100">Feedback transparente para maior segurança</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}