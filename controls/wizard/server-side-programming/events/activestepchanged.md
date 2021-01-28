---
title: ActiveStepChanged
page_title: ActiveStepChanged - RadWizard
description: Check our Web Forms article about ActiveStepChanged.
slug: wizard/server-side-programming/events/activestepchanged
tags: activestepchanged
published: True
position: 1
---

# ActiveStepChanged



## 

The server-side **ActiveStepChanged** event occurs when occurs when the active step is changed.

The **ActiveStepChanged** event handler receives two arguments:

* The **RadWizard** that contains the active step. This argument is of type object, but can be cast to the **RadWizard** type.

Use the **ActiveStepChanged** event handler to respond when the user changes the active step.





````C#
protected void RadWizard1_ActiveStepChanged(object sender, EventArgs e)
{
	int activeStepIndex = (sender as RadWizard).ActiveStep.Index;
}
````
````VB.NET
Protected Sub RadWizard1_ActiveStepChanged(sender As Object, e As EventArgs) Handles RadWizard1.ActiveStepChanged
	Dim activeStepIndex As Integer = TryCast(sender, RadWizard).ActiveStep.Index
End Sub
````


