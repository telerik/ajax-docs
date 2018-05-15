---
title: Overview
page_title: Overview | RadChat for ASP.NET AJAX Documentation
description: Server-side Programming Overview
slug: chat/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming

You can configure the settings of **RadChat** and create its elements on the code-behind via the Server-Side API of this customizable ASP.NET Chat control.

## Configuring a Chat From the Code-Behind

**Example 1** shows a possible application of the Server-Side API of the chat. The code in the example configures some settings of the chat, of its User and Messages settings, then assigns the event handlers of the client-side events.

>caption **Example 1**: Configuring a diagram on the server-side.

````C#
protected void Page_Load(object sender, EventArgs e)
{
    RadChat chat = new RadChat();
    chat.ID = "RadChat1";
    chat.CssClass = "my-chat";       

    chat.MessagesSettings.Placeholder = "Hey ya, write here";

    chat.UserSettings.Name = "John";
    chat.UserSettings.IconUrl = "John";

    chat.ClientEvents.OnActionClick = "оnActionClick";
    chat.ClientEvents.OnInitialize = "onInitialize";
    chat.ClientEvents.OnLoad = "onLoad";
    chat.ClientEvents.OnPost = "onPost";
    chat.ClientEvents.OnSendMessage = "onSendMessage";
    chat.ClientEvents.OnTypingEnd = "onTypingEnd";
    chat.ClientEvents.OnTypingStart = "onTypingStart";

    Form.Controls.Add(chat);
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
    Dim chat As RadChat = New RadChat()
    chat.ID = "RadChat1"
    chat.CssClass = "my-chat"

    chat.MessagesSettings.Placeholder = "Hey ya, write here"

    chat.UserSettings.Name = "John"
    chat.UserSettings.IconUrl = "John"

    chat.ClientEvents.OnActionClick = "оnActionClick"
    chat.ClientEvents.OnInitialize = "onInitialize"
    chat.ClientEvents.OnLoad = "onLoad"
    chat.ClientEvents.OnPost = "onPost"
    chat.ClientEvents.OnSendMessage = "onSendMessage"
    chat.ClientEvents.OnTypingEnd = "onTypingEnd"
    chat.ClientEvents.OnTypingStart = "onTypingStart"
    
    Form.Controls.Add(chat)
End Sub
````

````JavaScript
function onTypingStart(sender, args) {
                  
}
function onTypingEnd(sender, args) {
                  
}
function onSendMessage(sender, args) {
                   
}
function onPost(sender, args) {
                  
}
function onLoad(sender) {
                  
}
function оnActionClick(sender, args) {
                    
}
function onInitialize(sender) {
                   
}
````

# See Also

 * [RadChat Overview]({%slug chat/overview%})
 
 * [RadChat Structure]({%slug chat/structure%})



