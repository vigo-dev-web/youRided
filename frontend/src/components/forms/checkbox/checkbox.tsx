import { FC, ChangeEvent } from 'react'
import styles from './checkbox.module.scss'

interface ICheckboxProps {
	name: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	hasChecked: boolean
	text?: string
}

const Checkbox: FC<ICheckboxProps> = ({ name, onChange, hasChecked }: ICheckboxProps) => {
	return (
		<>
			<label
				htmlFor={name}
				className={hasChecked ? styles.labelChecked : styles.labelEmpty}
			></label>
			<input
				type='checkbox'
				name={name}
				id={name}
				checked={hasChecked}
				onChange={onChange}
				className={styles.checkbox}
			/>
		</>
	)
}

export default Checkbox
