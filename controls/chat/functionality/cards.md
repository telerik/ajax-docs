---
title: Default Cards 
page_title: Default Cards - RadChat
description: Check our Web Forms article about Default Cards.
slug: chat/functionality/cards
tags: default,cards
published: True
position: 1
---

# Default Cards

Rich cards are complex attachment messages that can contain additional message styling, templates, and images. The **RadChat** control supports the default **[heroCards](https://docs.botframework.com/en-us/node/builder/chat-reference/classes/_botbuilder_d_.herocard.html)** template which can be displayed in the chat flow when calling the `renderAttachments` method of the control and pass `heroCard` as a value for the `contentType` property of an attachment.

>caption **Figure 1**: A default HeroCard template.

![chat with heroCard template](../images/chat-heroCard.png)


````ASPX
<telerik:RadChat runat="server" ID="RadChat1">
    <ClientEvents OnLoad="OnLoad"/>
    <MessagesSettings Placeholder="Type your message here..." />
    <UserSettings Name="John" IconUrl="avatar.png" />
</telerik:RadChat>
 ````

````JavaScript
function OnLoad(sender, args) {
    var chat = sender;
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
* **Carousel** - displays multiple cards *horizontally*. In this mode, you can browse the available cards with left/right swipe or with a click on a card and dragging sideways;
* **List** - displays multiple cards *vertically*; 

>caption **Figure 2**: A Carousel cards layout.

![carousel](../images/chat-card-carousel.png)

>caption **Figure 3**: A List cards layout.

![list](../images/chat-card-list.png)

To further customize the appearance of a card, you can also use [Custom Templates]({%slug chat/functionality/templates%}) and [Custom Components]({%slug chat/functionality/components%}) articles.

# See Also

 * [RadChat Structure]({%slug chat/structure%})

 * [RadChat Server-Side Programming]({%slug chat/server-side-programming/overview%})

 * [RadChat Client-Side Programming]({%slug chat/client-side-programming/overview%})

 * [RadChat Online Demos](https://demos.telerik.com/aspnet-ajax/chat/overview/defaultcs.aspx)

 
