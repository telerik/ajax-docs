---
title: Animations
page_title: Animations | RadAutoCompleteBox for ASP.NET AJAX Documentation
description: Animations
slug: autocompletebox/appearance-and-styling/animations
tags: animations
published: True
position: 2
---

# Animations



## 

The **ExpandAnimation** and **CollapseAnimation** tags of **RadAutoCompleteBox** are used to customize the way the drop-down list is expanded and collapsed. For each expand or collapse animation, you can specify **Type** and **Duration**:

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

**Example 1:** A sample animation configuration.

````ASPNET
<telerik:RadAutoCompleteBox RenderMode="Lightweight" ID="RadAutoCompleteBox1" runat="server">
    <ExpandAnimation Type="InBounce" Duration="300" />
    <CollapseAnimation Type="OutQuint" Duration="200" />
</telerik:RadAutoCompleteBox>
````



# See Also
