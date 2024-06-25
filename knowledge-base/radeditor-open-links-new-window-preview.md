---
title: Making Links Open in New Window in RadEditor Preview Mode
description: How to configure RadEditor to open links in a new window when in Preview mode without altering the submitted content.
type: how-to
page_title: Configuring RadEditor for ASP.NET AJAX to Open Links in New Window in Preview Mode
slug: radeditor-open-links-new-window-preview
tags: radeditor, asp.net ajax, links, preview mode, javascript, target=_blank
res_type: kb
ticketid: 195491
---

## Environment

| Product | RadEditor for ASP.NET AJAX |
| --- | --- |
| Version | алл |

## Description

When using [RadEditor](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/overview) for ASP.NET AJAX, there is a need to have links open in a new window while in Preview mode. This adjustment should only affect the display in Preview mode and not alter the content that gets submitted. By default, links are not clickable in the Preview area to prevent content loss if a link redirects the page.

This KB article also answers the following questions:
- How can I make links clickable in RadEditor's Preview mode?
- Is it possible to set all links in RadEditor to open in new tabs during Preview?
- How do I ensure links in RadEditor Preview mode do not navigate away from the page?

## Solution

To achieve the desired functionality where links open in a new window in Preview mode without affecting the final content, use the JavaScript code below. This code dynamically sets the `target="_blank"` attribute for all links when the editor is in Preview mode, ensuring that links will open in a new window. When switching out of Preview mode, the original `target` attribute values are restored.

```javascript
function OnClientLoad(editor)
{       
    editor.add_modeChange(function()
    {
        // Convert all links to have target = "_blank" when user is in preview mode. Restore original setting when switching back.
        var mode = editor.get_mode();
        var links = editor.get_document().getElementsByTagName("A");
        
        for (var i = 0; i < links.length; i++)
        {
            var link = links[i];
            // Keep old setting, set target=blank
            if (mode == Telerik.Web.UI.EditModes.Preview)
            {
                link.setAttribute("original_target",  link.getAttribute("target"));
                link.setAttribute("target",  "_blank");
            }
            else 
            {               
               var target = link.getAttribute("original_target");
               if (target) link.setAttribute("target",  target);
               link.removeAttribute("original_target");
            }
        }                
    });
}
```

To apply this solution, include the JavaScript function in your page and assign it to the `OnClientLoad` event of the RadEditor control like this:

```aspnet
<telerik:radeditor runat="server" ID="RadEditor1" OnClientLoad="OnClientLoad" />
```

## Notes

- Ensure that the JavaScript code is loaded after the RadEditor control or in the `<head>` section of your page to guarantee it functions correctly.

- This solution manipulates the `target` attribute of anchors (`<a>` tags) dynamically and preserves the original settings for consistent behavior across different editor modes.

## See Also

- [Have links in Preview mode open in new window 
](https://www.telerik.com/forums/have-links-in-preview-mode-open-in-new-window)
- [Client-Side Programming Overview in RadEditor](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/client-side-programming/overview)
