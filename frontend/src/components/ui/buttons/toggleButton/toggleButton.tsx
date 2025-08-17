import { FC, ReactNode, useState } from 'react'
import styles from './toggleButton.module.scss'

interface IToggleButton {
	children: ReactNode,
   toggleFormType?: () => void,
   color?: 'main' | 'reverse' | 'reverseHover'
}

const ToggleButton: FC<IToggleButton> = ({ children, toggleFormType, color = 'main' }: IToggleButton) => {
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
         onClick={toggleFormType}
         disabled={isDisabled}
			className={countStyleBtn(color)}
		>
			{children}
		</button>
	)
}

export default ToggleButton
