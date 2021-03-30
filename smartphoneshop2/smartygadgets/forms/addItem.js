/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"327AC671-2881-4A30-90A5-CE61D3A86D18"}
 */
var number = new RegExp('^[1-9][0-9][0-9]*$');

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"9B1F8ECF-C530-4B92-B7DC-9AF6D2113E98"}
 */
function saveRecord(event) {
	
	application.output(number.test(itemreceived));
	
	if(number.test(itemreceived)){
		application.output("Input is an integer");
		foundset.itemshipped = 0;
		foundset.itemshipped = itemshipped;
		foundset.itemname = itemname;
		foundset.serialnumber = serialnumber;
		foundset.brandid = brandid;
		foundset.itemreceived = itemreceived;
		databaseManager.saveData();
		history.back();
	}
	
	else{
		application.output("Input is not an integer");
	}
}


/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"5A7F9CC2-961B-4927-9BBC-5C73964C089B"}
 */
function cancel(event) {
	foundset.deleteRecord();
	history.back();
}
