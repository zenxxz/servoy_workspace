
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"DC6C19A3-17E6-4D2D-9025-B47C66151422"}
 */
function onBack(event) {
 	databaseManager.revertEditedRecords()
	history.back();
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"FBC543A3-1037-433F-B282-C72EFB78B365"}
 */
function saveEdit(event) {
	databaseManager.saveData();
	history.back();
}
