---
title: WizardStepCreated
page_title: WizardStepCreated | UI for ASP.NET AJAX Documentation
description: WizardStepCreated
slug: wizard/server-side-programming/events/wizardstepcreated
tags: wizardstepcreated
published: True
position: 7
---

# WizardStepCreated



## 

The server-side __OnWizardStepCreated__ event occurs when a RadWizardStep object is created.

The __OnWizardStepCreated__ event handler receives two arguments:

1. The __RadWizard__ that contains the active step. This argument is of type object, but can be cast to the __RadWizard__ type.

1. A __WizardStepCreatedEventArgs__ object. This object has a property __RadWizardStep__ that you can use to access the wizard step that was created.

Use the __OnPreviousButtonClick__ event handler to respond when a RadWizardStep object is created.



>tabbedCode

````C#
	    protected void RadWizard1_WizardStepCreated(object sender, WizardStepCreatedEventArgs e)
	    {
	        e.RadWizardStep.ToolTip = e.RadWizardStep.Title;
	    }
````



````VB.NET
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
