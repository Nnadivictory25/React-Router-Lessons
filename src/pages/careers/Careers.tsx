import { Link, useLoaderData } from 'react-router-dom';

interface Career {
	id: number;
	title: string;
	salary: number;
	location: string;
}

export default function Careers() {
	const careers = useLoaderData() as Career[];

	return (
		<div className='careers'>
			{careers.map((career) => (
        <Link to='/' key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
			))}
		</div>
	);
}

// Loader function
export const careersLoader = async () => {
	const res = await fetch('http://localhost:4000/careers');

	return res.json()
};
