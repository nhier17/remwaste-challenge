import SkipSelectorPage from "@/components/SkipSelectorPage";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 flex-col px-5 xs:px-10 md:px-16 min-h-screen bg-gradient-to-b from-background to-muted pb-20">
      <SkipSelectorPage />
    </div>
  );
}
