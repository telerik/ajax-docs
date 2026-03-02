---
title: Overview
page_title: Client-side Programming Overview - RadStepper
description: Check our Web Forms article about RadStepper object.
slug: stepper/client-side-programming/overview
tags: stepper,object
published: True
position: 0
---

# Overview

This article lists the client-side API of **RadStepper** and shows how to use it.

To use the API, you must first [get a reference to the control's client-side object]({%slug general-information/get-client-side-reference%}). For example:

````JavaScript
var stepper = $find("<%=RadStepper1.ClientID %>");
````

RadStepper is a server-side wrapper over the Kendo UI Stepper Widget. Thus, it exposes [the API of the underlying Kendo widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/stepper). To get a reference to the Kendo widget instance, you can do either of the following:

* Use the `get_kendoWidget()` method of the MS AJAX wrapper:

    **JavaScript**

        var stepperObject  = $find("<%=RadStepper1.ClientID %>"); //the standard script control object
        var kendoStepper = stepperObject.get_kendoWidget(); //the Kendo widget


* Get the Kendo Widget in its usual way. Make sure to use the `$telerik._kendo.jQuery` reference that has the Kendo widget data:

    **JavaScript**
    
        var kendoStepper = $telerik._kendo.jQuery("#<%=RadStepper1.ClientID %>").data("kendoStepper");

>important As of the 2026 Q1 release, Kendo jQuery widget plugins and data are registered on `$telerik._kendo.jQuery` — a different jQuery instance from `$telerik.$`. If you use `$telerik.$` with `.data("kendoXxx")`, it will return `undefined`. Always use `$telerik._kendo.jQuery` when accessing the underlying Kendo widget via the `.data()` method. The recommended approach, however, is to use the `get_kendoWidget()` method shown above. 


In addition to using the Kendo methods directly, you can also use their wrappers that follow the MS AJAX convention through the RadStepper client object.

>caption Table1: Client-side methods exposed by the MS AJAX RadStepper object

| Name         | PARAMETERS | RETURN TYPE | DESCRIPTION                                                               |
|--------------|------|--------|---------------------------------------------------------------------------|
| next         |            |             | Selects the step which is immediately after the currently selected step.  |
| previous     |            |             | Selects the step which is immediately before the currently selected step. |
| get_selected |            | object      | Gets the currently selected Step                                          |
| set_selected | number     |             | Sets the currently selected Step by its index                             |
| get_steps    |            | array       | Gets array of all Steps                                                   |



# See Also

 * [RadStepper Client-side Events]({%slug stepper/client-side-programming/events%})
 * [Kendo UI Stepper widget API](https://docs.telerik.com/kendo-ui/api/javascript/ui/stepper)


