import styles from './Signup.module.css'
import Link from 'next/link'

export default function Signup() {
	return (
		<>
			<div className={styles.signUp}>
				<p>Don't have an account?</p>
				<Link href="/">Sign up</Link>
			</div>
		</>
	)
}
