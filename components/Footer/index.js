import styles from './Footer.module.css'

export default function Footer() {
	return (
		<>
			<div className={styles.footer}>
				<div className={styles.links}>
					<a href='#'>Meta</a>
					<a href='#'>About</a>
					<a href='#'>Blog</a>
					<a href='#'>Jobs</a>
					<a href='#'>Help</a>
					<a href='#'>API</a>
					<a href='#'>Privacy</a>
					<a href='#'>Terms</a>
					<a href='#'>Locations</a>
					<a href='#'>Instagram lite</a>
					<a href='#'>Threads</a>
					<a href='#'>Contact Uploading & Non-Users</a>
					<a href='#'>Meta Verified</a>
				</div>
				<div className={styles.bottomFooter}>
					<select className={styles.language}>
						<option>English</option>
					</select>
					<div className={styles.copyright}>
						© 2024 Instagram from Meta
					</div>
				</div>
			</div>
		</>
	)
}
