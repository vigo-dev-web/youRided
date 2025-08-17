import { FC, useState } from 'react'
import Link from 'next/link'
import styles from './menuItem.module.scss'
import { TNavItem } from '@/models/model'
import { ArrowDownIcon, ArrowUpIcon } from "../../assets/icons";

interface IMenuItemProps {
	item: TNavItem
}

const MenuItem: FC<IMenuItemProps> = ({ item }) => {
	const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

	return (
		<li
			className={isOpenMenu && item.subMenu ? styles.wrapperOpen : styles.wrapper}
			onMouseEnter={(e) => {
				e.stopPropagation()
				setIsOpenMenu((prev) => !prev)
			}}
			onMouseLeave={(e) => {
				e.stopPropagation()
				setIsOpenMenu((prev) => !prev)
			}}
		>
			{item.subMenu ? (
				<>
					<Link href={item.link}>
						{item.title} {isOpenMenu ? <ArrowUpIcon className={styles.square} /> : <ArrowDownIcon />}
					</Link>
					<div className={isOpenMenu ? styles.submenuWrapperOpen : styles.submenuWrapper}>
						<ul>
							{item.shopLinks?.map((subLink) => (
								<li key={subLink.id} className={styles.submenuItem}>
									{' '}
									<Link
										href={subLink.link}
										className={styles.submenuLink}
									>
										{subLink.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</>
			) : (
				<Link href={item.link}>{item.title}</Link>
			)}
		</li>
	)
}

export default MenuItem
