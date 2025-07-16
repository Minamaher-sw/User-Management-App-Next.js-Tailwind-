import Dropdown from "./userdropdown/user";

export default function Layout({ children }) {
  return (
    <main className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <Dropdown />
      </aside>

      {/* Main Content */}
      <div className="flex-grow p-6">
        {children}
      </div>
    </main>
  );
}
