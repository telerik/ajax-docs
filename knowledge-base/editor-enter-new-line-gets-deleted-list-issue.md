---
title: The line below is deleted when clicking enter in a list pasted from Word
description: Learn how to resolve the issue where ordered and unordered lists copied from Word are not properly displayed when pasted into RadEditor for ASP.NET AJAX.
type: how-to
page_title: The new line gets deleted when clicking enter in a list pasted from Word
slug: editor-enter-new-line-gets-deleted-list-issue
tags: radeditor, asp.net ajax, paste from Word, unordered list, issue
res_type: kb
---

## Environment

| Product | RadEditor for ASP.NET AJAX |
| ------- | ------------------------- |
| Version | all              |

## Description

When pasting content from Microsoft Word into RadEditor, you may encounter an issue where lists (ol and ul) are not properly displayed. Specifically, when you click enter after pasting the list, a line is deleted. This issue occurs because the pasted content sometimes has HTML structure anomalies, particularly with the list elements.

For example, if you paste content into a [standard editable div/iframe element](https://dojo.telerik.com/UlaCozIk) (like the content area of RadEditor) and inspect it, you might notice an issue where a nested `<ul>` tag is not properly enclosed within `<li>` tags. According to XHTML and HTML5 standards, a `<ul>` must be nested inside a `<li>` when it is a child of another `<ul>`. However, the pasted content does not always adhere to this requirement, which leads to the malformed structure shown below:

````HTML
<ul>
  <li>Parent List Item</li>
  <ul> <!-- This <ul> should be wrapped within <li> tags -->
    <li>Newsted List Item</li>
  </ul>
</ul>
````

This incorrect nesting can disrupt the content validation functionality of RadEditor, potentially leading to issues like the deletion of lines or improper list formatting.

## Solution

To resolve this issue, you can modify the OnClientPasteHtml event in the RadEditor configuration to automatically correct the structure of the pasted HTML. Follow the steps below:

1. Add the following JavaScript code to your RadEditor configuration:

```javascript
<script>
    function onClientPasteHtml(sender, args) {
        var pastedHtml = args.get_value();
        var wrapper = document.createElement('div');
        wrapper.innerHTML = pastedHtml;

        // Query all <ul> elements
        var allULs = wrapper.getElementsByTagName('ul');
        Array.from(allULs).forEach(function (ul) {
            // Check if the <ul> is a direct sibling of an <li>
            var previousSibling = ul.previousElementSibling;
            if (previousSibling && previousSibling.tagName.toLowerCase() === 'li') {
                // Move the <ul> to be a child of the previous <li>
                previousSibling.appendChild(ul);
            }
        });

        // Update the HTML to be pasted
        args.set_value(wrapper.innerHTML);
    }
</script>
```

2. Use the `OnClientPasteHtml` event in the RadEditor control to call the `onClientPasteHtml` function:

```html
<telerik:RadEditor runat="server" ID="RadEditor1" Height="600px" OnClientPasteHtml="onClientPasteHtml">
</telerik:RadEditor>
```

By implementing this code, the function will check for any `<ul>` elements that are direct siblings of `<li>` elements and adjust the DOM to wrap these `<ul>` elements within the preceding `<li>`. This ensures that the pasted HTML has the correct structure and resolves the issue with unordered lists pasted from Word.

   
