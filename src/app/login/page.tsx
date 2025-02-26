import logo from '@/assets/images/fireLogo.png'
import keyLogo from '@/assets/images/keyLogo.png'
import userLogo from '@/assets/images/userLogo.png'
import Image from 'next/image'
import Link from 'next/link'
import sty from './page.module.scss'
export default function Login() {
	return (
		<div className={sty.wrapper}>
			<div className={sty.loginForm}>
				<div className={sty.logoName}>
					<h1>AlcoExpress </h1>
					<Image src={logo} alt='AlcoExpressLogo' className={sty.logo} />
				</div>
				<form className={sty.form} action='submit'>
					<h3 className={sty.formTitle}>Anmelden</h3>
					<div className={sty.inputWrapp}>
						<div className={sty.inputIcon}>
							<div
								style={{ position: 'relative', height: '100%', width: '100%' }}
							>
								<Image src={userLogo} alt='userLogo' fill></Image>
							</div>
						</div>
						<input
							className={sty.input}
							type='email'
							placeholder='E-Mail'
							autoComplete='email'
						/>
					</div>

					<div className={sty.inputWrapp}>
						<div className={sty.inputIcon}>
							<div
								style={{ position: 'relative', height: '100%', width: '100%' }}
							>
								<Image src={keyLogo} alt='userLogo' fill></Image>
							</div>
						</div>
						<input
							className={sty.input}
							type='password'
							placeholder='Passwort'
							autoComplete='current-password'
						/>
					</div>
					<div className={sty.inputBotContainer}>
						<div className={sty.checkboxContainer}>
							<input type='checkbox' id='rememberMe' />
							<label htmlFor='rememberMe' className={sty.checkboxTextContent}>
								Angemeldet bleiben
							</label>
						</div>

						<button>Anmelden</button>
					</div>
					<div className={sty.bottomLinks}>
						<p>
							Kein Konto? <Link href={''}>Registrieren</Link>
						</p>
						<Link href={''}>Passwort vergessen?</Link>
					</div>
				</form>
			</div>
		</div>
	)
}
