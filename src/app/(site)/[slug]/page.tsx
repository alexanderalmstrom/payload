import { Fragment } from "react";
import { notFound } from "next/navigation";
import { getPayloadClient } from "@/getPayload";
import { RichText } from "@/components/RichText";

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const payload = await getPayloadClient();

  const { docs } = await payload.find({
    collection: "pages",
    where: {
      slug: {
        equals: slug ?? "home",
      },
    },
  });

  const page = docs[0];

  if (!page) {
    return notFound();
  }

  return (
    <Fragment>
      <h1>{page.title}</h1>
      <RichText content={page.richText} />
    </Fragment>
  );
}

export async function generateStaticParams() {
  const payload = await getPayloadClient();

  const pages = await payload.find({
    collection: "pages",
    limit: 0,
  });

  return pages.docs.map(({ slug }: { slug?: string }) => ({ slug }));
}
