import { FC, useState } from 'react'
import styles from './ratingProduct.module.scss'
import { StarFillIcon, StarHalfIcon, StarIcon } from '../../../assets/icons'

interface IRatingProductProps {
	rating: number
}

const RatingProduct: FC<IRatingProductProps> = ({ rating }) => {

	const pointRating = 5

	const cauntStars = (numOfStars: number): number[] => {
		let numArray = []
		for (let index = 1; index < numOfStars + 1; index++) {
			numArray.push(index)
		}
		return numArray
	}

	const starsQuantity = cauntStars(pointRating)

	return (
		<ul className={styles.starsContainer}>
			{starsQuantity.map((star) => {
				if (star <= rating ) {
					return (
						<li key={star}>
							<StarFillIcon size={22}/>
						</li>
					)
            }
            else if (star === Math.ceil(rating)) {
					return (
						<li key={star}>
							<StarHalfIcon size={22}/>
						</li>
					)
				}
				return (
					<li key={star}>
						<StarIcon size={22}/>
					</li>
				)
			})}
		</ul>
	)
}
export default RatingProduct

// если рэйтинг дробь / не дробь

// есди рейтинг больше / меньше / равно


// если дробь = проверяем равно / больше по умолчанию меньше
// если не дробь = проверяем равно / больше по умолчанию меньше

//    (если рейтинг > айтема и дробь) {
//       выводим полный
// }
//   (если рейтинг = айтем и дробь) {
//       выводим с половинкой
// }

// пустой всегда