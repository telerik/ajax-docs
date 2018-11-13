---
title: Single Click Functionality 
page_title: Single Click Functionality  | RadToolBar for ASP.NET AJAX Documentation
description: Single Click Functionality 
slug: toolbar/functionality/single-click-functionality
tags: single,click,functionality,
published: True
position: 0
---

# Single Click Functionality 


**Single Click Functionality**

## 

In general the **SingleClick** property of the **RadToolBar** control is used to avoid multiple postbacks or callbacks to the server, so that once a button is clicked, the user can not click it again until the request is completed. In general there are three values that you can set to the property. You can find a list of them below.

* **ToolBar**: This value makes all of the buttons in the **RadToolBar** control inactive until the request is complete.

* **Button**: When you set the value to **Button**, you will make only the clicked button inactive while the request is being executed.

* **None**: Setting the value to **None**, you enable the user to click multiple times to the buttons of the control.

>note Note that this property is valid as of **Q2 2013 SP1** release of the ASP.NET AJAX controls.
>

