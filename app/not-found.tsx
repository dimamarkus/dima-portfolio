import { Container } from "@/components/site/container";
import { Section } from "@/components/site/section";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <Container>
      <Section
        description="The page you requested does not exist in the standalone portfolio."
        eyebrow="404"
        title="This page could not be found"
      >
        <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-8">
          <p className="max-w-2xl text-base leading-7 text-slate-300">
            It may have moved during the standalone rebuild, or the link may
            simply be outdated.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/">Go home</Button>
            <Button href="/work" variant="secondary">
              Browse work
            </Button>
          </div>
        </div>
      </Section>
    </Container>
  );
}
