---
title: Appearance and Styling
page_title: Appearance and Styling | UI for ASP.NET AJAX Documentation
description: Appearance and Styling
slug: listbox/troubleshooting/appearance-and-styling
tags: appearance,and,styling
published: True
position: 0
---

# Appearance and Styling



## 

__Problem__

Setting the __BackColor__ of RadListBox has no effect.

__Cause__

The corresponding __background-color__ attribute is set to the outer DIV element of the control. The Skin sets the background color to the inner DIV and that overrides it.

__Solution__

Add the following CSS rule to the <head> section of your page:

````ASPNET
	    .RadListBox div.rlbGroup 
	    { 
	        background-color:Aqua; 
	    }
````





__Problem__

Setting the __ForeColor__or different__Font__properties____of RadListBox have no effect.

__Cause__

The corresponding __CSS__ attributes are set to the outer DIV element of the control. The Skin overrides them on item's level.

__Solution__

Add the following CSS rule to the <head> section of your page:

````ASPNET
	    .RadListBox span.rlbText 
	    { 
	        font-size: x-Small; 
	        font-family: Verdana, Arial, Helvetica,
	        sans-serif; 
	        color: Green; 
	        font-weight: bold;
	    }
````







# See Also

 * [Skins]({%slug listbox/appearance-and-styling/skins%})
