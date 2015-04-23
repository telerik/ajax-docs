---
title: Separators
page_title: Separators | RadComboBox for ASP.NET AJAX Documentation
description: Separators
slug: combobox/appearance-and-styling/separators
tags: separators
published: True
position: 10
---

# Separators



## Defining separators

To make a RadComboBoxItem separator you should simply mark the item with IsSeparator="True"

````ASPNET
<telerik:radcombobox 
	id="RadComboBox1" 
	runat="server" 
	height="140px" 
	width="150px"
	accesskey="T" 
	tabindex="1" 
	tooltip="Select a city">   
	<Items>       
		<telerik:RadComboBoxItem runat="server" IsSeparator="True" Text="Animals" />       
		<telerik:RadComboBoxItem runat="server" Text="pig" />        
		<telerik:RadComboBoxItem runat="server" Text="dog" />        
		<telerik:RadComboBoxItem runat="server" IsSeparator="True" Text="Birds" />        
		<telerik:RadComboBoxItem runat="server" Text="Eagle" />        
	</Items>    
	<CollapseAnimation Duration="200" Type="OutQuint" />
</telerik:radcombobox>
````





````C#
	     
	
RadComboBoxItem item = new RadComboBoxItem();
item.Text = "Separator";
item.IsSeparator = true;
				
````
````VB.NET
	
	
Dim item As RadComboBoxItem = New RadComboBoxItem()
item.Text = "Separator"
item.IsSeparator = true
				
````


## Client-side methods

At the client-side, you can check whether an item is a separator using the **get_isSeperator()** method:

````JavaScript
	
var comboBox = $find("<%=RadComboBox1.ClientID %>");
var item = comboBox.findItemByText("Separator");
if (item.get_isSeparator()) {
	alert("The item is a separator"); 
}
	
````



To make an item a separator, you can use the **set_isSeparator()** method:

````JavaScript
	
var comboBox = $find("<%=RadComboBox1.ClientID %>");
var item = comboBox.findItemByText("Separator");
item.set_isSeparator(true);
	
````



## Css Classes

The CSS class applied to the RadComboBox separators is called:

**rcbSeparator**

To define your custom appearance you should simply add a style to the **`<head>`** tag of your aspx page holding the combobox:

````ASPNET
<style>
  .rcbSeparator
	 {
		 //you custom definition, i.e.  color: red !important;
	 }
</style>
````


