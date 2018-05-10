import { database } from '../../config/firebase';

export function getSportsEvents(){
	return dispatch => new Promise(resolve => database.ref().child('events')
    .on('value', (snapshot) => {
      const events = snapshot.child('0/eventdetails').toJSON();
    })).catch(e => console.log(e));
}