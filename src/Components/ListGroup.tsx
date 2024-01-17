// import {Fragment} from 'react';
// Quando as brackets estão vazias, o react usa um fragment como reposição.
import { MouseEvent, useState } from "react";

interface Props {
  //It could be any name instead of props
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; // onClick
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  // Hook is a function that allow us to tap into built-in features in react.
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (event: MouseEvent) => console.log(event);

  // const Message = items.length === 0 ? <p>No items found</p> : null;

  // if (items.length === 0){
  //     return (
  //         <>
  //         <h1>List</h1>
  //         <p>No item found</p>
  //         </>
  //     )
  // }

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
