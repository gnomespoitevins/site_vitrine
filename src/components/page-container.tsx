import type { ReactNode } from "react";

export default function PageContainer({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto mt-4 min-h-[calc(100vh-9rem)] max-w-6xl px-3 pb-8 sm:mt-6 sm:px-6 sm:pb-10 lg:px-8">
      <div className="mb-5">
        <h1 className="medieval-title break-words text-2xl leading-tight text-[var(--brown)] sm:text-3xl lg:text-4xl">
          {title}
        </h1>
      </div>
      <div className="space-y-6">{children}</div>
    </main>
  );
}
