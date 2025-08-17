import { FC, useState, useContext } from 'react'
import styles from './mobileHeader.module.scss'
import CartLink from '@/components/cartLink/cartLink'
import Logo from '@/components/ui/logo/logo'
import BurgerNav from '@/components/navigation/burgerNav/burgerNav'
import PhoneLink from '@/components/ui/phoneLink/phoneLink'
import { SearchIcon, MenuIcon, PhoneIcon, CartIcon } from '../../../assets/icons/index'
import { TNavItem } from '@/models/model'
import { CartContext } from '../../../../pages/_app'

interface IMobileHeaderProps {
	onOpen: () => void
	menu: TNavItem[]
}

const MobileHeader: FC<IMobileHeaderProps> = ({ menu, onOpen }: IMobileHeaderProps) => {
	const [isOpenBurger, setIsOpenBurger] = useState<boolean>(false)
	const { cart } = useContext(CartContext)

	const handleOpenMenu = () => {
		setIsOpenBurger((prev) => !prev)
	}
	return (
		<>
			<header className={styles.wrapper}>
				<div className={styles.container}>
					<nav className={styles.nav}>
						<ul className={styles.leftNav}>
							<li
								className={styles.burgerBtn}
								onClick={handleOpenMenu}
							>
								{' '}
								<MenuIcon size={38} />
							</li>
							<li>
								<Logo size={85} />
							</li>
						</ul>
						<ul className={styles.rightNav}>
							<li className={styles.search}>
								<SearchIcon size={32} />
							</li>
							<li className={styles.cart}>
								<CartLink
									link='/cart'
									quantity={cart.length}
								>
									<CartIcon size={33} />
								</CartLink>
							</li>
							<li className={styles.phone}>
								<PhoneLink tel='+79859374708'>
									<PhoneIcon
										size={35}
										className={styles.phoneIcon}
									/>
								</PhoneLink>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			{isOpenBurger ? (
				<BurgerNav
					openBurger={isOpenBurger}
					openMenu={handleOpenMenu}
					menu={menu}
					onOpen={onOpen}
				/>
			) : null}
		</>
	)
}

export default MobileHeader
