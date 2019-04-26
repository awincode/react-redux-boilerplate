import React from 'react';

import { Link } from 'react-router-dom';
import appConfig from '../config/app';

const Dividers = props => {
  const { navigation } = appConfig;

  const renderMenuItem = ({ label, path }) => {
    // console.log('label, path', label, path);

    // this for material-ui
    // const renderLink = (itemProps) => <Link to={path} {...itemProps} />;

    return (
      <li key={label}>
        <Link to={path}>{label}</Link>
      </li>
    );
  };

  return <ul>{Object.values(navigation).map(item => renderMenuItem(item))}</ul>;
};

export default Dividers;
