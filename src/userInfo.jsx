import { useEffect, useState } from 'react';

function UserInfo() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  if (!user) return <p>Cargando...</p>;
  return <p>Hola, {user.name}</p>;
}

export default UserInfo;
