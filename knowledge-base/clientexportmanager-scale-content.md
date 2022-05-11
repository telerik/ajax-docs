---
title: Scale content with RadClientExportManager
description: Scale content with RadClientExportManager. Check it now!
type: how-to
page_title: Scale content with RadClientExportManagers
slug: clientexportmanager-scale-content
res_type: kb
---


### HOW-TO
Scale the content when exporting it with RadClientExportManager  

### DESCRIPTION
When the ClientExportManager exports the content with pageBreaks and if the content is too big for one page it might get cut off. Is there a setting to either zoom out so all content of the wizard step is put on one pdf page?


### SOLUTION

>note As of R2 2022 there is a new Scale server property inside the PdfSettings inner-tag which enables scaling of the produced PDF content.

The solution is to use the [scale client-side setting](https://docs.telerik.com/kendo-ui/framework/drawing/pdf-output/scaling) of the underlying Kendo Drawing API of the ClientExportManager as shown below:

````ASP.NET
<style>
    .k-pdf-export .rwzStep {
        display: block !important;
    }
</style>
<script type="text/javascript">
    function exportAllRecipes() {
        var cem = $find("<%=RadClientExportManager1.ClientID%>");
        var pdfSettings = {
            fileName: "PDF-Export",

            margin: { top: 25, left: 15, bottom: 10, right: 5 },
            paperSize: "A4",
            landscape: "Portrait",
            title: "PDF",
            author: "UserName",
            subject: "Export to PDF",
            keywords: "a keyword",
            creator: "John",
            date: new Date(2015, 10, 25),
            forcePageBreak: ".pageBreak",
            scale: 0.5
        };
        cem.exportPDF($telerik.$(".rwzContent"), pdfSettings);
    }
</script>
<telerik:RadWizard runat="server" ID="RadWizard1">
    <WizardSteps>
        <telerik:RadWizardStep ID="WizardStep1" StepType="Start">
            Step 1
            What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  ...
        </telerik:RadWizardStep>
        <telerik:RadWizardStep ID="WizardStep2" CssClass="pageBreak">
            Step 2
        </telerik:RadWizardStep>
        <telerik:RadWizardStep ID="WizardStep3" CssClass="pageBreak">
            Step 3
        </telerik:RadWizardStep>
        <telerik:RadWizardStep ID="WizardStep4" CssClass="pageBreak" StepType="Finish">
            Finish step
        </telerik:RadWizardStep>
        <telerik:RadWizardStep ID="WizardStep5" StepType="Complete" CssClass="pageBreak">
            Completed!
        </telerik:RadWizardStep>
    </WizardSteps>
</telerik:RadWizard>

<telerik:RadClientExportManager runat="server" ID="RadClientExportManager1" >
</telerik:RadClientExportManager>

<telerik:RadButton runat="server" ID="RadButton1" Text="Export to PDF" AutoPostBack="false" OnClientClicked="OnClientClicked" />
<script>
    function OnClientClicked(sender, args) {
        exportAllRecipes()
    }
</script>
````





