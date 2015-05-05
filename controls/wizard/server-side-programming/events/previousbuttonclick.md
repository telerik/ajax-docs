---
title: PreviousButtonClick
page_title: PreviousButtonClick | RadWizard for ASP.NET AJAX Documentation
description: PreviousButtonClick
slug: wizard/server-side-programming/events/previousbuttonclick
tags: previousbuttonclick
published: True
position: 6
---

# PreviousButtonClick



## 

The server-side **OnPreviousButtonClick** event occurs when a the previous button is clicked.

The **OnPreviousButtonClick** event handler receives two arguments:

1. The **RadWizard** that contains the active step. This argument is of type object, but can be cast to the **RadWizard** type.

1. A **WizardEventArgs** object. This object has two properties:

	* **CurrentStepIndex** - the current step index.

	* **CurrentStep** - a reference the current step.

	* **NextStepIndex** - the next step index.

	* **NextStep** - a reference to the next step.

Use the **OnPreviousButtonClick** event handler to respond when a the previous button is clicked.





````C#
protected void RadWizard1_PreviousButtonClick(object sender, WizardEventArgs e)
{
	Label1.Text = "You clicked on PreviousButton button";
}
````
````VB.NET
Protected Sub RadWizard1_PreviousButtonClick(sender As Object, e As WizardEventArgs) Handles RadWizard1.PreviousButtonClick
	Label1.Text = "You clicked on PreviousButton button"
End Sub
````


