import { TLogReg } from '@/UI/Components/AppLayout/AppLayout'
import { Dispatch, SetStateAction } from 'react'
import styles from './AuthModal.module.scss'

interface iAuthModal {
	logReg: TLogReg
	setLogReg: Dispatch<SetStateAction<TLogReg>>
	isVisible: boolean
	setIsVisible: Dispatch<SetStateAction<boolean>>
}
export const AuthModal = ({
	logReg,
	setLogReg,
	isVisible,
	setIsVisible,
}: iAuthModal) => {
	return (
		<>
			{isVisible && (
				<div className={styles.overlay}>
					<div className={styles.modal} onClick={e => e.stopPropagation()}>
						<button
							onClick={() => setIsVisible(false)}
							className={styles.closeButton}
						>
							&times;
						</button>
						{logReg === 'log' ? (
							<>
								<h2 className={styles.title}>Аутентификация</h2>
								<form className={styles.form}>
									<input
										type='email'
										placeholder='Email или номер телефона'
										className={styles.input}
									/>
									<input
										type='password'
										placeholder='Пароль'
										className={styles.input}
									/>
									<button type='submit' className={styles.submitButton}>
										Войти
									</button>
								</form>
								<p className={styles.switchText}>
									Нет аккаунта?{' '}
									<span
										onClick={e => {
											e.preventDefault()
											setLogReg('reg')
										}}
										className={styles.switchLink}
									>
										Зарегистрируйтесь
									</span>
								</p>
							</>
						) : (
							<>
								<h2 className={styles.title}>Регистрация</h2>
								<form className={styles.form}>
									<input
										type='text'
										placeholder='Имя'
										className={styles.input}
									/>
									<input
										type='email'
										placeholder='Email'
										className={styles.input}
									/>
									<input
										type='password'
										placeholder='Создайте пароль'
										className={styles.input}
									/>
									<button type='submit' className={styles.submitButton}>
										Зарегистрироваться
									</button>
								</form>
								<p className={styles.switchText}>
									Уже есть аккаунт?{' '}
									<span
										onClick={() => {
											setLogReg('log')
										}}
										className={styles.switchLink}
									>
										Войдите
									</span>
								</p>
							</>
						)}
					</div>
				</div>
			)}
		</>
	)
}
