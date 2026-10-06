import type { ReactNode } from "react";

type PageTitleProps = {
  title: string;
  subtitle?: string;
  action?: ReactNode;
};

export function PageTitle({ title, subtitle, action }: PageTitleProps) {
  return (
    <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-1 text-slate-600">{subtitle}</p>}
      </div>
      {action}
    </header>
  );
}
