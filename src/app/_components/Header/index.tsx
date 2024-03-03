import { Link } from "@/components/Link";
import type { MainMenu } from "@/payload-types";

export const Header = ({ mainMenu }: { mainMenu: MainMenu }) => {
  const items = mainMenu.navItems;

  return (
    <header>
      {items.map((item) => {
        return <Link key={item.id} {...item} />;
      })}
    </header>
  );
};
