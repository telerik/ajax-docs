---
title: Load
page_title: Load | UI for ASP.NET AJAX Documentation
description: Load
slug: wizard/client-side-programming/events/load
tags: load
published: True
position: 1
---

# Load



The client-side __Load__ event is raised when the __RadWizard__ client-side object is fully loaded (the full API of the control is available at this point). This article discusses the objects of the control's __Load__ event and shows an example of how to retrieve properties when the event occurs (__Example 1__).

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the __OnLoad__ property.

## 

The client-side __OnLoad__ event handler receives one argument:

* Sender—the [RadWizard object]({%slug wizard/client-side-programming/wizard-object%}) that fired the event.

__Example 1__: Handle the __RadWizard__'s client-side __Load__ event.

````JavaScript
	        <script type="text/javascript">
	            function OnClientLoad(sender) {
	                var wizard = sender;
	                var stepsNumber = wizard.get_wizardSteps().get_count()
	                alert("The wizard client-side object is fully loaded and the number of wizard steps are  " + stepsNumber);
	            }
	        </script>
	
	        <telerik:RadWizard ID="RadWizard1" runat="server" OnClientLoad="OnClientLoad">
	            <WizardSteps>
	                <telerik:RadWizardStep Title="Step1">
	                    <telerik:RadTextBox ID="RadTextBox2" runat="server"></telerik:RadTextBox>
	                    <telerik:RadTextBox ID="RadTextBox1" runat="server"></telerik:RadTextBox>
	                </telerik:RadWizardStep>
	                <telerik:RadWizardStep Title="Step2">
	                    <telerik:RadTextBox ID="RadTextBox3" runat="server"></telerik:RadTextBox>
	                    <telerik:RadTextBox ID="RadTextBox4" runat="server"></telerik:RadTextBox>
	                </telerik:RadWizardStep>
	            </WizardSteps>
	        </telerik:RadWizard>
````


