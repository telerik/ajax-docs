---
title: ButtonClicked
page_title: ButtonClicked - RadWizard
description: Check our Web Forms article about ButtonClicked.
slug: wizard/client-side-programming/events/buttonclicked
tags: buttonclicked
published: True
position: 3
---

# ButtonClicked



The client-side **ButtonClicked** event occurs immediately after the **RadWizard** responds to button or step click. This article discusses the objects of the control's **ButtonClicking** event and shows an example of how to retrieve properties when the event occurs (**Example 1**).

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the the **OnClientButtonClicked** property.

## 

The client-side **ButtonClicked** event handler receives two arguments:

* Sender—the [RadWizard object]({%slug wizard/client-side-programming/wizard-object%}) that fired the event.

* Event arguments—an event arguments object that exposes the following methods:


>caption ButtonClicked Event Arguments Object

|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
|get_activeStep()||RadWizardStep|Returs the current RadWizard active step.|
|get_command()||int|Returns the wizard command. The WizardCommand can be: 0 - WizardCommand.Previous; 1 - WizardCommand.Next;2- WizardCommand.Finish; 3- WizardCommand.Cancel; 4 - WizardCommand.NavigationBarButtonClick;|

**Example 1**: Handle the **RadWizard**'s client-side **ButtonClicked** event.

````ASPNET
<script type="text/javascript">
	function OnClientButtonClicked(sender, args) {
		var clickedStepTitle = args.get_activeStep().get_title();
		alert("You just clicked on " + clickedStepTitle);
	}
</script>


<telerik:RadWizard RenderMode="Lightweight" ID="RadWizard3" runat="server" OnClientButtonClicked="OnClientButtonClicked">
	<WizardSteps>
		<telerik:RadWizardStep Title="Step1">
			<telerik:RadTextBox RenderMode="Lightweight" ID="RadTextBox9" runat="server"></telerik:RadTextBox>
			<telerik:RadTextBox RenderMode="Lightweight" ID="RadTextBox10" runat="server"></telerik:RadTextBox>
		</telerik:RadWizardStep>
		<telerik:RadWizardStep Title="Step2">
			<telerik:RadTextBox RenderMode="Lightweight" ID="RadTextBox11" runat="server"></telerik:RadTextBox>
			<telerik:RadTextBox RenderMode="Lightweight" ID="RadTextBox12" runat="server"></telerik:RadTextBox>
		</telerik:RadWizardStep>
	</WizardSteps>
</telerik:RadWizard>
````


