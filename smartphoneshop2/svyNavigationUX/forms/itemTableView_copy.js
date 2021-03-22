/**

 * @protected
 *
 * @properties={typeid:24,uuid:"6D3009F4-79EA-41A5-8D65-0CD0E85D30D4"}
 */
function showFormAddItem() {
	application.showForm('addItem');
	foundset.newRecord()
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"27CA4873-3314-4AFB-9C30-02E1D59DA6C5"}
 */
function onDelete(event) {
 	foundset.deleteRecord()
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"CEC7F92B-32F0-48AB-8E04-43A49E6E04A4"}
 */
function showFormEditItem(event) {
	application.showForm('editItems');
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"93E107BC-A485-4D26-BF64-EFB737E8C410"}
 */
function showFormOrders(event) {
	application.showForm('orderTableView');
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D9B6D898-62DB-49C0-803D-D388E5F0874F"}
 */
function autoSaveOff(event) {
	databaseManager.setAutoSave(false);
}
