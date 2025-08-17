import { FC, ReactNode } from 'react'
import styles from './productsLayout.module.scss'

interface ItemFlexLayoutProps {
	children: ReactNode
}
const ProductsLayout: FC<ItemFlexLayoutProps> = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>
}

export default ProductsLayout
