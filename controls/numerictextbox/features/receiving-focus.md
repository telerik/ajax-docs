---
title: Receiving Focus
page_title: Receiving Focus | RadInput for ASP.NET AJAX Documentation
description: Receiving Focus
slug: numerictextbox/features/receiving-focus
tags: receiving,focus
published: True
position: 5
---

# Receiving Focus




How a **RadNumericTextBox** control behaves when it receives focus can be controlled by setting the **SelectionOnFocus** property. It can be set to any of the following values:

* **Telerik.Web.UI.SelectionOnFocus.CaretToBeginning**: When the **SelectionOnFocus** property is **CaretToBeginning**, the input caret appears at the beginning of the input control's value when it first gets focus. Text the user types is inserted at the beginning of the control's current value.

* **Telerik.Web.UI.SelectionOnFocus.CaretToEnd**: When the **SelectionOnFocus** property is **CaretToEnd**, the input caret appears at the end of the input control's value when it first gets focus. Text the user types is appended to the control's current value.

* **Telerik.Web.UI.SelectionOnFocus.SelectAll**: When the **SelectionOnFocus** property is **SelectAll**, the entire value of the input control is selected when it first gets focus. Text the user types replaces the control's current value.

* **Telerik.Web.UI.SelectionOnFocus.None**: When the **SelectionOnFocus** property is **None** (the default value), the browser determines the caret placement and selection when the control first gets focus.


