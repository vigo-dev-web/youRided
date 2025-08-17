import { FC, useContext } from 'react'
import styles from './shopIcons.module.scss'
import { CartContext, WishListContext } from '../../../../pages/_app'
import { CartIcon, HeartIcon } from '../../../assets/icons'
import CartLink from '@/components/cartLink/cartLink'
import WishlistLink from '@/components/wishlistLink/wishlistLink'

const ShopIcons: FC = () => {
	const { cart } = useContext(CartContext)
	const { wishList } = useContext(WishListContext)
	return (
		<ul className={styles.wrapper}>
			<li>
				<WishlistLink
					link={'./wish-list'}
					quantity={wishList.length}
				>
					<HeartIcon
						size={29}
						strokeWidth={20}
					/>
				</WishlistLink>
			</li>
			<li>
				<CartLink
					link={'/cart'}
					quantity={cart.length}
				>
					<CartIcon size={32} />
				</CartLink>
			</li>
		</ul>
	)
}

export default ShopIcons
