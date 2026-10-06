import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <div className="grid min-h-screen place-items-center p-8 text-center">
      <div>
        <p className="text-sm font-medium text-emerald-700">404</p>
        <h1 className="mt-2 text-3xl font-bold">Nie ma takiej strony</h1>
        <Link
          to="/dashboard"
          className="mt-6 inline-block rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white">
          Wróć na pulpit
        </Link>
      </div>
    </div>
  );
}
