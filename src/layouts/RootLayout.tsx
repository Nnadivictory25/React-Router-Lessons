import { NavLink, Outlet } from 'react-router-dom';
import BreadCrumbs from '../Components/BreadCrumbs';

const RootLayout = () => {
	return (
		<div className='root-layout'>
			<header>
				<nav>
					{/* Link acts almost as Navlink, just that it doesn't add the active class to the anchor tag incase of styling */}
					<h1>Jobarouter</h1>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='about'>About</NavLink>
					<NavLink to='help'>Help</NavLink>
					<NavLink to='careers'>Careers</NavLink>
				</nav>
				<BreadCrumbs />
            </header>
            
            <main>
                <Outlet />
            </main>
		</div>
	);
};

export default RootLayout;
