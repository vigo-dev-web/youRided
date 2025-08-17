import { FC } from 'react'
import Image from 'next/image'
import blogPic from '../../../../public/images/scooter-slide2.jpg'
import Link from 'next/link'
import styles from './blogItem.module.scss'

const BlogItem: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Link
				className={styles.link}
				href={'#'}
			>
				<Image
					src={blogPic}
					alt='Как выбрать самокат'
					className={styles.img}
				></Image>
				<div className={styles.content}>
					<h4>Как выбрать самокат:</h4>
					<p>5 важных советов</p>
				</div>
			</Link>
		</div>
	)
}

export default BlogItem
