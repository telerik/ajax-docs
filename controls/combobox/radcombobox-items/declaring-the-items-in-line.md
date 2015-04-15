---
title: Declaring the Items In-line
page_title: Declaring the Items In-line | UI for ASP.NET AJAX Documentation
description: Declaring the Items In-line
slug: combobox/radcombobox-items/declaring-the-items-in-line
tags: declaring,the,items,in-line
published: True
position: 1
---

# Declaring the Items In-line



The definition of **RadComboBox** items can be added to the in-line declaration of RadComboBox using the [RadComboBox Item Builder]({%slug combobox/design-time/radcombobox-item-builder%}). The item builder updates the ASPX or ASCX file to include the list of items and their properties.

You can also directly edit the ASPX or ASCX file by adding items to the `<Items></Items>` section of the **RadComboBox** declaration. Every item definition must be enclosed in `<telerik:RadComboBoxItem>` and `</telerik:RadComboBoxItem>` tags.

## Examples

Add the following **inline** definition of RadComboBox to your ASPX or ASCX file:

````ASPNET
<telerik:radcombobox 
	id="RadComboBox1" 
	runat="server"
	skin="Hay"> 
	<Items>   
		<telerik:RadComboBoxItem runat="server" Text="RadComboBoxItem1" />   
		<telerik:RadComboBoxItem runat="server" Text="RadComboBoxItem2" />   
		<telerik:RadComboBoxItem runat="server" Text="RadComboBoxItem3" /> 
	</Items>
</telerik:radcombobox>
````



At run-time, the result will be:

![ComboBox Inline Items](images/combobox_inlineitems.png)
