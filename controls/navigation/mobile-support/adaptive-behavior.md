---
title: Adaptive Behavior
page_title: Adaptive Behavior | UI for ASP.NET AJAX Documentation
description: Adaptive Behavior
slug: navigation/mobile-support/adaptive-behavior
tags: adaptive,behavior
published: True
position: 3
---

# Adaptive Behavior

The following article described the adaptive behavior of the **RadNavigation** control

## 

The **RadNavigation** control features responsive behavior, providing built-in support for both desktop and mobile browsers, with no need for RenderMode property changes. The rendered html remains the same, while control's appearance is changed by CSS and JavaScript. When there is not enough space for all nodes to be displayed, some of them will become part of the sandwich-like button.

The button could be displayed at the leftmost or rightmost side of the **RadNavigation** control. This feature could be managed by the **MenuButtonPosition** property, which accepts two values : **Left** and **Right**.

In the figures below, you can observe how the layout of the RadNavigation changes, regarding the size of the browser. In **Figure 1**, there is enough space to display some nodes in the **RadNavigation** and some under the sandwich-like button,while in **Figure** 2 all nodes are paced under the button.
>caption Figure 1: Some nodes are placed under the sandwich-like button

![navigation-addaptivebehavior](images/navigation-addaptivebehavior.png)
>caption Figure 2: All nodes are placed under the sandwich-like button

![navigation-addaptivebehavior 1](images/navigation-addaptivebehavior1.png)
