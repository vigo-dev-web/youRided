import { FC, useState } from 'react'
import Link from 'next/link'
import styles from './burgerNav.module.scss'
import { TNavItem } from '@/models/model'
import { CrossIcon, ArrowUpIcon, ArrowDownIcon, AccountIcon } from '../../../assets/icons'

interface IBurgerNav {
	openMenu: () => void
	onOpen: () => void
	menu: TNavItem[]
	openBurger: boolean
}

const BurgerNav: FC<IBurgerNav> = ({ openMenu, menu, onOpen, openBurger }: IBurgerNav) => {
	const [isSubmenuOpen, setIsSubmenuOpen] = useState<boolean>(false)
	const mainCategory = menu[0]
	const shopCategory = menu[1].shopLinks?.map((shopCategory) => shopCategory)
	const infoCategory = menu.filter((item) => !item.subMenu && item.link !== '/')
	const forSellers = menu[3]

	return (
		<div className={openBurger ? styles.openWrapper : styles.wrapper}>
			<div className={styles.icons}>
				<CrossIcon
					size={26}
					className={styles.closeBtn}
					onClick={openMenu}
				/>
				<AccountIcon
					size={38}
					onClick={onOpen}
				/>
			</div>
			<ul className={styles.body}>
				<li
					key={mainCategory.id}
					onClick={openMenu}
				>
					<Link href={mainCategory.link}>{mainCategory.title}</Link>
				</li>
				{shopCategory?.map((сategory) => (
					<li
						key={сategory.id}
						onClick={openMenu}
					>
						<Link href={сategory.link}>{сategory.title}</Link>
					</li>
				))}
				{infoCategory.map((category) => (
					<li
						key={category.id}
						onClick={openMenu}
					>
						<Link href={category.link}>{category.title}</Link>
					</li>
				))}
				<li
					key={forSellers.id}
					onClick={() => {
						setIsSubmenuOpen((prev) => !prev)
					}}
				>
					<span>{forSellers.title}</span> {isSubmenuOpen ? <ArrowUpIcon size={25} /> : <ArrowDownIcon size={25} />}
					{isSubmenuOpen && (
						<ul className={styles.subMenu}>
							{forSellers.shopLinks?.map((item) => (
								<li
									key={item.id}
									onClick={openMenu}
								>
									<Link href={item.link}>{item.title}</Link>
								</li>
							))}
						</ul>
					)}
				</li>
			</ul>
		</div>
	)
}

export default BurgerNav
