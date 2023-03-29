---
title: How to apply Navigation Urls to RadDrawer
description: The article shows how to navigate to another page after clicking on a drawer item similar to the NavigateUrl functionality of RadMenu
type: how-to
page_title: Implement NavigateUrl functionality for the Drawer items
slug: drawer-implement-navigate-url-feature
position: 
tags: 
ticketid: 1603352
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadDrawer for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
The how-to article shows how to navigate to another page after clicking on a drawer item similar to the NavigateUrl functionality of RadMenu.

## Solution
RadDrawer is a light-weight control based on the Kendo UI drawer widget and you can implement the navigation functionality, by adding `<a>` tags inside its ItemsTemplate, e.g.

````ASPX
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style>
        .RadDrawer .k-drawer-items {
            padding: 0 8px;
            line-height: 2em;
        }
    </style>
</head>
<body onload="showDrawer();">
    <form id="form1" runat="server">
        <telerik:RadScriptManager runat="server"></telerik:RadScriptManager>
        <script>
            function showDrawer(sender, args) {
                var drawer = $find("<%= OverlayDrawer.ClientID %>");
                drawer.show();
            }
        </script>


        <telerik:RadDrawer runat="server" ID="OverlayDrawer"
            Position="left" Mode="Push"
            SwipeToOpen="false">
            <ItemsTemplate>
              <ul>
                <li style='display:block; padding: 0 8px;'><a href='https://www.telerik.com' style='display:block;width:100%;text-decoration:none;color:black;'>Telerik Website</a></li>
                <li style='display:block; padding: 0 8px;'><a href='https://demos.telerik.com' style='display:block;width:100%;text-decoration:none;color:black;'>Demos</a></li>
                <li style='display:block; padding: 0 8px;'><a href='https://www.telerik.com/documentation' style='display:block;width:100%;text-decoration:none;color:black;'>Documentation</a></li>
              </ul>
            </ItemsTemplate>
        </telerik:RadDrawer>
    </form>
</body>
</html>
````
  
     