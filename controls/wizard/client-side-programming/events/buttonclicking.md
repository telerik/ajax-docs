---
title: ButtonClicking
page_title: ButtonClicking | UI for ASP.NET AJAX Documentation
description: ButtonClicking
slug: wizard/client-side-programming/events/buttonclicking
tags: buttonclicking
published: True
position: 2
---

# ButtonClicking



The client-side __ButtonClicking__ event is raised when user clicks on a button orstep before the__RadWizard__ responds to the click. You can handle this event in case you want to prevent the click.This article discusses the objects of the control's __ButtonClicking__ event and shows an example of how to retrieve properties when the event occurs (__Example 1__).

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the the __OnClientButtonClicking__ property.

## 

The client-side __ButtonClicking__ event handler receives two arguments:

* Sender—the [RadWizard object]({%slug wizard/client-side-programming/wizard-object%}) that fired the event.

* Event arguments—an event arguments object that exposes the following methods:


>caption ButtonClicking Event Arguments Object

|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
|get_cancel()||bool|Gets a value that indicates whether the event is canceled.|
|get_command()||int|Returns the command that is about to be executed. The WizardCommand can be: 0 - WizardCommand.Previous; 1 - WizardCommand.Next;2- WizardCommand.Finish; 3- WizardCommand.Cancel; 4 - WizardCommand.NavigationBarButtonClick;|
|get_nextActiveStep()||RadWizardStep|Returns the step user is trying to navigate to.|
|set_cancel(value)|bool||Sets whether the event will be canceled (if true is passed).|

__Example 1__: Handle the __RadWizard__'s client-side __ButtonClicking__ event.

````JavaScript
	        <script type="text/javascript">
	            function OnClientButtonClicking(sender, args) {
	                alert("The wizard active step is about to change. The new step title is " + args.get_nextActiveStep().get_title() + " and the current active step title is " + sender.get_activeWizardStep().get_title());
	                args.set_cancel(true); //to cancel             
	            }
	        </script>
	
	        <telerik:RadWizard ID="RadWizard2" runat="server" OnClientButtonClicking="OnClientButtonClicking">
	            <WizardSteps>
	                <telerik:RadWizardStep Title="Step1">
	                    <telerik:RadTextBox ID="RadTextBox5" runat="server"></telerik:RadTextBox>
	                    <telerik:RadTextBox ID="RadTextBox6" runat="server"></telerik:RadTextBox>
	                </telerik:RadWizardStep>
	                <telerik:RadWizardStep Title="Step2">
	                    <telerik:RadTextBox ID="RadTextBox7" runat="server"></telerik:RadTextBox>
	                    <telerik:RadTextBox ID="RadTextBox8" runat="server"></telerik:RadTextBox>
	                </telerik:RadWizardStep>
	            </WizardSteps>
	        </telerik:RadWizard>
````


