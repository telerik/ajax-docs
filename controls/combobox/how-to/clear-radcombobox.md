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

Resetting the combobox depends on the **AllowCustomText** property - if it is set to **True** then you can clear the combo by calling its **ClearSelection()** server method and resetting its Text to an empty string:

````C#
	     
combo.ClearSelection();
combo.Text = string.Empty;
				
````



If **AllowCustomText** is **False** - then the combo will always have one selected item (just like the standard DropDownList has). What you can do here is to select the first item (it can be the item holding the "Select a product" text for example):

````C#
	     
combo.Items[0].Selected = true;
				
````



Additionally, you can clear the items by using **clearItems()** client-side method or **combo.Items.Clear()** server side method. Again, if the combobox's **AllowCustomText** is True then you need to manually set the **Text** of the RadComboBox to **string.Empty**.
