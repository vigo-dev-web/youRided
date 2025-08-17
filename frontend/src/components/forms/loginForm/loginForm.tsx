import { ChangeEvent, FC, FormEvent, useState } from 'react'
import TextField from '../textField/textField'
import Checkbox from '../checkbox/checkbox'
import styles from './loginForm.module.scss'
import ToggleButton from '@/components/ui/buttons/toggleButton/toggleButton'
import SubmitButton from '@/components/ui/buttons/submitButton/submitButton'

interface ILoginFormProps {
	title: string
	toggleForgotPassword: () => void
	toggleFormType: () => void
}

type userData = {
	email: string | undefined
	password: string | undefined
	rememberUser: boolean
}

const LoginForm: FC<ILoginFormProps> = ({ title, toggleFormType, toggleForgotPassword }: ILoginFormProps) => {
	const [userData, setUserData] = useState<userData>({ email: '', password: '', rememberUser: true })

	const warningDesc = {
		email: 'Пользователь не найден',
		password: 'Не верный пароль'
	}

	const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		if (target.name === 'rememberUser') {
			setUserData((prev) => ({ ...prev, [target.name]: target.checked }))
		} else {
			setUserData((prev) => ({
				...prev,
				[target.name]: target.value
			}))
		}
	}
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		console.log('Вы успешно вошли в аккаунт')
	}

	return (
		<div className={styles.container}>
			<h4 className={styles.title}>{title}</h4>
			<form onSubmit={handleSubmit}>
				<TextField
					label='E-mail'
					type='email'
					name='email'
					placeholder='E-mail'
					value={userData.email}
					warning={warningDesc.email}
					onChange={handleChange}
				/>
				<TextField
					label='Пароль'
					type='password'
					name='password'
					placeholder='Пароль'
					value={userData.password}
					warning={warningDesc.password}
					onChange={handleChange}
				/>
				<div className={styles.wrapper}>
					<div>
						<Checkbox
							name='rememberUser'
							onChange={handleChange}
							hasChecked={userData.rememberUser}
						/>
						<span className={styles.text}>Запомнить меня</span>
					</div>
					<p
						className={styles.forgetPassword}
						onClick={toggleForgotPassword}
					>
						Забыли пароль ?
					</p>
				</div>
				<div className={styles.btnContainer}>
					<ToggleButton toggleFormType={toggleFormType}>зарегистрироваться</ToggleButton>
					<SubmitButton color='reverse'>войти</SubmitButton>
				</div>
			</form>
		</div>
	)
}

export default LoginForm
