import { Link } from 'react-router-dom'
import classes from './Footer.module.scss'

export function Footer() {
	return (
		<section className={classes.footer}>
			<p className={classes.footer__author}>@AMoro 2024</p>
			<div className={classes.footer__iconLinkContainer}>
				<h2 className={classes.footer__iconTitle}>Мы в социальных сетях:</h2>
				<Link to='#' className={classes.footer__iconButton}>
					<img
						className={classes.footer__icon}
						src='/telegram_logo.svg'
						alt='Telegram'
					/>
				</Link>
				<Link to='#' className={classes.footer__iconButton}>
					<img
						className={classes.footer__icon}
						src='/whatsapp-logo.svg'
						alt='Whatsapp'
					/>
				</Link>
			</div>
		</section>
	)
}
