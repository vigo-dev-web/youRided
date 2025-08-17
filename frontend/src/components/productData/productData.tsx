import { FC, ReactNode, ReactElement, useState } from 'react'
import styles from './productData.module.scss'
import Link from 'next/link'
import { TDescriptionEscooter, TSpecEscooter } from '@/models/model'

interface IProductDataProps {
	spec: TSpecEscooter | undefined
	desc: ReactNode
	// reviews:
}

const ProductData: FC<IProductDataProps> = ({ spec, desc }) => {
	const [dataContent, setDataContent] = useState(desc)
   console.log(spec);

	const dataTitles = [
		{ id: '001', title: 'desc', name: 'Описание' },
		{ id: '002', title: 'spec', name: 'Все характеристики' },
		{ id: '003', title: 'reviews', name: 'Отзывы' }
	]

	const handleChangeDataContent = (title: string) => {
		switch (title) {
			case 'desc':
				setDataContent(desc)
				break
			case 'spec':
				setDataContent(JSON.stringify(spec))
				break
            case 'reviews':
               setDataContent('Отзывы')
				break
		}
	}

	return (
		<div className={styles.productData}>
			<div className={styles.dataTitles}>
				<ul className={styles.titlesList}>
					{dataTitles.map((titleItem) => (
						<li
							key={titleItem.id}
							className={styles.dataLink}
							onClick={() => handleChangeDataContent(titleItem.title)}
						>
							{titleItem.name}
						</li>
					))}
				</ul>
			</div>
         <div className={styles.dataContent}>
            <div className={styles.wrapper}>
               <div>
                  <span>Мин. возраст, лет:</span>
                  <span>8</span>
               </div>
               <div>
                  <span>Вес, кг:</span>
                  <span>15</span>
               </div>
               <div>
                  <span>Макс. нагрузка, кг:</span>
                  <span>120</span>
               </div>
               <div>
                  <span>Дальность хода, км:</span>
                  <span>34</span>
               </div>
               <div>
                  <span>Макс. скорость, км/ч:</span>
                  <span>29</span>
               </div>
               <div>
                  <span>Время зарядки, ч:</span>
                  <span>2.5</span>
               </div>
               <div>
                  <span>Мощнность двигателя, Вт:</span>
                  <span>250</span>
               </div>
               <div>
                  <span>Аккумулятор V:</span>
                  <span>12</span>
               </div>
               <div>
                  <span>Материал рамы:</span>
                  <span>сталь</span>
               </div>
               <div>
                  <span>Складной механизм:</span>
                  <span>нет</span>
               </div>
               <div>
                  <span>Общая длина, см:</span>
                  <span>123</span>
               </div>
               <div>
                  <span>Длина деки, см:</span>
                  <span>98</span>
               </div>
               <div>
                  <span>Высота руля от земли, см:</span>
                  <span>93</span>
               </div>
               <div>
                  <span>Высота руля от деки, см:</span>
                  <span>78</span>
               </div>
               <div>
                  <span>Ширина руля, см:</span>
                  <span>45</span>
               </div>
            </div>
				{/* <p>{dataContent}</p> */}
			</div>
		</div>
	)
}
export default ProductData
