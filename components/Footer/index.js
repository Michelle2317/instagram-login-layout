import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
	return (
		<>
			<div className={styles.footer}>
				<div className={styles.links}>
					<Link href='/'>Meta</Link>
					<Link href='/'>About</Link>
					<Link href='/'>Blog</Link>
					<Link href='/'>Jobs</Link>
					<Link href='/'>Help</Link>
					<Link href='/'>API</Link>
					<Link href='/'>Privacy</Link>
					<Link href='/'>Terms</Link>
					<Link href='/'>Locations</Link>
					<Link href='/'>Instagram lite</Link>
					<Link href='/'>Threads</Link>
					<Link href='/'>Contact Uploading & Non-Users</Link>
					<Link href='/'>Meta Verified</Link>
				</div>
				<div className={styles.bottomFooter}>
					<select className={styles.language}>
						<option>English</option>
					</select>
					<div className={styles.copyright}>© 2024 Instagram from Meta</div>
				</div>
			</div>
		</>
	)
}
