import { FC } from 'react'
import styles from './searchBar.module.scss'
import Logo from '../ui/logo/logo'
import SearchForm from '../forms/searchForms/searchForm'
import ShopIcons from '../ui/shopIcons/shopIcons'

const SearchBar: FC = () => {
	return (
		<div className={styles.section}>
			<Logo size={120} />
			<SearchForm />
			<ShopIcons />
		</div>
	)
}

export default SearchBar
