// ----- Navigation $ menu -----//
type TSubMenuItem = {
	id: string
	link: string
	title: string
}

type TNavItem = {
	id: string
	link: string
	title: string
	subMenu: boolean
	shopLinks?: TSubMenuItem[]
}

// ----- Contacts & social -----//

type TPhone = {
	link: string
	tel: string
}

type TEmail = {
	link: string
	mail: string
}

type TSocial = {
	name: string
	link: string
}

type TContacts = {
	phone: TPhone
	email: TEmail
	whatsApp: string
	telegram: string
	address: string
	social: TSocial[]
}

// ----- Product items -----//


type TScooterProduct = {
	id: string | number
	char: TCharProduct
	electric_char: {}
	colors: string[]
	image:TImageProduct[]
	price: number
	discount_price: number
	label: 'new' | 'popular' | 'sale'
	is_child: boolean
	in_stock: boolean
	is_epower: boolean
}
type TImageProduct = {
	id: string | number
	alternativeText: string
	name: string
	size: number
	url: string
}

type TCharProduct = {
	id: string | number
	d_wheel: number
	deck_height: number
	deck_width: number
	ground_clearance: number
	handlebar_width: number
	is_folding: boolean
	length: number
	max_payload: number
	min_age: number
	warranty: number
	weight: number
}

type TProductElectroScooter = {
	brand: string
	id: string | number
	model: string
	createdAt: string
	documentId: string
	publishedAt: string
	updatedAt: string
	locale: 'en' | 'ru'
	rating: number
	slug: string
	type:"Электросамокат" | "Самокат"
	product: TScooterProduct
}

type TSpecEscooter = {
	id: string | number
	speed: number
	weight: number
	load: number
	tRecharge: number
	battery: number
	power: number
	distance: number
	dWheel: number
	minAge: number
	frame: string
	folding: boolean
	dimensions: TDimensionsEscooter
}
type TDimensionsEscooter = {
	id: string | number
	length: number
	height: number
}

type TDescriptionEscooter = {
	id: string | number
	desc: string
}

export type { TNavItem, TSubMenuItem, TContacts, TSocial, TProductElectroScooter, TSpecEscooter, TDescriptionEscooter }
