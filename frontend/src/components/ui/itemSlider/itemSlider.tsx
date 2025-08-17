import { FC } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper'
import BlogItem from '../blogItem/blogItem'
import styles from './itemSlider.module.scss'
// import { register } from "swiper/element/bundle";
// register()

const ItemSlider: FC = () => {
	const isTabletOrMobile = useMediaQuery({
		maxWidth: 767
	})
	return (
		<div className={styles.sliderWrapper}>
			<Swiper
				modules={[Navigation, Pagination, A11y]}
				spaceBetween={30}
				slidesPerView={isTabletOrMobile ? 1 : 2}
				navigation
			>
				<SwiperSlide>
					<BlogItem />
				</SwiperSlide>
				<SwiperSlide>
					<BlogItem />
				</SwiperSlide>
				<SwiperSlide>
					<BlogItem />
				</SwiperSlide>
				<SwiperSlide>
					<BlogItem />
				</SwiperSlide>
				<SwiperSlide>
					<BlogItem />
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default ItemSlider
