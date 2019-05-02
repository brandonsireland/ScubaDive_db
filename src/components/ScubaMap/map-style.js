import { fromJS } from 'immutable';
import MAP_STYLE  from './style.json';

export const dataLayer = fromJS({
	id: 'data',
	source: 'DiveSite',
	type: 'circle',
	interactive: true,
	onClick: (e) => console.log(e) 

});

export const defaultMapStyle = fromJS(MAP_STYLE);