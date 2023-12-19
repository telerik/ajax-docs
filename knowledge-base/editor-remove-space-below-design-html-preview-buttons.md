---
title: Removing the Space Below the Design, HTML, and Preview Buttons
description: Learn how to remove the big space below the Design, HTML, and Preview buttons in RadEditor for ASP.NET AJAX.
type: how-to
page_title: How to Remove the Space Below the Design, HTML, and Preview Buttons in RadEditor for ASP.NET AJAX
slug: editor-remove-space-below-design-html-preview-buttons
tags: radeditor, aspnet-ajax, space, design, html, preview, buttons
res_type: kb
---

## Environment

| Product     | RadEditor for ASP.NET AJAX |
|-------------|-------------------------|
| Version     | all  |

## Description

When using RadEditor for ASP.NET AJAX, you may notice a big space below the Design, HTML, and Preview buttons. This space is reserved for the RadEditorDomInspector and RadEditorNodeInspector modules.

## Solution

To remove the space below the Design, HTML, and Preview buttons, you can hide the RadEditorDomInspector and RadEditorNodeInspector modules by setting their `visible` attributes to "false" in the ToolsFile.xml file. Here are the steps to do so:

1. Locate the ToolsFile.xml file in your project.
2. Open the ToolsFile.xml file in a text editor.
3. Find the following lines:

    ```
    <module name="RadEditorDomInspector" visible="true"  />
    <module name="RadEditorNodeInspector" visible="true" />
    ```

4. Change the `visible` attribute of both lines to "false", like this:

    ```
    <module name="RadEditorDomInspector" visible="false"  />
    <module name="RadEditorNodeInspector" visible="false" />
    ```

5. Save the ToolsFile.xml file.

After following these steps, the space below the Design, HTML, and Preview buttons in RadGrid for ASP.NET AJAX will be removed.

## Notes

- Make sure to backup the ToolsFile.xml file before making any changes.
- Hiding the RadEditorDomInspector and RadEditorNodeInspector modules will remove their functionality from the editor.

## See Also

- [RadEditor Modules Overview Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/functionality/modules/overview)
