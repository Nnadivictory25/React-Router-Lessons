import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { Career } from './Careers';


const CareerDetails = () => {
	const {title, salary, location} = useLoaderData() as Career;

	return (
		<div className='career-details'>
			<h2>Career Details for {title}</h2>
			<p>Starting salary: {salary}</p>
			<p>Location: {location}</p>
			<div className='details'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
				reiciendis consequuntur optio voluptatibus excepturi architecto tempore
				ut, quae fugit ipsam consectetur praesentium quidem dolor est?
			</div>
		</div>
	);
};

export default CareerDetails;

// loader function
export const careerDetailsLoader = async ({ params }: LoaderFunctionArgs) => {

	const { id } = params;

	const res = await fetch('http://localhost:4000/careers/' + id);

	return res.json();
};
