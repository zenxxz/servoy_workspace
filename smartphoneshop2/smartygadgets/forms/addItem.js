/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8D990466-F58E-405D-AE30-EFBDFB55629E",variableType:-4}
 */
var brand_isValid = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BA09DD6A-D513-4C6E-8C18-F1D53D819DF0",variableType:-4}
 */
var itemreceived_isValid = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"02A0790F-5B6D-4F7F-A84F-862CC437D299",variableType:-4}
 */
var serialnumber_isValid = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"78328AEA-3544-4BB1-BBF2-A62D04AF7E84",variableType:-4}
 */

var itemname_isValid = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"60A88E83-5EF1-4988-B522-8FFE4193EFD9"}
 */
var serialno_regex = new RegExp('^\d*[a-zA-Z][a-zA-Z\d]*$'); //serial number

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"42ED440D-8313-470A-86FD-D821E3A2E800"}
 */
var itemname_regex = new RegExp('^\d*[a-zA-Z][a-zA-Z\d]*$'); //item name

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"327AC671-2881-4A30-90A5-CE61D3A86D18"}
 */

var itemreceived_regex = new RegExp('^[1-9][0-9]*$'); //item received

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"9B1F8ECF-C530-4B92-B7DC-9AF6D2113E98"}
 */
function saveRecord(event) {
	
	if(itemname){
		var itemname_validate = itemname_regex.test(itemname);
		
		if(itemname_validate){
			//application.output("Item name: Input is valid");
			elements.item_name.text = ""
			itemname_isValid = true;
			
		}
		else{
			//application.output("Item name: Input must contain letters and numbers only");
			elements.item_name.text = "Must be a combination of letters and numbers only."
		}
	}
	
	if(serialnumber){
		var serialnumber_validate = serialno_regex.test(serialnumber);
		
		if(serialnumber_validate){
			//application.output("Serial number: Input is valid");
			elements.serial_no.text = ""
			serialnumber_isValid = true;
		}
		else{
			//application.output("Serial number: Input must contain letters and numbers only");
			elements.serial_no.text = "Must be a combination of letters and numbers only."
		}
	}
	
	if(itemreceived){
		var itemreceived_validate = itemreceived_regex.test(itemreceived);
		
		if(itemreceived_validate){
			//application.output("Item received: Input is valid");
			elements.item_received.text = ""
			itemreceived_isValid = true;
		}
		else{
			//application.output("Item received: Input is not an integer");
			elements.item_received.text = "Input is not an integer."
		}
	}
	
	if(brandid){
		elements.brand_name.text = ""
		brand_isValid = true;
	}
	
	if(!brandid){
		elements.brand_name.text = "Missing brand name."
	}
	
	if(!itemname){
		elements.item_name.text = "Missing item name."
	}
	
	if(!serialnumber){
		elements.serial_no.text = "Missing serial number."
	}

	if(!itemreceived){
		elements.item_received.text = "Missing item received."
	}
	
	if(itemname_isValid && serialnumber_isValid && itemreceived_isValid && brand_isValid){
		save();
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

/**
 * @properties={typeid:24,uuid:"46BD917C-D468-4F06-82D1-646B2B1CE98C"}
 */
function save() {
	foundset.itemshipped = 0;
	foundset.itemshipped = itemshipped;
	foundset.itemname = itemname;
	foundset.serialnumber = serialnumber;
	foundset.brandid = brandid;
	foundset.itemreceived = itemreceived;
	databaseManager.saveData();
	history.back();
}
