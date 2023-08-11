---
title: Add a Highlight Button to the RadEditor Toolbar and Applying a CSS Class to Selected Text
description: Learn how to enhance the functionality of the Telerik RadEditor by adding a custom Highlight button to the Telerik RadEditor toolbar - Telerik.Web.UI
type: troubleshooting
page_title: Create a custom text highlighting button in the editor
slug: editor-custom-highlight-button-with-applyclass-functionality
position: 
tags: 
ticketid: 1619208
res_type: kb
---

## Environment
<table>
    <tbody>
        <tr>
            <td>Product Version</td>
            <td>2023.1.117</td>
        </tr>
        <tr>
            <td>Product</td>
            <td>RadEditor for ASP.NET AJAX</td>
        </tr>
    </tbody>
</table>


## Description
The Telerik RadEditor is a versatile web-based WYSIWYG editor that allows developers to integrate rich text editing capabilities into their web applications. This Knowledge Base (KB) article demonstrates how to enhance the functionality of the Telerik RadEditor by adding a custom "Highlight" button to the editor toolbar. When this button is clicked, a CSS class called "highlightContent" is applied to the selected text within the editor's content area. This provides users with the ability to visually emphasize specific portions of their content.

## Solution
Follow these steps to implement the Highlight button functionality and apply a CSS class to selected text in the Telerik RadEditor:

Integrate the CSS:
Add the following CSS code within the `<style>` tags of your HTML document. This code defines the visual appearance of the highlighted text by setting a yellow background color.

````HTML
<style>
    .highlightContent {
        background-color: yellow;
    }
</style>
````

Configure the Telerik RadEditor:
In your ASPX/ASCX/masterpage, include the Telerik RadEditor control with the necessary configuration. Note the addition of the Hi tool within the Tools section, which will serve as our custom "ApplyHighlight" button. The Content section contains sample paragraphs for demonstration purposes.

````ASPX
<telerik:RadEditor ID="RadEditor1" ExternalDialogsPath="~/EditorDialogs" runat="server">
    <Tools>
        <telerik:EditorToolGroup>
            <telerik:EditorTool Name="ApplyHighlight" />
        </telerik:EditorToolGroup>
    </Tools>
    <Content>
        <p>This is paragraph 1.</p>
        <p>This is paragraph 2.</p>
    </Content>
    <Modules>
        <telerik:EditorModule Name="RadEditorHtmlInspector" Visible="true" Enabled="true" />
    </Modules>
</telerik:RadEditor>
````

Implement JavaScript Functionality:
Add the following JavaScript code within the `<script>` tags of your HTML document. This code associates the custom "Highlight" button with the application of the `highlightContent` CSS class to the selected text.

````JavaScript
<script>
    Telerik.Web.UI.Editor.CommandList["ApplyHighlight"] = function (commandName, editor, args) {
        if (editor.getSelectionHtml() != "") {
            editor.fire("ApplyClass", new Telerik.Web.UI.EditorCommandEventArgs("ApplyClass", null, "highlightContent"));
        }
    };
</script>
````

In this code, the ApplyHighlight command is triggered when the custom button is clicked. The `editor.getSelectionHtml()` function retrieves the HTML content of the selected text. If text is selected, the "ApplyClass" event is fired with the CSS class name "highlightContent" as an argument.

By following these steps, you can enhance the Telerik RadEditor's capabilities by adding a custom ApplyHighlight button to the toolbar and allowing users to emphasize specific content using the `highlightContent` CSS class. This functionality provides a user-friendly way to visually distinguish and highlight important information within the editor's content area.

 
