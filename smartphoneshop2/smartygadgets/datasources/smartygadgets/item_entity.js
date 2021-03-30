/**
 * @properties={typeid:24,uuid:"BD9C0B77-D896-4101-AAB4-0ADD0955BDBF"}
 */
function validate()
{
var markers = [];
	
	var requiredFields = [
		'itemname',
		'serialnumber',
		'brandid',
		'itemreceived'
	];
	for(var i in requiredFields){
		var dataProviderID = requiredFields[i];
		var title = databaseManager.getTable(this).getColumn(dataProviderID).getTitle();
		if(!getSelectedRecord()[dataProviderID]){
			markers.push({dataProviderID:dataProviderID,message:'Missing required field: ' + title});
		}
	}
	
	if(getSelectedRecord().itemreceived <= 0){
		markers.push({dataProviderID: 'itemreceived', message: 'Item received field must be more than zero'});
	}
	
	return markers;
}
