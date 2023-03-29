---
title: Close the collapsed elements dropdown after clicking on an item
description: The default behavior of the toolbar is when a user clicks on a button or another item to execute its command/handler automatically, but this operation does not close the popup with collapsed/hidden tools. The only way to collapse it is to click the split button again. The article shows how to collapse the toolbar dropdown once an item is selected from the toolbar - Telerik UI for ASP.NET AJAX
type: how-to
page_title: Close the collapsed elements dropdown after clicking on an item on the toolbar
slug: toolbar-close-dropdown-on-button-click
position: 
tags: 
ticketid: 1603255
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadToolBar for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
The default behavior is when a user clicks on a button or another item to execute its command/handler automatically, but this operation does not close the popup with collapsed/hidden tools. The only way to collapse it is to click the split button again. The article shows how to collapse the toolbar dropdown once an item is selected from the toolbar. 

## Solution
You can close the overflow (dropdown with hidden items) using the sender.get_view()._collapseMoreButton() method, e.g.

````ASPX
        <script>
            function OnClientButtonClicking(sender, args) {
                sender.get_view()._collapseMoreButton();
            }
        </script>
        <telerik:RadToolBar RenderMode="Lightweight" ID="RadToolBar1" runat="server" OnClientButtonClicking="OnClientButtonClicking">
            <Items>
                <telerik:RadToolBarButton Text="Bold" ToolTip="Bold"></telerik:RadToolBarButton>
                <telerik:RadToolBarButton Text="Italic" ToolTip="Italic"></telerik:RadToolBarButton>
                <telerik:RadToolBarButton Text="Underline" ToolTip="Underline"></telerik:RadToolBarButton>
                ...
            </Items>
        </telerik:RadToolBar>
````
   
  