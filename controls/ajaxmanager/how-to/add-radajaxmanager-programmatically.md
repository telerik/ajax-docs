---
title: Add the AjaxManager Programmatically
page_title: Add the AjaxManager Programmatically
description: "Learn how to programmatically add the RadAjaxManager when working with Telerik UI for ASP.NET AJAX."
slug: ajaxmanager/how-to/add-radajaxmanager-programmatically
previous_url: ajax/radajaxmanager/how-to/add-radajaxmanager-programmatically, controls/ajaxmanager/how-to/add-radajaxmanager-programmatically 
tags: telerik, asp, net, ajax, manager, add, radajaxmanager, programmatically
published: True
type: how-to
category: knowledge-base
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX AjaxManager</td>
		</tr>
	</tbody>
</table>

## Description

How can I programmatically create an AjaxManager control?

## Solution

To achieve the desired scenario, you need to create the AjaxManager in the `Page_Init` event on a later stage. 

The following example demonstrates how to define the AjaxManager control. 


````C#
protected void Page_Init(object sender, EventArgs e)
{
	RadAjaxManager manager = new RadAjaxManager();
	manager.ID = "RadAjaxManager1";
	this.Page.Form.Controls.Add(manager);
} 							
````
````VB
Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Init
	Dim manager As New RadAjaxManager()
	manager.ID = "RadAjaxManager1"
	Me.Page.Form.Controls.Add(manager)
End Sub
````


Now you need to access the `RadAjaxManager` instance by calling the `GetCurrent()` static method of the `RadAjaxManager` class. Note that if you are creating the `ScriptManager` dynamically as well, you have to add it to the `Page.Form.Controls` collection before the `RadAjaxManager` control.

**Server-Side**


````C#
protected void Page_Load(object sender, EventArgs e)
{    
	RadAjaxManager manager = RadAjaxManager.GetCurrent(Page);
}
				
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	Dim manager As RadAjaxManager = RadAjaxManager.GetCurrent(Page)
End Sub
````


````JavaScript
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	<script type="text/javascript">
	    function GetAjaxManager() {
	        var manager = $find("<%= RadAjaxManager.GetCurrent(Page).ClientID %>")
	    }
	</script>
</telerik:RadCodeBlock>
````


