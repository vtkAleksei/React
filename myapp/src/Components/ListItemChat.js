import React from 'react';
import { ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const ListItemChat = ({id, name, onDelete}) => {
    const handleDelete = () => {
        onDelete(id);
    }
    return (
        <ListItem className="chat__listItem">
          <Link to={`/home/${id}`}>{name}</Link>
          <button onClick={handleDelete}>Удалить чат</button>
        </ListItem>
      );

}