import { FC } from 'react'
import styles from './chars.module.scss'
import { TSpecEscooter } from '@/models/model'

interface ICharProps {
	spec: TSpecEscooter | undefined
}

const Chars: FC<ICharProps> = ({ spec }) => {
	return (
		<div className={styles.chars}>
			<h6 className={styles.charsTitle}>Характеристики</h6>
			<div className={styles.charWrapper}>
				<div className={styles.charItem1}>
					<span>Скорость до, км/ч</span>
					{spec?.speed}
				</div>
				<div className={styles.charItem2}>
					<span>Дальность хода, км</span>
					{spec?.distance}
				</div>
				<div className={styles.charItem3}>
					<span>Мощность двигателя, Вт</span>
					{spec?.power}
				</div>
				<div className={styles.charItem4}>
					<span>Диаметр колес, дюйм</span>
					{spec?.dWheel}
				</div>
				<div className={styles.charItem5}>
					<span>Вес, кг</span>
					{spec?.weight}
				</div>
				<div className={styles.charItem6}>
					<span>Время зарядки, ч</span>
					{spec?.tRecharge}
				</div>
			</div>
		</div>
	)
}
export default Chars
