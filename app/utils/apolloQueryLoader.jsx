import React from 'react';

import Loading from '../atoms/Loading';
import Error from '../atoms/Error';

/**
 * A standard Apollo Query Loader with predefined loading and error handling
 * 
 * @param {function} onSuccess The callback in the sucess case. Usage: onSuccess(data)
 * @param {[function]} onLoading The callback in the loading case. Default: defined loading component 
 * @param {[function]} onError The callback in the error case. Default: defined error handling 
 */
const apolloQueryLoader = (onSuccess, onLoading, onError) => (props) => {
  const {loading, error, data} = props;

  if (loading) return onLoading || <Loading />;
  if (error) return onError || <Error />;

  return onSuccess(data);
};

export default apolloQueryLoader;