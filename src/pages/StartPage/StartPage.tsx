import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import EffectWordComponent from '../../components/StartPage/EffectWordComponent/EffectWordComponent'
import {
	pauseBetweenWords,
	typingSpeed,
	words,
} from '../../constants/EffectWordsParametrs'
import classes from './StartPage.module.scss'

export function StartPage() {
	return (
		<div className={classes.page__container}>
			<Header />
			<EffectWordComponent
				words={words}
				typingSpeed={typingSpeed}
				pauseBetweenWords={pauseBetweenWords}
			/>
			<Footer />
		</div>
	)
}
