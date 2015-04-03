---
title: Saving and Loading
page_title: Saving and Loading | UI for ASP.NET AJAX Documentation
description: Saving and Loading
slug: filter/filter-expressions/saving-and-loading
tags: saving,and,loading
published: True
position: 2
---

# Saving and Loading



## 

The RadFilter server-side API offers two methods for saving and loading RadFilter expressions by user:

* __SaveSettings__ - serializes the control expressions to *Base64 encoded* string;

* __LoadSettings__ - Loads the provided state in the control. The parameter for this method must be * Base64 encoded * string representing saved control expressions.

You see how they work in the [Save/Load RadFilter expressions](http://demos.telerik.com/aspnet-ajax/filter/examples/saveloadexpressions/defaultcs.aspx) live demo.

>caution All versions of RadFilter prior to Q3 2010 use the __ObjectStateFormatter__ by default. Due to the nature of this formatter, it is not possible to deserialize settings, saved with different version of the assembly. From Q3 2010 on, the __BinaryFormatter__ is set as default.
>


You could get or change the default formatter using the __SettingsFormatter__ property (introduced in Q3 2010).

* __RadFilter.SettingsFormatter.BinaryFormatter__ - this is the default formatter for UI versions Q3 2010 and later. The advantage of this formatter is that it will work even if you save the state with one version of the assembly and then restore it with another. The drawback is that the BinaryFormatter does not work in medium trust.

* __RadFilter.SettingsFormatter.ObjectStateFormatter__- the default formatter in UI versions prior to Q3 2010. This formatter works flawlessly in medium trust but it won't deserialize settings, saved with another version of the assembly.

It is possible to use your own formatter by overriding the __GetSettingsFormatter__ method. For more information about the formatters, please visit the following link: [IFormatter Interface (MSDN)](http://msdn.microsoft.com/en-us/library/system.runtime.serialization.iformatter%28v=VS.90%29.aspx)
