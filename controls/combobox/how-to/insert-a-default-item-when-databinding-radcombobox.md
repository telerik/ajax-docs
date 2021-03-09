---
title: Insert a Default Item When Databinding RadComboBox
page_title: Insert a Default Item When Databinding RadComboBox - RadComboBox
description: Check our Web Forms article about Insert a Default Item When Databinding RadComboBox.
slug: combobox/how-to/insert-a-default-item-when-databinding-radcombobox
tags: insert,a,default,item,when,databinding,radcombobox
published: True
position: 11
---

# Insert a Default Item When Databinding RadComboBox

This article shows how to add a default item that does not belong to the datasource of a databound RadComboBox. This is useful if you want to add a hint. For example, you can add the *Select a country* item to a ComboBox that is bound to datasource with countries. The *Select a country* item will appear as the default item and will remind the users to select a country before continuing.

To add the default item:

1. Set the **AppendDataBoundItems** property of the ComboBox to `True`. This ensures that both databound items and manually inserted items are shown in the dropdown.

1. Add the static item.

   * You can add the item inline (in the `<Items>` `</Items>` section).

   * You can add the item in the code behind. You need to add the item in the **DataBound** event of the ComboBox (not to be mistaken with [ItemDataBound]({%slug combobox/server-side-programming/itemdatabound%}) event). The **DataBound** event fires after all items are bound and loaded to the combobox:

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

## Add a Default Item When Using Templates

If your combobox uses [Templates]({%slug combobox/templates/overview%}), the template could look like this:

````ASP.NET
<ItemTemplate>
    <ul>
        <li class="col1"><%# DataBinder.Eval(Container.DataItem, "CompanyName") %></li>
        <li class="col2"><%# DataBinder.Eval(Container.DataItem, "City") %></li>
        <li class="col3"><%# DataBinder.Eval(Container.DataItem, "ContactTitle") %></li>
    </ul>
</ItemTemplate>
````

Now, if you just add a static item to the combobox - it will not be shown as an item when you open the dropdown. Because its DataItem property is NULL (since it is added as static item) and the DataBinder.Eval() expression returns nothing. Here is what you can do - the following code will insert the **Select a country** text in the first column of the combobox:

````ASP.NET
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

This way, the "Select a country" item will have its DataItem property null, so the dropdown will take its **Text** property.
