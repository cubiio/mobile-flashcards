/* global describe, it, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import QuestionText from './QuestionText';
import storeConfig from '../../store/storeConfig';

describe('QuestionText', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={storeConfig}>
          <QuestionText
            text="Show answer"
            onPress={() => { }}
          />
        </Provider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
