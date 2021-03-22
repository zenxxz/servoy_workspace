/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"9B1F8ECF-C530-4B92-B7DC-9AF6D2113E98"}
 */
function saveRecord(event) {
	foundset.itemshipped = 0;
	foundset.itemshipped = itemshipped;
	foundset.itemname = itemname;
	foundset.serialnumber = serialnumber;
	foundset.brandid = brandid;
	foundset.itemreceived = itemreceived;
	databaseManager.saveData();
	history.back();
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
