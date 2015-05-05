---
title: ButtonClicking
page_title: ButtonClicking | RadWizard for ASP.NET AJAX Documentation
description: ButtonClicking
slug: wizard/client-side-programming/events/buttonclicking
tags: buttonclicking
published: True
position: 2
---

# ButtonClicking



The client-side **ButtonClicking** event is raised when user clicks on a button orstep before the **RadWizard** responds to the click. You can handle this event in case you want to prevent the click.This article discusses the objects of the control's **ButtonClicking** event and shows an example of how to retrieve properties when the event occurs (**Example 1**).

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the the **OnClientButtonClicking** property.

## 

The client-side **ButtonClicking** event handler receives two arguments:

* Sender—the [RadWizard object]({%slug wizard/client-side-programming/wizard-object%}) that fired the event.

* Event arguments—an event arguments object that exposes the following methods:


>caption ButtonClicking Event Arguments Object

|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
|get_cancel()||bool|Gets a value that indicates whether the event is canceled.|
|get_command()||int|Returns the command that is about to be executed. The WizardCommand can be: 0 - WizardCommand.Previous; 1 - WizardCommand.Next;2- WizardCommand.Finish; 3- WizardCommand.Cancel; 4 - WizardCommand.NavigationBarButtonClick;|
|get_nextActiveStep()||RadWizardStep|Returns the step user is trying to navigate to.|
|set_cancel(value)|bool||Sets whether the event will be canceled (if true is passed).|

**Example 1**: Handle the **RadWizard**'s client-side **ButtonClicking** event.

````ASPNET
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


