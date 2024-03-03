import type { ReactNode } from "react";
import { Layout } from "@/components/Layout";
import { getPayloadClient } from "@/getPayload";

export default async function SiteLayout({
  children,
}: {
  children: ReactNode;
}) {
  const payload = await getPayloadClient();

  const mainMenu = await payload.findGlobal({
    slug: "main-menu",
  });

  return <Layout mainMenu={mainMenu}>{children}</Layout>;
}
