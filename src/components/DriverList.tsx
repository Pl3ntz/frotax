import React from 'react';
import { Star, Truck } from 'lucide-react';
import type { Driver } from '../types';

const mockDrivers: Driver[] = [
  {
    id: '1',
    name: 'João Silva',
    vehicle: {
      model: 'Volvo FH 460',
      year: '2020',
      capacity: '30 toneladas'
    },
    rating: 4.8,
    reviews: [
      {
        id: '1',
        companyId: '1',
        companyName: 'Transportadora ABC',
        rating: 5,
        comment: 'Excelente profissional, muito pontual',
        date: '2024-03-15'
      }
    ],
    available: true
  },
  {
    id: '2',
    name: 'Maria Santos',
    vehicle: {
      model: 'Scania R450',
      year: '2021',
      capacity: '28 toneladas'
    },
    rating: 4.9,
    reviews: [
      {
        id: '2',
        companyId: '2',
        companyName: 'Logística XYZ',
        rating: 5,
        comment: 'Muito profissional e cuidadosa com a carga',
        date: '2024-03-10'
      }
    ],
    available: true
  }
];

export default function DriverList() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Motoristas em Destaque</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockDrivers.map((driver) => (
            <div key={driver.id} className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {driver.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{driver.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-gray-600">{driver.rating}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <Truck className="h-5 w-5 mr-2" />
                  <span>{driver.vehicle.model} ({driver.vehicle.year})</span>
                </div>
                <div className="text-gray-600">
                  Capacidade: {driver.vehicle.capacity}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Último Feedback:</h4>
                {driver.reviews[0] && (
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-600">{driver.reviews[0].comment}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {driver.reviews[0].companyName} - {new Date(driver.reviews[0].date).toLocaleDateString()}
                    </p>
                  </div>
                )}
              </div>

              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Ver Perfil Completo
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}