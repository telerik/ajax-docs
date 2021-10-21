---
title: Show Path in RadMenu with client-side implementation
description: Show Path in RadMenu with client-side implementation. Check it now!
type: how-to
page_title: Show Path in RadMenu with client-side implementation
slug: menu-show-path-with-client-side-implementation
res_type: kb
---


## How to

Show the path to a clicked item of the RadMenu control using client-side   
   
## Solution

Using javascript you will need to set the rmFocused css class that will highlight the path to the currently clicked item of the menu.  Of course you will also need to set different URL-s to the RadMenuItems as demonstrated in the markup below.
  
````JavaScript
function OnClientLoad(sender) {
   var menu = sender;
   for (var i = 0; i < menu.get_allItems().length; i++) {
         var item = menu.get_allItems()[i];
         var currentUrl = window.location.toString();
         if (currentUrl.match(item.get_navigateUrl()) != null) {
            item.select();
            highlightPath(item);
            break;
         }
   }
}

function highlightPath(item) {
   item.set_cssClass("rmFocused");
//item.get_parent() is RadMenuItem, not RadMenu       
   if (item.get_parent() != item.get_menu())
         highlightPath(item.get_parent());          
}
````

````ASPX
<telerik:RadMenu ID="RadMenu1" runat="server" OnClientLoad="OnClientLoad" >
        <Items>
            <telerik:RadMenuItem runat="server" NavigateUrl="PageA.aspx" Text="Root Item A">
                <Items>
                    <telerik:RadMenuItem Text="Item1" NavigateUrl="PageA1.aspx">
                        <Items>
                            <telerik:RadMenuItem Text="Item11" NavigateUrl="PageA11.aspx" />
                            <telerik:RadMenuItem Text="Item12" NavigateUrl="PageA12.aspx" />
                        </Items>
                    </telerik:RadMenuItem>
                    <telerik:RadMenuItem Text="Item2" NavigateUrl="PageA2.aspx">
                    </telerik:RadMenuItem>
                </Items>
            </telerik:RadMenuItem>
            <telerik:RadMenuItem runat="server" NavigateUrl="PageB.aspx" Text="Root Item B">
            </telerik:RadMenuItem>
            <telerik:RadMenuItem runat="server" NavigateUrl="PageC.aspx" Text="Root Item C">
            </telerik:RadMenuItem>
        </Items>
    </telerik:RadMenu>
````

 