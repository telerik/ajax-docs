---
title: Localization
page_title: Localization - RadPdfViewer
description: Check our Web Forms article about Localization.
slug: pdfviewer/accessibility-and-internationalization/localization
tags: localization,string
published: True
position: 0
---

# Localization

**RadPdfViewer** provides a built-in mechanism for easy localization of the all of its tools and messages. Below you will find a table with all messages that can be localized through the control:

## Localization Messages

#### RadPdfViewer > MessagesSettings

| Property Name| Description | 
| ------ | ------ |
| **DefaultFileName** | Specifies the default file name used for Download.|

### Toolbar Messages

#### RadPdfViewer > MessagesSettings > ToolBarMessages

| Property Name| Default Value | 
| ------ | ------ |
| **Download** | Download|
| **ExportAs** | Export|
| **Open** | Open|
| **PagerMessages.First** | Go to the first page|
| **PagerMessages.Last** | Go to the last page|
| **PagerMessages.Next** | Go to the next page|
| **PagerMessages.Of** |of {0} |
| **PagerMessages.Page** | page|
| **PagerMessages.Pages** | pages|
| **PagerMessages.Previous** | Go to the previous page|

### Dialog Messages

#### RadPdfViewer > MessagesSettings > DialogsMessages

| Property Name| Default Value | 
| ------ | ------ |
| **Cancel** | Cancel|
| **OkText** | OK|
| **Save** | Save|
| **ExportAsDialogMessages.DefaultFileName** | Document|
| **ExportAsDialogMessages.Pdf** | Portable Document Format (.pdf)|
| **ExportAsDialogMessages.Png** | Portable Network Graphics (.png)|
| **ExportAsDialogMessages.Svg** | Scalable Vector Graphics (.svg) |
| **ExportAsDialogMessages.Title** | Export...|
| **ExportAsDialogMessages.LabelsMessages.FileName** | File name|
| **ExportAsDialogMessages.LabelsMessages.Page** | Page|
| **ExportAsDialogMessages.LabelsMessages.SaveAsType** | Save as|

### Error Messages

#### RadPdfViewer > MessagesSettings > ErrorMessages

| Property Name| Default Value | 
| ------ | ------ |
| **NotFound** | File is not found.|
| **NotSupported** | Only pdf files allowed. |
| **ParseError** | PDF file fails to process. |

>caption Example 1: Localized RadPdfViewer

```ASP.NET
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.js"></script>

<script type="text/javascript">
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.worker.js';
</script>

<telerik:RadPdfViewer runat="server" ID="RadPdfViewer1" Height="400px" Width="800px">
    <PdfjsProcessingSettings File="Document.pdf"></PdfjsProcessingSettings>
    <MessagesSettings DefaultFileName="Document">
        <ToolBarMessages Download="Download" ExportAs="Export" Open="Open">
            <PagerMessages First="Go to the first page" Last="Go to the last page" Next="Go to the next page" Of="of {0} " Page="page" Pages="pages" Previous="Go to the previous page" />
        </ToolBarMessages>
        <DialogsMessages Cancel="Cancel" OkText="OK" Save="Save">
            <ExportAsDialogMessages DefaultFileName="Document" Pdf="Portable Document Format (.pdf)" Png="Portable Network Graphics (.png)" Svg="Scalable Vector Graphics (.svg)" Title="Export...">
                <LabelsMessages FileName="File name" Page="Page" SaveAsType="Save as" />
            </ExportAsDialogMessages>
        </DialogsMessages>
        <ErrorMessages NotFound="File is not found." NotSupported="Only pdf files allowed." ParseError="PDF file fails to process." />
    </MessagesSettings>
</telerik:RadPdfViewer>
```








