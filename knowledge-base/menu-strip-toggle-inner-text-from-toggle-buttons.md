---
title: Toggle handle text appears in search engine results
description: The system Toggle text of RadMenu might be crawled by the search engine and shown in the results. See how to strip down the toggle string from the toggle menu items - Telerik UI for ASP.NET AJAX
type: troubleshooting
page_title: Toggle handle text appears in search engine results
slug: menu-strip-toggle-inner-text-from-toggle-buttons
position: 
tags: 
ticketid: 1574646
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadMenu for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
The system Toggle text of RadMenu toggle buttons might get crawled by the search engines and shown in the results. If you experience such a problem, check out the solution below.

## Solution
The code solution shows how to go through all toggle buttons and strip down their "Toggle" system text:

````ASP.NET
    <script>
        function OnClientLoad(sender, args) {
            var toggleIconButtons = $telerik.$(".rmIcon");
            for (var i = 0; i < toggleIconButtons.length; i++) {
                var toggleIconButton = toggleIconButtons[i];
                if (toggleIconButton.innerText == "Toggle") {
                    toggleIconButton.innerText = "";
                }
            }
            
        }
    </script>
    <telerik:RadMenu RenderMode="Lightweight" OnClientLoad="OnClientLoad" ID="RadMenu1" CssClass="mainMenu" runat="server" ShowToggleHandle="true">
        <Items>
            <telerik:RadMenuItem Text="Products">
                <GroupSettings Width="200px" />
                <Items>
                    <telerik:RadMenuItem Text="Chairs" NavigateUrl="DefaultCS.aspx?page=chairs" EnableImageSprite="true" CssClass="icon-chair"></telerik:RadMenuItem>
                    <telerik:RadMenuItem Text="Sofas" NavigateUrl="DefaultCS.aspx?page=sofas" EnableImageSprite="true" CssClass="icon-sofa"></telerik:RadMenuItem>
                    <telerik:RadMenuItem Text="Tables" NavigateUrl="DefaultCS.aspx?page=tables" EnableImageSprite="true" CssClass="icon-table"></telerik:RadMenuItem>
                </Items>
            </telerik:RadMenuItem>
            <telerik:RadMenuItem Text="Products 2">
                <GroupSettings Width="200px" />
                <Items>
                    <telerik:RadMenuItem Text="Chairs" NavigateUrl="DefaultCS.aspx?page=chairs" EnableImageSprite="true" CssClass="icon-chair"></telerik:RadMenuItem>
                    <telerik:RadMenuItem Text="Sofas" NavigateUrl="DefaultCS.aspx?page=sofas" EnableImageSprite="true" CssClass="icon-sofa"></telerik:RadMenuItem>
                    <telerik:RadMenuItem Text="Tables" NavigateUrl="DefaultCS.aspx?page=tables" EnableImageSprite="true" CssClass="icon-table"></telerik:RadMenuItem>
                </Items>
            </telerik:RadMenuItem>
        </Items>
    </telerik:RadMenu>
````

For more information check out the following forum thread: [Toggle handle text](https://www.telerik.com/forums/toggle-handle-text).

   
 