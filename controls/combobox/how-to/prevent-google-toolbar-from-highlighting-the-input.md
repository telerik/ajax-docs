---
title: Prevent Google ToolBar from Highlighting the Input
page_title: Prevent Google ToolBar from Highlighting the Input | RadComboBox for ASP.NET AJAX Documentation
description: Prevent Google ToolBar from Highlighting the Input
slug: combobox/how-to/prevent-google-toolbar-from-highlighting-the-input
tags: prevent,google,toolbar,from,highlighting,the,input
published: True
position: 6
---

# Prevent Google ToolBar from Highlighting the Input



## 

If you have Google ToolBar installed you might face the following problem - some of your inputs or RadComboBoxes can have their background changed. Here is a screenshot of this:

![ComboBox Google ToolBar](images/combobox_google_toolbar_problem.PNG)

The first two comboboxes has their background-color property overridden by Google ToolBar (Note that this happens if the **AutoFill** settings of the toolbar is *On* which is by default).

My RadComboBoxes' declaration is below:

````ASPNET
Enter Your Name:
<telerik:RadComboBox ID="FullName" runat="server" Skin="Vista" AllowCustomText="true">
</telerik:RadComboBox><br />
Enter Your Email :
<telerik:RadComboBox ID="Email" runat="server" Skin="Vista" AllowCustomText="true">
</telerik:RadComboBox><br />
Enter Your ..........
<telerik:RadComboBox ID="RadComboBox1" runat="server" Skin="Vista" AllowCustomText="true">
</telerik:RadComboBox>
````



Note that the IDs of the first two comboboxes are: **FullName** and **Email**. Because of them the Google ToolBar can change the background color of the input area. The third combobox has ID = RadComboBox1 and it is not modified by the toolbar.

So, one of your options is to change the ID of the control to something different from the standard words: "Name", "Fullname", "Email", etc.

The other option is to add the following javascript to your page:

````JavaScript

function pageLoad1() {
	var combos = Telerik.Web.UI.RadComboBox.ComboBoxes;
	for (i = 0; i < combos.length; i++) {
		var input = combos[i].get_inputDomElement();
		if (input.attachEvent) {
			input.attachEvent("onpropertychange", restoreStyles);
		}
		else if (input.addEventListener) {
			input.addEventListener("DOMAttrModified", restoreStyles, false);
		}

		input.style.backgroundColor = "";
	}
}
function restoreStyles() {
	if (event.srcElement.style.backgroundColor != "")
		event.srcElement.style.backgroundColor = "";
}
	
````


