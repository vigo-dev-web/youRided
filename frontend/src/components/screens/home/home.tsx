import { FC, useContext } from 'react'
import Slider from '@/components/ui/slider/slider'
import ItemSlider from '@/components/ui/itemSlider/itemSlider'
import SectionLayout from '@/components/layouts/sectionLayout/sectionLayout'
import ProductsLayout from '@/components/layouts/itemFlexLayout/productsLayout'
import Benefits from '@/components/ui/benefits/benefits'
import ProductCard from '@/components/productCard/productCard'
import { CartContext, WishListContext, ProductsContext } from '../../../../pages/_app'
import { TProductEscooter } from '@/models/model'

const Home: FC = () => {
	const products = useContext(ProductsContext)
	const { cart, setCart } = useContext(CartContext)
	const { wishList, setWishList } = useContext(WishListContext)

	const handleAddToCart = (product: TProductEscooter) => {
		if (cart.includes(product)) return
		setCart((prev) => [...prev, product])
	}

	const handleToggleWishList = (product: TProductEscooter) => {
		if (wishList.includes(product)) {
			setWishList((prev) => prev.filter((productItem) => productItem !== product))
		} else {
			setWishList((prev) => [...prev, product])
		}
	}

	return (
		<>
			<Slider />
			<SectionLayout title={'Хиты продаж'}>
				<ProductsLayout>
					{products?.map((productItem, index) => {
						if (index < 4) {
							return (
								<ProductCard
									productItem={productItem}
									addToCart={() => handleAddToCart(productItem)}
									toggleWishList={() => handleToggleWishList(productItem)}
									key={productItem.id}
								></ProductCard>
							)
						} else return null
					})}
				</ProductsLayout>
			</SectionLayout>
			<SectionLayout title='Почему покупают у нас'>
				<Benefits />
			</SectionLayout>
			<SectionLayout title={'Электросамокаты'}>
				<ProductsLayout>
					{products?.map((productItem) => {
						return (
							<ProductCard
								productItem={productItem}
								addToCart={() => handleAddToCart(productItem)}
								toggleWishList={() => handleToggleWishList(productItem)}
								key={productItem.id}
							></ProductCard>
						)
					})}
				</ProductsLayout>
			</SectionLayout>
			<SectionLayout title={'Самокаты'}>
				<ProductsLayout>
					{products?.map((productItem, index) => {
						if (index < 4) {
							return (
								<ProductCard
									addToCart={() => handleAddToCart(productItem)}
									toggleWishList={() => handleToggleWishList(productItem)}
									productItem={productItem}
									key={productItem.id}
								></ProductCard>
							)
						} else return null
					})}
				</ProductsLayout>
			</SectionLayout>
			<SectionLayout title={'Полезные статьи'}>
				<ItemSlider />
			</SectionLayout>
			<SectionLayout title={'Экипировка'}>
				<ProductsLayout>
					{products?.map((productItem, index) => {
						if (index < 4) {
							return (
								<ProductCard
									addToCart={() => handleAddToCart(productItem)}
									toggleWishList={() => handleToggleWishList(productItem)}
									productItem={productItem}
									key={productItem.id}
								></ProductCard>
							)
						} else return null
					})}
				</ProductsLayout>
			</SectionLayout>
		</>
	)
}

export default Home
