---
title: Updating Custom Parameters in RadMultiSelect with RadTabStrip Selection
description: Learn how to dynamically update custom parameters in RadMultiSelect based on the selection in RadTabStrip for ASP.NET AJAX.
type: how-to
page_title: How to Update Custom Parameters in RadMultiSelect with RadTabStrip Selection in ASP.NET AJAX
slug: update-custom-parameters-radmultiselect-radtabstrip
tags: radmultiselect, radtabstrip, customparameter, clientdatasource, oncustomparameter, asp.net, ajax
res_type: kb
category: knowledge-base
ticketid: 1651828
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms MultiSelect for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

When using RadMultiSelect with a ClientDataSource, I need to update a custom parameter in the `OnCustomParameter` event based on the selection made in a RadTabStrip which acts as a filter. However, the `OnCustomParameter` event does not get triggered when the tab selection changes. How can I achieve this functionality?

This KB article also answers the following questions:

- How can I dynamically pass parameters to RadMultiSelect based on RadTabStrip selection?
- How do I trigger the `OnCustomParameter` event of RadClientDataSource on tab selection?
- How to use RadTabStrip selection to filter data in RadMultiSelect?

## Solution

To dynamically update custom parameters in RadMultiSelect based on RadTabStrip selection, follow these steps:

1. Declare a global JavaScript variable to store the selected tab value.
2. Define the `OnClientTabSelected` event for your RadTabStrip and update the global variable with the selected tab value inside this event.
3. Call the `read()` method on RadClientDataSource to trigger the `OnCustomParameter` event. Use the updated tab value to set your custom parameter in this event.

Here is a sample implementation:

````ASP.NET
<telerik:RadTabStrip ID="RadTabStrip1" runat="server" OnClientTabSelected="onClientTabSelected">
    <Tabs>
        <telerik:RadTab Text="ASP.NET 4.5 Unleashed" />
        <telerik:RadTab Text="Ultra-Fast ASP.NET 4.5" />
        <telerik:RadTab Text="Professional ASP.NET MVC 4" />
    </Tabs>
</telerik:RadTabStrip>

<telerik:RadMultiSelect runat="server" Filter="Contains" EnforceMinLength="false" AutoClose="false" WebServiceClientDataSource-AutoSync="true" DataValueField="ID"
    DataTextField="Title" Width="400px" ID="RadMultiSelect1">
    <WebServiceClientDataSource runat="server" ID="MultiSelectDataSource1">
        <WebServiceSettings>
            <Select Url="BookService.asmx/GetFilteredData" RequestType="Post" DataType="JSON" ContentType="application/json; charset=utf-8" />
        </WebServiceSettings>
        <Schema DataName="d" />
        <ClientEvents OnCustomParameter="onCustomParameter" />
    </WebServiceClientDataSource>
</telerik:RadMultiSelect>
````

````JavaScript
var selectedTabValue = ""; // Global variable to hold the selected tab value

function onClientTabSelected(sender, args) {
    selectedTabValue = args.get_tab().get_text(); // Update the global variable with the selected tab's text

    var multisSelect = $find("<%= RadMultiSelect1.ClientID %>"); // Get the MultiSelect
    var clientDataSource = multisSelect._clientDataSource; // Get its data source
    var kendoDataSource = clientDataSource.get_kendoWidget(); // Get the Kendo widget

    kendoDataSource.read(); // Trigger read to fire OnCustomParameter
}

function onCustomParameter(sender, args) {
    if (selectedTabValue) {
        args.set_parameterFormat("{ 'title': '" + selectedTabValue + "' }");
    }
}
````

This approach allows you to dynamically update the custom parameter sent to the web method based on the currently selected tab. Ensure your web method is prepared to filter data based on this parameter.

## See Also

- [RadTabStrip - OnClientTabSelected](https://docs.telerik.com/devtools/aspnet-ajax/controls/tabstrip/client-side-programming/events/onclienttabselected)
- [RadClientDataSource - OnCustomParameter](https://docs.telerik.com/devtools/aspnet-ajax/controls/clientdatasource/client-side-programming/events/oncustomparameter)
