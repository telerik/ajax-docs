---
title: How to clear RadChat Messages
description: How to clear RadChat Messages - Telerik UI for ASP.NET AJAX. Check it out!
type: how-to
page_title: How to clear RadChat Messages
slug: chat-how-to-clear-radchat-messages
position: 
tags: 
ticketid: 1532805
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>all</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>RadChat for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
Learn how to clear the messages inside RadChat.

## Solution
You can clear the content of the chat, you can utilize jQuery and get access to the element that holds the messages and clear the messages.

````ASP.NET
<telerik:RadButton runat="server" ID="RadButton1" Text="Clear Chat Screen" AutoPostBack="false" OnClientClicked="clearChatScreen" />

<script>
    function clearChatScreen(sender, args) {
        $('.RadChat .t-message-list-content div').remove();
    }
</script>
````

For more information on available Client-Side APIs you can check out the RadChat documentation at [RadChat Object]({%slug chat/client-side-programming/objects/radchat%}). Since this component is a wrapper for the Kendo Chat widget, some APIs can only be accessed for the underlying kendo Widget. For a full list of API configurations visit the [kendo.ui.Chat](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat) documentation.

 
