import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShowBook = () => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		setLoading(true);

		fetch(`http://localhost:5555/books/${id}`)
			.then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
			.finally(() => setLoading(false));

       console.log(data)
	}, []);

	return (<div>
    Detalles del libro
    {loading && <p>Cargando detalles</p>}
    <p>{data.title}</p>
    <p>{data.author}</p>
    <p>{data.publishYear}</p>
  </div>)
};

export default ShowBook;
