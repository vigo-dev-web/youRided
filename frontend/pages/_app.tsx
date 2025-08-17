import type { AppProps } from 'next/app'
import { createContext, useState, Dispatch, SetStateAction } from 'react'
import eScooters from '@/api/eScooters/escooters'
import '@/assets/styles/globals.scss'
import { TProductEscooter } from '@/models/model'

type TCartContext = {
	cart: TProductEscooter[]
	setCart: Dispatch<SetStateAction<TProductEscooter[]>>
}

type TWishListContext = {
	wishList: TProductEscooter[]
	setWishList: Dispatch<SetStateAction<TProductEscooter[]>>
}

type TModalContext = {
	isOpenModal: boolean
	setIsOpenModal: Dispatch<SetStateAction<boolean>>
}

const CartContextState = {
	cart: [],
	setCart: () => {}
}
const WishListContextState = {
	wishList: [],
	setWishList: () => {}
}
const ModalContextState = {
	isOpenModal: false,
	setIsOpenModal: () => {}
}

export const ProductsContext = createContext<TProductEscooter[] | null>(null)

export const CartContext = createContext<TCartContext>(CartContextState)

export const WishListContext = createContext<TWishListContext>(WishListContextState)

export const ModalContext = createContext<TModalContext>(ModalContextState)

const App = ({ Component, pageProps }: AppProps) => {
	const [cart, setCart] = useState<TProductEscooter[]>([])
	const [wishList, setWishList] = useState<TProductEscooter[]>([])
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

	return (
		<ProductsContext.Provider value={eScooters}>
			<ModalContext.Provider value={{ isOpenModal, setIsOpenModal }}>
				<CartContext.Provider value={{ cart, setCart }}>
					<WishListContext.Provider value={{ wishList, setWishList }}>
						<Component {...pageProps} />
					</WishListContext.Provider>
				</CartContext.Provider>
			</ModalContext.Provider>
		</ProductsContext.Provider>
	)
}

export default App
