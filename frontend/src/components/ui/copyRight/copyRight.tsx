import { FC } from 'react'
import Link from 'next/link'
import styles from './copyRight.module.scss'
import Image from 'next/image'
import mirIcon from '@/../public/images/mir-logo-h14px.svg'
import sberIcon from '@/../public/images/s-footer.svg'
import yIcon from '@/../public/images/ypay.svg'
import visaIcon from '@/../public/images/Visa_Inc._logo.svg'
import masterIcon from '@/../public/images/Mastercard-logo.svg'

const CopyRight: FC = () => {
	return (
		<div>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<p>© 2022 – 2023 Компания ТебяВезет</p>
					<p>
						разработано{' '}
						<Link href='#' className={styles.developInfo}>web4you</Link>
					</p>
					<div className={styles.iconsWrapper}>
						<Image
							className={styles.icons}
							src={mirIcon}
							width={40}
							alt='Карта Мир'
						/>
						<Image
							className={styles.icons}
							src={visaIcon}
							width={40}
							alt='Виза'
						/>
						<Image
							className={styles.icons}
							src={masterIcon}
							width={25}
							alt='Мастер Кард'
						/>
						<Image
							className={styles.icons}
							src={sberIcon}
							width={18}
							alt='Сбер Пэй'
						/>
						<Image
							className={styles.icons}
							src={yIcon}
							width={47}
							alt='Яндекс Пэй'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CopyRight
