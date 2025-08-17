import { ReactNode, useState, useContext } from 'react'
import { useMediaQuery } from 'react-responsive'
import styles from './mainLayout.module.scss'
import DesktopHeader from '../desktopHeader/desktopHeader'
import MobileHeader from '../mobileHeader/mobileHeader'
import Footer from '../footer/footer'
import MobileFooter from '../mobileFooter/mobileFooter'
import Modal from '../modal/modal'
import LoginForm from '@/components/forms/loginForm/loginForm'
import RegisterForm from '@/components/forms/signUpForm/registerForm'
import ForgotPasswordForm from '@/components/forms/forgotPasswordForm/forgotPasswordForm'
import { ModalContext } from '../../../../pages/_app'
import ModalContent from '@/components/ui/modalContent/modalContent'

interface IChildProp {
	children: ReactNode
}
const enum EnumTypeForm {
	LOGIN = 'login',
	REG = 'register',
	FORGOT_PASSWORD = 'forgotPassword'
}

const MainLayout = ({ children }: IChildProp) => {
	const { isOpenModal, setIsOpenModal } = useContext(ModalContext)
	const [formType, setFormType] = useState<EnumTypeForm>(EnumTypeForm.LOGIN)
	const isTabletOrMobile = useMediaQuery({
		maxWidth: 767
	})

	const shopCategory = [
		{ id: 'escooter', link: '/escooter', title: 'Электросамокаты' },
		{ id: 'scooter', link: '/scooter', title: 'Cамокаты' },
		{ id: 'equipment', link: '/equipment', title: 'Экипировка' }
	]

	const forSellers = [
		{ id: 'payment', link: '/payment', title: 'Оплата & доставка' },
		{ id: 'warranty', link: '/warranty', title: 'Гарантия' },
		{ id: 'return', link: '/return', title: 'Обмен & возврат' }
	]

	const navBar = [
		{ id: 'main', link: '/', title: 'Главная', subMenu: false },
		{ id: 'shop', link: '', title: 'Магазин', subMenu: true, shopLinks: shopCategory },
		{
			id: 'blog',
			link: '/blog',
			title: 'Статьи',
			subMenu: false
		},
		{ id: 'forSellers', link: '', title: 'Покупателям', subMenu: true, shopLinks: forSellers },
		{ id: 'about', link: '/about', title: 'О нас', subMenu: false }
	]

	const contacts = {
		phone: {
			link: '+79859998877',
			tel: '+7(985)999-88-77'
		},
		email: {
			link: 'mailto:info@tebyavezet.ru',
			mail: 'info@tebyavezet.ru'
		},
		whatsApp: 'https://web.whatsapp.com/',
		telegram: 'https://web.telegram.org/k/',
		address: 'г.Москва, ул.Шумилова, д.6 стр.2',
		social: [
			{
				name: 'vk',
				link: 'https://vk.com/'
			},
			{
				name: 'YouTube',
				link: 'https://youtube.com'
			}
		]
	}

	const toggleForm = () => {
		if (formType === EnumTypeForm.LOGIN) {
			return (
				<LoginForm
					title='войти на сайт'
					toggleFormType={() => setFormType(EnumTypeForm.REG)}
					toggleForgotPassword={() => setFormType(EnumTypeForm.FORGOT_PASSWORD)}
				/>
			)
		}
		if (formType === EnumTypeForm.REG) {
			return (
				<RegisterForm
					title='зарегистрироваться'
					toggleFormType={() => setFormType(EnumTypeForm.LOGIN)}
				/>
			)
		}
		if (formType === EnumTypeForm.FORGOT_PASSWORD) {
			return (
				<ForgotPasswordForm
					title='восстановление пароля'
					toggleFormType={() => setFormType(EnumTypeForm.LOGIN)}
				/>
			)
		}
	}

	return (
		<>
			{isTabletOrMobile ? (
				<MobileHeader
					menu={navBar}
					onOpen={() => setIsOpenModal(true)}
				/>
			) : (
				<DesktopHeader
					menu={navBar}
					onOpen={() => setIsOpenModal(true)}
				/>
			)}
			<main className={styles.main}>{children}</main>
			{isTabletOrMobile ? (
				<MobileFooter contacts={contacts} />
			) : (
				<Footer
					contacts={contacts}
					forSellers={forSellers}
					shopCategory={shopCategory}
				/>
			)}{' '}
			<Modal
				open={isOpenModal}
				onClose={() => {
					setIsOpenModal(false)
				}}
			>
				{/* <ModalContent></ModalContent> */}
				{toggleForm()}
			</Modal>
		</>
	)
}

export default MainLayout
