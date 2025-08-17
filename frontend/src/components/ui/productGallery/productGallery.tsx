import { FC, useState } from 'react'
import styles from './productGallery.module.scss'
import Image from 'next/image'

interface IProductGalleryProps {
	images: string | undefined
	labels: string[] | undefined
}

const ProductGallery: FC<IProductGalleryProps> = ({ images, labels }) => {
	const [image, setImage] = useState(images![0])

	const getProductNote = (labels: string[]) => {
		if (labels.length > 0) {
			return labels[0]
		} else if (labels.length > 1) {
			return labels[1]
		}
	}

	const changeImage = (index: number) => {
		setImage(images![index])
	}

	return (
		<>
			<div className={styles.mainImage}>
				<Image
					src={image!}
					fill={true}
					alt='Изображение товара'
				/>
				{labels?.length ? <span className={styles.productNote}>{getProductNote(labels)}</span> : null}
			</div>
			<div className={styles.imagesContainer}>
				{Array.isArray(images)
					? images.map((imageItem, currentIndex) => {
							if (currentIndex !== images?.indexOf(image)) {
								return (
									<div
										key={currentIndex}
										className={styles.imageWrapper}
										role='button'
										onClick={() => changeImage(currentIndex)}
									>
										<Image
											src={imageItem}
											fill={true}
											alt='Изображение товара'
										></Image>
									</div>
								)
							} else return null
					  })
					: null}
			</div>
		</>
	)
}
export default ProductGallery
