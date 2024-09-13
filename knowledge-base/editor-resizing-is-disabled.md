---
title: RadEditor does not allow manual resize since the resize handle is hidden
description: The resize handle is hidden when EditModes is set to Design in Classic render mode. See how to activate it.
type: troubleshooting
page_title: The resize handle gets hidden when EditModes is set to Default in Classic render mode
slug: editor-resizing-is-disabled
position: 
tags: 
ticketid: 1577867
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadEditor for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description

The resize handle gets hidden when EditModes is set to Design in Classic render mode. See how to activate it and solve the issue.

## Solution

There are two approaches to allow the resizing:

* Set the RenderMode to Lightweight and the resize handler will appear when the EditModes property is set to Design.
* or Keep the RenderMode to Classic, but not set the EditModes. Instead of this hide the Design, Html and Preview buttons with a CSS class:

````ASP.NET
<telerik:RadEditor ID="redQuestion" runat="server" EditModes="Design" Skin="Bootstrap" Width="100%" Height="350px" RenderMode="Classic" BorderStyle="Solid" BorderColor="Black" BorderWidth="1" />
````

````CSS
.reEditorModes {
    display: none;
}
````
 
  