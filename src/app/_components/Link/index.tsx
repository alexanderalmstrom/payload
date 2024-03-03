import type { MainMenu } from "@/payload-types";
import NextLink from "next/link";

type Link = MainMenu["navItems"][0]["link"];

function getHrefFromLink(link: Link) {
  if (
    link.type === "reference" &&
    typeof link.reference?.value === "object" &&
    link.reference.value.slug
  ) {
    return `/${link.reference.value.slug}`;
  }

  return link.url;
}

export const Link = ({ link }: { link: Link }) => {
  const href = getHrefFromLink(link);

  return <NextLink href={href}>{link.label}</NextLink>;
};
