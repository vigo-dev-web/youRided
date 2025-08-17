import { NextPage } from 'next'
import { useContext } from 'react'
import MainLayout from '@/components/layouts/mainLayout/mainLayout'
import { WishListContext } from '../_app'

const WishListPage: NextPage = () => {
	const { wishList } = useContext(WishListContext)
	return (
		<MainLayout>
			{wishList.length === 0
				? 'В избранном пока ничего нет'
				: wishList.map((wishListItem) => <li key={wishListItem.id}>{wishListItem.model}</li>)}
		</MainLayout>
	)
}

export default WishListPage
