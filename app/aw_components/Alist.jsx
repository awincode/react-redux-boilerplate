import React from 'react';
import { Query } from 'react-apollo';

import { GET_DATA } from '../../aw_graphql/queries/list';

import apolloQueryLoader from '../aw_utils/apolloQueryLoader';

const loadList = apolloQueryLoader((data) => {

  return (
    <div>
      Here call the component with the data
    </div>
  )
});

const Alist = () => {
  return (
    <>
      <h1>Get a title</h1>

      <Query query={GET_DATA}>
        {loadList}
      </Query>
    </>
  );
};

export default Alist;
