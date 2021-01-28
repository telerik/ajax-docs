---
title: Overview
page_title: Client-side Programming Overview - RadWizard
description: Check our Web Forms article about Overview.
slug: wizard/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



**RadWizard** provides a flexible client-side API. You can easily interact with the wizard in the browser using the wizard client-side object. In addition to a variety of , the client-side object model lets you achieve complicated tasks while avoiding unnecessary post-backs.

## Getting the RadWizard client-side object

**RadWizard** creates a client-side object with the **ClientID** of the wizard. You can obtain the reference using the following JavaScript code:

````JavaScript
<script type="text/javascript">
	function pageLoad() {
		var wizard = $find("<%= RadWizard1.ClientID %>");
		alert(wizard.get_id());
	}
</script>
````



## Getting the instance of a particular RadWizardStep

Once you have the client-side object of **RadWizard**, you can use the **get_wizardStepByIndex()** method to get the instance of a particular step:

````JavaScript
<script type="text/javascript">
	function pageLoad() {
		var wizard = $find("<%= RadWizard1.ClientID %>");
		var fistStepTitle = wizard.get_wizardSteps().getWizardStep(0).get_title();
		alert(fistStepTitle);
	}
</script>
````



## Cancelling an action

Several client side events occur immediately before the wizard performs some action. Most of these events all have names that end in "-ing". You can use these events to cancel the wizard action by using the cancel property of the eventArgs passed to the handler:

````JavaScript
<script type="text/javascript">
	function OnClientButtonClicking(sender, args) {
		alert("The wizard active step is about to change. The new step title is " + args.get_nextActiveStep().get_title() + " and the current active step title is " + sender.get_activeWizardStep().get_title());
		args.set_cancel(true); //to cancel             
	}
</script>

<telerik:RadWizard RenderMode="Lightweight" ID="RadWizard2" runat="server" OnClientButtonClicking="OnClientButtonClicking">
	<WizardSteps>
		<telerik:RadWizardStep Title="Step1">
			<telerik:RadTextBox RenderMode="Lightweight" ID="RadTextBox5" runat="server"></telerik:RadTextBox>
			<telerik:RadTextBox RenderMode="Lightweight" ID="RadTextBox6" runat="server"></telerik:RadTextBox>
		</telerik:RadWizardStep>
		<telerik:RadWizardStep Title="Step2">
			<telerik:RadTextBox RenderMode="Lightweight" ID="RadTextBox7" runat="server"></telerik:RadTextBox>
			<telerik:RadTextBox RenderMode="Lightweight" ID="RadTextBox8" runat="server"></telerik:RadTextBox>
		</telerik:RadWizardStep>
	</WizardSteps>
</telerik:RadWizard>
````



## Calling a client-side method

When you get the instance of the **RadWizard** object, you can call client-side methods to perform certain tasks. Consider the following examples:

* **set_progressPercent(value)**

````JavaScript
<script type="text/javascript">
	function setProgress() {
		var wizard = $find("<%= RadWizard1.ClientID %>");
		wizard.set_progressPercent(20);
	}
</script>
````



* **set_activeIndex(value)**

````JavaScript
<script type="text/javascript">
	function changeActiveIndex() {
		var wizard = $find("<%= RadWizard1.ClientID %>");
		wizard.set_activeIndex(1);
	}
</script>
````



## Preserving Changes

By default, changes made in client-side code do not persist over a post-back to the server. To preserve changes, you must use the **trackChanges** and **commitChanges** methods:

````JavaScript
<script type="text/javascript">
	function OnButtonClick() {
		var wizard = $find("<%= RadWizard1.ClientID %>");
		wizard.trackChanges();
		wizard.get_wizardSteps().getWizardStep(0).set_title("new title");
		wizard.commitChanges();
	}
</script>
````


