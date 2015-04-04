---
title: TextChanged
page_title: TextChanged | UI for ASP.NET AJAX Documentation
description: TextChanged
slug: combobox/server-side-programming/textchanged
tags: textchanged
published: True
position: 5
---

# TextChanged



## 

The __TextChanged__ event occurs when the text in the input area of __RadComboBox__ changes. This can be due to the user typing in custom text (if the __AllowCustomText__ property is __True__) or to changing the selected item. When the user types in the input area, __TextChanged__ does not occur until the user hits Enter or clicks outside the combobox. When the selection changes, __TextChanged__ only occurs if a new item is selected.

>caution The __TextChanged__ event does not fire unless the __AutoPostBack__ property is __True__ .
>


The __TextChanged__ event handler receives two arguments:

1. The __RadComboBox__ that is loading items. This argument is of type object, but can be cast to the __RadComboBox__ type.

1. An EventArgs object. This is the standard ASP.NET EventArgs object.

Use the __TextChanged__ event handler to respond in server-side code when text in the input area changes:

````ASPNET
	    <telerik:radcombobox 
	        id="RadComboBox1"
	        runat="server" 
	        ontextchanged="RadComboBox1_TextChanged"
	        allowcustomtext="True" 
	        autopostback="True">
	    </telerik:radcombobox>
````



>tabbedCode

````C#
	     
	
	protected void RadComboBox1_TextChanged(object sender, EventArgs e)
	{   
	    TextBox1.Text = RadComboBox1.Text;
	}
				
````
````VB.NET
	
	    Protected Sub RadComboBox1_TextChanged(ByVal sender As Object, ByVal e As EventArgs)
	
	        TextBox1.Text = RadComboBox1.Text
	
	    End Sub
	
````
>end

# See Also

 * [SelectedIndexChanged]({%slug combobox/server-side-programming/selectedindexchanged%})

 * [OnClientKeyPressing]({%slug combobox/client-side-programming/events/onclientkeypressing%})
