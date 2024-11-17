import { Link } from 'react-router-dom'
import classes from './Header.module.scss'

export function Header() {
	return (
		<section className={classes.header}>
			<img src='./logo.png' alt='logo' className={classes.header__logo} />
			<div className={classes.header__buttonContainer}>
				<Link className={classes.header__link} to='/sign-in'>
					Войти
				</Link>
				<Link className={classes.header__link} to='/sign-up'>
					Регистрация
				</Link>
			</div>
		</section>
	)
}
