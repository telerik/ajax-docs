---
title: Disable Keyboard Shortcuts
page_title: Disable Keyboard Shortcuts | RadEditor for ASP.NET AJAX Documentation
description: Disable Keyboard Shortcuts
slug: editor/accessibility-and-internationalization/keyboard-support/disable-keyboard-shortcuts
tags: disable,keyboard,shortcuts
published: True
position: 1
---

# Disable Keyboard Shortcuts



## 

Depending on the case, sometimes it is necessary to remove some of the tools from the editor toolbar. However, the browser automatically assigns keyboard shortcuts to some of the rich text editor commands such as Bold (Ctrl+B), Italic (Ctrl+I), Underline (Ctrl+U) and these shortcuts will still work even if the bold, italic and underline buttons are not added to the toolbar.

To disable a specific command shortcut attach a function to the OnCommandExecuting handler and check for the name of the current executing command. If it is a command that is in the exclude list, then just cancel the execution of the command. Here is how to do it with the command **Bold** for example:

````ASP.NET
<script type="text/javascript">
	function OnClientCommandExecuting(editor, args)
	{
		//If commandName is Bold - then cancel execution
		if ("Bold" == args.get_commandName()) 
			args.set_cancel(true);
	}
</script>
<telerik:RadEditor ID="RadEditor1" OnClientCommandExecuting="OnClientCommandExecuting" runat="server">
</telerik:RadEditor>
````


