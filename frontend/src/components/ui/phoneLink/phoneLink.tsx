import { FC, ReactNode } from 'react'
import Link from 'next/link'
import styles from "./phoneLink.module.scss"

interface IPhoneLinkProps {
   tel: string,
   children: ReactNode

}

const PhoneLink: FC<IPhoneLinkProps> = ({tel, children }) => {
   return (
		<Link
			href={`tel:${tel}`}
			className={styles.phoneLink}
		>
			{children}
		</Link>
	)
}
export default PhoneLink
