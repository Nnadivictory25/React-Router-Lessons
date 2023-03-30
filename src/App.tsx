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

// Layouts
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import Faq from './pages/help/Faq';
import Contact from './pages/help/Contact';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />}>
			<Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='help' element={<HelpLayout/>}>
        <Route path='faq' element={<Faq/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
      </Route>
		</Route>
	)
);

function App() {
	return (
		<RouterProvider router={router} />
	);
}

export default App;
