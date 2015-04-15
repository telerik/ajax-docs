---
title: Caching Items
page_title: Caching Items | UI for ASP.NET AJAX Documentation
description: Caching Items
slug: combobox/load-on-demand/caching-items
tags: caching,items
published: True
position: 4
---

# Caching Items



## 

As of Q1 SP2, RadComboBox introduces a new property - **EnableItemCaching**. It can be used **only** in Load-on-demand scenario.

When **EnableItemCaching** is set to True (by default it is False), the combobox will cache the items returned for every request. This means that if you type a given text and the combobox returns some items - they will be cached and the next time you type the same text - the **ItemsRequested** server-side event will not fire, but the items will load from the cache. This will decrease the server round-trips and improve the performance in cases where the number of items is huge.

Here is a simple example:

````ASPNET
<telerik:radcombobox 
	id="RadComboBox4" 
	runat="server" 
	enableitemcaching="True" 
	enableloadondemand="True"
	onitemsrequested="RadComboBox4_ItemsRequested">
</telerik:radcombobox>
<asp:SqlDataSource ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	runat="server">
</asp:SqlDataSource>
````





````C#
	
protected void RadComboBox4_ItemsRequested(object o, RadComboBoxItemsRequestedEventArgs e) 
{
	RadComboBox4.DataSourceID = "SqlDataSource1"; 
	string selectCommand = "SELECT * FROM CUSTOMERS WHERE CompanyName LIKE '" + e.Text + "%'"; 
	SqlDataSource1.SelectCommand = selectCommand; 
	RadComboBox4.DataTextField = "CompanyName"; RadComboBox4.DataBind(); 
}
	
````
````VB.NET
		
Protected Sub RadComboBox4_ItemsRequested(ByVal o As Object, ByVal e As RadComboBoxItemsRequestedEventArgs) Handles RadComboBox4.ItemsRequested
	RadComboBox4.DataSourceID = "SqlDataSource1"
	Dim selectCommand As String = "SELECT * FROM CUSTOMERS WHERE CompanyName LIKE '" + e.Text + "%'"
	SqlDataSource1.SelectCommand = selectCommand
	RadComboBox4.DataTextField = "CompanyName"
	RadComboBox4.DataBind()
End Sub
	
````


Here is how the caching works:

1. Open the drop-down list. The ItemsRequested server-side event fires (e.Text = "") and adds all customers to the list. These items are now cached.

2. Type something in the combobox, e.g. "s" - the ItemsRequested server-side event fires (e.Text = "s") and adds all customers which names starts with "s" to the list. These items are cached now.

3. Type another character, e.g. "sa" - the ItemsRequested server-side event fires (e.Text = "sa") and adds all customers which names starts with "sa" to the list. These items are cached now.

4. Click on the Backspace button - this will leave the "s" letter in the input. Instead of firing the ItemsRequested server-side event again - the combobox will take the items from the cache (point 2) and load them without going to the server.

5. Click on the Backspace button again - this will leave the input empty. Instead of firing the ItemsRequested server-side event again - the combobox will take the items from the cache (point 1) and load them without going to the server.

# See Also

 * [Overview]({%slug combobox/load-on-demand/overview%})
