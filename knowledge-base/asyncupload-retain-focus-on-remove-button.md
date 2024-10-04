---
title: Retaining Focus on RadAsyncUpload's File List Post File Deletion
description: Learn how to maintain keyboard focus on the RadAsyncUpload component's file list after removing a file using client-side events.
type: how-to
page_title: Retaining Focus on RadAsyncUpload's File List Post File Deletion
slug: asyncupload-retain-focus-on-remove-button
tags: radasyncupload, aspnet-ajax, keyboard, focus, client-side, event
res_type: kb
ticketid: 1666430
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadAsyncUpload for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

When removing a file from the [RadAsyncUpload](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/overview) component using its Remove button, the keyboard focus is lost and doesn't automatically move to the next file's Remove button. This behavior requires pressing the Tab key again to focus on the next element in the list, which is not ideal for keyboard navigation. This KB article also answers the following questions:

- How can I keep the keyboard focus within the RadAsyncUpload's file list after removing a file?
- Is it possible to automatically focus the next Remove button in RadAsyncUpload's file list?
- Can client-side events be used to improve keyboard navigation in RadAsyncUpload?

## Solution

To resolve this issue and enhance keyboard navigation within the RadAsyncUpload component, leverage the `OnClientFileUploadRemoved` client-side event. This approach involves registering an event handler that focuses on the next available Remove button after a file is removed. Here's how to implement this solution:

1. Define the RadAsyncUpload control in your ASP.NET AJAX page with the `OnClientFileUploadRemoved` attribute pointing to a JavaScript function:

````ASP.NET
<telerik:RadAsyncUpload ID="upload1" runat="server" OnClientFileUploadRemoved="onClientFileUploadRemoved" MultipleFileSelection="Automatic" />
````

2. Implement the `onClientFileUploadRemoved` function in JavaScript. This function finds all Remove buttons and sets focus to the first one after a brief timeout, ensuring the focus transition happens smoothly:

````JavaScript
function onClientFileUploadRemoved(sender, args) {
    let removeButtons = document.querySelectorAll(".ruRemove"); // Get all the "Remove" span elements

    setTimeout(() => {
        removeButtons[0]?.focus(); // Focus the next one if it exists
    }, 10)
}
````

By implementing this client-side logic, you ensure that the keyboard focus remains within the RadAsyncUpload's file list, improving accessibility and usability for keyboard users.

## See Also

- [RadAsyncUpload Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/overview)
- [OnClientFileUploadRemoved Event](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/client-side-programming/onclientfileuploadremoved#onclientfileuploadremoved)
