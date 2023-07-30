import Link from "next/link";
type NavProps = {
  route: string;
  name: string;
};

const NavItem = (props: NavProps) => {
  return (
    <Link href={props.route}>
      <li className="ml-10 text-sm uppercase">{props.name}</li>
    </Link>
  );
};

export default NavItem;
