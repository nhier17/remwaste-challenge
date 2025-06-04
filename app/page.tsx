import { SkipSelectorPage } from "@/components/SkipSelectorPage";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 flex-col px-5 xs:px-10 md:px-16 bg-[#080A1C] pb-20 mx-auto max-w-7xl">
      <SkipSelectorPage />
    </div>
  );
}
