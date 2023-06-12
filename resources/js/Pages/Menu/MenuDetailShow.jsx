import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MenuDetailShow({ menuId }) {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await axios.get(`/api/menus/${menuId}`);
        setMenu(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMenuData();
  }, [menuId]);

  if (!menu) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{menu.name}</h2>
      <ul>
        {menu.menuCategories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MenuDetailShow;
