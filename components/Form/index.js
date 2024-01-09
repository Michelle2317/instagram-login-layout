import styles from './Form.module.css'

export default function Form() {
	return (
		<>
			<div className={styles.loginForm}>
				<img
					id={styles.logo}
					src="images/instagram-word.png"
					alt="instagram"
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

					<a href="#" className={styles.facebookLogin}>
						<img src={'/images/facebook-icon.png'} alt="facebook" />
						Log in with Facebook
					</a>
					<a className={styles.forgot} href="#">
						Forgot password?
					</a>
				</form>
			</div>
		</>
	)
}
