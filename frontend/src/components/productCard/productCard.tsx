import { FC, useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './productCard.module.scss'
import { CartContext, WishListContext } from '../../../pages/_app'
import CartButton from '../ui/buttons/cartButton/cartButton'
import BuyButton from '../ui/buttons/buyButton.jsx/buyButton'
import RatingProduct from '../ui/ratingProduct/ratingProduct'
import { CartIcon, HeartIcon } from '../../assets/icons'
import { TProductElectroScooter } from '@/models/model'
import WishlistButton from '../ui/buttons/wishListButton/wishListButton'
import { formatPrice } from '@/utils/format-price'

interface IProductItemProps {
	productItem: TProductElectroScooter
	addToCart?: () => void
	toggleWishList?: () => void
}

const ProductCard: FC<IProductItemProps> = ({ productItem, addToCart, toggleWishList }) => {

	const { cart } = useContext(CartContext)
	const { wishList } = useContext(WishListContext)

	return (
		<div className={styles.card}>
			<div className={styles.wrapper}>
				<Link
					href={`/electroscooter/${productItem.slug}`}
					className={styles.imageLink}
				>
					<Image
						src={`http://localhost:1337${productItem.product.image[0].url}`}
						width={190}
						height={210}
						alt='Карточка товара'
					/>
				</Link>
				<div>
					<div className={styles.linkContainer}>
						<Link href={`/electroscooter/${productItem.slug}`}>
							<h6>{productItem.type}</h6>
							<p>{`${productItem.brand} ${productItem.model}`}</p>
						</Link>
					</div>
					<span className={styles.productNote}>{productItem.product.label === 'new' ? 'Новинка' : ''}</span>
					<div className={styles.priceContainer}>
						<span className={styles.discountPrice}>{formatPrice(productItem.product.discount_price)} ₽</span>
						<span className={styles.price}>{formatPrice(productItem.product.price)} ₽</span>
					</div>
					<div className={styles.ratingContainer}>
						<RatingProduct rating={productItem.rating} />
						<WishlistButton toggleWishList={toggleWishList}>
							<HeartIcon
								size={24}
								className={wishList.includes(productItem) ? styles.addWishIcon : styles.wishIcon}
							/>
						</WishlistButton>
					</div>
					<div className={styles.buttonsWrapper}>
						{cart.includes(productItem) ? (
							<CartButton
								isColorReverse={false}
								fontSize='small'
							>
								<Link
									href={'/cart'}
									className={styles.linkCart}
								>
									В корзине
								</Link>
							</CartButton>
						) : (
							<CartButton
								isColorReverse={true}
								addToCart={addToCart}
								fontSize='small'
							>
								<CartIcon size={17} />
							</CartButton>
						)}{' '}
						<BuyButton
							isColorReverse={false}
							fontSize='small'
						>
							Купить в 1 клик
						</BuyButton>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
