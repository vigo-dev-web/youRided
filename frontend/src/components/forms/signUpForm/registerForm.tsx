import { ChangeEvent, FC, FormEvent, useState } from 'react'
import TextField from '../textField/textField'
import styles from './registerForm.module.scss'
import SubmitButton from '@/components/ui/buttons/submitButton/submitButton'
import ToggleButton from '@/components/ui/buttons/toggleButton/toggleButton'
import Checkbox from '../checkbox/checkbox'
import UserAgreement from '@/components/ui/userAgreement/userAgreement'

interface ISignUpFormProps {
	title: string
	toggleFormType: () => void
}

type dataForm = {
	phone: string | undefined
	email: string | undefined
	password: string | undefined
	hasAgreement: boolean
}

const RegisterForm: FC<ISignUpFormProps> = ({ title, toggleFormType }: ISignUpFormProps) => {
	const [dataForm, setDataForm] = useState<dataForm>({ phone: '', email: '', password: '', hasAgreement: true })

	const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		if (target.name === 'hasAgreement') {
			setDataForm((prev: dataForm): dataForm => ({ ...prev, [target.name]: target.checked }))
		} else {
			setDataForm(
				(prev: dataForm): dataForm => ({
					...prev,
					[target.name]: target.value
				})
			)
		}
	}

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		console.log('Подтвердите регистрационные данные на почте')
	}

	const warningDesc = {
		phone: 'Введите телефон корректно',
		email: 'Введите e-mail корректно',
		password: 'Пароль должен быть не менее 8 символов, содержать латинские буквы и цифры'
	}

	return (
		<div className={styles.container}>
			<h4 className={styles.title}>{title}</h4>
			<form onSubmit={handleSubmit}>
				<TextField
					label='Телефон'
					type='tel'
					name='phone'
					placeholder='Номер телефона'
					value={dataForm.phone}
					warning={warningDesc.phone}
					onChange={handleChange}
				/>
				<TextField
					label='E-mail'
					type='email'
					name='email'
					placeholder='E-mail'
					value={dataForm.email}
					warning={warningDesc.email}
					onChange={handleChange}
				/>
				<TextField
					label='Пароль'
					type='password'
					name='password'
					placeholder='Пароль'
					value={dataForm.password}
					warning={warningDesc.password}
					onChange={handleChange}
				/>
				<div className={styles.checkboxContainer}>
					<Checkbox
						name='hasAgreement'
						onChange={handleChange}
						hasChecked={dataForm.hasAgreement}
					/>
					<UserAgreement />
				</div>
				<div className={styles.btnContainer}>
					<ToggleButton toggleFormType={toggleFormType}>У меня есть аккаунт</ToggleButton>
					<SubmitButton color='reverse'>Продолжить</SubmitButton>
				</div>
			</form>
		</div>
	)
}

export default RegisterForm
