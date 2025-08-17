import { ChangeEvent, FC, FormEvent, useState } from 'react'
import styles from './searchForm.module.scss'
import { SearchIcon } from '../../../assets/icons/index'

const SearchForm: FC = () => {
	const [value, setValue] = useState('')

	const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
		setValue(target.value)
	}

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
	}

	return (
		<div className={styles.wrapper}>
			<form
				className={styles.searchForm}
				onSubmit={handleSubmit}
			>
				<input
					className={styles.input}
					type='text'
					name='searchForm'
					placeholder='Ищи и тебя увезет . . .'
					value={value}
					onChange={handleChange}
				/>
				<button className={styles.button}>
					<SearchIcon
						size={28}
						strokeWidth={2}
						color='#333E48'
					/>
				</button>
			</form>
		</div>
	)
}

export default SearchForm
