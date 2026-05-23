import { notFound } from "next/navigation";
import { PitchDeck } from "@/components/PitchDeck";
import { SLIDE_SLUGS, slideIndexFromSlug } from "@/lib/slides";

export function generateStaticParams() {
  return SLIDE_SLUGS.filter((slug) => slug !== "cover").map((slug) => ({ slug }));
}

type SlidePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function SlidePage({ params }: SlidePageProps) {
  const { slug } = await params;
  if (slideIndexFromSlug(slug) === null) notFound();
  return <PitchDeck />;
}
