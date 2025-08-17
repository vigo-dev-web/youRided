import styles from './benefits.module.scss'
import { ShippingIcon, RecycleIcon, ShieldIcon, MoneyIcon, RidingIcon } from '../../../assets/icons'

const Benefits = () => {
	return (
		<div className={styles.section}>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.item}>
						<ShippingIcon size={25} className={styles.icon}/>
						<div className={styles.itemText}>
							<h5 className={styles.title}>Бесплатная доставка</h5>
							<p>от <span>5 000 р.</span></p>
						</div>
					</div>
					<div className={styles.item}>
						<RecycleIcon size={23} className={styles.icon}/>
						<div className={styles.itemText}>
							<h5 className={styles.title}>Возврат товара</h5>
							<p>в течении 14 дней</p>
						</div>
					</div>
					<div className={styles.item}>
						<ShieldIcon size={22} className={styles.icon}/>
						<div className={styles.itemText}>
							<h5 className={styles.title}>Гарантия на товар</h5>
							<p>6 месяцев</p>
						</div>
					</div>
					<div className={styles.item}>
						<RidingIcon size={27} className={styles.icon}/>
						<div className={styles.itemText}>
							<h5 className={styles.title}>Тест - драйв</h5>
							<p>перед покупкой</p>
						</div>
					</div>
					<div className={styles.item}>
						<MoneyIcon size={26} className={styles.icon}/>
						<div className={styles.itemText}>
							<h5 className={styles.title}>Удобная оплата</h5>
							<p>любой способ</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Benefits
