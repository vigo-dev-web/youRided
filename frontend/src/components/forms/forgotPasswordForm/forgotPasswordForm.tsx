import { ChangeEvent, FC, FormEvent, useState } from 'react'
import TextField from '../textField/textField'
import styles from './forgotPasswordForm.module.scss'
import ToggleButton from '@/components/ui/buttons/toggleButton/toggleButton'
import SubmitButton from '@/components/ui/buttons/submitButton/submitButton'

interface IForgotPasswordFormProps {
	title: string
	toggleFormType: () => void
}

type userData = {
	email: string
}

const ForgotPasswordForm: FC<IForgotPasswordFormProps> = ({ title, toggleFormType }: IForgotPasswordFormProps) => {
	const [userEmail, setUserEmail] = useState<userData>({ email: '' })

	const warningDesc = {
		email: 'Пользователь не найден'
	}

	const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setUserEmail((prev) => ({
			...prev,
			[target.name]: target.value
		}))
	}
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		console.log('Cсылка с восстановлением пароля отправлена на почту');
	}

	return (
		<div className={styles.container}>
			<h4 className={styles.title}>{title}</h4>
			<form
				onSubmit={handleSubmit}
			>
				<TextField
					label='E-mail'
					type='email'
					name='email'
					placeholder='E-mail'
					value={userEmail.email}
					warning={warningDesc.email}
					onChange={handleChange}
				/>
				<div className={styles.btnContainer}>
					<ToggleButton toggleFormType={toggleFormType}>войти в аккаунт</ToggleButton>
					<SubmitButton>отправить</SubmitButton>
				</div>
			</form>
		</div>
	)
}

export default ForgotPasswordForm
