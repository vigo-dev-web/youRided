import { NextPage } from 'next'
import { useContext } from 'react'
import MainLayout from '@/components/layouts/mainLayout/mainLayout'
import { CartContext } from '../_app'
import Basket from '@/components/screens/basket/basket'

const CartPage: NextPage = () => {

	const {cart} = useContext(CartContext)

	return (
		<MainLayout>
			<Basket/>
			{/* {cart.length === 0 ? ("В корзине ничего нет") : (cart.map(cartItem => (
				<li key={cartItem.id}>{cartItem.model}</li>)
			))} */}
		</MainLayout>
	)
}

export default CartPage
