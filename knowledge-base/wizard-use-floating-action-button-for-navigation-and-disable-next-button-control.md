---
title: Use FloatingActionButton for Navigating RadWizard Steps and Control Next Button Visibility
description: Learn how to navigate to a specific step in RadWizard using FloatingActionButton based on the step's title and how to programmatically control the visibility and enablement of the Next button.
type: how-to
page_title: Use FloatingActionButton for Navigating RadWizard Steps and Control Next Button Visibility
slug: wizard-use-floating-action-button-for-navigation-and-disable-next-button-control
tags: radwizard, floatingactionbutton, navigation, javascript, visibility, enablement
res_type: kb
ticketid: 1669233
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadWizard for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description
I want to use a FloatingActionButton to navigate to a specific step in a RadWizard based on the step's title. The wizard has a dynamic number of steps, so I cannot rely on the index number. Additionally, I need to hide or disable the "Next" button in the wizard and then show or enable it from the code-behind.

This KB article also answers the following questions:

- How can I navigate between wizard steps using custom controls?
- How do I control the visibility of the RadWizard Next button?
- Is it possible to activate a specific RadWizard step using JavaScript?

## Solution

### Jump to a Specific Wizard Step Using FloatingActionButton

To navigate to a specific RadWizard step using a FloatingActionButton based on the step's title, follow these steps:

1. Add the RadWizard and RadFloatingActionButton to your page.
2. Implement a JavaScript function that iterates through the wizard steps, finds the desired step by title, and sets it as active.

````ASP.NET
<telerik:RadWizard runat="server" ID="RadWizard1">
    <WizardSteps>
        <telerik:RadWizardStep ID="WizardStep1" StepType="Start" Title="Step1">
            Step 1
        </telerik:RadWizardStep>
        <telerik:RadWizardStep ID="WizardStep2" Title="Step2">
            Step 2
        </telerik:RadWizardStep>
        <telerik:RadWizardStep ID="WizardStep3" Title="Step3">
            Step 3
        </telerik:RadWizardStep>
        <telerik:RadWizardStep ID="WizardStep4" StepType="Finish" Title="Step4">
            Finish step
        </telerik:RadWizardStep>
    </WizardSteps>
</telerik:RadWizard>

<telerik:RadFloatingActionButton runat="server" ID="SurveyAction" Icon="cog" Skin="Bootstrap" PositionMode="Absolute" Align="BottomEnd">
    <Items>
        <telerik:FloatingActionButtonItem Label="Jump to Page" OnClientClicked="FunctionToJump" Title="Jump to step 2" CssClass="text-bg-success" />
    </Items>
</telerik:RadFloatingActionButton>

<telerik:RadButton runat="server" ID="RadButton2" Text="Disable next button" AutoPostBack="false" OnClientClicked="onClientClicked" /> <br />
<telerik:RadButton runat="server" ID="RadButton1" Text="Enable from server" AutoPostBack="true" OnClick="RadButton1_Click" />
````

````JavaScript
function onClientClicked(sender, args) {
    let wizard = $find("<%= RadWizard1.ClientID %>");
    let nextButton = wizard.get_nextButtonElement();

    nextButton.disabled = true;

    // If you wannt to hide it:
    // nextButton.style.display = "none"
}

function FunctionToJump(sender, args) {
    let wizard = $find("<%= RadWizard1.ClientID %>");
    let steps = wizard.get_wizardSteps();

    steps._data.forEach((step) => {
        let title = step.get_title();

        if (title === "Step3") {
            step.set_active(true);
        }
    })
}
````

````C#
protected void RadButton1_Click(object sender, EventArgs e)
{
    string script = @"
        function f() {
            let wizard = $find('" + RadWizard1.ClientID + @"');
            let nextButton = wizard.get_nextButtonElement();
            
            nextButton.disabled = false;
            Sys.Application.remove_load(f);
        }
        Sys.Application.add_load(f);
    ";

    ScriptManager.RegisterStartupScript(this, this.GetType(), "enableButtonScript", script, true);
}
````

## See Also

- [RadWizard Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/wizard/overview)
- [RadFloatingActionButton Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/floatingactionbutton/overview)
- [JavaScript API Reference for RadWizard](https://docs.telerik.com/devtools/aspnet-ajax/controls/wizard/client-side-programming/overview)
