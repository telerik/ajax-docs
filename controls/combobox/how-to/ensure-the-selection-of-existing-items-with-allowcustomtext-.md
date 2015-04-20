---
title: Ensure the Selection of Existing Items with AllowCustomText 
page_title: Ensure the Selection of Existing Items with AllowCustomText  | UI for ASP.NET AJAX Documentation
description: Ensure the Selection of Existing Items with AllowCustomText 
slug: combobox/how-to/ensure-the-selection-of-existing-items-with-allowcustomtext-
tags: ensure,the,selection,of,existing,items,with,allowcustomtext,
published: True
position: 4
---

# Ensure the Selection of Existing Items with AllowCustomText 



## 

Often, you need to allow users to type in **RadComboBox**, but you want to be sure that the user selects one of the **existing** items from the dropdown. Here are a few ways to accomplish this:

* Set the **MarkFirstMatch** property to **True** and **AllowCustomText** property to **False**.

In load-on-demand scenario the user will be able to type anything into the input area and if no item matches - the input area will be reset to blank.In non load-on-demand scenario the user will be able to type only letters that match text of the items.

* Subscribe to the [OnClientBlur]({%slug combobox/client-side-programming/events/onclientblur%}) client-side event and define its handler as follows:

````JavaScript
		
function OnClientBlurHandler(sender, eventArgs) {
	var textInTheCombo = sender.get_text();
	var item = sender.findItemByText(textInTheCombo);
	//if there is no item with that text
	if (!item) {
		sender.set_text("");
		setTimeout(function () {
			var inputElement = sender.get_inputDomElement();
			inputElement.focus();
			inputElement.style.backgroundColor = "red";
		}, 20);
	}
}
				
````


