import React from 'react';

export default function CartaDobleLaBartolaGaelea() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Contenedor principal A4 */}
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-lg overflow-hidden max-w-4xl w-full border-2 border-gray-300">
        
        {/* CARA 1: LA BARTOLA - Fondo cálido */}
        <div className="w-full md:w-1/2 bg-[#F8F3E9] p-8 font-sans">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-[#D32F2F]">La Bartola</h1>
            <p className="text-gray-700 italic mt-2">"Donde los amigos se reúnen"</p>
            <div className="mt-2 bg-[#D32F2F] text-white py-1 px-4 rounded-full text-sm">
              🕖 Abrimos: 7:00 AM - 12:00 PM
            </div>
          </div>

          {/* Desayunos */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-[#D32F2F] mb-4 border-b-2 border-[#D32F2F] pb-2">
              Desayunos de la Casa
            </h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-[#D32F2F]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Pan con Chicharrón</h3>
                    <p className="text-gray-600 text-sm mt-1">Crujiente con camote dorado y salsa criolla</p>
                  </div>
                  <div className="bg-[#F8F3E9] px-3 py-1 rounded min-w-20 text-center border border-[#D32F2F]">
                    <span className="text-gray-900 font-bold">S/ 12.00</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-[#D32F2F]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Pan con Pollo</h3>
                    <p className="text-gray-600 text-sm mt-1">Pollo deshilachado jugoso casero</p>
                  </div>
                  <div className="bg-[#F8F3E9] px-3 py-1 rounded min-w-20 text-center border border-[#D32F2F]">
                    <span className="text-gray-900 font-bold">S/ 10.00</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-[#D32F2F]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Tostadas con Mantequilla</h3>
                    <p className="text-gray-600 text-sm mt-1">Crujientes con mermelada de la casa</p>
                  </div>
                  <div className="bg-[#F8F3E9] px-3 py-1 rounded min-w-20 text-center border border-[#D32F2F]">
                    <span className="text-gray-900 font-bold">S/ 8.00</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bebidas */}
          <section className="mb-6">
            <h3 className="text-xl font-bold text-[#D32F2F] mb-3">Bebidas Naturales</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3 text-center border border-gray-200">
                <span className="text-gray-900 block">☕ Café Pasado</span>
                <span className="text-[#D32F2F] font-bold">S/ 3.00</span>
              </div>
              <div className="bg-white rounded-lg p-3 text-center border border-gray-200">
                <span className="text-gray-900 block">🍹 Jugo Natural</span>
                <span className="text-[#D32F2F] font-bold">S/ 4.00</span>
              </div>
              <div className="bg-white rounded-lg p-3 text-center border border-gray-200">
                <span className="text-gray-900 block">🌿 Infusión</span>
                <span className="text-[#D32F2F] font-bold">S/ 2.50</span>
              </div>
              <div className="bg-white rounded-lg p-3 text-center border border-gray-200">
                <span className="text-gray-900 block">🍦 Helado</span>
                <span className="text-[#D32F2F] font-bold">S/ 5.00</span>
              </div>
            </div>
          </section>

          {/* Promoción */}
          <div className="bg-[#D32F2F] rounded-lg p-3 text-white text-center mb-3">
            <h4 className="font-bold mb-1">🚚 Delivery Disponible</h4>
            <p className="text-sm">Pedidos al: <span className="font-bold">#########</span></p>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-[#D32F2F]">
            <div className="text-center">
              <p className="text-gray-700 font-semibold">Av. Mariscal Castilla 226 – Pisco – Perú</p>
              <p className="text-gray-600 text-sm mt-1">📍 Frente al mercado central</p>
            </div>
          </div>
        </div>

        {/* CARA 2: GAELIA - Fondo oscuro */}
        <div className="w-full md:w-1/2 bg-[#2C3E50] text-white p-8 font-sans">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-[#F39C12]">Gaelea</h1>
            <p className="text-gray-300 italic mt-2">"El sabor de la noche pisqueña"</p>
            <div className="mt-2 bg-[#F39C12] text-gray-900 py-1 px-4 rounded-full text-sm">
              🌙 Abrimos: 6:00 PM - 11:00 PM
            </div>
          </div>

          {/* Especialidades Nocturnas */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-[#F39C12] mb-4 border-b-2 border-[#F39C12] pb-2">
              Lo Más Pedido
            </h2>
            
            <div className="space-y-4">
              <div className="bg-[#34495E] rounded-lg p-4 shadow-sm border-l-4 border-[#F39C12]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Alitas BBQ (6 unidades)</h3>
                    <p className="text-gray-300 text-sm mt-1">Jugosas con salsa ahumada y papas fritas</p>
                  </div>
                  <div className="bg-[#2C3E50] px-3 py-1 rounded min-w-20 text-center border border-[#F39C12]">
                    <span className="text-[#F39C12] font-bold">S/ 15.00</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#34495E] rounded-lg p-4 shadow-sm border-l-4 border-[#F39C12]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Pizza Familiar</h3>
                    <p className="text-gray-300 text-sm mt-1">3 toppings a elegir, masa artesanal</p>
                  </div>
                  <div className="bg-[#2C3E50] px-3 py-1 rounded min-w-20 text-center border border-[#F39C12]">
                    <span className="text-[#F39C12] font-bold">S/ 25.00</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#34495E] rounded-lg p-4 shadow-sm border-l-4 border-[#F39C12]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Pollo Broaster</h3>
                    <p className="text-gray-300 text-sm mt-1">Porción familiar con papas y ensalada</p>
                  </div>
                  <div className="bg-[#2C3E50] px-3 py-1 rounded min-w-20 text-center border border-[#F39C12]">
                    <span className="text-[#F39C12] font-bold">S/ 18.00</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Combos */}
          <section className="mb-6">
            <h3 className="text-xl font-bold text-[#F39C12] mb-3">Combos Especiales</h3>
            <div className="space-y-3">
              <div className="bg-[#34495E] rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="text-white">🍔 Combo Hamburguesa + Gaseosa</span>
                  <span className="text-[#F39C12] font-bold">S/ 12.00</span>
                </div>
              </div>
              <div className="bg-[#34495E] rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="text-white">🍗 Alitas (12) + 2 Gaseosas</span>
                  <span className="text-[#F39C12] font-bold">S/ 25.00</span>
                </div>
              </div>
              <div className="bg-[#34495E] rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="text-white">🍕 Pizza Personal + Gaseosa</span>
                  <span className="text-[#F39C12] font-bold">S/ 10.00</span>
                </div>
              </div>
            </div>
          </section>

          {/* Bebidas */}
          <section className="mb-3">
            <h3 className="text-lg font-bold text-[#F39C12] mb-2">Bebidas de la Casa</h3>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-[#34495E] rounded p-2">
                <span className="text-xs block">Maracuyá</span>
                <span className="text-[#F39C12] font-bold text-xs">S/ 5.00</span>
              </div>
              <div className="bg-[#34495E] rounded p-2">
                <span className="text-xs block">Chicha</span>
                <span className="text-[#F39C12] font-bold text-xs">S/ 4.00</span>
              </div>
              <div className="bg-[#34495E] rounded p-2">
                <span className="text-xs block">Cebada</span>
                <span className="text-[#F39C12] font-bold text-xs">S/ 4.00</span>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-[#F39C12]">
            <div className="text-center">
              <p className="text-[#F39C12] font-semibold">Av. Mariscal Castilla 226 – Pisco – Perú</p>
              <p className="text-gray-400 text-sm mt-1">🚚 Delivery disponible hasta las 10:30 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Nota */}
      <div className="mt-6 text-center text-gray-600">
        <p>💡 Carta digital optimizada para impresión A4 doble cara</p>
      </div>
    </div>
  );
}
