import { NextPage } from 'next'
import { useRouter } from 'next/router'
import MainLayout from '@/components/layouts/mainLayout/mainLayout'
import SectionLayout from '@/components/layouts/sectionLayout/sectionLayout'
import ItemFlexLayout from '@/components/layouts/itemFlexLayout/productsLayout'
import ProductCard from '@/components/productCard/productCard'
import ProductItem from '@/components/screens/productItem/productItem'
import BreadCrumbs from '@/components/breadCrumbs/breadCrumbs'
import { TProductEscooter } from '@/models/model'
import { ProductsContext } from '../_app'
import { useContext } from 'react'

// interface IProductPageProps {
// 	productItem: TProductEscooter
// }

const ProductPage: NextPage = () => {
	const { query } = useRouter()
	const id = query.id
	const products = useContext(ProductsContext)
	const currentProductItem = products?.find((productItem) => productItem.link === id)
	// console.log(currentProductItem);


	return (
		<MainLayout>
			<BreadCrumbs />
			<ProductItem productItem={currentProductItem} />
			<SectionLayout title={'Вместе с этим товаром покупают'}>
				<ItemFlexLayout>
					{/* <ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard /> */}
				</ItemFlexLayout>
			</SectionLayout>
		</MainLayout>
	)
}

export default ProductPage
