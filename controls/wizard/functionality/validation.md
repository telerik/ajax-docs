---
title: Validation
page_title: Validation | RadWizard for ASP.NET AJAX Documentation
description: Validation
slug: wizard/functionality/validation
tags: validation
published: True
position: 1
---

# Validation



**Validation** functionality allows implementing an intuitive step by step form that will give users chance to move through the Wizard sequentially and have some required fields on each step.

## 

The following properties are essential in implementing a validation for a RadWizardStep:

* **CausesValidation** enables/disables the validation for specific RadWizardStep.

* **ValidationGroup** specifies which group of controls is validated on validation.

There are some specifics about the RadWizard validation functionality:

* You can use same **ValidationGroup** value for more than one **RadWizardStep**. In this case you will be able to navigate between those steps without firing the validation. The validation will fail only if you go to a step that is not part of that ValidationGroup and leave some required fields empty.

* The validation will not be fired if user clicks on the **Previous Navigation button** or directly navigate to any of the previous steps in the Navigation Bar.

Please find below a little demonstration on how to make a text field within a RadWizardStep to be required in order to activate another step.

````ASPNET
<telerik:RadWizard ID="RadWizard6" runat="server">
	<WizardSteps>
		<telerik:RadWizardStep ID="RadWizardStep1" Title="Personal Info" runat="server" StepType="Step" ValidationGroup="personalInfo">
			<div class="inputWapper first">
				<asp:Label ID="Label3" Text="First Name: *" runat="server" AssociatedControlID="FirstNameTextBox" />
				<telerik:RadTextBox ID="FirstNameTextBox" runat="server" ValidationGroup="personalInfo" Width="320px"></telerik:RadTextBox>
				<asp:RequiredFieldValidator ID="FirstNameRequiredFieldValidator" runat="server" ControlToValidate="FirstNameTextBox" EnableClientScript="true" ValidationGroup="personalInfo" ErrorMessage="required field" CssClass="validator" ForeColor="Red"></asp:RequiredFieldValidator>
			</div>
			<div class="inputWapper">
				<asp:Label ID="Label4" Text="Last Name: *" runat="server" AssociatedControlID="LastNameTextBox" />
				<telerik:RadTextBox ID="LastNameTextBox" runat="server" ValidationGroup="personalInfo" Width="320px"></telerik:RadTextBox>
				<asp:RequiredFieldValidator ID="LastNameRequiredFieldValidator" runat="server" ControlToValidate="LastNameTextBox" EnableClientScript="true" ValidationGroup="personalInfo" ErrorMessage="required field" CssClass="validator" ForeColor="Red"></asp:RequiredFieldValidator>
			</div>
		</telerik:RadWizardStep>
		<telerik:RadWizardStep Title="SecondStep">
			<asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
		</telerik:RadWizardStep>
	</WizardSteps>
</telerik:RadWizard>
````


