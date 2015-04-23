---
title: ItemChecked
page_title: ItemChecked | RadComboBox for ASP.NET AJAX Documentation
description: ItemChecked
slug: combobox/server-side-programming/itemchecked
tags: itemchecked
published: True
position: 6
---

# ItemChecked



## 

The **ItemChecked** event occurs when the user checks a new item in the drop-down list.

>caution The **ItemChecked** event does not fire unless the **AutoPostBack** property is **True** as well as **CheckBoxes** property .
>


>note The CheckBox support of RadComboBox is added in version 2011 Q2. Before then, this functionality is achieved using templates.
>


The **ItemChecked** event handler receives two arguments:

1. The **RadComboBox** which has fired the event. This argument is of type object, but can be cast to the **RadComboBox** type.

1. An EventArgs object. This object has an **Item** property, which provides access to the item that has just been checked.

Use the **ItemChecked** event handler to respond in server-side code when the user checks an item:

````ASPNET
<telerik:radcombobox onitemchecked="OnItemChecked" runat="server" checkboxes="True"
	autopostback="true">          
</telerik:radcombobox>
````





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


# See Also

 * [TextChanged]({%slug combobox/server-side-programming/textchanged%})

 * [OnClientItemChecking]({%slug combobox/client-side-programming/events/onclientitemchecking%})

 * [OnClientItemChecked]({%slug combobox/client-side-programming/events/onclientitemchecked%})

 * [CheckBox Support]({%slug combobox/functionality/checkbox-support%})
