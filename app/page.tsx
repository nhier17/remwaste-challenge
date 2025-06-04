import { SkipSelectorPage } from "@/components/SkipSelectorPage";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 flex-col px-5 xs:px-10 md:px-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pb-20 mx-auto max-w-7xl">
      <SkipSelectorPage />
    </div>
  );
}
