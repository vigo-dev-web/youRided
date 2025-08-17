import { FC, ReactNode } from 'react'
import Link from 'next/link'
import styles from './wishlistLink.module.scss'

interface IWishlistLinkProps {
	children: ReactNode
	link: string
	quantity?: number
}

const WishlistLink: FC<IWishlistLinkProps> = ({ link, quantity, children }: IWishlistLinkProps) => {
	return (
		<>
			<Link
				className={styles.cart}
				href={link}
			>
				{children}
				<span className={styles.quantity}>{quantity}</span>
			</Link>
		</>
	)
}

export default WishlistLink
