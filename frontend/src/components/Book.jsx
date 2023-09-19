import { Link } from 'react-router-dom';
import style from './book.module.css';

export const Book = ({ data, loading }) => {
	return (
		<div className={style.wrapper}>
			{data?.map(book => (
				<ul className={style.book} key={book._id}>
					<li>Title: {book.title}</li>
					<li>Author: {book.author}</li>
					<li>Year: {book.publishYear}</li>
					<Link to={`/books/edit/${book._id}`}>
						<button>Editar</button>
					</Link>

					<Link to={`/books/delete/${book._id}`}>
						<button>Borrar</button>
					</Link>

					<Link to={`/books/details/${book._id}`}>
						<button>Mas detalles</button>
					</Link>
				</ul>
			))}
		</div>
	);
};
