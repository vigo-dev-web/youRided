import { FC, ReactEventHandler, useState } from 'react'
import Link from 'next/link'
import styles from './footerMenu.module.scss'
import { TContacts, TSubMenuItem } from '@/models/model'
import Messengers from '@/components/ui/messengers/messengers'
import Social from '@/components/ui/social/social'
import { PhoneIcon, LocationIcon } from '../../../assets/icons'
import SubscribeForm from '@/components/forms/subscribeForm/subscribeForm'

interface IFooterMenuProps {
	contacts: TContacts
	forSellers: TSubMenuItem[]
	shopCategory: TSubMenuItem[]
}

const FooterMenu: FC<IFooterMenuProps> = ({ contacts, forSellers, shopCategory }) => {
	return (
		<div className={styles.layout}>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.leftContainer}>
						<div>
							<h4 className={styles.title}>На связи 24/7</h4>
							<div className={styles.phoneContainer}>
								<PhoneIcon
									color={'#fed700'}
									size={32}
									className={styles.phoneIcon}
								/>{' '}
								<span>{contacts.phone.tel}</span>
							</div>
						</div>
						<div>
							<h4 className={styles.title}>Адрес</h4>
							<div className={styles.locationContainer}>
								<LocationIcon
									color={'#fed700'}
									size={40}
									className={styles.locationIcon}
								/>{' '}
								<span>{contacts.address}</span>
							</div>
						</div>
						<div>
							<h4 className={styles.contactsTitle}>Напиши нам</h4>
							<Messengers
								contacts={contacts}
								size={30}
							/>
						</div>
					</div>
					<div className={styles.centerContainer}>
						<SubscribeForm />
					</div>
					<div className={styles.rightContainer}>
						<div className={styles.menuContainer}>
							<div>
								<h4 className={styles.navTitle}>Каталог</h4>
								<ul className={styles.list}>
									{shopCategory.map((item) => (
										<li key={item.id}>
											<Link href={item.link}>{item.title}</Link>
										</li>
									))}
								</ul>
							</div>
							<div>
								<h4 className={styles.navTitle}>Покупателю</h4>
								<ul className={styles.list}>
									{forSellers.map((item) => (
										<li key={item.id}>
											<Link href={item.link}>{item.title}</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div>
							<h4 className={styles.contactsTitle}>Мы в социальных сетях</h4>
							<Social social={contacts.social} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default FooterMenu
