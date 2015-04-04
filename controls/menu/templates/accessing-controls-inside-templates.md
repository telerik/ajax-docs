---
title: Accessing Controls Inside Templates
page_title: Accessing Controls Inside Templates | UI for ASP.NET AJAX Documentation
description: Accessing Controls Inside Templates
slug: menu/templates/accessing-controls-inside-templates
tags: accessing,controls,inside,templates
published: True
position: 3
---

# Accessing Controls Inside Templates



## 

If your __RadMenu__ has items with templates that have embedded controls, you may want to access the properties of those embedded controls. To get a reference to the embedded control, locate the __RadMenuItem__ that has the template, and use its __FindControl__ method.

For example, consider the following, very simple, menu:

````ASPNET
	    <telerik:RadMenu ID="RadMenu1" runat="server" Flow="Horizontal">
	        <Items>
	            <telerik:RadMenuItem runat="server" ExpandMode="ClientSide" Text="Color">
	                <Items>
	                    <telerik:RadMenuItem runat="server" ExpandMode="ClientSide" Text="ColorPicker">
	                        <ItemTemplate>
	                            <telerik:RadColorPicker ID="RadColorPicker1" runat="server" Preset="Standard" ShowEmptyColor="False">
	                            </telerik:RadColorPicker>
	                        </ItemTemplate>
	                        <GroupSettings ExpandDirection="Auto" Flow="Vertical" />
	                    </telerik:RadMenuItem>
	                </Items>
	                <GroupSettings ExpandDirection="Auto" Flow="Vertical" />
	            </telerik:RadMenuItem>
	        </Items>
	    </telerik:RadMenu>
````



To access the RadColorPicker in the item template, use the following code:

## Server-side access



````C#
	    RadMenuItem colorItem = RadMenu1.FindItemByText("ColorPicker"); 
	    RadColorPicker colors = (RadColorPicker)colorItem.FindControl("RadColorPicker1");
````
````VB.NET
	    Dim colorItem As RadMenuItem = RadMenu1.FindItemByText("ColorPicker")
	    Dim colors As RadColorPicker = DirectCast(colorItem.FindControl("RadColorPicker1"), RadColorPicker)
````


## Client-side access

````JavaScript
	        var menu = $find("<%= RadMenu1.ClientID %>"); var item = menu.findItemByText("ColorPicker");
	        var datePicker = item.findControl("RadColorPicker1");
````



or

````JavaScript
	    var datePicker = $find('<%= RadMenu1.FindItemByText("ColorPicker").FindControl("RadColorPicker1").ClientID %>');          
````



# See Also

 * [Overview]({%slug menu/templates/overview%})
