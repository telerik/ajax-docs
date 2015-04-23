---
title: Adding a Label
page_title: Adding a Label | RadComboBox for ASP.NET AJAX Documentation
description: Adding a Label
slug: combobox/appearance-and-styling/adding-a-label
tags: adding,a,label
published: True
position: 13
---

# Adding a Label



## 

As of **Q1 2010 release**, it is easy to attach a label to RadComboBox control: simply set the text of the label as the value of the **Label** property. The label automatically appears to the left of the input area:

![ComboBox With Label](images/combobox_label.png)

The look of the label text is determined by the [Skin]({%slug combobox/appearance-and-styling/skins%}) property of the RadComboBox control. When you set the Skin property, the **LabelCssClass** property is automatically set to "rcbLabel". This value is the CSS style that the skin applies to the label. You can substitute your own CSS class to change the appearance of the label by setting the **LabelCssClass** property.

This is shown in the following example:

````ASPNET
<style type="text/css">
	.myLabelCss
	{
		color: Red;
	}
</style>
````



````ASPNET
<telerik:radcombobox 
	id="test" 
	runat="server"
	label="Select" 
	labelcssclass="myLabelCss">    
	<Items>        
		<telerik:RadComboBoxItem runat="server" Text="RadComboBoxItem1" Value="RadComboBoxItem1" />        
		<telerik:RadComboBoxItem runat="server" Text="RadComboBoxItem2" Value="RadComboBoxItem2" />        
		<telerik:RadComboBoxItem runat="server" Text="RadComboBoxItem3" Value="RadComboBoxItem3" />    
	</Items>
</telerik:radcombobox>
````



And the result is:

![ComboBox Label Changed](images/combobox_label_changed.png)
