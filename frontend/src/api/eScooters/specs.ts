import dimensions from './dimensions'

const {blackLabelE90, blackLabelE100, c25} = dimensions

const specEscooters = {
	blackLabelE90: {
		id: 'es_01',
		minAge: 8,
		weight: 9.9,
		load: 55,
		distance: 24,
		speed: 16,
		tRecharge: 2,
		power: 90,
		battery: 12,
		frame: 'сталь',
		folding: false,
		dWheel: 140,
		dimensions: blackLabelE90
	},
	blackLabelE100: {
		id: 'es_02',
		speed: 18,
		weight: 11.8,
		load: 55,
		tRecharge: 2.5,
		battery: 24,
		power: 100,
		distance: 27,
		dWheel: 200,
		minAge: 7,
		frame: 'сталь',
		folding: false,
		dimensions: blackLabelE100
	},
	c25: {
		id: 'es_03',
		speed: 27,
		weight: 14.5,
		load: 100,
		tRecharge: '',
		battery: '',
		power: 250,
		distance: 27,
		dWheel: 31.5,
		minAge: 18,
		frame: 'сталь',
		folding: true,
		dimensions: c25
	},
	c35sla: {
		id: 'es_04',
		speed: '',
		weight: '',
		load: '',
		tRecharge: '',
		battery: '',
		power: '',
		distance: '',
		dWheel: '',
		minAge: '',
		frame: 'сталь',
		folding: '',
		dimensions: {}
	},
	c45: {
		id: 'es_05',
		speed: '',
		weight: '',
		load: '',
		tRecharge: '',
		battery: '',
		power: '',
		distance: '',
		dWheel: '',
		minAge: '',
		frame: 'сталь',
		folding: '',
		dimensions: {}
	}
}

export default specEscooters
