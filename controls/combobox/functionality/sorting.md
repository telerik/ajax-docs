---
title: Sorting
page_title: Sorting | UI for ASP.NET AJAX Documentation
description: Sorting
slug: combobox/functionality/sorting
tags: sorting
published: True
position: 1
---

# Sorting



As of Q2 2008, **RadComboBox** introduces a new feature - **sorting**. The sorting is performed against items' **Text**, but you can [implement your own custom sorting]({%slug combobox/how-to/implement-custom-sorting%}) as well.

## Enable items sorting

To enable sorting you need to:

1. Set the **Sort** property. Its value can be either **Ascending**, **Descending** or **None** (default).

	* In code-behind:



````C#
			
RadComboBox1.Sort = RadComboBoxSort.Descending;
				
````
````VB.NET
	
RadComboBox1.Sort = RadComboBoxSort.Descending
	
````


	* Inline:

````ASPNET
<telerik:radcombobox id="RadComboBox1" runat="server" skin="Sunset" sort="Ascending"></telerik:radcombobox>
````



2. Call the **SortItems()** method of the combobox or **Items.Sort()** method of the items collection. These approaches are equal:

	* RadComboBox1.SortItems()

	* RadComboBox1.Items.Sort()

>note  **SortItems** and **Items.Sort** methods have overload methods that accept one parameter of type **IComparer** . These overload methods are used if you want to [implement your custom sorting]({%slug combobox/how-to/implement-custom-sorting%}).
>


## Case sensitive sorting

Sorting is case sensitive by default. This means that the item "telerik" will be in front of item "Teleriik" if the sort type is Ascending.

To enable / disable the case sensitive sorting set the **SortCaseSensitive** property of the combobox to either True or False.

## Sorting of data-bound items

If you want to sort the items of a combobox bound to a **declarative datasource**, you need to call the SortItems (Items.Sort) method in the **DataBound** event handler of the combobox:



````C#
	     	
protected void RadComboBox1_DataBound(object sender, EventArgs e)
{            
	RadComboBox1.Items.Sort();
}
				
````
````VB.NET
	
Protected Sub RadComboBox1_DataBound(ByVal sender As Object, ByVal e As System.EventArgs) Handles RadComboBox1.DataBound

	RadComboBox1.Items.Sort()

End Sub
	
````


>caution Note that **DataBound** event occurs after the server control binds to a data source and is **different** from [ItemDataBound]({%slug combobox/server-side-programming/itemdatabound%}) event.
>


# See Also

 * [Implement Custom Sorting]({%slug combobox/how-to/implement-custom-sorting%})
