---
title: Animations
page_title: Animations | UI for ASP.NET AJAX Documentation
description: Animations
slug: toolbar/appearance-and-styling/animations
tags: animations
published: True
position: 8
---

# Animations



## 

The __ExpandAnimation__ and __CollapseAnimation__ properties let you apply animated effects when the drop-down lists of __RadToolBarDropDown__ and __RadToolBarSplitButton__ buttons appear and disappear. Each property is of type __Telerik.Web.UI.AnimationSettings__, which has two fields:

* __Duration__: the duration of the effect in milliseconds

* __Type__: the animated effect. It is one of the following pre-defined animation types:

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




