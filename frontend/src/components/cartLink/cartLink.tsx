
import { FC, ReactNode } from 'react'
import Link from 'next/link'
import styles from './cartLink.module.scss'

interface ICartProps {
	children: ReactNode
	link: string
	quantity: number
}

const CartLink: FC<ICartProps> = ({ link, quantity, children }: ICartProps) => {
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

export default CartLink
