---
title: The iframe content gets invisible when dragging the window
description: RadWindow hides the iframes when resized or moved to prevent problems with the built-in events capturing of the iframes.
type: troubleshooting
page_title: When dragging RadWindow the iframe content disappears
slug: window-iframe-content-gets-invisible-when-dragging-the-window
position: 
tags: 
ticketid: 526575
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
When you move an HTML object on a page and there is an iframe on that page, it is possible that the cursor go into the iframe. If this happens, the iframe will consume the cursor events, which will lead to problems with the resize / movement of the object on the main page.

To prevent this unwanted focus capturing behavior of the iframes, RadWindow hides them when it is moved or resized.

## Solution
If you don't like this behavior, you can disabling the feature of the RadWIndow that hides the iframes on the page by attaching to the OnClientDragStart event of the window manager and firing the set_hideIframes(false) method:

````ASPNET
<telerik:RadWindowManager ID="RadWindowManager1" runat="server" RenderMode="Lightweight"
    OnClientDragStart="OnClientDragStartHandler">
    <Windows>
        <telerik:RadWindow RenderMode="Lightweight" ID="test1"  VisibleOnPageLoad="true" runat="server" />
    </Windows>
</telerik:RadWindowManager>
````

````JavaScript
<script type="text/javascript">
    function OnClientDragStartHandler(oWin, args) {
        var resizeExtender = oWin._resizeExtender;
        //disable iframe hiding
        resizeExtender.set_hideIframes(false);
    }
</script>
````

