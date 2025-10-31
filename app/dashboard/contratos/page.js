export default function ContratosDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Meus Contratos</h1>
      <div className="bg-white rounded-lg shadow p-4">
        <p>Aqui será a lista dos seus contratos...</p>
        <ul className="mt-4 space-y-2">
          <li className="p-2 border rounded">Contrato #001</li>
          <li className="p-2 border rounded">Contrato #002</li>
          <li className="p-2 border rounded">Contrato #003</li>
        </ul>
      </div>
    </div>
  );
}
