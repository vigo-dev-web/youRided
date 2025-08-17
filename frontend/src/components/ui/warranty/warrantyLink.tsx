import { FC, ReactNode } from "react";
import { MdSecurity } from "react-icons/md";
import styles from "./warrantyLink.module.scss"
import Link from "next/link";

interface IWarrantyLink {
   children: ReactNode,

}

const WarrantyLink: FC<IWarrantyLink> = ({ children }) => {

   return (
      <Link href={'/warranty'} className={styles.link} >{children}</Link>
   )
}

export default WarrantyLink;