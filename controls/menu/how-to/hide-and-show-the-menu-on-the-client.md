---
title: Hide and Show the Menu on the Client
page_title: Hide and Show the Menu on the Client | RadMenu for ASP.NET AJAX Documentation
description: Hide and Show the Menu on the Client
slug: menu/how-to/hide-and-show-the-menu-on-the-client
tags: hide,and,show,the,menu,on,the,client
published: True
position: 2
---

# Hide and Show the Menu on the Client


## 

Here is an example of how to show/hide the menu and menu item client-side.

````ASP.NET
<telerik:RadMenu RenderMode="Lightweight" ID="RadMenu1" runat="server">
    <Items>
        <telerik:RadMenuItem runat="server" Text="root 1">
        </telerik:RadMenuItem>
        <telerik:RadMenuItem runat="server" Text="root 2">
            <Items>
                <telerik:RadMenuItem runat="server" Text="child 2.1">
                </telerik:RadMenuItem>
                <telerik:RadMenuItem runat="server" Text="child 2.2">
                </telerik:RadMenuItem>
            </Items>
        </telerik:RadMenuItem>
    </Items>
</telerik:RadMenu>
<input id="Button1" onclick="hideMenuItem()" type="button" value="Hide Menu Item" />
<input id="Button2" onclick="showMenuItem()" type="button" value="Show Menu Item" />
<input id="Button3" onclick="showOrHideMenu()" type="button" value="Show/Hide Menu" />
````

````JavaScript
function hideMenuItem() {
    var menu = $find("<%=RadMenu1.ClientID %>");
    menu.findItemByText("root 1").hide();
}

function showMenuItem() {
    var menu = $find("<%=RadMenu1.ClientID %>");
    menu.findItemByText("root 1").show();
}

function showOrHideMenu() {
    var menu = $find("<%=RadMenu1.ClientID %>");
    if (menu.get_element().style.display == "none") {
        menu.get_element().style.display = "";
    }
    else {
        menu.get_element().style.display = "none";
    }                                        
}      
````





The above code hides the menu if it is visible or shows it if it is invisible by clicking on the Show/Hide Menu.

Clicking on the Hide Menu Item button will hide the "root 1" menu item. Respectively pressing the Show Menu Item button will show that menu item.
