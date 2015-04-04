---
title: Insert a Default Item When Databinding RadComboBox
page_title: Insert a Default Item When Databinding RadComboBox | UI for ASP.NET AJAX Documentation
description: Insert a Default Item When Databinding RadComboBox
slug: combobox/application-scenarios/insert-a-default-item-when-databinding-radcombobox
tags: insert,a,default,item,when,databinding,radcombobox
published: True
position: 11
---

# Insert a Default Item When Databinding RadComboBox



## 

This article shows how to add a default item (like "Select a country") that does not belong to the datasource of a databound RadComboBox.

The mandatory thing to do is to set the __AppendDataBoundItems__ property of the combobox to *True*. This will ensure that both databound items and manually inserted item can be shows in the dropdown.

The next step is to add the static item. You can add it either inline (in the <Items> </Items> section) or in the code behind. If you prefer the latter approach you need to add the item in the __DataBound__ event of the combobox (not to be mistaken with [ItemDataBound]({%slug combobox/server-side-programming/itemdatabound%}) event). The __DataBound__ event fires after all items are bound and loaded to the combobox:

>tabbedCode

````C#
	
	    protected void RadComboBox1_DataBound(object sender, EventArgs e) 
	    { 
	        var combo = (RadComboBox)sender; 
	        combo.Items.Insert(0, new RadComboBoxItem("Select a country", string.Empty)); 
	    }
	
````
````VB.NET
	
	
	    Protected Sub RadComboBox1_DataBound(ByVal sender As Object, ByVal e As EventArgs)
	
	        Dim combo As RadComboBox = DirectCast(sender, RadComboBox)
	        combo.Items.Insert(0, New RadComboBoxItem("Select a country", String.Empty))
	
	    End Sub
	
````
>end

That was easy. What if your combobox uses [Templates]({%slug combobox/templates/overview%})? For example, the template could look like this:

````C#
	    <itemtemplate> 
	    <ul>     
	        <li class="col1"><%# DataBinder.Eval(Container.DataItem, "CompanyName") %></li>     
	        <li class="col2"><%# DataBinder.Eval(Container.DataItem, "City") %></li>     
	        <li class="col3"><%# DataBinder.Eval(Container.DataItem, "ContactTitle") %></li>
	     </ul>
	     </itemtemplate>
````



Now, if you just add a static item to the combobox - it will not be shown as an item when you open the dropdown. Because its DataItem property is NULL (since it is added as static item) and the DataBinder.Eval() expression returns nothing. Here is what you can do - the following code will insert the __Select a country__ text in the first column of the combobox:

````C#
	    <ItemTemplate>
	    <ul>
	        <li class="col1"><%# Container.DataItem != null ? DataBinder.Eval(Container.DataItem, "CompanyName") : DataBinder.Eval(Container, "Text") %></li>
	        <li class="col2"><%# DataBinder.Eval(Container.DataItem, "City") %></li>
	        <li class="col3"><%# DataBinder.Eval(Container.DataItem, "ContactTitle") %></li>
	    </ul>
	    </ItemTemplate>
	    <Items>
	       <telerik:RadComboBoxItem Text="Select a country" />
	    </Items> 
````



This way, the "Select a country" item will have its DataItem property null, so the dropdown will take its __Text__ property.
