import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import classes from './StartPage.module.scss'

export function StartPage() {
	return (
		<div className={classes.page__container}>
			<Header />
			<Footer />
		</div>
	)
}
