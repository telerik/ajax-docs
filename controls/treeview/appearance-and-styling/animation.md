---
title: Animation
page_title: Animation | RadTreeView for ASP.NET AJAX Documentation
description: Animation
slug: treeview/appearance-and-styling/animation
tags: animation
published: True
position: 6
---

# Animation




The **ExpandAnimation** and **CollapseAnimation** tags of **RadTreeView** are used to customize the way groups are expanded and collapsed. For each expand or collapse animation, you can specify **Type** and **Duration**:



* The **Type** is chosen from a list of predefined animation effects:

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

* The **Duration** is set in milliseconds and describes the amount of time to animate the expanding or collapsing of the **RadTreeView**.

To disable expand animation effects, set the **Type** to **AnimationType.None**.
