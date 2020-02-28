---
title: Chat Object
page_title: RadChat Object | RadChat for ASP.NET AJAX Documentation
description: RadChat Object 
slug: chat/client-side-programming/objects/radchat
tags: chatobject
published: True
position: 0
---

# RadChat Object

The **RadChat** control is built on top of the [Kendo UI Chat](https://demos.telerik.com/kendo-ui/chat/index). This allows you to interact with the chat entirely on the client-side. When you have referenced the Kendo UI chat, you can utilize the [full capabilities of its API](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat). 

The following table lists the methods of the client-side **RadChat** object:

|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **get_element** |none|HTMLElement|Returns the HTML element rendered for the control.|
| **get_kendoWidget** |none|[Kendo Chat](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat)|Returns a reference to the underlying Kendo UI Chat widget. See **Example 1**.|
| **get_messages** |none|object| Gets the [Messages property](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat/configuration/messages) of the underlying Kendo UI Chat widget.|
| **get_user** |none|object|Gets the [User property](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat/configuration/user) of the underlying Kendo UI Chat widget.|
| **postMessage** |string|none|Triggers the post event with the message passed as a parameter, and also renders it inside the control. See **Example 2**.|
| **renderAttachments** |object,object|none|Renders an attachment inside the chat by calling the [renderAttachments](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat/methods/renderattachments) method of the underlying Kendo UI Chat widget. The attachments are rendered through a predefined or custom template, registered with the RadChat control. First parameter is the attachment, the second parameter is the sender. See **Example 3**. To render an attachment with a custom template see [Custom Templates]({%slug chat/functionality/templates%}).|
| **renderMessage** |object,object|none|Renders a message bubble inside the chat by calling the [renderMessage](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat/methods/rendermessage) method of the underlying Kendo UI Chat widget. First parameter is the message, the second parameter is the sender. See **Example 4**.|
| **renderSuggestedActions** |Array|none|Renders an array of suggested actions inside the chat by calling the [renderSuggestedActions](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat/methods/rendersuggestedactions) method of the underlying Kendo UI Chat widget. See **Example 5**.|

>caption  Example 1: Get a reference to the underlying Kendo UI Chat widget.
````JavaScript
var radchat = $find("<%= RadChat1.ClientID %>");
var kendochat = radchat.get_kendoWidget();
````

>caption  Example 2: Trigger post event and render a message.
````JavaScript
var chat = $find("<%= RadChat1.ClientID %>");
chat.postMessage("Hello!");
````

>caption  Example 3: Render an attachment inside the chat.
````JavaScript
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
````

>caption  Example 4: Renders a message bubble inside the chat.
````JavaScript
var chat = $find("<%= RadChat1.ClientID %>");
chat.renderMessage({
    type: "text",
    text: "Hello Kendo Chat"
}, {
    id: kendo.guid(),
    name: "Sample User",
    iconUrl: "https://demos.telerik.com/kendo-ui/content/web/chat/avatar.png"
});
````

>caption  Example 5: Renders an array of suggested actions inside the chat.
````JavaScript
var chat = $find("<%= RadChat1.ClientID %>");
chat.renderSuggestedActions([{
    title: "Option 1",
    value: "Value 1"
}, {
    title: "Option 2",
    value: "Value 2"
}]);
````

# See Also

 * [Kendo UI Chat API](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat)

 * [Client-side programming Overview]({%slug chat/client-side-programming/overview%})

 * [Client-side events Overview]({%slug chat/client-side-programming/events%})

