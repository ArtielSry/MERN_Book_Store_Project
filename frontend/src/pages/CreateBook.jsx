import { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

const CreateBook = () => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [publishYear, setPublishYear] = useState('');

	const navigate = useNavigate();

	const handleSaveBook = async () => {
		const data = { title, author, publishYear };

		axios
			.post('http://localhost:5555/books', data)
			.then(() => {
				console.log('Book saved')
			})
			.catch(err => {
				console.log(err);
			});
      navigate('/');
	};

	return (
		<form>
			<div>
				<label>Title</label>
				<input
					required
					placeholder='title here'
					value={title}
					onChange={e => setTitle(e.target.value)}
				></input>
			</div>
			<div>
				<label>Author</label>
				<input
					required
					placeholder='title here'
					value={author}
					onChange={e => setAuthor(e.target.value)}
				></input>
			</div>
			<div>
				<label>Year</label>
				<input
					required
					placeholder='title here'
					value={publishYear}
					onChange={e => setPublishYear(e.target.value)}
				></input>
			</div>
			<button onClick={handleSaveBook}>Save book</button>
		</form>
	);
};

export default CreateBook;
