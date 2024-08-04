/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Submenu from './Submenu';
import { fetchMenuLinks } from '../../../../services/header api/header api';

function Menu({ type }) {
  const [menuLinks, setMenuLinks] = useState([]);

  useEffect(() => {
    async function fetchMenus() {
      try {
        const data = await fetchMenuLinks();
        setMenuLinks(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMenus();
  }, []);

  if (type === 'horizontal') {
    return (
      <ul className="flex gap-2 lg:gap-7">
        {menuLinks.map((item) =>
          !item.submenus.length ? (
            <li key={item._id}>
              <Link
                className="block py-3 hover:text-sky-600 dark:hover:text-sky-400"
                to="/"
              >
                {item.title}
              </Link>
            </li>
          ) : (
            <li key={item._id}>
              <Submenu item={item} type="horizontal" />
            </li>
          ),
        )}
      </ul>
    );
  } else if (type === 'vertical') {
    return (
      <ul className="menu w-56 rounded-box bg-white dark:bg-slate-900">
        {menuLinks.map((item) =>
          !item.submenus.length ? (
            <li
              key={item._id}
              className="hover:bg-white hover:text-sky-600 dark:hover:bg-slate-900 dark:hover:text-sky-400"
            >
              <Link
                className="block py-3 hover:bg-white hover:text-sky-600 dark:hover:bg-slate-900 dark:hover:text-sky-400"
                to="/"
              >
                {item.title}
              </Link>
            </li>
          ) : (
            <Submenu item={item} key={item._id} type="vertical" />
          ),
        )}
      </ul>
    );
  } else {
    return <p>use correct prope type </p>;
  }
}

export default Menu;
