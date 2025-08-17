import { FC } from 'react'
import Link from 'next/link'
import styles from './userAgreement.module.scss'

const UserAgreement: FC = () => {
	return (
		<p className={styles.text}>
			Я согласен с{' '}
			<Link
				href={'/agreement'}
				className={styles.link}
			>
				пользовательским соглашением
			</Link>{' '}
			и с обработкой{' '}
			<Link
				href={'/personal-data'}
				className={styles.link}
			>
				персональных данных
			</Link>
		</p>
	)
}
export default UserAgreement
