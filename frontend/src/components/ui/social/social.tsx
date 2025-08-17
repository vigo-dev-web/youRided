import Link from 'next/link'
import styles from './social.module.scss'
import {VkIcon, YouTubeIcon } from '../../../assets/icons'
import { TSocial } from '@/models/model'
import { FC } from 'react'

interface ISocialProps {
	social: TSocial[]
}

const Social: FC<ISocialProps> = ({ social }) => {
	return (
		<ul className={styles.wrapper}>
			<li>
				<Link href={social[0].link}>
					<VkIcon
						size={29}
						strokeWidth={30}
					/>
				</Link>
			</li>
			<li>
				<Link href={social[1].link}>
					<YouTubeIcon
						size={32}
						strokeWidth={10}
					/>
				</Link>
			</li>
		</ul>
	)
}

export default Social
