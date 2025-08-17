import { FC } from 'react'
import styles from './productItem.module.scss'
import { useMediaQuery } from 'react-responsive'
import WarrantyLink from '@/components/ui/warranty/warrantyLink'
import ProductGallery from '@/components/ui/productGallery/productGallery'
import Chars from '@/components/ui/chars/chars'
import BuyButton from '@/components/ui/buttons/buyButton.jsx/buyButton'
import CartButton from '@/components/ui/buttons/cartButton/cartButton'
import WishlistButton from '@/components/ui/buttons/wishListButton/wishListButton'
import { HeartIcon, ShieldIcon } from '@/assets/icons'
import { TProductEscooter } from '@/models/model'
import ProductData from '@/components/productData/productData'

interface IProductItemProps {
	productItem: TProductEscooter | undefined
}

const ProductItem: FC<IProductItemProps> = ({ productItem }) => {
	const isTabletOrMobile = useMediaQuery({
		maxWidth: 767
	})

	return (
		<div className={styles.layout}>
			<div className={styles.container}>
				<h3 className={styles.title}>{`${productItem?.manufacturer} ${productItem?.model}`}</h3>
				<div className={styles.wrapper}>
					<div className={styles.productGallery}>
						<div>
							<ProductGallery
								images={productItem?.img}
								labels={productItem?.labels}
							/>
						</div>
					</div>
					<div className={styles.content}>
						<div className={styles.topFeatures}>
							<p>Артикул: {productItem?.scu}</p>
							<WishlistButton toggleWishList={() => {}}>
								{' '}
								<HeartIcon
									size={isTabletOrMobile ? 20 : 25}
									className={styles.wishListIcon}
								/>
							</WishlistButton>
							<WarrantyLink>
								<ShieldIcon size={isTabletOrMobile ? 19 : 22.5} />
								<span className={styles.warrantyText}>{`Гарантия ${productItem?.warranty}`}</span>
							</WarrantyLink>
							<div>
								<p className={styles.brandName}>{productItem?.manufacturer}</p>
								<p>Производитель</p>
							</div>
						</div>
						<div className={styles.priceWrapper}>
							<div className={styles.priceBody}>
								<span className={styles.priceDiscount}>{productItem?.discountPrice}</span>
								<span className={styles.price}>{productItem?.price}</span>
							</div>
							<div className={styles.buttonsWrapper}>
								<CartButton
									isColorReverse={false}
									fontSize='big'
								>
									Добавить в корзину
								</CartButton>
								<BuyButton
									isColorReverse={true}
									fontSize='big'
								>
									Купить в 1 клик
								</BuyButton>
							</div>
						</div>
						<Chars spec={productItem?.spec} />
					</div>
				</div>
				<ProductData
					spec={productItem?.spec}
					desc={productItem?.desc}
					// reviews={productItem?.reviews}
				/>
			</div>
		</div>
	)
}

export default ProductItem
