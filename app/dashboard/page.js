export default function DashboardHome() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Bem-vindo ao Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Contratos Ativos</h3>
          <p className="text-2xl font-bold text-blue-600">12</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Contratos Pendentes</h3>
          <p className="text-2xl font-bold text-yellow-600">3</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Total de Contratos</h3>
          <p className="text-2xl font-bold text-green-600">24</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Atividade Recente</h2>
        <ul className="space-y-3">
          <li className="border-b pb-2">
            <span className="font-medium">Contrato #001</span> foi atualizado
            <span className="text-gray-500 text-sm block">Há 2 horas</span>
          </li>
          <li className="border-b pb-2">
            <span className="font-medium">Novo contrato</span> criado
            <span className="text-gray-500 text-sm block">Hoje às 14:30</span>
          </li>
          <li className="border-b pb-2">
            <span className="font-medium">Assinatura realizada</span> no contrato #005
            <span className="text-gray-500 text-sm block">Ontem às 18:45</span>
          </li>
        </ul>
      </div>

      <div className="mt-6">
        <a 
          href="/dashboard/contratos" 
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Gerenciar Contratos
        </a>
      </div>
    </div>
  );
}
