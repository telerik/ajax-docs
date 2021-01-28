---
title: Validation
page_title: Validation - RadWizard
description: Check our Web Forms article about Validation.
slug: wizard/functionality/validation
tags: validation
published: True
position: 1
---

# Validation



**Validation** functionality allows implementing an intuitive step by step form that will give users chance to move through the Wizard sequentially and have some required fields on each step.


The following properties are essential in implementing a validation for a `RadWizardStep`:

* `CausesValidation` enables/disables the validation for specific `RadWizardStep`.

* `ValidationGroup` specifies which group of controls is validated on navigation.

There are some specifics about the `RadWizard` validation functionality:

* You can use same `ValidationGroup` value for more than one `RadWizardStep`. In this case you will be able to navigate between those steps without firing the validation. The validation will fail only if you go to a step that is not part of that `ValidationGroup` and leave some required fields empty.

* The validation will not be fired if user clicks on the `Previous` navigation button or directly navigates to any of the previous steps in the `Navigation Bar`.

	* If a handler is attached to the `PreviousButtonClick` event, the `Previous` button will perform a postback and this will cause the validation to fire.

* The `Next` button always fires the validation, even if a handler is not attached to the `NextButtonClick` event.

Please find below a little demonstration on how to make a text field within a step to be required in order to activate another step.

````ASP.NET
<telerik:RadWizard RenderMode="Lightweight" ID="RadWizard1" runat="server">
	<WizardSteps>
		<telerik:RadWizardStep Title="First Step" ID="RadWizardStep1" runat="server" StepType="Step"
								ValidationGroup="firstValidationGroup">
			<asp:TextBox ID="TextBox1" runat="server" ValidationGroup="firstValidationGroup"></asp:TextBox>
			<asp:RequiredFieldValidator runat="server" ID="RequiredFieldValidator1" ValidationGroup="firstValidationGroup" 
										ControlToValidate="TextBox1" EnableClientScript="true" ErrorMessage="step 1 not filled up">
			</asp:RequiredFieldValidator>
		</telerik:RadWizardStep>
		<telerik:RadWizardStep Title="Second Step" ID="RadWizardStep2" runat="server" StepType="Step"
								ValidationGroup="secondValidationGroup">
			<asp:TextBox ID="TextBox2" runat="server" ValidationGroup="secondValidationGroup"></asp:TextBox>
			<asp:RequiredFieldValidator runat="server" ID="validator2" ValidationGroup="secondValidationGroup" 
										ControlToValidate="TextBox2" EnableClientScript="true" ErrorMessage="step 2 not filled up">
			</asp:RequiredFieldValidator>
		</telerik:RadWizardStep>
		<telerik:RadWizardStep Title="Third Step" ID="RadWizardStep3" runat="server" StepType="Step"
								ValidationGroup="thirdValidationGroup">
			<asp:TextBox ID="TextBox3" runat="server" ValidationGroup="thirdValidationGroup"></asp:TextBox>
			<asp:RequiredFieldValidator runat="server" ID="validator3" ValidationGroup="thirdValidationGroup"
										ControlToValidate="TextBox3" EnableClientScript="true" ErrorMessage="step 3 not filled up">
			</asp:RequiredFieldValidator>
		</telerik:RadWizardStep>
	</WizardSteps>
</telerik:RadWizard>
````

# See Also

 * [Wizard - Validation demo](https://demos.telerik.com/aspnet-ajax/wizard/functionality/validation/defaultcs.aspx)

