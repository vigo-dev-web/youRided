import { FC, ChangeEvent, useContext } from 'react'
import { useMediaQuery } from 'react-responsive'
import styles from './basket.module.scss'
import Checkbox from '@/components/forms/checkbox/checkbox'
import { ProductsContext } from '../../../../pages/_app'
import BasketItem from '@/components/basketItem/basketItem'
import BasketSidebar from '@/components/basketSidebar/basketSidebar'

const Basket: FC = () => {
	const isTabletOrMobile = useMediaQuery({
		maxWidth: 767
	})

	const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		// console.log(target.value)
		// if (target.name === 'rememberUser') {
		// 	setUserData((prev) => ({ ...prev, [target.name]: target.checked }))
		// } else {
		// 	setUserData((prev) => ({
		// 		...prev,
		// 		[target.name]: target.value
		// 	}))
		// }
	}

	const basketItems = useContext(ProductsContext)

	return (
		<div className={styles.layout}>
			<div className={styles.container}>
				<h2 className={styles.title}>
					Корзина <span className={styles.subtitle}>{basketItems?.length} товаров</span>
				</h2>
				<div className={styles.wrapper}>
					<div>
						<div className={styles.body}>
							<div className={styles.topbarWrapper}>
								<div className={styles.checkboxContainer}>
									<Checkbox
										name={'selectAll'}
										hasChecked={false}
										onChange={handleChange}
									/>
									<span className={styles.checkboxText}>Выбрать всё</span>
								</div>
								<p className={styles.removeItems}>Удалить выбранные</p>
							</div>
						</div>
						{basketItems!.map((item) => (
							<BasketItem
								key={item.id}
								productItem={item}
							/>
						))}
					</div>
					<BasketSidebar basketQty={basketItems?.length} />
				</div>
				<div className={styles.body}>Добавить в корзину</div>
			</div>
		</div>
	)
}

export default Basket
