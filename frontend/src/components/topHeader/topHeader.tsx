import { FC } from 'react'
import styles from './topHeader.module.scss'
import Link from 'next/link'
import { EnvelopeIcon, PhoneIcon, AccountIcon } from '../../assets/icons/index'

interface ITopHeaderProps {
	onOpen: () => void
}

const contacts = {
	phone: {
		type: '+79859998877',
		tel: '+7(985)999-88-77'
	},
	email: 'info@tebyavezet.ru',
	address: 'г.Москва, ул.Шумилова, д.6 стр.2'
}

const TopHeader: FC<ITopHeaderProps> = ({ onOpen }: ITopHeaderProps) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.body}>
					<div className={styles.contacts}>
						<div className={styles.contactsItem}>
							<PhoneIcon
								size={27}
								strokeWidth={15}
								color={'#fed700'}
								className={styles.phoneIcon}
							/>
							<span className={styles.note}>{contacts.phone.tel}</span>
						</div>
						<div className={styles.contactsItem}>
							<EnvelopeIcon
								size={27}
								color={'#fed700'}
							/>
							<Link href={`mailto:${contacts.email}`}>
								<span className={styles.note}>{contacts.email}</span>
							</Link>
						</div>
					</div>
					<div className={styles.accountItem}>
						<AccountIcon
							size={27}
							color={'#fed700'}
						/>
						<button
							className={styles.accountBtn}
							onClick={onOpen}
						>
							Войти
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TopHeader
