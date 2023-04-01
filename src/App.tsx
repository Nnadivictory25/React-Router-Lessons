import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';

import './App.css';

// pages
import About from './pages/About';
import Home from './pages/Home';
import Faq from './pages/help/Faq';
import Contact, { contactAction } from './pages/help/Contact';
import NotFound from './pages/NotFound';
import Careers, { careersLoader } from './pages/careers/Careers';
import CareerDetails, {
	careerDetailsLoader,
} from './pages/careers/CareerDetails';
import CareersError from './pages/careers/CareersError';

// Layouts
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import CareersLayout from './layouts/CareersLayout';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />}>
			<Route path='/' element={<Home />} />
			<Route path='about' element={<About />} />

			<Route path='help' element={<HelpLayout />}>
				<Route path='faq' element={<Faq />}></Route>
				<Route
					path='contact'
					element={<Contact />}
					action={contactAction}></Route>
			</Route>

			<Route
				path='careers'
				element={<CareersLayout />}
				errorElement={<CareersError />}>
				<Route index element={<Careers />} loader={careersLoader}></Route>
				<Route
					path=':id'
					element={<CareerDetails />}
					loader={careerDetailsLoader}></Route>
			</Route>

			<Route path='*' element={<NotFound />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
