---
title: Animation
page_title: Animation - RadComboBox
description: Check our Web Forms article about Animation.
slug: combobox/appearance-and-styling/animation
tags: animation
published: True
position: 8
---

# Animation



## 

The **ExpandAnimation** and **CollapseAnimation** tags of **RadComboBox** are used to customize the way the drop-down list is expanded and collapsed. For each expand or collapse animation, you can specify **Type** and **Duration**:

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


````ASPNET
<telerik:RadComboBox RenderMode="Lightweight" ID="RadComboBox1" runat="server">
	<ExpandAnimation Type="InBounce" Duration="300" />
	<CollapseAnimation Type="OutQuint" Duration="200" />
</telerik:RadComboBox>
````



You can see a live example here: [Animation](https://demos.telerik.com/aspnet-ajax/combobox/examples/functionality/expandanimation/defaultcs.aspx).
