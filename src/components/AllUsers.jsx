import React from 'react';
import { Link } from 'react-router-dom';
import { tableHeaders, users } from '../assets/users';

const firstObj = users[0];
const secondObj = users[1];

const AllUsers = () => {
  return (
    <div className='allUsers'>
      <ul class='breadcrumb'>
        <li>
          <Link to='/'>Main page {' >'}</Link>
        </li>
        <li>Users list</li>
      </ul>
      <table>
        <tr>
          {tableHeaders.map((item, key) => (
            <th key='key'>{item}</th>
          ))}
        </tr>
        <tr>
          {Object.keys(firstObj).map((item, key) => (
            <td key={key}> {firstObj[item]} </td>
          ))}
        </tr>
        <tr>
          {Object.keys(secondObj).map((item, key) => (
            <td key={key}> {secondObj[item]} </td>
          ))}
        </tr>
      </table>
    </div>
  );
};

export default AllUsers;
