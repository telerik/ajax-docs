---
title: Default Actions 
page_title: Default Actions  | RadChat for ASP.NET AJAX Documentation
description: Default Actions 
slug: chat/functionality/actions
tags: default,actions
published: True
position: 0
---

# Default Actions

The **RadChat** control has a support for default **suggested actions** which are rendered inside a Suggested Actions Pane. A Suggested Action is a button that the user can tap/click to provide input. That is why they can be also called Quick Actions.

 Unlike buttons that appear within [rich cards]({%slug chat/cards%}) (which remain visible and accessible to the user even after being tapped), buttons that appear within the suggested actions pane will disappear after the user makes a selection. This prevents the user from tapping stale buttons within a conversation and simplifies bot development (since you will not need to account for that scenario). 

To display the **suggestedActions** propmt, you need to call  the `renderSuggestedActions` method of the control.

>caption **Figure 1**: A Chat with suggested actions.

![chat with suggested actions](images/suggested-actions.png)

````ASPX
<telerik:RadChat runat="server" ID="RadChat1">
</telerik:RadChat>
 ````

````JavaScript
function renderSuggestedActions() {
    var chat = $find("<%= RadChat1.ClientID %>");
                  
    chat.renderSuggestedActions([{
        title: "Option 1",
        value: "Value 1"
    }, {
        title: "Option 2",
        value: "Value 2"
    }]);
}
````




# See Also

 * [RadChat Structure]({%slug chat/structure%})

 * [RadChat Server-Side Programming]({%slug chat/server-side-programming%})

 * [RadChat Client-Side Programming]({%slug chat/client-side-programming/overview%})

 * [RadChat Online Demos](http://demos.telerik.com/aspnet-ajax/chat/overview/defaultcs.aspx)

 