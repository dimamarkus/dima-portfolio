import { Tag } from "@/components/ui/tag";

type ProjectFact = Readonly<{
  label: string;
  values: string[];
}>;

type ProjectFactsProps = Readonly<{
  items: ProjectFact[];
}>;

export const ProjectFacts = ({ items }: ProjectFactsProps) => {
  const visibleItems = items.filter((item) => item.values.length > 0);

  if (visibleItems.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {visibleItems.map((item) => (
        <section
          key={item.label}
          className="rounded-2xl border border-white/10 bg-slate-950/40 p-5"
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
            {item.label}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {item.values.map((value) => (
              <Tag key={value}>{value}</Tag>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};
