export default function Perfil() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Meu Perfil</h1>
      
      <div className="bg-white p-6 rounded-lg shadow max-w-2xl">
        <form className="space-y-6">
          <div className="flex items-center space-x-6 mb-6">
            <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-600">JS</span>
            </div>
            <div>
              <button 
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Alterar Foto
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome Completo
              </label>
              <input 
                type="text" 
                defaultValue="João Silva"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-mail
              </label>
              <input 
                type="email" 
                defaultValue="joao@email.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Empresa
            </label>
            <input 
              type="text" 
              defaultValue="Minha Empresa LTDA"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Telefone
            </label>
            <input 
              type="tel" 
              defaultValue="(11) 99999-9999"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-lg font-medium mb-4">Alterar Senha</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Senha Atual
                </label>
                <input 
                  type="password" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nova Senha
                </label>
                <input 
                  type="password" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <a 
              href="/dashboard"
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancelar
            </a>
            <button 
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
