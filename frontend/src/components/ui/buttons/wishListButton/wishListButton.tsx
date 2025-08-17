import { FC, ReactNode } from 'react'
import styles from './wishListButton.module.scss'

interface IWishListButtonProps {
	children: ReactNode
	toggleWishList?: () => void
}

const WishlistButton: FC<IWishListButtonProps> = ({ children, toggleWishList }) => {
	return (
		<button
			className={styles.button}
			type='button'
			onClick={toggleWishList}
		>
			{children}
		</button>
	)
}

export default WishlistButton
