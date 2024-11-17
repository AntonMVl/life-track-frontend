import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import classes from './SignIn.module.scss'

export function SignIn() {
	return (
		<>
			<Header />
			<h1 className={classes.signIn__title}>Добро пожаловать!</h1>
			<section className={classes.signIn}>
				<form method='post' noValidate className={classes.signIn__form}></form>
			</section>
			<Footer />
		</>
	)
}
