import { FC, ReactNode } from 'react'
import styles from './buyButton.module.scss'

interface IBuyButtonProps {
	isColorReverse: boolean
	fontSize: string
	children: ReactNode
}

const BuyButton: FC<IBuyButtonProps> = ({ children, isColorReverse, fontSize }: IBuyButtonProps) => {
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
		>
			{children}
		</button>
	)
}

export default BuyButton
