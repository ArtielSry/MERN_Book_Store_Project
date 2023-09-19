import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShowBook = () => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		setLoading(true);

		fetch(`http://localhost:5555/books/${id}`)
			.then(response => response.json())
			.then(data => setData(data.data))
			.finally(() => setLoading(false));
	}, []);

	return (<div>
    {loading && <p>Cargando detalles</p>}
    <h2>{data.title}</h2>
  </div>)
};

export default ShowBook;
