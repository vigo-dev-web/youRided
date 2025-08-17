import { FC, ReactNode, useState } from 'react'
import styles from './submitButton.module.scss'

interface ISubmitButton {
	children: ReactNode
	color?: 'main' | 'reverse' | 'reverseHover'
}

const SubmitButton: FC<ISubmitButton> = ({ children, color = 'main' }: ISubmitButton) => {
	const [isDisabled, setIsDisabled] = useState<boolean>(false)

	const countStyleBtn = (reverseColor: string) => {
		if (reverseColor === 'main') {
			return styles.layout
		} else if (reverseColor === 'reverse') {
			return styles.reverseLayout
		} else {
			return styles.reverseHoverLayout
		}
	}
	return (
		<button
			type='submit'
			disabled={isDisabled}
			className={countStyleBtn(color)}
		>
			{children}
		</button>
	)
}

export default SubmitButton
