import { FC, ReactNode } from 'react'
import styles from './modal.module.scss'

interface IModalProps {
	onClose: () => void
	open: boolean
	children: ReactNode
}
const Modal: FC<IModalProps> = ({ onClose, open, children }: IModalProps) => {
	if (!open) return null
	return (
		<div
			onClick={onClose}
			className={styles.overlay}
		>
			<div onClick={(e) => e.stopPropagation()} className={styles.body}>
				<p
					onClick={onClose}
					className={styles.closeBtn}
				>
					X
				</p>
				{children}
			</div>
		</div>
	)
}

export default Modal
