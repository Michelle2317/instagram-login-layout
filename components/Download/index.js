import styles from './Download.module.css'
import Image from 'next/image'

export default function Download() {
	return (
		<>
			<div className={styles.download}>
				<p>Get the app.</p>
				<div className={styles.stores}>
					<Image
						src={'/images/google-play.png'}
						alt="google-play"
						width={134}
						height={40}
					/>
					<Image
						src={'/images/microsoft.png'}
						alt="microsft"
						width={116}
						height={40}
					/>
				</div>
			</div>
		</>
	)
}
