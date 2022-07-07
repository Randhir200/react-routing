import { Link } from 'react-router-dom';

export default function Users() {
  const ids = [1, 2, 3, 4, 5];
  return (
    <div>
      <h1>Users Page</h1>
      {ids.map((id) => (
        <Link key={id} to={`/users/${id}`}>move to {id}</Link>
      ))}
    </div>
  );
}
