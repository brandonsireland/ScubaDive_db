import {fromJS} from 'immutable';
import MAP_STYLE from './style.json';

export const dataLayer = fromJS({
  id: 'data',
  source: 'DiveSite',
  type: 'circle',
  interactive: true
});

export const defaultMapStyle = fromJS(MAP_STYLE);
