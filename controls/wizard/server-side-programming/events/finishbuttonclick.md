---
title: FinishButtonClick
page_title: FinishButtonClick - RadWizard
description: Check our Web Forms article about FinishButtonClick.
slug: wizard/server-side-programming/events/finishbuttonclick
tags: finishbuttonclick
published: True
position: 3
---

# FinishButtonClick



## 

The server-side **FinishButtonClick** event occurs when a the finish button is clicked.

The **OnFinishButtonClick** event handler receives two arguments:

1. The **RadWizard** that contains the active step. This argument is of type object, but can be cast to the **RadWizard** type.

1. A **WizardEventArgs** object. This object has two properties:

	* **CurrentStepIndex** - the current step index.

	* **CurrentStep** - a reference the current step.

	* **NextStepIndex** - the next step index.

	* **NextStep** - a reference to the next step.

Use the **OnFinishButtonClick** event handler to respond when a the finish button is clicked.





````C#
protected void RadWizard1_FinishButtonClick(object sender, WizardEventArgs e)
{
	Label1.Text = "You clicked on Finish button";
}
````
````VB.NET
Protected Sub RadWizard1_FinishButtonClick(sender As Object, e As WizardEventArgs) Handles RadWizard1.FinishButtonClick
	Label1.Text = "You clicked on Finish button"
End Sub
````


