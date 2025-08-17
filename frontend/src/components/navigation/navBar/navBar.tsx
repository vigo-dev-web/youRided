import { FC } from 'react'
import styles from './navBar.module.scss'
import MenuItem from '@/components/menuItem/menuItem'
import { TNavItem } from '@/models/model'

interface INavBarProps {
	menu: TNavItem[]
}

const NavBar: FC<INavBarProps> = ({ menu }) => {
	return (
		<div className={styles.section}>
			<nav className={styles.container}>
				<ul className={styles.wrapper}>
					{menu.map((navItem) => (
						<MenuItem
							key={navItem.id}
							item={navItem}
						/>
					))}
				</ul>
			</nav>
		</div>
	)
}

export default NavBar
