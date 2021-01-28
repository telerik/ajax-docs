---
title: Add Wizard Finish button to PostbackTriggers collection of AsyncUpload
description: Persist RadAsyncUpload files in RadWizard until Finish button is clicked.
type: how-to
page_title: Add RadWizard buttons to RadAsyncUpload postbacktriggers collection
slug: asyncupload-add-radwizard-finish-button-as-postbacktrigger
position: 
tags: 
ticketid: 1436317
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>2019.3.1023</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>RadAsyncUpload for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description

The Next, Previous and Finish buttons of the RadWizard are not server-side buttons and the postback is triggered actually by the Wizard control.

## Solution

The RadWizard's ID needs to be added conditionally in the PostbackTriggers collection of the RadAsyncUpload as explained in the [Dynamically change the PostbackTriggers collection of the AsyncUpload](https://www.telerik.com/support/kb/aspnet-ajax/upload-(async)/details/dynamically-change-the-postbacktriggers-collection-of-the-asyncupload) KB article.

````ASPNET
<script>
    function updateHiddenField() {
        var hidden = document.getElementById("<%= shouldSave.UniqueID %>");
        hidden.value = "fixTriggers";
    }
    function OnClientButtonClicked(sender, args) {
        if (args.get_command() == Telerik.Web.UI.WizardCommand.Finish) {
            updateHiddenField();
        }
    }
</script>

<asp:HiddenField runat="server" ID="shouldSave" />

<telerik:RadWizard runat="server" ID="RadWizard1" OnFinishButtonClick="RadWizard1_FinishButtonClick" OnActiveStepChanged="RadWizard1_ActiveStepChanged" OnClientButtonClicked="OnClientButtonClicked">
    <WizardSteps>
        <telerik:RadWizardStep ID="WizardStep1" StepType="Start">
            <telerik:RadAsyncUpload ID="RadAsyncUpload1" EnableViewState="false" OnFileUploaded="RadAsyncUpload1_FileUploaded" runat="server"></telerik:RadAsyncUpload>
        </telerik:RadWizardStep>
        <telerik:RadWizardStep ID="WizardStep2">
            Step 2
        </telerik:RadWizardStep>
        <telerik:RadWizardStep ID="WizardStep3">
            Step 3
        </telerik:RadWizardStep>
        <telerik:RadWizardStep ID="WizardStep4" StepType="Finish">
            Finish step
        </telerik:RadWizardStep>
        <telerik:RadWizardStep ID="WizardStep5" StepType="Complete">
            Completed!
        </telerik:RadWizardStep>
    </WizardSteps>
</telerik:RadWizard>
````

````C#
protected void Page_Init(object sender, EventArgs e)
{
    if (Request[shouldSave.UniqueID] != null && Request[shouldSave.UniqueID].ToString() == "fixTriggers")
    {
        RadAsyncUpload1.PostbackTriggers = new string[] { "RadWizard1" };
    }
    else
    {
        // persist the files on all postbacks
        RadAsyncUpload1.PostbackTriggers = new string[] { "" };
    }
}

protected void RadAsyncUpload1_FileUploaded(object sender, FileUploadedEventArgs e)
{
    shouldSave.Value = "";
}

protected void RadWizard1_ActiveStepChanged(object sender, EventArgs e) { }

protected void RadWizard1_FinishButtonClick(object sender, WizardEventArgs e) { }

````

## See Also

*  [Dynamically change the PostbackTriggers collection of the AsyncUpload](https://www.telerik.com/support/kb/aspnet-ajax/upload-(async)/details/dynamically-change-the-postbacktriggers-collection-of-the-asyncupload) KB article
