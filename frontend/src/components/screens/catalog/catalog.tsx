'use client'
import { FC, useEffect, useState } from 'react'
import FilterProduct from '@/components/filterProduct/filterProduct'
import ItemFlexLayout from '@/components/layouts/itemFlexLayout/productsLayout'
import SectionLayout from '@/components/layouts/sectionLayout/sectionLayout'
import ProductCard from '@/components/productCard/productCard'
import Pagination from '../../pagination/pagination'
import styles from './catalog.module.scss'
import { getElectroscooters } from '@/api/getData'

const Catalog = () => {
	const [products, setProducts] = useState([])
	
    useEffect(() => {
        getElectroscooters().then(res => {
			console.log(res);
			
            if (res.data) {
                setProducts(res.data) // Устанавливаем весь массив сразу
            }
        })
    }, [])
	return (
		<div className={styles.layout}>
			<SectionLayout title={'Электросамокаты'}>
				<div className={styles.wrapper}>
					<FilterProduct />
					<ItemFlexLayout>
						{products.map((productItem: any) => (
							<ProductCard productItem={productItem} key={productItem.id} />
						))}
					</ItemFlexLayout>
				</div>
			</SectionLayout>
			<Pagination />
		</div>
	)
}

export default Catalog
