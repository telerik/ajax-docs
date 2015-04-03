---
title: Animation
page_title: Animation | UI for ASP.NET AJAX Documentation
description: Animation
slug: combobox/appearance-and-styling/animation
tags: animation
published: True
position: 8
---

# Animation



## 

The __ExpandAnimation__ and __CollapseAnimation__ tags of __RadComboBox__ are used to customize the way the drop-down list is expanded and collapsed. For each expand or collapse animation, you can specify __Type__ and __Duration__:

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

* 

````ASPNET
	    <telerik:RadComboBox ID="RadComboBox1" runat="server">
	        <ExpandAnimation Type="InBounce" Duration="300" />
	        <CollapseAnimation Type="OutQuint" Duration="200" />
	    </telerik:RadComboBox>
````



* You can see a live example here: [Animation](http://demos.telerik.com/aspnet-ajax/combobox/examples/functionality/expandanimation/defaultcs.aspx).
