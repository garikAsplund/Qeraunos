import React from 'react';
import Checkbox from '../components/checkbox';
import Mutation from '../components/mutation';
import '../stylesheets/styles.scss';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h1>Starwars API</h1>
      <Checkbox />
      <Mutation />
    </div>
  );
};

export default Sidebar;
