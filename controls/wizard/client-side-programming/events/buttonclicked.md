---
title: ButtonClicked
page_title: ButtonClicked | UI for ASP.NET AJAX Documentation
description: ButtonClicked
slug: wizard/client-side-programming/events/buttonclicked
tags: buttonclicked
published: True
position: 3
---

# ButtonClicked



The client-side __ButtonClicked__ event occurs immediately after the __RadWizard__ responds to button or step click. This article discusses the objects of the control's __ButtonClicking__ event and shows an example of how to retrieve properties when the event occurs (__Example 1__).

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the the __OnClientButtonClicked__ property.

## 

The client-side __ButtonClicked__ event handler receives two arguments:

* Sender—the [RadWizard object]({%slug wizard/client-side-programming/wizard-object%}) that fired the event.

* Event arguments—an event arguments object that exposes the following methods:


>caption ButtonClicked Event Arguments Object

|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
|get_activeStep()||RadWizardStep|Returs the current RadWizard active step.|
|get_command()||int|Returns the wizard command. The WizardCommand can be: 0 - WizardCommand.Previous; 1 - WizardCommand.Next;2- WizardCommand.Finish; 3- WizardCommand.Cancel; 4 - WizardCommand.NavigationBarButtonClick;|

__Example 1__: Handle the __RadWizard__'s client-side __ButtonClicked__ event.

````JavaScript
	        <script type="text/javascript">
	            function OnClientButtonClicked(sender, args) {
	                var clickedStepTitle = args.get_activeStep().get_title();
	                alert("You just clicked on " + clickedStepTitle);
	            }
	        </script>
	
	
	        <telerik:RadWizard ID="RadWizard3" runat="server" OnClientButtonClicked="OnClientButtonClicked">
	            <WizardSteps>
	                <telerik:RadWizardStep Title="Step1">
	                    <telerik:RadTextBox ID="RadTextBox9" runat="server"></telerik:RadTextBox>
	                    <telerik:RadTextBox ID="RadTextBox10" runat="server"></telerik:RadTextBox>
	                </telerik:RadWizardStep>
	                <telerik:RadWizardStep Title="Step2">
	                    <telerik:RadTextBox ID="RadTextBox11" runat="server"></telerik:RadTextBox>
	                    <telerik:RadTextBox ID="RadTextBox12" runat="server"></telerik:RadTextBox>
	                </telerik:RadWizardStep>
	            </WizardSteps>
	        </telerik:RadWizard>
````


