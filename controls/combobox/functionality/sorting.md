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



As of Q2 2008, __RadComboBox__ introduces a new feature - __sorting__. The sorting is performed against items' __Text__, but you can [implement your own custom sorting]({%slug combobox/application-scenarios/implement-custom-sorting%}) as well.

## Enable items sorting

To enable sorting you need to:

1. Set the __Sort__ property. Its value can be either __Ascending__, __Descending__ or __None__ (default).

* In code-behind:

>tabbedCode

````C#
	     
	
	RadComboBox1.Sort = RadComboBoxSort.Descending;
				
````



````VB.NET
	
		    RadComboBox1.Sort = RadComboBoxSort.Descending
	
````


>end

* Inline:

````ASPNET
	    <telerik:radcombobox id="RadComboBox1" runat="server" skin="Sunset" sort="Ascending"></telerik:radcombobox>
````



2. Call the __SortItems()__ method of the combobox or __Items.Sort()__ method of the items collection. These approaches are equal:

* RadComboBox1.SortItems()

* RadComboBox1.Items.Sort()

>note  __SortItems__ and __Items.Sort__ methods have overload methods that accept one parameter of type __IComparer__ . These overload methods are used if you want to[implement your custom sorting]({%slug combobox/application-scenarios/implement-custom-sorting%}).
>


## Case sensitive sorting

Sorting is case sensitive by default. This means that the item "telerik" will be in front of item "Teleriik" if the sort type is Ascending.

To enable / disable the case sensitive sorting set the __SortCaseSensitive__ property of the combobox to either True or False.

## Sorting of data-bound items

If you want to sort the items of a combobox bound to a __declarative datasource__, you need to call the SortItems (Items.Sort) method in the __DataBound__ event handler of the combobox:

>tabbedCode

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


>end

>caution Note that __DataBound__ event occurs after the server control binds to a data source and is __different__ from[ItemDataBound]({%slug combobox/server-side-programming/itemdatabound%})event.
>


# See Also

 * [Implement Custom Sorting]({%slug combobox/application-scenarios/implement-custom-sorting%})
