'use client';
import ProtectedRoute from '../components/ProtectedRoute';
import { useAuth } from '../context/AuthContext';

export default function DashboardLayout({ children }) {
  const { user, logout } = useAuth();

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-6">
          <div className="mb-8">
            <h2 className="text-xl font-bold">ContratoExpresso</h2>
            <p className="text-gray-400 text-sm">Dashboard</p>
            {user && (
              <p className="text-gray-400 text-sm mt-2">
                Olá, {user.name}
              </p>
            )}
          </div>
          
          <nav className="space-y-2">
            <a href="/dashboard" className="flex items-center py-2 px-4 hover:bg-gray-700 rounded transition-colors">
              📊 Início
            </a>
            <a href="/dashboard/contratos" className="flex items-center py-2 px-4 hover:bg-gray-700 rounded transition-colors">
              📄 Meus Contratos
            </a>
            <a href="/dashboard/perfil" className="flex items-center py-2 px-4 hover:bg-gray-700 rounded transition-colors">
              👤 Perfil
            </a>
            <a href="/dashboard/configuracoes" className="flex items-center py-2 px-4 hover:bg-gray-700 rounded transition-colors">
              ⚙️ Configurações
            </a>
          </nav>

          <div className="mt-8 pt-6 border-t border-gray-700">
            <button 
              onClick={logout}
              className="flex items-center w-full py-2 px-4 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors"
            >
              🚪 Sair
            </button>
            <a href="/" className="flex items-center py-2 px-4 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors">
              ← Voltar ao Site
            </a>
          </div>
        </aside>

        {/* Conteúdo principal */}
        <main className="flex-1 p-6 bg-gray-100">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
}
