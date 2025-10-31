export default function DetalheContrato({ params }) {
  const { id } = params;
  
  // Simulando dados do contrato
  const contrato = {
    id: id,
    nome: `Contrato #${id}`,
    descricao: "Descrição detalhada do contrato...",
    partes: ["Parte A", "Parte B"],
    valor: "R$ 5.000,00",
    status: "Ativo",
    dataCriacao: "2024-01-15",
    dataVencimento: "2024-12-31"
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{contrato.nome}</h1>
        <div className="space-x-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Editar
          </button>
          <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
            Exportar
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Informações do Contrato</h2>
          <dl className="space-y-3">
            <div>
              <dt className="font-medium">Status:</dt>
              <dd>{contrato.status}</dd>
            </div>
            <div>
              <dt className="font-medium">Valor:</dt>
              <dd>{contrato.valor}</dd>
            </div>
            <div>
              <dt className="font-medium">Data de Criação:</dt>
              <dd>{contrato.dataCriacao}</dd>
            </div>
            <div>
              <dt className="font-medium">Data de Vencimento:</dt>
              <dd>{contrato.dataVencimento}</dd>
            </div>
          </dl>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Partes Envolvidas</h2>
          <ul className="list-disc list-inside space-y-2">
            {contrato.partes.map((parte, index) => (
              <li key={index}>{parte}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mt-6">
        <h2 className="text-xl font-semibold mb-4">Descrição</h2>
        <p>{contrato.descricao}</p>
      </div>
    </div>
  );
}
