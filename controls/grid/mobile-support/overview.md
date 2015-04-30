---
title: Overview
page_title: Mobile Support Overview | RadGrid for ASP.NET AJAX Documentation
description: Overview
slug: grid/mobile-support/overview
tags: overview
published: True
position: 0
---

# Mobile Support Overview



Even though the **RadGrid** control currently does not provide separate mobile render mode, all of the **RadGrid** functionalities are tested and properly working on **mobile devices**.

## 

On mobile devices the **scrolling** and **row drag-drop** features in the grid are performed by the same **touch gesture**: dragging of the content area of the grid with one tough point. This imposes a limitation when both features are enabled on touch devices because it cannot be exclusively determined which one of the two should be performed. One way to distinguish between scrolling and row drag-drop on mobile devices is to use a **GridDragDropColumn** - this way the dragging of the rows will be performed only when you drag a row by the icon in the GridDragDropColumn and on the rest of the content area scrolling will be performed.

## 

**Since Q2 2014** the **RadGrid** also provides a **custom swipe gesture** in order to cover the **paging** functionality on mobile devices. In order to accomplish this you need to detect **swipe gesture** with the following requirements:

* Two or more touch points are in permanent contact with the touch surface.

* All of the touch points should be moving in the same direction.

* All touch points should maintain the same direction throughout the whole course of their movement (e.g. moving left then moving up then moving left again is not allowed).

* If one or more of the touch points deviates from the course of movement of the other touch points the gesture is considered invalid.

* All touch points should have passed a certain threshold since their initial position in order to be successfully registered as swipe gesture.

The image below demonstrates the grid control **scrolling** and **paging** mobile **gestures**.
![Rad Grid Touch Gestures](images/RadGrid_TouchGestures.png)
