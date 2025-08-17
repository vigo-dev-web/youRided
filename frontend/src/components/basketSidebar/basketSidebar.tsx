import { FC } from 'react'
import styles from './basketSidebar.module.scss'
import MainButton from '../ui/buttons/mainButton/mainButton'

interface IBasketSidebar {
	basketQty: number | undefined
}

const BasketSidebar: FC<IBasketSidebar> = ({ basketQty }) => {
	return (
		<aside className={styles.sidebarBody}>
			<div className={styles.sidebarContainer}>
				<div className={styles.prices}>
					<h3>Детали заказа</h3>
					<p>{basketQty} товаров</p>
				</div>
				<div className={styles.prices}>
					<p>Товар на сумму :</p>
					<p>12 300 р.</p>
				</div>
				<div className={styles.prices}>
					<p>Общая скидка :</p>
					<p>12 300 р.</p>
				</div>
				<div className={styles.prices}>
					<p>Итого :</p>
					<p>12 300 р.</p>
				</div>
				<MainButton
					link='/'
					isColorReverse={false}
				>
					Перейти к формлению
				</MainButton>
			</div>
		</aside>
	)
}

export default BasketSidebar
