---
title: Use RadConfirm to Confirm MenuItem Click
page_title: Use RadConfirm to Confirm MenuItem Click | UI for ASP.NET AJAX Documentation
description: Use RadConfirm to Confirm MenuItem Click
slug: menu/how-to/use-radconfirm-to-confirm-menuitem-click
tags: use,radconfirm,to,confirm,menuitem,click
published: True
position: 7
---

# Use RadConfirm to Confirm MenuItem Click



## 

The Telerik RadWindow popups are non-blocking; that is, they do not block the execution thread on the server. This is because the execution of the thread cannot be blocked by JavaScript.

This example will show you how to use RadConfirm to simulate blocking dialog which asks whether you want to leave the page or postback.

We will subscribe to the [OnClientItemClicking]({%slug menu/client-side-programming/events/onclientitemclicking%}) event of the menu. In its even handler we will do the following:

* save the clicked item in a global variable - lastClickedItem

* cancel the event

* show RadConfirm dialog. If the user clicks on OK button - we will invoke the __click()__ method of the lastClickedItem menu item.



````ASPNET
	    <telerik:RadMenu ID="RadMenu1" OnClientItemClicking="OnClientItemClickingHandler"
	        runat="server" OnItemClick="RadMenu1_ItemClick">
	        <Items>
	            <telerik:RadMenuItem runat="server" Text="Root RadMenuItem1" NavigateUrl="http://www.telerik.com">
	            </telerik:RadMenuItem>
	            <telerik:RadMenuItem runat="server" Text="Root RadMenuItem2">
	            </telerik:RadMenuItem>
	        </Items>
	    </telerik:RadMenu>
	    <telerik:RadWindowManager ID="RadWindowManager1" runat="server">
	    </telerik:RadWindowManager>
````





````JavaScript
	        var clickCalledAfterRadconfirm = false;
	        var lastClickedItem = null;
	        function OnClientItemClickingHandler(sender, eventArgs) {
	            if (!clickCalledAfterRadconfirm) {
	                eventArgs.set_cancel(true);
	                lastClickedItem = eventArgs.get_item();
	                radconfirm("Are you sure you want to postback?", confirmCallbackFunction);
	            }
	        }
	        function confirmCallbackFunction(args) {
	            if (args) {
	                clickCalledAfterRadconfirm = true;
	                if (lastClickedItem.get_navigateUrl() != "" && lastClickedItem.get_navigateUrl() != "#") {
	                    window.location.href = lastClickedItem.get_navigateUrl();
	                }
	                else {
	                    lastClickedItem.click();
	                }
	            }
	            else
	                clickCalledAfterRadconfirm = false;
	
	            lastClickedItem = null;
	        }
````



A demo project can be found here: [(ID#983) Using RadPrompt and RadConfirm with Telerik navigational controls](http://www.telerik.com/support/kb/article/b454K-hmd-b454T-cag-b454c-cag.aspx)
