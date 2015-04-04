---
title: PreviousButtonClick
page_title: PreviousButtonClick | UI for ASP.NET AJAX Documentation
description: PreviousButtonClick
slug: wizard/server-side-programming/events/previousbuttonclick
tags: previousbuttonclick
published: True
position: 6
---

# PreviousButtonClick



## 

The server-side __OnPreviousButtonClick__ event occurs when a the previous button is clicked.

The __OnPreviousButtonClick__ event handler receives two arguments:

1. The __RadWizard__ that contains the active step. This argument is of type object, but can be cast to the __RadWizard__ type.

1. A __WizardEventArgs__ object. This object has two properties:

* __CurrentStepIndex__ - the current step index.

* __CurrentStep__ - a reference the current step.

* __NextStepIndex__ - the next step index.

* __NextStep__ - a reference to the next step.

Use the __OnPreviousButtonClick__ event handler to respond when a the previous button is clicked.





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


