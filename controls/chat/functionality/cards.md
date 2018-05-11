---
title: Default Cards 
page_title: Default Cards | RadChat for ASP.NET AJAX Documentation
description: Default Cards 
slug: chat/functionality/cards
tags: default,cards
published: True
position: 1
---

# Default Cards

Out of the box, the **RadChat** supports **heroCards** which can be displayed in the chat flow by manually calling the `renderAttachments` method of the control.

````ASPX
<telerik:RadChat runat="server" ID="RadChat1">
</telerik:RadChat>
 ````

````JavaScript
function renderAttachments() {
    var chat = $find("<%= RadChat1.ClientID %>");
    chat.renderAttachments({
        attachments: [{
            contentType: "heroCard",
            content: {
                title: "Attachment Title",
                subtitle: "Attachment Subtitle",
                text: "Sample text"
            }
        }],
        attachmentLayout: "carousel"
    }, chat.get_user());
}
````



# See Also

 * [RadChat Structure]({%slug chat/structure%})

 * [RadChat Server-Side Programming]({%slug diagram/server-side-programming%})

 * [RadChat Client-Side Programming]({%slug chat/client-side-programming/overview%})

 