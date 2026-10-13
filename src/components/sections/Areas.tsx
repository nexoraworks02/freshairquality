import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { AreaPhotoCard } from "../AreaPhotoCard";
import { provinces } from "@/config/site";

// "Where we serve": one landmark photo card per service area.
export function Areas() {
  return (
    <Section id="areas" className="bg-white">
      <SectionHeading
        eyebrow="Where we serve"
        title="Air duct cleaning across Canada"
        subtitle="From the Greater Toronto Area to British Columbia and the Maritimes — find Fresh Air Quality in your province."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {provinces.map((p, i) => (
          <Reveal key={p.code} delay={(i % 4) * 0.07} from="zoom">
            <AreaPhotoCard area={p} />
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href="/service-areas/" size="lg" variant="secondary">
          View all service areas
        </Button>
      </div>
    </Section>
  );
}
