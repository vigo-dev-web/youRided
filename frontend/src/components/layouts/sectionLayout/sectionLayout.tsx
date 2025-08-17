import { ReactNode } from "react";
import styles from "./sectionLayout.module.scss"

type SectionProp = {
   title?: string;
   children: ReactNode;
}
const SectionLayout = ({title, children}: SectionProp) => {
   return (
      <section className={styles.sectionLayout}>
         <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            {children}
         </div>
      </section>
   );
}

export default SectionLayout;