customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/smartygadgets/item",
encapsulation:108,
items:[
{
height:857,
partType:5,
typeid:19,
uuid:"064C1104-A67C-4F51-9986-94B33713FB97"
},
{
cssPosition:"107,-1,-1,152,86,33",
json:{
cssPosition:{
bottom:"-1",
height:"33",
left:"152",
right:"-1",
top:"107",
width:"86"
},
formIndex:0,
imageStyleClass:"fas fa-plus",
onActionMethodID:"6D3009F4-79EA-41A5-8D65-0CD0E85D30D4",
size:{
height:30,
width:80
},
styleClass:"btn btn-default-0",
text:"",
toolTipText:"Add Item"
},
name:"button_2cc",
size:"80,30",
styleClass:"btn btn-default-0",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"0931F5A2-A064-4726-9668-DF8AE1AAAFEC"
},
{
cssPosition:"107,-1,-1,396,86,33",
json:{
cssPosition:{
bottom:"-1",
height:"33",
left:"396",
right:"-1",
top:"107",
width:"86"
},
formIndex:0,
imageStyleClass:"fas fa-trash",
onActionMethodID:"27CA4873-3314-4AFB-9C30-02E1D59DA6C5",
size:{
height:30,
width:80
},
styleClass:"btn btn-default-2",
text:"",
toolTipText:"Delete Item"
},
name:"button_2cccc",
size:"80,30",
styleClass:"btn btn-default-2",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"511A6779-85C4-4E58-85A3-FEE06B444892"
},
{
cssPosition:"107,-1,-1,273,86,33",
json:{
cssPosition:{
bottom:"-1",
height:"33",
left:"273",
right:"-1",
top:"107",
width:"86"
},
formIndex:0,
imageStyleClass:"fas fa-edit",
onActionMethodID:"CEC7F92B-32F0-48AB-8E04-43A49E6E04A4",
size:{
height:30,
width:80
},
styleClass:"btn btn-default-1",
text:"",
toolTipText:"Edit Item"
},
name:"button_2ccc",
size:"80,30",
styleClass:"btn btn-default-1",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"B26E49BC-32BA-43F2-8BFF-12EBED48ACAA"
},
{
cssPosition:"169,-1,-1,152,1042,392",
json:{
columns:[
{
dataprovider:"itemname",
headerTitle:"Item Name",
id:"Item Name",
svyUUID:"AA9D1F56-8F68-4D6C-8E92-E669AE20B9E8"
},
{
dataprovider:"serialnumber",
headerTitle:"SERIAL NO.",
id:"Serial No.",
svyUUID:"17E17366-45ED-45D6-9CC9-E4ED7D0AC546"
},
{
dataprovider:"item_to_brand.brandname",
headerTitle:"Brand",
id:"Brand",
svyUUID:"3CE68181-5A3A-4D42-B415-5909FB1F1199"
},
{
dataprovider:"itemreceived",
headerTitle:"ITEM RECEIVED",
id:"Item Received",
svyUUID:"A2C0AB7B-87C0-4B73-B152-1CA4F3F86711"
},
{
dataprovider:"itemshipped",
filterType:null,
format:"#",
headerTitle:"ITEM SHIPPED",
id:"Item Shipped",
svyUUID:"27A7465C-5FB7-44DB-9177-4901D24BACD2"
},
{
dataprovider:"itemonhand",
headerTitle:"ITEM ONHAND",
id:"Item Onhand",
svyUUID:"EB8452FE-1BB1-4EA8-BBB5-60DB1A7A928F"
}
],
cssPosition:{
bottom:"-1",
height:"392",
left:"152",
right:"-1",
top:"169",
width:"1042"
},
formIndex:0,
visible:true
},
name:"groupingtable_1",
typeName:"aggrid-groupingtable",
typeid:47,
uuid:"D9B6A426-5E4C-4C3E-9DDF-90506EC5652D"
}
],
name:"itemTableView_copy",
navigatorID:"-1",
onLoadMethodID:"D9B6D898-62DB-49C0-803D-D388E5F0874F",
showInMenu:true,
size:"1311,857",
typeid:3,
uuid:"34C75674-DA40-4F5E-B843-F26766AB769F"