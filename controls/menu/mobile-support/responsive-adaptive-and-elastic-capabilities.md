---
title: Responsive Adaptive and Elastic Capabilities
page_title: Responsive Adaptive and Elastic Capabilities | UI for ASP.NET AJAX Documentation
description: Responsive Adaptive and Elastic Capabilities
slug: menu/mobile-support/responsive-adaptive-and-elastic-capabilities
tags: responsive,adaptive,and,elastic,capabilities
published: True
position: 0
---

# Responsive Adaptive and Elastic Capabilities



This article explains the __responsive design capabilities RadMenu offers__. The [Lightweight RenderMode](548bed68-1c8c-4f6a-b69f-2068c034f0fe) of RadMenu supports __elastic design since Q1 2014__.

Generally, responsive design means that the page and its content are able to adapt to different screen resolutions without deteriorating the user experience. This often includes changing the font size and having dimensions set in percent.

## Elastic Design with RadMenu
>caption Figure 1: Comparison between appearance of a RadMenu with regular font size and with increased font size

![menu-elastic-capabilities](images/menu-elastic-capabilities.png)

__RadMenu__ in __Lightweight RenderMode__ supports __changing the font size__ without breaking the control's appearance - if the new size is larger than the original, the elements in the control will simply increase their size as well to accommodate the text. This fluid layout is achieved by using `em` units for setting dimensions and paddings in the control, instead of `px` because `em` units are tied to the font size. This allows dimensions and sizes to scale with the font size.

The following sample shows how to increase the font size of a RadMenu and the effect can be seen in comparison in Figure 1.

````ASPNET
	    <style type="text/css">
	        div.RadMenu {
	            font-size: 18px;
	        }
	    </style>
	    <telerik:RadMenu ID="RadMenu1" runat="server" RenderMode="Lightweight" >
	            <Items>
	                <telerik:RadMenuItem Text="File">
	                    <Items>
	                        <telerik:RadMenuItem Text="New"></telerik:RadMenuItem>
	                        <telerik:RadMenuItem Text="Open"></telerik:RadMenuItem>
	                        <telerik:RadMenuItem Text="Save"></telerik:RadMenuItem>
	                        <telerik:RadMenuItem Text="Save As..."></telerik:RadMenuItem>
	                    </Items>
	                </telerik:RadMenuItem>
	            </Items>
	        </telerik:RadMenu>
````



## Mobile Rendering

As of Q1 2014 we introduced the __Mobile__ rendering mode for the __RadMenu__ control. It is specifically designed to be used in mobile devices where its behavior is relatively different from the one on a desktop device. With the Mobile rendering of the RadMenu you also have the following capabilities:

* You still can choose among the different skins of the control;

* Easy markup;

* Multi-level menu support;

* Light-weight code;

* Multiple menus on the same page.
>caption Figure 1. Appearance of the RadMenu

![mobile renderingappearance](images/mobile_renderingappearance.png)

More information about the functionalities that the RadMenu mobile render mode offers you can find [here](591051a9-c177-47c5-b2c9-4e8a471f0db9).
