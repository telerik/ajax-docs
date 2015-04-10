---
title: Clear RadComboBox
page_title: Clear RadComboBox | UI for ASP.NET AJAX Documentation
description: Clear RadComboBox
slug: combobox/how-to/clear-radcombobox
tags: clear,radcombobox
published: True
position: 9
---

# Clear RadComboBox



## 

This article explains how to reset / clear RadComboBox.

Resetting the combobox depends on the __AllowCustomText__ property - if it is set to __True__ then you can clear the combo by calling its __ClearSelection()__ server method and resetting its Text to an empty string:

````C#
	     
			combo.ClearSelection();
	        combo.Text = string.Empty;
				
````



If __AllowCustomText__ is __False__ - then the combo will always have one selected item (just like the standard DropDownList has). What you can do here is to select the first item (it can be the item holding the "Select a product" text for example):

````C#
	     
			combo.Items[0].Selected = true;
				
````



Additionally, you can clear the items by using __clearItems()__ client-side method or __combo.Items.Clear()__ server side method. Again, if the combobox's __AllowCustomText__ is True then you need to manually set the __Text__ of the RadComboBox to __string.Empty__.
