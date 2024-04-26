---
title: Adding Comment in RadEditor Inline Editing
description: Learn how to add comments in RadEditor using Inline editing mode.
type: how-to
page_title: How to Add Comment in RadEditor Inline Editing | Telerik UI for ASP.NET AJAX
slug: editor-add-comment-in-inline-editing
tags: radeditor, inline editing, comment
res_type: kb
---

## Environment

| Property | Value |
| --- | --- |
| Product | RadEditor for ASP.NET AJAX |
| Version | all |

## Description

When using the RadEditor in the inline editing mode, you may encounter an issue where the comment box does not appear when trying to add a comment. However, a comment is still created with the content "#empty comment#". This is due to the fact that the track changes and comments features are not supported in the lightweight inline editing mode of RadEditor.

## Solution

To add comments in RadEditor, you will need to use the standard editor mode instead of the inline editing mode. The standard editor mode supports all features, including track changes and comments.

Follow these steps to add a comment in RadEditor:

1. Switch to the standard editor mode.
2. Place the cursor at the desired location in the editor where you want to add the comment.
3. Click on the "Insert Comment" button in the toolbar.
4. Enter the desired comment text in the comment box that appears.
5. Click "OK" to add the comment.

By following these steps, you will be able to add comments in RadEditor when using the standard editor mode.

## Notes

Please note that the inline editing mode of RadEditor is designed to be a lighter version of the standard editor, lacking some features such as track changes and comments. If you require these features, it is recommended to use the standard editor mode.

## See Also

- [What is Inline Editing](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/functionality/editor-views-and-modes/inline-editing-mode)
