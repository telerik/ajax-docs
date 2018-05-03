---
title: Getting Started
page_title: Getting Started | RadChat for ASP.NET AJAX Documentation
description: Getting Started
slug: chat/getting-started
tags: getting,started
published: True
position: 1
---

# Getting Started

The following tutorial demonstrates how you can add a simple **RadChat** control. The end result will be similar to **Figure 1**:

>caption **Figure 1**: A RadChat configuration with a few shapes and connections

![chat-simple-setup](images/chat-simple-setup.png)

1. Add a **ScriptManager** control on a Web Form.

1. Add a **RadDiagram** control on this AJAX-enabled Web Form: 
	
	>caption **Example 1**: Declaration of a **RadChat** control.

	**ASP.NET**

		<asp:ScriptManager runat="server" ID="ScriptManager1"  />
		<telerik:RadChat ID="RadChat1" runat="server">
		</telerik:RadChat>



1. Set some of the message and user settings like **Placeholder**, **Name** and **IconUrl**.

	>caption **Example 2**: The chat now has a custom placeholder message, username and avatar

	**ASP.NET**

		<asp:ScriptManager runat="server" ID="ScriptManager1"  />
		<telerik:RadChat runat="server" ID="RadChat1">
            <MessagesSettings Placeholder="Type your message here..." />
            <UserSettings Name="John" IconUrl="avatar.png" />
        </telerik:RadChat>


1. Press F5 to run the application. You will see the chat that is displayed in **Figure 1**. From this point you can start interacting with the chat.

	>caption **Example 3**: Assigning the client-side event handlers:

	**ASP.NET**

		<asp:ScriptManager runat="server" ID="ScriptManager1"  />
		<telerik:RadChat runat="server" ID="RadChat1">
            <ClientEvents
                OnActionClick="OnActionClick"
                OnInitialize="OnInitialize"
                OnLoad="OnLoad"
                OnPost="OnPost"
                OnSendMessage="OnSendMessage"
                OnTypingEnd="OnTypingEnd"
                OnTypingStart="OnTypingStart" />
            <MessagesSettings Placeholder="Type your message here..." />
            <UserSettings Name="John" IconUrl="avatar.png" />
        </telerik:RadChat>

    ````JavaScript
    function OnActionClick(sender, args) {
    
    }
    
    function OnInitialize(sender, args) {
    
    }
    
    function OnLoad(sender, args) {
    
    }
    
    function OnPost(sender, args) {
    
    }
    
    function OnSendMessage(sender, args) {
    
    }
    
    function OnTypingEnd(sender, args) {
    
    }
    
    function OnTypingStart(sender, args) {
    
    }
    ````

# See Also

 * [RadChat Structure]({%slug chat/structure%})

 * [RadChat Server-Side Programming]({%slug chat/server-side-programming/overview%})
 
