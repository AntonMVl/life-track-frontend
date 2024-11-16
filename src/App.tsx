import { Route, Routes } from 'react-router'
import './App.scss'
import { SignIn } from './pages/SignIn/SignIn'
import { StartPage } from './pages/StartPage/StartPage'

function App() {
	return (
		<div className='body'>
			<div className='page'>
				<Routes>
					<Route path='/' element={<StartPage />} />
					<Route path='/sign-in' element={<SignIn />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
