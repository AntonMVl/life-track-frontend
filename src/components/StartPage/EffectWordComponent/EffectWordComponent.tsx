import React, { useEffect, useState } from 'react'
import { EffectWordComponentProps } from '../../../types/startPageInterface'
import classes from './EffectWordComponent.module.scss'

const EffectWordComponent: React.FC<EffectWordComponentProps> = ({
	words,
	typingSpeed,
	pauseBetweenWords,
}) => {
	const [currentWordIndex, setCurrentWordIndex] = useState(0) // Индекс текущего слова
	const [displayedText, setDisplayedText] = useState('') // Текущий текст на экране
	const [isDeleting, setIsDeleting] = useState(false) // Флаг режима удаления текста

	useEffect(() => {
		let typingTimeout: ReturnType<typeof setTimeout>

		// Логика печати символов слова
		if (!isDeleting && displayedText.length < words[currentWordIndex].length) {
			typingTimeout = setTimeout(() => {
				setDisplayedText(
					words[currentWordIndex].substring(0, displayedText.length + 1)
				)
			}, typingSpeed)
		}
		// Переход к удалению после завершения печати слова и паузы
		else if (
			!isDeleting &&
			displayedText.length === words[currentWordIndex].length
		) {
			typingTimeout = setTimeout(() => setIsDeleting(true), pauseBetweenWords)
		}
		// Логика удаления символов слова
		else if (isDeleting && displayedText.length > 0) {
			typingTimeout = setTimeout(() => {
				setDisplayedText(displayedText.slice(0, -1)) // Удаляем последний символ
			}, typingSpeed)
		}
		// Переход к следующему слову после завершения удаления
		else if (isDeleting && displayedText.length === 0) {
			setIsDeleting(false) // Сбрасываем режим удаления
			setCurrentWordIndex((currentWordIndex + 1) % words.length) // Переход к следующему слову, зациклено
		}

		// Очистка таймера
		return () => clearTimeout(typingTimeout)
	}, [
		displayedText,
		isDeleting,
		words,
		currentWordIndex,
		typingSpeed,
		pauseBetweenWords,
	])

	return <div className={classes.effectWord__element}>{displayedText}</div>
}

export default EffectWordComponent
