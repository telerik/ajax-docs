---
title: Making Hyperlinks in RadEditor Open in a New Tab
description: Learn how to configure RadEditor for ASP.NET AJAX to open hyperlinks in a new tab by customizing the Hyperlink Manager or handling the OnClientDomChange event.
type: how-to
page_title: How to Configure RadEditor Hyperlinks to Open in New Tabs
slug: radeditor-hyperlinks-new-tab
tags: radeditor, asp.net ajax, hyperlinks, new tab, target attribute, onclientdomchange
res_type: kb
ticketid: 1662835
---

## Environment

| Product | Version |
| --- | --- |
| RadEditor for ASP.NET AJAX | Current |

## Description

After adding a hyperlink in RadEditor and saving it, clicking the hyperlink does not open it in a separate tab; it tries to open in the same tab.

This KB article also answers the following questions:
- How to make hyperlinks open in a new tab?
- How to customize the Hyperlink Manager dialog in RadEditor?
- How to use the OnClientDomChange event to modify hyperlink behavior in RadEditor?

## Solution

To ensure that hyperlinks open in a new tab, you need to set the `target` attribute of the `<a>` tag to `_blank`. This can be achieved through the following solutions:

### Solution 1: Customize the Hyperlink Manager

Customize the Hyperlink Manager dialog file (`EditorDialogs/LinkManager.ascx`). Utilize this [demo](https://demos.telerik.com/aspnet-ajax/editor/examples/externaldialogspath/defaultcs.aspx) as a base to proceed.

### Solution 2: Use the OnClientDomChange Event

Attach to the `OnClientDomChange` event and modify the `target` attribute of the `<a>` tag inserted in the content area by the Hyperlink Manager:

```javascript
<script type="text/javascript">
    function OnClientDomChange(editor, args) {
        
        var commandName = args.get_commandName();
        var value = args.get_value();
            
        if (commandName == "LinkManager") {
            var link = value;
            
            // Apply target="_blank" to the inserted link
            link.setAttribute("target", "_blank");
        }
    }
</script>
```

```xml
<telerik:RadEditor runat="server" OnClientDomChange="OnClientDomChange" ID="RadEditor1"></telerik:RadEditor>
```

## See Also

- [RadEditor Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/overview)
- [OnClientDomChange Event](http://www.telerik.com/help/aspnet-ajax/editor-onclientdomchange.html)
- [External Dialogs Path Demo](https://demos.telerik.com/aspnet-ajax/editor/examples/externaldialogspath/defaultcs.aspx)
