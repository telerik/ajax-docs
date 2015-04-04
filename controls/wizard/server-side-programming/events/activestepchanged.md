---
title: ActiveStepChanged
page_title: ActiveStepChanged | UI for ASP.NET AJAX Documentation
description: ActiveStepChanged
slug: wizard/server-side-programming/events/activestepchanged
tags: activestepchanged
published: True
position: 1
---

# ActiveStepChanged



## 

The server-side __ActiveStepChanged__ event occurs when occurs when the active step is changed.

The __ActiveStepChanged__ event handler receives two arguments:

* The __RadWizard__ that contains the active step. This argument is of type object, but can be cast to the __RadWizard__ type.

Use the __ActiveStepChanged__ event handler to respond when the user changes the active step.



>tabbedCode

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
	#End Region
	
	#Region "server-side-events_1"
	    Protected Sub RadWizard1_CancelButtonClick(sender As Object, e As WizardEventArgs) Handles RadWizard1.CancelButtonClick
	        Label1.Text = "You clicked on Cancel button"
	    End Sub
	#End Region
	
	#Region "server-side-events_2"
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


>end
