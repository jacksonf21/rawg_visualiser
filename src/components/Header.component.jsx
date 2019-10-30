import React from 'react';

export default function Header({ onClick }) {


  return (
    <div onClick={() => onClick()}>
      Forward
    </div>
  );
};