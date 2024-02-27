---
title: Preventing Pasting Images in RadEditor
description: Learn how to prevent the copying of images in RadEditor by using JavaScript code.
type: how-to
page_title: How to Prevent Pasting Images in RadEditor
slug: editor-prevent-pasting-images
tags: radeditor, images, copy, paste
res_type: kb
---

## Environment

| Product | RadEditor for ASP.NET AJAX |
| ------- | -------------------------- |
| Version | all                 |

## Description

To prevent the copying of images with Ctrl+V in RadEditor, you can use JavaScript code. The code removes the `<img>` tags from the pasted content, allowing only text to be copied.

## Solution

You have two options to prevent pasting images in RadEditor. Choose the one that suits your needs.

Option 1:

```html
        <script>
            function OnClientPasteHtml(sender, args) {
                // Get the command name to determine the action's source
                var commandName = args.get_commandName();

                // Only proceed to filter images if the command is a paste operation
                if (commandName === "Paste") {
                    // Get the HTML content that is about to be pasted
                    var pastedHtml = args.get_value();

                    // Create a temporary element to parse the HTML content
                    var tempDiv = document.createElement('div');
                    tempDiv.innerHTML = pastedHtml;

                    // Remove <img> tags from the content if it's a paste operation
                    var images = tempDiv.getElementsByTagName('img');
                    while (images.length > 0) {
                        images[0].parentNode.removeChild(images[0]);
                    }

                    // Update the pasted content without images
                    args.set_value(tempDiv.innerHTML);
                }
                // If the command is from the ImageManager, do not alter the pasted content
                // Note: No additional code is required here for ImageManager as we want to allow all such images
            }
        </script>
        <telerik:RadEditor ID="RadEditor1" runat="server" OnClientPasteHtml="OnClientPasteHtml">
            <ImageManager ViewPaths="~/Images" UploadPaths="~/Images" />
        </telerik:RadEditor>
```

Option 2:

```html
        <script type="text/javascript">
            Telerik.Web.UI.Editor.ClipboardImagesProvider.prototype.supportsClipboardData = function (event) {
                return false; // Disables default image paste functionality
            }

            function OnClientPasteHtml(editor, args) {
                var commandName = args.get_commandName();
                var value = args.get_value();
                if (commandName === "Paste") {
                    var hasImages = /<img .+?>/ig.test(value); // Check if content contains images

                    if (hasImages) {
                        var confirmStripping = confirm("Do you want to strip the images?");
                        if (confirmStripping) {
                            var strippedContent = value.replace(/<img .+?>/ig, ""); // Remove images
                            args.set_value(strippedContent); // Set the modified content
                        } else {
                            args.set_cancel(true); // Cancel the paste operation if user does not want to strip images
                        }
                    }
                    // If no images are found, do nothing special, allowing the paste of text.
                }
            }
        </script>
        <telerik:RadEditor ID="RadEditor1" runat="server" OnClientPasteHtml="OnClientPasteHtml">
            <ImageManager ViewPaths="~/Images" UploadPaths="~/Images" />
        </telerik:RadEditor>
```

   
