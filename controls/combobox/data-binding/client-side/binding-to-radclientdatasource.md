---
title: Binding to RadClientDataSource
page_title: Client-side Data Binding with RadClientDataSource - RadComboBox
description: Overview of the Client-side Data binding options for the Telerik WebForms Combobox.
slug: combobox/data-binding/client-side/binding-to-clientdatasource
previous_url: controls/combobox/data-binding/binding-to-radclientdatasource
tags: client-side, data binding, radclientdatasource
published: True
position: 1
---

# Binding to RadClientDataSource

Since **Q2 2014** RadComboBox can be bound to RadClientDataSource control. 

## Configuration

RadComboBox configuration:

- Set `ClientDataSourceID` to the `ID` of the RadClientDataSource component.
- Set `DataTextField` to the name of the data source field to be mapped to the ComboBoxItem `Text` property.
- Set `DataValueField` to the name of the data source field to be mapped to the ComboBoxItem `Value` property.
- Set `EnableLoadOnDemand` to `true`.

RadClientDataSource configuration:

- [Connecting to Web Service]({%slug clientdatasource/connecting-to-web-service%})
- [Connecting to Various DataSource controls]({%slug clientdatasource/connecting-to-various-data-sources%})

>caption Example

````ASP.NET
<telerik:RadComboBox runat="server" ID="RadComboBox1" 
	ClientDataSourceID="RadClientDataSource1"
    DataTextField="ProductName" 
    DataValueField="ProductID"
    OnClientDropDownOpening="OnClientDropDownOpening">
</telerik:RadComboBox>

<telerik:RadClientDataSource ID="RadClientDataSource1" runat="server">
    <Schema ResponseType="JSON" DataName="d">
        <Model ID="ProductID">
            <telerik:ClientDataSourceModelField FieldName="ProductID" DataType="Number" />
            <telerik:ClientDataSourceModelField FieldName="ProductName" DataType="String" />
        </Model>
    </Schema>
    <DataSource>
        <WebServiceDataSourceSettings BaseUrl="WebService.asmx/">
            <Select Url="GetProducts" ContentType="application/json" RequestType="Post" DataType="JSON" />
        </WebServiceDataSourceSettings>
    </DataSource>
</telerik:RadClientDataSource>
````



## Notes

If `EnableLoadOnDemand` is set to `false`, attach the [OnClientDropDownOpening]({%slug combobox/client-side-programming/events/onclientdropdownopening%}) Client-side event to the ComboBox and request the items manually by calling the [requestItems]({%slug combobox/client-side-programming/objects/radcombobox-object%}) method.

````JavaScript
var isLoaded = false;
function OnClientDropDownOpening(sender, args) {
	if (!isLoaded) {
		sender.requestItems("");

		isLoaded = true;
	}
}
````
