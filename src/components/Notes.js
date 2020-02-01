import React from "react";

export const Notes = ({ notes }) => {
  return (
    <ul className="list-group">
      {notes.map(({ id, title }) => (
        <li className="list-group-item" key={id}>
          <div>
            <strong>{title}</strong>
            <span>{new Date().toLocaleDateString}</span>
          </div>
          <button type="button" className="btn btn-outline-danger btn-sm">
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
};
