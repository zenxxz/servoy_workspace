
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"D3EB0406-0131-4AFD-AEA9-6570F672AD2B"}
 */
function onSave(event) {
	// TODO Auto-generated method stub
	databaseManager.saveData();
	history.back();
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"97883139-9B0C-41E3-8887-D2397F62CDEE"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	foundset.newRecord()
}
