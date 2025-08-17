import { FC, useState, ChangeEvent, FormEvent } from 'react'
import styles from './subscribeForm.module.scss'
import SubmitButton from '@/components/ui/buttons/submitButton/submitButton'
import TextField from '../textField/textField'
import UserAgreement from '@/components/ui/userAgreement/userAgreement'

const SubscribeForm: FC = () => {
	const [emailSubscribe, setEmailSubscribe] = useState<string>('')

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		console.log('Вы подписаны')
	}

	const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setEmailSubscribe(target.value)
	}

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className={styles.formContainer}
			>
				<label
					htmlFor='email'
					className={styles.label}
				>
					Новости и акции только для своих :
				</label>
				<TextField
					label='E-mail'
					type='email'
					name='email'
					placeholder='E-mail'
					value={emailSubscribe}
					warning={''}
					onChange={handleChange}
				/>
				<UserAgreement />
				<div className={styles.inputWrapper}>
					<SubmitButton color='reverseHover'>Подписаться</SubmitButton>
				</div>
			</form>
		</>
	)
}
export default SubscribeForm
