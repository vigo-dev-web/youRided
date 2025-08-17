import { FC, ReactNode } from 'react'
import styles from './cartButton.module.scss'

interface ICartButtonProps {
	isColorReverse: boolean
	fontSize: string
	addToCart?: () => void
	children: ReactNode
}

const CartButton: FC<ICartButtonProps> = ({ children, isColorReverse, addToCart, fontSize }) => {

	const getButtonStyle = (colorReverse: boolean, fontSize: string) => {
		if (colorReverse && fontSize === 'small') {
			return styles.buttonReverse
		} else if (colorReverse && fontSize === 'big') {
			return styles.bigButtonReverse
		} else if (!colorReverse && fontSize === 'small') {
			return styles.button
		} else if (!colorReverse && fontSize === 'big') {
			return styles.bigButton
		}
	}

	return (
		<button
			className={getButtonStyle(isColorReverse, fontSize)}
			type='button'
			onClick={addToCart}
		>
			{children}
		</button>
	)
}

export default CartButton
