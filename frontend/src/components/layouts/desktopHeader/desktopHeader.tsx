import { FC } from 'react'
import styles from './desktopHeader.module.scss'
import TopHeader from '@/components/topHeader/topHeader'
import SearchBar from '@/components/searchBar/searchBar'
import NavBar from '@/components/navigation/navBar/navBar'
import { TNavItem } from '@/models/model'

interface IHeaderProps {
	onOpen: () => void
	menu: TNavItem[]
}

const DesktopHeader: FC<IHeaderProps> = ({onOpen, menu}: IHeaderProps) => {
	return (
		<header className={styles.wrapper}>
			<TopHeader onOpen={onOpen} />
			<SearchBar />
			<NavBar menu={menu} />
		</header>
	)
}

export default DesktopHeader
