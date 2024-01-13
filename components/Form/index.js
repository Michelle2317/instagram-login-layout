import styles from './Form.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Form() {
	return (
		<>
			<div className={styles.loginForm}>
				<Image
					id={styles.logo}
					src={'/images/instagram-word.png'}
					alt="instagram"
					width={175}
					height={65}
				/>
				<form>
					<input
						className={styles.inputFields}
						type="text"
						placeholder="Phone number, username, or email"
					/>
					<input
						className={styles.inputFields}
						type="password"
						placeholder="Password"
					/>
					<button className={styles.loginButton}>Log in</button>

					<div className={styles.or}>
						<div className={styles.line}></div>
						<p>OR</p>
						<div className={styles.line}></div>
					</div>

					<Link href='/' className={styles.facebookLogin}>
						<Image
							src={'/images/facebook-icon.png'}
							alt="facebook"
							width={16}
							height={16}
						/>
						Log in with Facebook
					</Link>
					<Link className={styles.forgot} href='/'>
						Forgot password?
					</Link>
				</form>
			</div>
		</>
	)
}
