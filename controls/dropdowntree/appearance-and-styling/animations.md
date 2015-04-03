---
title: Animations
page_title: Animations | UI for ASP.NET AJAX Documentation
description: Animations
slug: dropdowntree/appearance-and-styling/animations
tags: animations
published: True
position: 1
---

# Animations



## 

The __ExpandAnimation__ and __CollapseAnimation__ tags of __RadDropDownTree__ are used to customize the way the drop-down list is expanded and collapsed. For each expand or collapse animation, you can specify __Type__ and __Duration__:

* The __Type__ is one of the following pre-defined animation types:

* Linear

* InQuad

* OutQuad

* InOutQuad

* InCubic

* OutCubic

* InOutCubic

* InQuart

* OutQuart

* InOutQuart

* InQuint

* OutQuint

* InOutQuint

* InSine

* OutSine

* InOutSine

* InExpo

* OutExpo

* InOutExpo

* InBack

* OutBack

* InOutBack

* InBounce

* OutBounce

* InOutBounce

* InElastic

* OutElastic

* InOutElastic

* The __Duration__ is set in milliseconds.

__Example 1:__ a sample animation configuration.

````ASPNET
	    <telerik:RadDropDownTree ID="RadDropDownTree1" runat="server">
	        <ExpandAnimation Type="InBounce" Duration="300" />
	        <CollapseAnimation Type="OutQuint" Duration="200" />
	    </telerik:RadDropDownTree>
````



# See Also
