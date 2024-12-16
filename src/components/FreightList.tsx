import React from 'react';
import { MapPin, Calendar, DollarSign } from 'lucide-react';
import type { FreightJob } from '../types';

const mockFreights: FreightJob[] = [
  {
    id: '1',
    companyId: '1',
    companyName: 'Transportadora Silva',
    title: 'Transporte de Eletrônicos',
    description: 'Transporte de carga eletrônica de São Paulo a Rio de Janeiro',
    origin: 'São Paulo, SP',
    destination: 'Rio de Janeiro, RJ',
    price: 5000,
    deadline: '2024-03-25',
    requirements: ['Caminhão Baú', 'Rastreador'],
    status: 'open'
  },
  {
    id: '2',
    companyId: '2',
    companyName: 'Logística Express',
    title: 'Carga Refrigerada',
    description: 'Transporte de produtos congelados',
    origin: 'Curitiba, PR',
    destination: 'Florianópolis, SC',
    price: 3500,
    deadline: '2024-03-23',
    requirements: ['Caminhão Refrigerado'],
    status: 'open'
  }
];

export default function FreightList() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Fretes Disponíveis</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockFreights.map((freight) => (
            <div key={freight.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{freight.title}</h3>
              <p className="text-gray-600 mb-4">{freight.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{freight.origin} → {freight.destination}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>Prazo: {new Date(freight.deadline).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="h-5 w-5 mr-2" />
                  <span>R$ {freight.price.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {freight.requirements.map((req, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {req}
                  </span>
                ))}
              </div>

              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Ver Detalhes
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}