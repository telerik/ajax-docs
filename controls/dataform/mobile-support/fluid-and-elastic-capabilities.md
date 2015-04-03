---
title: Fluid and Elastic Capabilities
page_title: Fluid and Elastic Capabilities | UI for ASP.NET AJAX Documentation
description: Fluid and Elastic Capabilities
slug: dataform/mobile-support/fluid-and-elastic-capabilities
tags: fluid,and,elastic,capabilities
published: True
position: 0
---

# Fluid and Elastic Capabilities



__RadDataForm__ control provides elastic and fluid capabilities which allow keeping the control’s component proportion on different mobile devices.

## Fluid capability

By default __RadDataForm__ expands to take all the available space in its container (100% of the container) which makes it __Fluid__.

If you want the form to expand based on the content then add __rdfInlineBlock__ class to the wrapper div element

## Elastic capability

__Elastic behavior__ - the form itself and the text in it (label and field hint text, as well as their margin and paddings) are scalable based on the base font size.

To change it you can use the code snippet below:

````ASPNET
	    <style type="text/css">
	        div.RadDataForm
	        {
	            font-size: 15px;
	        }
	    </style>
````



>note RadDataForm does not take care of the metrics of the controls that are place in it. This means that if you simply change its font-size that won’t affect the child controls in the template. They should be handled manually.
>

