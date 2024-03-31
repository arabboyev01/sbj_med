import clsx from "clsx";
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import routing from "@/shared/routing";
import { Nav } from "./nav";
import { HumburgerIcon } from "@/shared/ui";
import { useEffect, useState } from "react";
import { useLockedBody } from "@/shared/lib/modal";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();
  useLockedBody(open);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <motion.div
        className={clsx("container", styles["header-container"])}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.75,
        }}
      >
        <button className={styles.burger} onClick={() => setOpen(true)}>
          <HumburgerIcon />
        </button>
        <Link className={styles["logo"]} href={routing.home}>
          <Image
            className={styles["logo-img"]}
            src="/images/logo.svg"
            alt="Site Logo"
            width={269}
            height={50}
            priority
          />
        </Link>
        <Nav isActive={open} close={() => setOpen(false)} />
      </motion.div>
    </header>
  );
};

export default Header;
