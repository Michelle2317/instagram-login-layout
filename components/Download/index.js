import styles from './Download.module.css'

export default function Download() {
	return (
		<>
			<div className={styles.download}>
				<p>Get the app.</p>
				<div className={styles.stores}>
					<img src={'/images/google-play.png'} alt="google-play" />
					<img src={'/images/microsoft.png'} alt="microsft" />
				</div>
			</div>
		</>
	)
}
