import ActiveLink from "./ActiveLink";
import styles from "./Navbar.module.css";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

const NavBar = () => {
  return (
    <nav className={styles.menu}>
      {menuItems.map((item) => (
        <ActiveLink key={item.href} text={item.text} href={item.href} />
      ))}
    </nav>
  );
};

export default NavBar;