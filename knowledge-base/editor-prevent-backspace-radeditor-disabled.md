---
title: Disabling Content Removal Using Backspace when RadEditor is disabled
description: Learn how to prevent content removal using the backspace key in RadEditor by disabling editing and making it non-editable.
type: how-to
page_title: How to Prevent Content Deletion with Backspace when RadEditor is disabled
slug: editor-prevent-backspace-radeditor-disabled
tags: radeditor, asp.net ajax, disable editing, non-editable, backspace, prevent content removal
res_type: kb
ticketid: 1666216
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadEditor for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>all</td>
</tr>
</table>

## Description
Even after setting `enableEditing` and `set_editable` to `false`, it's still possible to remove or modify the content in RadEditor using the backspace key. How can this behavior be disabled to prevent content removal?

This KB article also answers the following questions:
- How to make RadEditor content non-editable?
- How to disable the backspace key in RadEditor?
- How to prevent content modification in RadEditor?

## Solution
To prevent users from removing content using the backspace key in [RadEditor](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/overview) while keeping the editor non-editable, follow the steps below:

1. **Disable Editing and Make Non-Editable:**

   Set the editor to non-editable mode by using the `enableEditing(false)` and `set_editable(false)` methods.

2. **Disable the Backspace Key:**

   Add an event listener to the RadEditor content area to disable the backspace key functionality.

   ````ASPX
   <script>
   function OnClientLoad(editor, args) {
       editor.enableEditing(false);
       editor.set_editable(false);

       var contentArea = editor.get_contentArea();
       contentArea.addEventListener('keydown', function (e) {
           if (e.key === 'Backspace') {
               e.preventDefault();
           }
       });
   }
   </script>
   ````

3. **Integrate the Event Listener with the RadEditor:**

   Ensure the `OnClientLoad` event is properly configured in your RadEditor definition.

   ````aspx
   <telerik:RadEditor ID="RadEditor1" runat="server" OnClientLoad="OnClientLoad">
       <Content>some content</Content>
   </telerik:RadEditor>
   ````

   This configuration disables the backspace key, preventing content removal and modification, while keeping the editor in a non-editable state.

Additionally, to disable other editing features such as copy, typing, enter, delete, and pasting content, you can use the `OnClientCommandExecuting` and `OnClientPasteHtml` events:

```asp
<telerik:RadEditor runat="server" ID="RadEditor1" ContentAreaMode="iframe" OnClientLoad="OnClientLoad" OnClientCommandExecuting="OnClientCommandExecuting" OnClientPasteHtml="OnClientPasteHtml">
    <Content>test content</Content>
</telerik:RadEditor>
```

````ASPX
<script>
function OnClientCommandExecuting(editor, args) {
    args.set_cancel(true);
}
function OnClientPasteHtml(editor, args) {
    args.set_cancel(true);
}
</script>
````

## See Also

- [RadEditor Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/overview)
- [RadEditor Client-Side Programming](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/client-side-programming/overview)
