import { NavLink, Outlet } from "react-router";

const links = [
  { to: "/dashboard", label: "Pulpit" },
  { to: "/transactions", label: "Transakcje" },
  { to: "/investments", label: "Inwestycje" },
];

export function AppLayout() {
  return (
    <div className="min-h-screen md:grid md:grid-cols-[15rem_1fr]">
      <aside className="border-b border-slate-200 bg-white md:sticky md:top-0 md:h-screen md:border-r md:border-b-0">
        <div className="flex items-center gap-6 overflow-x-auto px-4 py-3 md:flex-col md:items-stretch md:gap-8 md:px-5 md:py-6">
          <span className="text-lg font-bold tracking-tight">
            Fin<span className="text-emerald-600">Portal</span>
          </span>
          <nav className="flex gap-1 md:flex-col" aria-label="Główne menu">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to !== "/investments"}
                className={({ isActive }) =>
                  `whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-slate-600 hover:bg-slate-100"
                  }`
                }>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>
      <main className="mx-auto w-full max-w-5xl px-4 py-8 md:px-8">
        <Outlet />
      </main>
    </div>
  );
}
