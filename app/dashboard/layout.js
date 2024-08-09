import Link from "next/link";

export default function DashboardLayout({ children }) { 
    return (
      <div className="flex min-h-screen">
        {/* Sidebar / Vertical Navigation */}
        <nav className="w-64 bg-gray-800 text-white p-6 flex flex-col">
          <h2 className="text-2xl font-bold mb-8">User Panel</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/dashboard" className="hover:text-gray-300">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Users
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Products
              </Link>
            </li>
            <li>
              <Link href="/dashboard/settings" className="hover:text-gray-300">
                Settings
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Reports
              </Link>
            </li>
          </ul>
        </nav>
  
        {/* Main Content Area */}
        <div className="flex-1 p-10 bg-gray-100">
          {children}
        </div>
      </div>
    );
  }
  