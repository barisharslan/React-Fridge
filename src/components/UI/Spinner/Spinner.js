import React from 'react';
import classes from './Spinner.module.css';

// source for css: https://projects.lukehaas.me/css-loaders/

const spinner = () => (
  <div className={classes.loader}>Loading...</div>
);

export default spinner;