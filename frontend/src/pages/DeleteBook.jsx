import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBook = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const handleDeleteBook = () => {
		axios.delete(`http://localhost:5555/books/${id}`);

		navigate('/').catch(err => {
			console.log(err);
		});
		navigate('/');
	};

	return (
		<div>
			<button onClick={handleDeleteBook}>Borrar</button>
		</div>
	);
};

export default DeleteBook;
