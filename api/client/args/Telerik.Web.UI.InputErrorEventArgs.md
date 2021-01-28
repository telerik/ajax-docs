---
title: Telerik.Web.UI.InputErrorEventArgs
description: Telerik.Web.UI.InputErrorEventArgs
slug: Telerik.Web.UI.InputErrorEventArgs
---

# Telerik.Web.UI.InputErrorEventArgs : Sys.CancelEventArgs 

## Inheritance Hierarchy

* Sys.CancelEventArgs
* *[Telerik.Web.UI.InputErrorEventArgs]({%slug Telerik.Web.UI.InputErrorEventArgs%})*


## Methods

###  get_inputText

Returns the value that the user tried to assign to the input control. When RadNumericTextBox detects an invalid character it returns the current value of the numeric text box.

#### Parameters

#### Returns

`String` 

### get_reason

Returns a value indicating the type of error that was detected. The possible values are: 1 - Parsing error; 2 - Out of range

#### Parameters

#### Returns

`Telerik.Web.UI.InputErrorReason` 



