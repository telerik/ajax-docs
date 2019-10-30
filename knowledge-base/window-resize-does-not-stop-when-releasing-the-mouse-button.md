---
title: RadWindow resize does not stop when releasing the mouse
description: When resizing a window by pressing and holding the left mouse button it happens that, when the mouse button is released, the resizing is not stopped. The article explains how to prevent this problem.
type: troubleshooting
page_title: Dialog resize does not stop after releasing the left mouse button
slug: window-resize-does-not-stop-when-releasing-the-mouse-button
position: 
tags: 
ticketid: 1432809
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadWindow for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
When resizing a window by pressing and holding the left mouse button it happens that, when the mouse button is released, the resizing is not stopped. Thus, the window keeps on resizing with every mouse move over it. 

In a similar way it happens, that the window cannot be resized bigger, since the cursor seems to be lost when moved outwards. Then, when the cursor reenters the window area, this one immediately resizes smaller, but the resize cannot be stopped.

## Solution
The problem is that controls in the background of the resized RadWindow capture the mouse cursor, thus causing the observed misbehavior.

The solution is to define a transparent div element covering the background controls (both in size and concerning the z-index). On resize start the div is displayed, thus preventing the background controls from capturing the mouse cursor. On resize end the div is hidden again, e.g.

````ASPNET
<div id="div_Resize" style="z-index: 10; position: absolute; height: 100%; top: 0; left: 0; right: 0; background: rgba(0, 0, 0, 0.1);"></div>
<telerik:RadWindowManager ID="RadWindowManager1" runat="server" RenderMode="Lightweight"
	OnClientResizeStart="RadWindowManager1_ClientResizeStart" OnClientResizeEnd="RadWindowManager1_ClientResizeEnd" >
</telerik:RadWindowManager>
````

````JavaScript
function RadWindowManager1_ClientResizeStart(sender, eventArgs) {
	$("#div_Resize").css("display", "block");
}

function RadWindowManager1_ClientResizeEnd(sender, eventArgs) {
	$("#div_Resize").css("display", "none");
}
````

