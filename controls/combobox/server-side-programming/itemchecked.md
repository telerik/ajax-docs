---
title: ItemChecked
page_title: ItemChecked | UI for ASP.NET AJAX Documentation
description: ItemChecked
slug: combobox/server-side-programming/itemchecked
tags: itemchecked
published: True
position: 6
---

# ItemChecked



## 

The __ItemChecked__ event occurs when the user checks a new item in the drop-down list.

>caution The __ItemChecked__ event does not fire unless the __AutoPostBack__ property is __True__ as well as __CheckBoxes__ property .
>


>note The CheckBox support of RadComboBox is added in version 2011 Q2. Before then, this functionality is achieved using templates.
>


The __ItemChecked__ event handler receives two arguments:

1. The __RadComboBox__ which has fired the event. This argument is of type object, but can be cast to the __RadComboBox__ type.

1. An EventArgs object. This object has an __Item__ property, which provides access to the item that has just been checked.

Use the __ItemChecked__ event handler to respond in server-side code when the user checks an item:

````ASPNET
	    <telerik:radcombobox onitemchecked="OnItemChecked" runat="server" checkboxes="True"
	        autopostback="true">          
	        </telerik:radcombobox>
````



>tabbedCode

````C#
	
	    protected void OnItemChecked(object sender, RadComboBoxItemEventArgs e)
	    {
	        Label1.Text += e.Item.Text + " is checked; ";
	
	    }
	
````



````VB.NET
	
	    Protected Sub OnItemChecked(ByVal sender As Object, ByVal e As RadComboBoxItemEventArgs)
	        Label1.Text += e.Item.Text + " is checked; "
	
	    End Sub
	
````


>end

# See Also

 * [TextChanged]({%slug combobox/server-side-programming/textchanged%})

 * [OnClientItemChecking]({%slug combobox/client-side-programming/events/onclientitemchecking%})

 * [OnClientItemChecked]({%slug combobox/client-side-programming/events/onclientitemchecked%})

 * [CheckBox Support]({%slug combobox/functionality/checkbox-support%})
