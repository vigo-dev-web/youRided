import { FC, useState } from 'react'
import Link from 'next/link'
import Checkbox from '../forms/checkbox/checkbox'
import styles from './basketItem.module.scss'
import Image from 'next/image'
import Counter from '../counter/counter'
import { HeartIcon, TrashIcon } from '@/assets/icons'
import { TProductEscooter } from '@/models/model'
import { setPrice } from '@/services/utils'

interface IProductItemProps {
	productItem: TProductEscooter | undefined
}

const BasketItem: FC<IProductItemProps> = ({ productItem }) => {

	const [count, setCount] = useState<number>(1)

	const price = setPrice(productItem?.price, count)
	const discountPrice = setPrice(productItem?.discountPrice, count)

	const handleDecriment = () => {
		if (count > 1) {
			setCount((prev) => prev - 1)
		}
	}

	const handleIncriment = () => {
		if (count < 5) {
			setCount((prev) => prev + 1)
		}
	}

	return (
		<div className={styles.body}>
			<div className={styles.itemWrapper}>
				<Checkbox
					name={'selectItem'}
					hasChecked={true}
					onChange={() => {}}
				/>
				<div>
					<Link
						href={`/product/${productItem?.link}`}
						className={styles.imageLink}
					>
						<Image
							src={productItem!.img[0]}
							width={80}
							height={90}
							alt='Карточка товара'
						/>
					</Link>
				</div>
				<div className={styles.linkContainer}>
					<Link href={`/productItem?/${productItem?.link}`}>
						<h4>{productItem?.type}</h4>
						<p className={styles.manufacturer}>{`${productItem?.manufacturer} ${productItem?.model}`}</p>
					</Link>
				</div>
				<div className={styles.countContainer}>
					<Counter
						count={count}
						handleIncriment={handleIncriment}
						handleDecriment={handleDecriment}
					/>
					<div className={styles.iconContainer}>
						<TrashIcon size={17} />
						<HeartIcon size={20} />
					</div>
				</div>
				<div className={styles.priceContainer}>
					<p className={styles.discountPrice}>{discountPrice}</p>
					<p className={styles.price}>{price}</p>
				</div>
			</div>
		</div>
	)
}

export default BasketItem
