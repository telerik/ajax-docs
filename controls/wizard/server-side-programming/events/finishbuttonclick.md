---
title: FinishButtonClick
page_title: FinishButtonClick | RadWizard for ASP.NET AJAX Documentation
description: FinishButtonClick
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
	#End Region
	
	#Region "server-side-events_3"
	    Protected Sub RadWizard1_NavigationBarButtonClick(sender As Object, e As WizardEventArgs) Handles RadWizard1.NavigationBarButtonClick
	        Label1.Text = "You clicked on NavigationBarButton button"
	    End Sub
	#End Region
	
	#Region "server-side-events_4"
	    Protected Sub RadWizard1_NextButtonClick(sender As Object, e As WizardEventArgs) Handles RadWizard1.NextButtonClick
	        Label1.Text = "You clicked on NextButton button"
	    End Sub
	#End Region
	
	#Region "server-side-events_5"
	    Protected Sub RadWizard1_PreviousButtonClick(sender As Object, e As WizardEventArgs) Handles RadWizard1.PreviousButtonClick
	        Label1.Text = "You clicked on PreviousButton button"
	    End Sub
	#End Region
	
	#Region "server-side-events_6"
	    Protected Sub RadWizard1_WizardStepCreated(sender As Object, e As WizardStepCreatedEventArgs) Handles RadWizard1.WizardStepCreated
	        e.RadWizardStep.ToolTip = e.RadWizardStep.Title
	    End Sub
	#End Region
	
	#Region "tracking-history"
	    Protected Sub RadWizard1_ActiveStepChanged(sender As Object, e As EventArgs)
	        History.Text = String.Empty
	        For Each [step] As RadWizardStep In RadWizard1.GetHistory()
	            History.Text += [step].Title + ", "
	        Next
	        History.Text = History.Text.Substring(0, History.Text.Length - 2)
	    End Sub
	#End Region
	
	
	End Class
````


