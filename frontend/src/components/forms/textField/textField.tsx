import { ChangeEvent, FC, useState } from 'react'
import styles from './textField.module.scss'
import { text } from 'stream/consumers'

interface ITextFieldProps {
	label: string
	type?: string
	name: string
	value: string
	warning: string
	placeholder: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const TextField: FC<ITextFieldProps> = ({ type, name, value, warning, placeholder, onChange }: ITextFieldProps) => {
	const [isWarning, setIsWarning] = useState<boolean>(false)

	return (
		<div className={styles.container}>
			{type === 'tel' ? <span className={styles.phonePrefix}>+7</span> : null}
			<input
				className={isWarning ? styles.fieldError : styles.field}
				name={name}
				id={name}
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
			<p className={isWarning ? styles.warning : styles.hidden}>{warning}</p>
		</div>
	)
}

export default TextField
