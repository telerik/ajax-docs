---
title: Copying Word Document Content with Images into RadEditor
description: Learn how to paste content from a Word document, including images, into RadEditor without losing the image data.
type: how-to
page_title: How to Paste from Word with Images into RadEditor for ASP.NET AJAX
slug: editor-paste-word-images-radeditor
tags: radeditor, asp.net ajax, word, images, copying, pasting
res_type: kb
category: knowledge-base
ticketid: 1652422
---

## Environment

| Property | Value |
| --- | --- |
| Product | RadEditor for ASP.NET AJAX |
| Version | all |

## Description

When attempting to paste content from a Word document that includes both text and images into RadEditor, the images do not appear as expected. Instead, a broken image icon is displayed. This issue arises due to browser security policies preventing the loading of images from the clipboard as base64 encoded strings. 
This KB article also answers the following questions:
- How can I paste images from Word documents into RadEditor?
- Why do images from Word not paste correctly into RadEditor?
- What is the workaround for pasting Word document content with images into RadEditor?

## Solution

To successfully paste images from a Word document into RadEditor, follow these steps:

1. Open the Word document containing the text and image(s).
2. Click on the image in the Word document to select it independently of any text.
3. Copy the image (Ctrl+C or right-click and select Copy).
4. Paste the image into RadEditor (Ctrl+V or right-click and select Paste).
5. Repeat the process for each image in the document, copying and pasting them one at a time.

For text content, you can select and copy the text separately from the images and paste it into RadEditor as usual. This method circumvents the browser's security restrictions by directly pasting the image data instead of referencing a local file path, which browsers are not permitted to access.

A visual demonstration of this process can be found in this video: [Paste Images from Word in an editable iframe HTML element](https://youtu.be/nVdkc1cTe5U). The video shows how the browser behaves when copying and pasting images standalone versus with text selection.

## Notes

- This workaround is necessary due to browser security policies that prevent web applications from accessing local file paths.
- The issue is not specific to RadEditor and can occur in other web-based editors, such as the Gmail editor.

## See Also

- [RadEditor Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/overview)
- [Paste Images from Word in an editable iframe HTML element](https://youtu.be/nVdkc1cTe5U)
- [StackOverflow Discussion on Browser Security and Local Resources](https://stackoverflow.com/questions/39007243/cannot-open-local-file-chrome-not-allowed-to-load-local-resource)
 
