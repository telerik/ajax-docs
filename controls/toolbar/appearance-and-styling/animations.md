---
title: Animations
page_title: Animations | RadToolBar for ASP.NET AJAX Documentation
description: Animations
slug: toolbar/appearance-and-styling/animations
tags: animations
published: True
position: 8
---

# Animations



## 

The **ExpandAnimation** and **CollapseAnimation** properties let you apply animated effects when the drop-down lists of **RadToolBarDropDown** and **RadToolBarSplitButton** buttons appear and disappear. Each property is of type **Telerik.Web.UI.AnimationSettings**, which has two fields:

* **Duration**: the duration of the effect in milliseconds

* **Type**: the animated effect. It is one of the following pre-defined animation types:

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

````ASPNET
	    <telerik:RadToolBar ID="RadToolBar1" runat="server">
	        <Items>
	            <telerik:RadToolBarDropDown runat="server" Text="New">
	                <Buttons>
	                    <telerik:RadToolBarButton runat="server" Text="File" />
	                    <telerik:RadToolBarButton runat="server" Text="Folder" />
	                </Buttons>
	            </telerik:RadToolBarDropDown>
	        </Items>
	        <CollapseAnimation Duration="200" Type="InOutBounce" />
	        <ExpandAnimation Duration="200" Type="InOutBounce" />
	    </telerik:RadToolBar>
````




