import { FC, ReactNode } from 'react'
import Link from 'next/link'
import styles from './mainButton.module.scss'

interface IMainButtonProps {
	children: ReactNode,
	link: string,
	isColorReverse: boolean

}

const MainButton: FC<IMainButtonProps> = ({ children, link, isColorReverse }: IMainButtonProps) => {
	return (
		<Link
			className={isColorReverse ? styles.buttonReverse : styles.button }
			href={link}
		>
			{children}
		</Link>
	)
}

export default MainButton
