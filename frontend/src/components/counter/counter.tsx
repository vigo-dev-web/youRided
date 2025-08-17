import { FC } from 'react'
import styles from './counter.module.scss'

interface ICounterProps {
	handleIncriment: () => void
	handleDecriment: () => void
	count: number
}

const Counter: FC<ICounterProps> = ({ count, handleIncriment, handleDecriment }) => {
	const getDecrimentStyle = () => {
		if (count <= 1) {
			return styles.btnDisabled
		}
		return styles.btn
	}
	const getIncrimentStyle = () => {
		if (count >= 5) {
			return styles.btnDisabled
		}
		return styles.btn
	}

	return (
		<div className={styles.wrapper}>
			<button
				className={getDecrimentStyle()}
				onClick={handleDecriment}
			>
				-
			</button>
			<p className={styles.count}>{count}</p>
			<button
				className={getIncrimentStyle()}
				onClick={handleIncriment}
			>
				+
			</button>
		</div>
	)
}

export default Counter
