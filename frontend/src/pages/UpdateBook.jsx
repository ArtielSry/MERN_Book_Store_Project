import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';

const UpdateBook = () => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [publishYear, setPublishYear] = useState('');

	const navigate = useNavigate();

	const { id } = useParams();
	useEffect(() => {
    axios.get(`http://localhost:5555/books/${id}`)
    .then(response => {
      setTitle(response.data.title)
      setAuthor(response.data.author)
      setPublishYear(response.data.publishYear)
    })
    .catch(err => console.log(err))
  }, []);

	const handleUpdateBook = async () => {
		const data = { title, author, publishYear };

		axios
			.put(`http://localhost:5555/books/${id}`, data)
			.then(() => {
				console.log('Book saved');
			})
			.catch(err => {
				console.log(err);
			});
		navigate('/');
	};

	return (
		<>
			<h1>Edit book</h1>

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
				<button onClick={handleUpdateBook}>Save book</button>
			</form>
		</>
	);
};

export default UpdateBook;
