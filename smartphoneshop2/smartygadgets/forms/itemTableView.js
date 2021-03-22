
/**

 * @protected
 *
 * @properties={typeid:24,uuid:"1F4374E3-AC65-4562-9832-70758CBBF68D"}
 */
function showFormAddItem() {
	application.showForm('addItem');
	foundset.newRecord()
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"CAB6AB62-AE65-4F53-B8DA-21BD85B5F510"}
 */
function onDelete(event) {
 	foundset.deleteRecord()
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"010FAD1D-9377-45C2-B202-AFFA939EBF4D"}
 */
function showFormEditItem(event) {
	application.showForm('editItems');
}


/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"BAD432FF-CAB1-4954-A5D3-F8994FF8AFC0"}
 */
function showFormOrders(event) {
	application.showForm('orderTableView');
}


/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"132F9FC1-E687-4864-80F7-0D2E7ED85F54"}
 */
function autoSaveOff(event) {
	databaseManager.setAutoSave(false);
}
