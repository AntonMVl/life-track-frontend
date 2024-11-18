import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import classes from './SignIn.module.scss'

export function SignIn() {
	return (
		<>
			<Header />
			<section className={classes.signIn}>
				<h1 className={classes.signIn__title}>Добро пожаловать!</h1>
				<form method='post' noValidate className={classes.signIn__form}>
					<fieldset className={classes.signIn__formContainer}>
						<label htmlFor='email' className={classes.signIn__inputName}>
							Ваш E-mail:
						</label>
						<input
							type='email'
							id='email'
							name='email'
							autoComplete='off'
							className={classes.signIn__input}
						/>
					</fieldset>
				</form>
			</section>
			<Footer />
		</>
	)
}
