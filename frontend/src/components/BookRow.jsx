import { useFetch } from '../pages/useFetch';
import { Book } from './Book';

export const BookRow = () => {
	const { data, loading, error } = useFetch(`http://localhost:5555/books`);

	return (
		<>
			{loading && <p>Cargando books</p>}
			{error && <p>Error cargando los libros</p>}
			<Book data={data} />
		</>
	);
};
