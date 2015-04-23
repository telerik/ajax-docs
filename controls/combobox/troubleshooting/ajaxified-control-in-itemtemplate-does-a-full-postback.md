---
title: Ajaxified Control in ItemTemplate Does a Full Postback
page_title: Ajaxified Control in ItemTemplate Does a Full Postback | RadComboBox for ASP.NET AJAX Documentation
description: Ajaxified Control in ItemTemplate Does a Full Postback
slug: combobox/troubleshooting/ajaxified-control-in-itemtemplate-does-a-full-postback
tags: ajaxified,control,in,itemtemplate,does,a,full,postback
published: True
position: 6
---

# Ajaxified Control in ItemTemplate Does a Full Postback



## 

As of Q1 SP2, RadComboBox exposes a new client-side method - **attachDropDown**.

It should be used in the following scenario:

* Ajaxified RadComboBox with ItemTemplate

* A control in the ItemTemplate performs postback

**Expected result**: postback transformed to ajax request

**Problem**: full postback is performed in this situation.

The following example shows how to use the **attachDropDown** method to overcome the described problem.

````ASPNET

<telerik:RadComboBox ID="RadComboBox1" runat="server">
<ItemTemplate>
<div id="div1" onclick="StopPropagation(event)">
 <telerik:RadCalendar ID="RadCalendar1"
	TitleFormat="MMMM yyyy"
	Skin="Vista"
	style="margin: 0 auto;"
	ShowRowHeaders="false"
	AutoPostBack="true"
	ClientEvents-OnDateClick="OnDateClick"  
	ClientEvents-OnDateSelecting="OnDateSelecting"
	EnableMultiSelect="false"
	OnSelectionChanged="RadCalendar1_SelectionChanged"  >
 </telerik:RadCalendar>
</div>
</ItemTemplate>
<Items>
<telerik:RadComboBoxItem runat="server"></telerik:RadComboBoxItem>
</Items>
</telerik:RadComboBox>
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
   <AjaxSettings>
	   <telerik:AjaxSetting AjaxControlID="RadComboBox1">
		   <UpdatedControls>
			   <telerik:AjaxUpdatedControl ControlID="RadComboBox1" />
		   </UpdatedControls>
	   </telerik:AjaxSetting>
   </AjaxSettings>
</telerik:RadAjaxManager> 

````



````JavaScript
	
function OnDateClick(sender, args) 
 {
	args.get_domEvent().stopPropagation();
 }
function OnDateSelecting(sender, args)
 {
	if (args.get_isSelecting()) 
	{
		var combo = $find("<%= RadComboBox1.ClientID %>");
		combo.attachDropDown();
	}
	args.set_cancel(!args.get_isSelecting());
}

function StopPropagation(e) 
{
	e.cancelBubble = true;
	if (e.stopPropagation)
	 {
		e.stopPropagation();
	 } 
}
	
````



Basically, you need to subscribe to the client-side event fired from the control in the ItemTemplate (RadCalendar) which occurs before the postback. In this case this is **ClientEvents-OnDateSelecting,** but it could be **OnClientNodeClicking** if we were using the RadTreeView instead of RadCalendar.
