export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-2">
          <a href="/dashboard" className="block py-2 px-4 hover:bg-gray-700 rounded">
            Início
          </a>
          <a href="/dashboard/contratos" className="block py-2 px-4 hover:bg-gray-700 rounded">
            Meus Contratos
          </a>
          <a href="/dashboard/perfil" className="block py-2 px-4 hover:bg-gray-700 rounded">
            Perfil
          </a>
          <a href="/dashboard/configuracoes" className="block py-2 px-4 hover:bg-gray-700 rounded">
            Configurações
          </a>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-6 bg-gray-100">
        {children}
      </main>
    </div>
  );
}
