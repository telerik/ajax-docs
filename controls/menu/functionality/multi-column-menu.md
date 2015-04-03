---
title: Multi Column Menu
page_title: Multi Column Menu | UI for ASP.NET AJAX Documentation
description: Multi Column Menu
slug: menu/functionality/multi-column-menu
tags: multi,column,menu
published: True
position: 3
---

# Multi Column Menu



As of __Q3 2009__, __RadMenu__ supports multi-column rendering of child items. This feature is controlled through the __GroupSettings__ (either __DefaultGroupSettings__ or per-item __GroupSettings__) using two properties:

* The __RepeatDirection__ property determines the order in which the items are rendered.If this property is set to __RepeatDirection.Vertical__, the items are displayed in columns loaded from top to bottom, then left to right, until all items are rendered. If this property is set to __RepeatDirection.Horizontal__, the items are displayed in rows loaded from left to right, then top to bottom, until all items are rendered. The __RepeatDirection__ has no effect if __RepeatColumns__ is set to 1 (default).

* The __RepeatColumns__ property specifies the number of columns.

>note  __Note:__ Scrolling is disabled if multi-column rendering is in effect.
>




## Example

For all menu item groups:

````ASPNET
	    <telerik:RadMenu runat="server" ID="RadMenu1" DataSourceID="SiteMapDataSource">
	        <DefaultGroupSettings RepeatColumns="2" RepeatDirection="Vertical" />
	    </telerik:RadMenu>
````



For a specific menu item group:

````ASPNET
	    <items>    
	        <telerik:RadMenuItem>        
	            <GroupSettings RepeatColumns="2" RepeatDirection="Vertical" />    
	        </telerik:RadMenuItem>
	    </items>
````



The default value of RepeatColumns is 1.


