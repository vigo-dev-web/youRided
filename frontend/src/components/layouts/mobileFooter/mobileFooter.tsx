import { FC, useState, ChangeEvent } from 'react'
import { TContacts } from '@/models/model'
import styles from './mobileFooter.module.scss'
import Social from '@/components/ui/social/social'
import Messengers from '@/components/ui/messengers/messengers'
import { LocationIcon, BellIcon } from '../../../assets/icons'
import Link from 'next/link'
import TextField from '@/components/forms/textField/textField'
import UserAgreement from '@/components/ui/userAgreement/userAgreement'

interface IFooterProps {
	contacts: TContacts
}

const MobileFooter: FC<IFooterProps> = ({ contacts }) => {
	const [emailSubscribe, setEmailSubscribe] = useState('')

	const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		console.log(target.value)

		setEmailSubscribe(target.value)
	}

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<h4 className={styles.locationTitle}>Адрес</h4>
					<div className={styles.locationContainer}>
						<LocationIcon
							color={'#fed700'}
							size={32}
							className={styles.locationIcon}
						/>{' '}
						<span>{contacts.address}</span>
					</div>
					<h4 className={styles.messengersTitle}>Будем на связи</h4>
					<div className={styles.messengersContainer}>
						<Messengers
							contacts={contacts}
							size={28}
						/>
						<Social social={contacts.social} />
					</div>
					<div className={styles.formContainer}>
						<form
							onSubmit={(e) => {
								e.preventDefault()
								console.log('Вы подписаны')
							}}
							className={styles.formContainer}
						>
							<TextField
								label='E-mail'
								type='email'
								name='email'
								placeholder='E-mail'
								value={emailSubscribe}
								warning={''}
								onChange={handleChange}
							/>
							<button className={styles.subscribeButton}>
								<BellIcon
									size={20}
									strokeWidth={25}
								/>
							</button>
						</form>
						<UserAgreement />
					</div>
				</div>
				<div className={styles.developInfo}>
					<p>© 2022 – 2023 Компания ТебяВезет</p>
					<p>
						разработано{' '}
						<Link
							href='#'
							className={styles.developLink}
						>
							web4you
						</Link>
					</p>
				</div>
			</div>
		</footer>
	)
}
export default MobileFooter
