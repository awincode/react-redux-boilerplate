import React from 'react';
import PropTypes from 'prop-types';

/**
 * Inject a class dynamically
 *
 * @param {element} Content
 */
export const ContentToInject = ({ Content }) => <Content />;

ContentToInject.propTypes = {
  Content: PropTypes.element.isRequired,
};

export const noop = () => {};

export const toArray = value => (!Array.isArray(value) ? [value] : value);

export const asInt = value => parseInt(value, 10);
