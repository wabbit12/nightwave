export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-black/60 py-6 text-xs text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row lg:px-6">
        <p className="text-center sm:text-left">
          Nightwave Studio is a fictional creative studio, crafted as a design
          and UX case study.
        </p>
        <p className="text-center sm:text-right">
          <span className="font-medium text-slate-100">Nightwave Studio</span>{" "}
          · Dark UI & motion-first web
        </p>
      </div>
    </footer>
  );
}

