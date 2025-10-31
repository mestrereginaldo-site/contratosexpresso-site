export default function Configuracoes() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Configurações</h1>
      
      <div className="bg-white p-6 rounded-lg shadow max-w-2xl">
        <form className="space-y-6">
          <div>
            <h2 className="text-lg font-medium mb-4">Preferências de Notificação</h2>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                <span className="ml-2">Receber notificações por e-mail</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                <span className="ml-2">Notificar sobre novos contratos</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2">Notificar sobre alterações em contratos</span>
              </label>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <h2 className="text-lg font-medium mb-4">Preferências de Sistema</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Idioma
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Português (Brasil)</option>
                  <option>Inglês</option>
                  <option>Espanhol</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fuso Horário
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>America/Sao_Paulo</option>
                  <option>America/New_York</option>
                  <option>Europe/London</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button 
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Salvar Configurações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
