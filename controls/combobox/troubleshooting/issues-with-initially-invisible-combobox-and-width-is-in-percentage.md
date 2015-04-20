---
title: Issues With Initially Invisible ComboBox and Width Is in Percentage
page_title: Issues With Initially Invisible ComboBox and Width Is in Percentage | UI for ASP.NET AJAX Documentation
description: Issues With Initially Invisible ComboBox and Width Is in Percentage
slug: combobox/troubleshooting/issues-with-initially-invisible-combobox-and-width-is-in-percentage
tags: issues,with,initially,invisible,combobox,and,width,is,in,percentage
published: True
position: 11
---

# Issues With Initially Invisible ComboBox and Width Is in Percentage



## 

The width of the ComboBox is incorrect after showing if it has Label

![ComboBox Not Initially Visible](images/combobox_initiallyinvisiblecomboboxwithlabelandpercentagewidth.png)

````XML
<telerik:radcombobox 
	id="RadComboBox1" 
	runat="server" 
	label="label"
	width="50%">
</telerik:radcombobox>
````



Call the **repaint()** method of the ComboBox client-side object to resolve the issue after you show it or its invisible container for the first time.

Clicks on the input of a ComboBox pass through the containing IFrame (RadWindow) into the owner document

You can resolve the issue by calling comboBox.**repaint()** after you show the ComboBox. The most common case of this issue is when the ComboBox is in a RadWindow.
