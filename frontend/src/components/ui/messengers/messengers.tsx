import { FC } from 'react';
import Link from 'next/link'
import styles from './messengers.module.scss'
import { WhatsappIcon, TelegramIcon, EnvelopeIcon } from "../../../assets/icons";
import { TContacts } from '@/models/model';

interface IMessengersProps {
	contacts: TContacts
	size: number
}

const Messengers: FC<IMessengersProps> = ({contacts, size}) => {
	return (
		<ul className={styles.wrapper}>
			<li>
				<Link href={contacts.whatsApp}>
					<WhatsappIcon size={size} />
				</Link>
			</li>
			<li>
				<Link href={contacts.telegram}>
					<TelegramIcon size={size} />
				</Link>
			</li>
			<li>
				<Link href={contacts.email.link}>
					<EnvelopeIcon size={size} />
				</Link>
			</li>
		</ul>
	)
}

export default Messengers
