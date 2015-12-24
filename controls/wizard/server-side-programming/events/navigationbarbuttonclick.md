---
title: NavigationBarButtonClick
page_title: NavigationBarButtonClick | RadWizard for ASP.NET AJAX Documentation
description: NavigationBarButtonClick
slug: wizard/server-side-programming/events/navigationbarbuttonclick
tags: navigationbarbuttonclick
published: True
position: 4
---

# NavigationBarButtonClick



## 

The server-side **NavigationBarButtonClick** event occurs when a button within the navigation bar is clicked.

The **NavigationBarButtonClick** event handler receives two arguments:

1. The **RadWizard** that contains the active step. This argument is of type object, but can be cast to the **RadWizard** type.

1. A **WizardEventArgs** object. This object has two properties:

	* **CurrentStepIndex** - the current step index.

	* **CurrentStep** - a reference the current step.

	* **NextStepIndex** - the next step index.

	* **NextStep** - a reference to the next step.

Use the **NavigationBarButtonClick** event handler to respond when a button within the navigation bar is clicked.





````C#
protected void RadWizard1_NavigationBarButtonClick(object sender, WizardEventArgs e)
{
	Label1.Text = "You clicked on NavigationBarButton button";
}
````
````VB.NET
Protected Sub RadWizard1_NavigationBarButtonClick(sender As Object, e As WizardEventArgs) Handles RadWizard1.NavigationBarButtonClick
	Label1.Text = "You clicked on NavigationBarButton button"
End Sub
````


