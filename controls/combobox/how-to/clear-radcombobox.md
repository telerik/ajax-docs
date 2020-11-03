---
title: Clear RadComboBox
page_title: Clear RadComboBox | RadComboBox for ASP.NET AJAX Documentation
description: Clear RadComboBox
slug: combobox/how-to/clear-radcombobox
tags: clear,radcombobox
published: True
position: 9
---

# Clear RadComboBox



## 

This article explains how to reset / clear RadComboBox.

Resetting the combobox depends on the [**AllowCustomText** property]({%slug combobox/functionality/end-user-restriction%}) - if it is set to **True** then you can clear the combo by calling its **ClearSelection()** server method and resetting its Text to an empty string:

````ASP.NET

<asp:ScriptManager ID="RadScriptManager1" runat="server"></asp:ScriptManager>
<telerik:RadComboBox ID="RadComboBox1" MaxHeight="200px" AllowCustomText="true" runat="server" EmptyMessage="-- Select Office Location --" >
    <Items>
        <telerik:RadComboBoxItem Text="Item1" Value="Item1" />
        <telerik:RadComboBoxItem Text="Item2" Value="Item2" />
        <telerik:RadComboBoxItem Text="Item3" Value="Item3" />
    </Items>
</telerik:RadComboBox>
<telerik:RadButton runat="server" ID="RadButton1" Text="Clear Selection" AutoPostBack="true" OnClick="RadButton1_Click" />

````

````C#
	     
protected void RadButton1_Click(object sender, EventArgs e)
{
    RadComboBox1.ClearSelection();
    RadComboBox1.Text = String.Empty;
}
				
````

````VB.NET
	     
Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
    RadComboBox1.ClearSelection()
    RadComboBox1.Text = String.Empty
End Sub
				
````

When **AllowCustomText** is **false** (its default value) and the **EmptyMessage** is set, the above code sample will work as expected too.

If **AllowCustomText** is **false** and if the **EmptyMessage** is not set then the combo will always have one selected item. What you can do here is to select the first item (it can be the item holding the "Select a product" text for example)

````C#
	     
RadComboBox1.Items[0].Selected = true;
				
````


````VB.NET
	     
RadComboBox1.Items(0).Selected = True
				
````

When the RadComboBox checkBoxes are enabled, the method that you can use to clear the "selection" is named ClearCheckedItems() instead of ClearSelection().

````C#
	     
RadComboBox1.ClearCheckedItems();
				
````


````VB.NET
	     
RadComboBox1.ClearCheckedItems()
				
````


Additionally, you can clear the items by using **clearItems()** client-side method or **RadComboBox1.Items.Clear()** server side method. Again, if the combobox's **AllowCustomText** is True then you need to manually set the **Text** of the RadComboBox to **string.Empty**.

# See Also

 * [Clear button on RadComboBox](https://www.telerik.com/forums/clear-button-on-radcombbox#bNcNnq0fZ0GbMi2qUiEcgw)
 * [How to reset RadComboBox with Checkboxes using Javascript]({%slug combobox/client-side-programming/objects/radcombobox-object%})
	
