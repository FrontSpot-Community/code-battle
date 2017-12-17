import React from 'react';
import {Route, Link} from 'react-router-dom';

const crumb = (part, partIndex, parts) => {
  const path = ['', ...parts.slice(0, partIndex+1)].join('/');
  return <Link key={path} to={path} >{part}</Link>;
};

const Breadcrumbs = () => <Route path="*" render={(props) => {
  let parts = props.location.pathname.split('/');
  const place = parts[parts.length - 1];
  parts = parts.slice(1, parts.length-1);
  return <p>{parts.map(crumb)} {place} </p>;
}} />;

export default Breadcrumbs;

