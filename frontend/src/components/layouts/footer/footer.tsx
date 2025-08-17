import { FC } from 'react'
import CopyRight from '@/components/ui/copyRight/copyRight'
import styles from './footer.module.scss'
import FooterMenu from '@/components/navigation/footerMenu/footerMenu'
import { TContacts, TSubMenuItem } from '@/models/model'

interface IFooterProps {
	contacts: TContacts,
	forSellers: TSubMenuItem[],
	shopCategory: TSubMenuItem[]
}

const Footer: FC<IFooterProps> = ({ contacts, forSellers, shopCategory }) => {
	return (
		<footer className={styles.footer}>
			<FooterMenu
				contacts={contacts}
				forSellers={forSellers}
				shopCategory={shopCategory}
			/>
			<CopyRight />
		</footer>
	)
}

export default Footer
