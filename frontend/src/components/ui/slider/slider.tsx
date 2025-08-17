import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper'
import { useMediaQuery } from 'react-responsive'
import styles from './slider.module.scss'
import Image from 'next/image'
import MainButton from '../buttons/mainButton/mainButton'
import Slide1 from '@/../public/images/scooter-slide1.jpg'
import Slide2 from '@/../public/images/scooter-slide2.jpg'
import Slide3 from '@/../public/images/scooter-slide3.jpg'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

const Slider: FC = () => {
	const isTabletOrMobile = useMediaQuery({
		maxWidth: 767
	})

	return (
		<section className={styles.sliderWrapper}>
			<Swiper
				modules={[Navigation, Pagination, A11y]}
				loop={true}
				spaceBetween={30}
				slidesPerView={1}
				navigation
				pagination={isTabletOrMobile ? false : { clickable: true, dynamicBullets: true }}
			>
				<SwiperSlide className={styles.slideBody}>
					<Image
						src={Slide1}
						alt='Электросамокаты'
						className={styles.slideImg_1}
					/>
					<div className={styles.content}>
						<h1 className={styles.title}>
							Электросамокаты
							<p> - новый стандарт</p>
						</h1>
						<p className={styles.subTitle}>лучший друг в твоем городе</p>
						<p className={styles.note}>
							Скидки до <span>50%</span>
						</p>
						<MainButton
							link={'/escooter'}
							isColorReverse={false}
						>
							Начни покупки
						</MainButton>
					</div>
				</SwiperSlide>
				<SwiperSlide className={styles.slideBody}>
					<Image
						src={Slide2}
						alt='Самокаты для детей'
						className={styles.slideImg_2}
					/>
					<div className={styles.content}>
						<h1 className={styles.title}>
							Самокаты
							<p> - для детей</p>
						</h1>
						<p className={styles.subTitle}>лучший подарок ребенку</p>
						<p className={styles.note}>
							Скидки <span>на день рождения !</span>
						</p>
						<MainButton
							link={'/scooter'}
							isColorReverse={false}
						>
							Начни покупки
						</MainButton>
					</div>
				</SwiperSlide>
				<SwiperSlide className={styles.lastSlideBody}>
					<Image
						src={Slide3}
						alt='Экипировка'
						className={styles.slideImg_3}
					/>
					<div className={styles.lastContent}>
						<h1 className={styles.lastTitleSlide}>
							Экипировка
							<p> - для безопасной езды</p>
						</h1>
						<p className={styles.subTitle}>при покупке 2-х комплектов</p>
						<p className={styles.lastNoteSlide}>
							Скидки <span>для всей семьи</span>
						</p>
						<MainButton
							link={'/equipment'}
							isColorReverse={true}
						>
							Начни покупки
						</MainButton>
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	)
}

export default Slider
