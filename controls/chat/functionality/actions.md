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

Out of the box, the **RadChat** supports **suggested actions**. To display the **suggestedActions** propmt, manually call the `renderSuggestedActions` method of the control.

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

 * [RadChat Server-Side Programming]({%slug diagram/server-side-programming%})

 * [RadChat Client-Side Programming]({%slug chat/client-side-programming/overview%})

 