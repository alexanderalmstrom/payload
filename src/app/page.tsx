import { notFound } from "next/navigation";
import { getPayloadClient } from "../getPayload";
import { Fragment } from "react";
import { RichText } from "./_components/RichText";

export default async function Page() {
  const payload = await getPayloadClient();

  const { docs } = await payload.find({
    collection: "pages",
    where: {
      slug: {
        equals: "home",
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
