---
title: IncrementSettings Client Object
page_title: IncrementSettings Client Object | RadInput for ASP.NET AJAX Documentation
description: IncrementSettings Client Object
slug: input/client-side-programming/incrementsettings-client-object
tags: incrementsettings,client,object
published: True
position: 6
---

# IncrementSettings Client Object



## 

The IncrementSettings client object is returned by the **get_incrementSettings()** method of the **[RadNumericTextBox]({%slug input/client-side-programming/radnumerictextbox-client-object%})** and **[RadDateInput]({%slug input/client-side-programming/raddateinput-client-object%})** client objects. The following table lists the properties of the IncrementSettings client object:


>caption  

| Property | Type | Description |
| ------ | ------ | ------ |
| **InterceptArrowKeys** |boolean|The control increments or decrements its value in response to the arrow keys.|
| **InterceptMouseWheel** |boolean|The control increments or decrements its value in response to the mouse wheel.|
| **Step** |number|The amount by which a value increases or decreases with every step.|

When rounding is not enabled, the spin buttons may not add or remove exactly 1.0 from the value.Since in most browsers1.9 - 1 = 0.89999, the value without rounding will be cut to 0.89. Therefore, if the user has entered 1.9 and clicks the down arrow key, he will get 0.89. It is recommended to set **AllowRounding="true"**, or **KeepNotRoundedValue="true"**.

If you are using Step less than 0, note that **NumericFormat.DecimalDigits** of the control should be setaccordingly to match the Step's precision.

# See Also

 * [Keyboard Support]({%slug input/accessibility-and-internationalization/keyboard-support%})

 * [Mouse Wheel Support]({%slug input/accessibility-and-internationalization/mouse-wheel-support%})
