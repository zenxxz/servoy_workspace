customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/smartygadgets/item",
encapsulation:108,
items:[
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
onActionMethodID:"010FAD1D-9377-45C2-B202-AFFA939EBF4D",
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
uuid:"1CB74BE4-A8E5-4888-B365-A5FC8EA387C4"
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
onActionMethodID:"1F4374E3-AC65-4562-9832-70758CBBF68D",
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
uuid:"625D78EA-50E8-4B54-AD35-31C1879CDD56"
},
{
cssPosition:"169,-1,-1,152,1042,392",
json:{
columns:[
{
dataprovider:"itemname",
headerTitle:"Item Name",
id:"Item Name",
svyUUID:"17E8E901-DE2C-4420-9589-AF8699615387"
},
{
dataprovider:"serialnumber",
headerTitle:"SERIAL NO.",
id:"Serial No.",
svyUUID:"A381AB16-D8A1-4A25-A7D0-218B40621294"
},
{
dataprovider:"item_to_brand.brandname",
headerTitle:"Brand",
id:"Brand",
svyUUID:"F54E83E2-BFC7-46ED-8D83-9C0DEEB11DC0"
},
{
dataprovider:"itemreceived",
headerTitle:"ITEM RECEIVED",
id:"Item Received",
svyUUID:"16780D3B-F739-40DC-8C1A-7FCC74458FA2"
},
{
dataprovider:"itemshipped",
filterType:null,
format:"#",
headerTitle:"ITEM SHIPPED",
id:"Item Shipped",
svyUUID:"91782148-67B6-4368-AE2A-D50C68C1E787"
},
{
dataprovider:"itemonhand",
headerTitle:"ITEM ONHAND",
id:"Item Onhand",
svyUUID:"4D3BEEB5-BAD6-49F4-94F5-69CE08B3B4A5"
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
uuid:"82BEC943-E737-46CB-9841-3D8B568A30FA"
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
onActionMethodID:"CAB6AB62-AE65-4F53-B8DA-21BD85B5F510",
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
uuid:"B84083C2-8942-483E-B89D-5F161D6620BD"
},
{
height:857,
partType:5,
typeid:19,
uuid:"DB55900E-2C6D-4498-88B0-35F20B94A01C"
}
],
name:"itemTableView",
navigatorID:"-1",
onLoadMethodID:"132F9FC1-E687-4864-80F7-0D2E7ED85F54",
showInMenu:true,
size:"1311,857",
typeid:3,
uuid:"AB48947A-148F-4121-8FCB-960868DE8A7A"