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
        equals: slug,
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
