---
title: Passing Context Information to the Server 
page_title: Passing Context Information to the Server  | RadComboBox for ASP.NET AJAX Documentation
description: Passing Context Information to the Server 
slug: combobox/load-on-demand/passing-context-information-to-the-server-
tags: passing,context,information,to,the,server,
published: True
position: 6
---

# Passing Context Information to the Server 



On the client side, you can use the client-side **OnClientItemsRequesting** event to set attributes of the context object that is passed to the server along with the request for items. The context object is an object of type **IDictionary**. After the **OnClientItemsRequesting** event, it is made available to the ItemsRequested event handler or to the [Web Service]({%slug combobox/load-on-demand/loading-items-from-a-web-service%}) that supplies items to the combobox.

## Using context information with a WebService

1. Add a javascript function to your Web page that sets attributes of the context for the load-on-demand request and assign it as the **OnClientItemsRequesting** event handler of your combobox.

1. On the **RadComboBox**, set the **WebServiceSettings' Path** and **Method** properties toidentify a Web Service method that supplies items to the **RadComboBox**. The context object is passed to the Web service method, which can use the attributes set in the **OnClientItemsRequesting** event handler.

````ASPNET
	
<script type="text/javascript">
	function OnClientItemsRequesting(sender, eventArgs) {
		var context = eventArgs.get_context();
		context["FilterString"] = eventArgs.get_text();
	}
</script>

<telerik:radcombobox 
	runat="server" 
	id="RadComboBox1" 
	width="300px" 
	enableloadondemand="true"
	onclientitemsrequesting="OnClientItemsRequesting">  
	<WebServiceSettings Method="GetProducts" Path="Products.asmx" />
</telerik:radcombobox>
````



For a live example of this technique, see [Populate from WebService](http://demos.telerik.com/aspnet-ajax/combobox/examples/populatingwithdata/autocompletesql/defaultcs.aspx).

## Using context information with the ItemsRequested event

This example illustrates using the context to pass information about the current value of one combobox to another combobox. Both comboboxes use the load-on-demand mechanism. The value of the second combobox (Cities) is dependant on the value of the first combobox (Countries).

2. Add a javascript function to your Web page that sets attributes of the context for the load-on-demand request and assign it as the **OnClientItemsRequesting** event handler of your combobox.

````ASPNET
	
<script language="javascript" type="text/javascript">  
function GetSelectedItem(sender, eventArgs)  
{     
	//get the text of the selected item in the first (countries) combobox     
	var countriesCombo = $find("<%= Countries.ClientID %>");     
	var countriesText = countriesCombo.get_text();
	var context = eventArgs.get_context();
	// set the text of the countries combobox to
	// the context
	context["FilterString"] = countriesText;
}
</script>

<telerik:radcombobox 
	id="Countries" 
	runat="server" 
	enableloadondemand="true" 
	onitemsrequested="Countries_ItemsRequested">
</telerik:radcombobox>
<telerik:radcombobox 
	id="Cities" 
	runat="server" 
	enableloadondemand="true" 
	onitemsrequested="Cities_ItemsRequested"
	onclientitemsrequesting="GetSelectedItem">
</telerik:radcombobox>
````



1. On the **RadComboBox**, set the **ItemsRequested** event handler to read the value from the context object: 



````C#
protected void Countries_ItemsRequested(object o, RadComboBoxItemsRequestedEventArgs e) 
{ 
	Countries.Items.Add(new RadComboBoxItem("USA", "USA")); 
	Countries.Items.Add(new RadComboBoxItem("UK", "UK")); 
	Countries.Items.Add(new RadComboBoxItem("Germany", "Germany")); 
}

protected void Cities_ItemsRequested(object o, RadComboBoxItemsRequestedEventArgs e) 
{    
	/* check which item is selected in the first combobox using the Context object. */    
	if (e.Context["FilterString"].ToString() == "UK") 
	{ 
		Cities.Items.Add(new RadComboBoxItem("London", "London")); 
		Cities.Items.Add(new RadComboBoxItem("Oxford", "Oxford")); 
	} 
}
	
````
````VB.NET
Protected Sub Countries_ItemsRequested(ByVal o As Object, ByVal e As RadComboBoxItemsRequestedEventArgs)
	Countries.Items.Add(New RadComboBoxItem("USA", "USA"))
	Countries.Items.Add(New RadComboBoxItem("UK", "UK"))
	Countries.Items.Add(New RadComboBoxItem("Germany", "Germany"))
End Sub 'Countries_ItemsRequestedProtected 

Sub Cities_ItemsRequested(ByVal o As Object, ByVal e As RadComboBoxItemsRequestedEventArgs)
	'Check which item is selected in the first combobox.   
	'Using the Context object.   
	If e.Context("FilterString").ToString() = "UK" Then
		Cities.Items.Add(New RadComboBoxItem("London", "London"))
		Cities.Items.Add(New RadComboBoxItem("Oxford", "Oxford"))
	End If
End Sub 'Cities_ItemsRequested
	
````

