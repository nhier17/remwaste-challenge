import { StepsHeader } from "./StepsHeader";
import { PageHeader } from "./PageHeader";
import { steps } from "../constants";
import { SkipGrid } from "./SkipGrid";

export function SkipSelectorPage() {
  return (
    <section className="py-16">
        <StepsHeader steps={steps} />
        <PageHeader 
            title="Choose Your Skip Size"
            description="Select the skip size that best suits your needs"
        />
        <SkipGrid />
    </section>
  )
}