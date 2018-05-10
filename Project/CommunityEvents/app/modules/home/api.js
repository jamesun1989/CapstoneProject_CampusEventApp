import { database } from "../../config/firebase";

export function getevent(){
	database.ref().child('events').on('value', (snapshot) => {
		const recipes = snapshot.val();
	});
}