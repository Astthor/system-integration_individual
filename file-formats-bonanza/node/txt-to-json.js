import { isNumberRegex } from './utils.js';

export const txtToJson = (txtArray) => {
	const jsonObj = {};
	try {
		for(let i = 0; i < txtArray.length; i++) {
			let el = txtArray[i]; // Element
			if(i % 2){ // If odd
				let att = txtArray[i-1]; // Attribute
				if(isNumberRegex(el)) {
					el = parseInt(el);
				} else {
					// Split in case it is meant to be an array. (Not supporting corrupt data)
					el = el.split('/');
				}
				if(el.length > 1){
					jsonObj[att] = el; // Assign entire array to the attribute
				} else {
					jsonObj[att] = el[0]; // Assign first and only element to the attribute
				}
			} else {
				jsonObj[txtArray[i]] = "";
			}
		}
	} catch (e) {
		console.log("Error parsing JSON: " + e.message);
		jsonObj["Error"] = e.message;
	}
	return jsonObj;
}