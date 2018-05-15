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

Rich cards are complex attachment messages that can contain additional message styling, templates, and images. The **RadChat** control supports the default **heroCards** template which can be displayed in the chat flow when calling the `renderAttachments` method of the control and pass `heroCard` as a value for the `contentType` property of an attachment.

>caption **Figure 1**: A Chat that uses the default HeroCard template.

![chat with heroCard template](images/chat-heroCard.png)

````ASPX
<telerik:RadChat runat="server" ID="RadChat1">
    <ClientEvents OnLoad="OnLoad"/>
    <MessagesSettings Placeholder="Type your message here..." />
    <UserSettings Name="John" IconUrl="avatar.png" />
</telerik:RadChat>
 ````

````JavaScript
function OnLoad(sender, args) {
    renderAttachments();
}

function renderAttachments() {
    var chat = $find("<%= RadChat1.ClientID %>");
    chat.renderAttachments({
        attachments: [{
            contentType: "heroCard",
            content: {
                title: "Attachment Title",
                subtitle: "Attachment Subtitle",
                text: "Some sample text to be shown inside the attachment to illustrate the image above.",
                images: [{
                    url: "mountain.png",
                    alt: "mountain"
                }]
            }
        }],
        attachmentLayout: "carousel"
    }, chat.get_user());
}
````

The layout of a collection of attachments can be: 
* **Carousel** - displays multiple cards *horizontally*;
    ![carousel](images/chat-card-carousel.png)
* **List** - displays multiple cards *vertically*; 
    ![deck](images/chat-card-list.png)

To further customize the appearance of a card, you can also use [Custom Templates]({%slug chat/functionality/templates%}) and [Custom Components]({%slug chat/functionality/components%}) articles.

# See Also

 * [RadChat Structure]({%slug chat/structure%})

 * [RadChat Server-Side Programming]({%slug chat/server-side-programming/overview%})

 * [RadChat Client-Side Programming]({%slug chat/client-side-programming/overview%})

 * [RadChat Online Demos](http://demos.telerik.com/aspnet-ajax/chat/overview/defaultcs.aspx)

 