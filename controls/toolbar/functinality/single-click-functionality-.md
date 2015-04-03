---
title: Single Click Functionality 
page_title: Single Click Functionality  | UI for ASP.NET AJAX Documentation
description: Single Click Functionality 
slug: toolbar/functinality/single-click-functionality-
tags: single,click,functionality,
published: True
position: 0
---

# Single Click Functionality 



__Single Click Functionality__

## 

In general the __SingleClick__ property of the __RadToolBar__ control is used to avoid multiple postbacks or callbacks to the server, so that once a button is clicked, the user can not click it again until the request is completed. In general there are three values that you can set to the property. You can find a list of them below.

* __ToolBar__: This value makes all of the buttons in the __RadToolBar__ control inactive until the request is complete.

* __Button__: When you set the value to __Button__, you will make only the clicked button inactive while the request is being executed.

* __None__: Setting the value to__None__, you enable the user to click multiple times to the buttons of the control.

>note Note that this property is valid as of __Q2 2013 SP1__ release of the ASP.NET AJAX controls.
>

