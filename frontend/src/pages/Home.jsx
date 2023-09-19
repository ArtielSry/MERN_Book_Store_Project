import { BookRow } from '../components/BookRow';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<main>
			<h1>Books List</h1>

			<Link to='/books/create'>
				<button>Añadir libro</button>
			</Link>

			<BookRow />
		</main>
	);
};

export default Home;
