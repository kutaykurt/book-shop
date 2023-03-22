import { useEffect, useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import bookApi from '../../books.json';
import { Link } from 'react-router-dom';

function DropDownHeader() {
  const [booksCategory, setBooksCategory] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      setBooksCategory(bookApi);
    };
    fetchBooks();
  }, []);

  const filterCategories = booksCategory.map((item) => {
    return item.kategorie;
  });

  const removeUniqueItems = [...new Set(filterCategories)];

  return (
    <>
      {['Bücher'].map((elem) => (
        <DropdownButton
          as={ButtonGroup}
          key={elem}
          id={`dropdown-variants-${elem}`}
          variant={elem.toLowerCase()}
          title={elem}
        >
          {removeUniqueItems.map((item) => {
            return (
              <Dropdown.Item eventKey="1">
                <Link to={`/bücher/${item}`}>{item}</Link>
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
      ))}

      {['Englische Bücher'].map((elem) => (
        <DropdownButton
          as={ButtonGroup}
          key={elem}
          id={`dropdown-variants-${elem}`}
          variant={elem.toLowerCase()}
          title={elem}
        >
          <Dropdown.Item eventKey="1">Fachbücher</Dropdown.Item>
        </DropdownButton>
      ))}

      {['Spielwaren'].map((elem) => (
        <DropdownButton
          as={ButtonGroup}
          key={elem}
          id={`dropdown-variants-${elem}`}
          variant={elem.toLowerCase()}
          title={elem}
        >
          <Dropdown.Item eventKey="1">Fachbücher</Dropdown.Item>
        </DropdownButton>
      ))}

      {['Kalender'].map((elem) => (
        <DropdownButton
          as={ButtonGroup}
          key={elem}
          id={`dropdown-variants-${elem}`}
          variant={elem.toLowerCase()}
          title={elem}
        >
          <Dropdown.Item eventKey="1">Fachbücher</Dropdown.Item>
        </DropdownButton>
      ))}

      {['Schreibwaren'].map((elem) => (
        <DropdownButton
          as={ButtonGroup}
          key={elem}
          id={`dropdown-variants-${elem}`}
          variant={elem.toLowerCase()}
          title={elem}
        >
          <Dropdown.Item eventKey="1">Fachbücher</Dropdown.Item>
        </DropdownButton>
      ))}

      {['Unterhaltung'].map((elem) => (
        <DropdownButton
          as={ButtonGroup}
          key={elem}
          id={`dropdown-variants-${elem}`}
          variant={elem.toLowerCase()}
          title={elem}
        >
          <Dropdown.Item eventKey="1">Fachbücher</Dropdown.Item>
        </DropdownButton>
      ))}

      {['Technik'].map((elem) => (
        <DropdownButton
          as={ButtonGroup}
          key={elem}
          id={`dropdown-variants-${elem}`}
          variant={elem.toLowerCase()}
          title={elem}
        >
          <Dropdown.Item eventKey="1">Fachbücher</Dropdown.Item>
        </DropdownButton>
      ))}

      {['Geschenke'].map((elem) => (
        <DropdownButton
          as={ButtonGroup}
          key={elem}
          id={`dropdown-variants-${elem}`}
          variant={elem.toLowerCase()}
          title={elem}
        >
          <Dropdown.Item eventKey="1">Fachbücher</Dropdown.Item>
        </DropdownButton>
      ))}

      {['SALE'].map((elem) => (
        <DropdownButton
          as={ButtonGroup}
          key={elem}
          id={`dropdown-variants-${elem}`}
          variant={elem.toLowerCase()}
          title={elem}
        >
          <Dropdown.Item eventKey="1">Fachbücher</Dropdown.Item>
        </DropdownButton>
      ))}
    </>
  );
}

export default DropDownHeader;
