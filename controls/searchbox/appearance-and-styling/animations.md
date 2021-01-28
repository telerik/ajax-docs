---
title: Animations
page_title: Animations - RadSearchBox
description: Check our Web Forms article about Animations.
slug: searchbox/appearance-and-styling/animations
tags: animations
published: True
position: 1
---

# Animations



## 

The **ExpandAnimation** and **CollapseAnimation** tags of **RadSearchBox** are used to customize the way the drop-down list is expanded and collapsed. For each expand or collapse animation, you can specify **Type** and **Duration**:

* The **Type** is one of the following pre-defined animation types:

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

* The **Duration** is set in milliseconds.

**Example 1:** a sample animation configuration.

````ASPNET
<telerik:RadSearchBox RenderMode="Lightweight" ID="RadSearchBox1" runat="server">
	<ExpandAnimation Type="InBounce" Duration="300" />
	<CollapseAnimation Type="OutQuint" Duration="200" />
</telerik:RadSearchBox>
````


