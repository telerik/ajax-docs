---
title: SelectedIndexChanged
page_title: SelectedIndexChanged | UI for ASP.NET AJAX Documentation
description: SelectedIndexChanged
slug: combobox/server-side-programming/selectedindexchanged
tags: selectedindexchanged
published: True
position: 4
---

# SelectedIndexChanged



## 

The __SelectedIndexChanged__ event occurs when the user selects a new item in the drop-down list.

>caution The __SelectedIndexChanged__ event does not fire unless the __AutoPostBack__ property is __True__ .
>


The __SelectedIndexChanged__ event handler receives two arguments:

1. The __RadComboBox__ that is loading items. This argument is of type object, but can be cast to the __RadComboBox__ type.

1. An EventArgs object. This object has the following properties for identifying what has changed:

* __Text__ is the text of the item that was just selected.

* __Value__ is the value of the item that was just selected.

* __OldText__ is the text of the item that was previously selected

* __OldValue__ is the value of the item that was previously selected

Use the __SelectedIndexChanged__ event handler to respond in server-side code when the user changes the current selection:

````ASPNET
	    <telerik:radcombobox 
	        id="RadComboBox1" 
	        runat="server" 
	        autopostback="True" 
	        onselectedindexchanged="RadComboBox1_SelectedIndexChanged">
	    </telerik:radcombobox>
````



>tabbedCode

````C#
	
	
	    protected void RadComboBox1_SelectedIndexChanged(object o, Telerik.Web.UI.RadComboBoxSelectedIndexChangedEventArgs e)
	    {
	        Label1.Text = "You selected " + e.Text + " item";
	    }
	
````
````VB.NET
	
	    Protected Sub RadComboBox1_SelectedIndexChanged(ByVal o As Object, ByVal e As Telerik.Web.UI.RadComboBoxSelectedIndexChangedEventArgs)
	
	        Label1.Text = "You selected " + e.Text + " item"
	
	    End Sub
	
````
>end

# See Also

 * [TextChanged]({%slug combobox/server-side-programming/textchanged%})

 * [OnClientSelectedIndexChanging]({%slug combobox/client-side-programming/events/onclientselectedindexchanging%})

 * [OnClientSelectedIndexChanged]({%slug combobox/client-side-programming/events/onclientselectedindexchanged%})
