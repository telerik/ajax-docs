---
title: Overview
page_title: Events Overview | RadEditor for ASP.NET AJAX Documentation
description: Overview
slug: editor/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview

Here you can learn the basics of handling **RadEditor**'s client-side events.

The rich set of client-side events exposed in **RadEditor** providesflexibility—you can handle them for your project requirements or to manipulate the text being inserted and/or submitted.The available events are listed below. Each event-specific article offers concrete examples and explains the arguments each event handler receives:

* [OnClientInit]({%slug editor/client-side-programming/events/onclientinit%})

* [OnClientLoad]({%slug editor/client-side-programming/events/onclientload%})

* [OnClientCommandExecuting]({%slug editor/client-side-programming/events/onclientcommandexecuting%})

* [OnClientCommandExecuted]({%slug editor/client-side-programming/events/onclientcommandexecuted%})

* [OnClientDomChange]({%slug editor/client-side-programming/events/onclientdomchange%})

* [OnClientModeChange]({%slug editor/client-side-programming/events/onclientmodechange%})

* [OnClientPasteHtml]({%slug editor/client-side-programming/events/onclientpastehtml%})

* [OnClientSelectionChange]({%slug editor/client-side-programming/events/onclientselectionchange%})

* [OnClientSubmit]({%slug editor/client-side-programming/events/onclientsubmit%})

* [OnClientInlineEditCompleted]({%slug editor/client-side-programming/events/onclientinlineeditcompleted%})

To attach an event you can use either of these two approaches:

* On the server, you can use the dedicated properties -	**OnClient[*EventName*]**. The examples below showcase this technique.

>caption Example 1: Attaching a handler in the markup via the OnClientLoad property.

````ASP.NET
<script type="text/javascript">
	function OnClientLoad(editor, args) {

		editor.attachEventHandler("onkeydown", function (e) {
			alert("Content area key down " + e.keyCode);
		});
	}
</script>

<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor1" OnClientLoad="OnClientLoad"></telerik:RadEditor> 
````

>caption Example 2: Attaching a handler in the code behind via the OnClientLoad property.

````ASP.NET
<script type="text/javascript">
	function OnClientLoad(editor, args) {

		editor.attachEventHandler("onkeydown", function (e) {
			alert("Content area key down " + e.keyCode);
		});
	}
</script>

<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor1"></telerik:RadEditor> 
````
````C#
RadEditor1.OnClientLoad = "OnClientLoad";
````
````VB
RadEditor1.OnClientLoad = "OnClientLoad"
````

* On the client, to attach or detach event handlers, you should use the client-side add/remove methods - **add_[*EventName*]**, **remove_[*EventName*]**. You can find a full list of the methods for attaching and detaching events in the [RadEditor Object]({%slug editor/client-side-programming/radeditor-object%}) article.

>caption Example 3: Attaching a handler via the client-side add_commandExecuted method.

````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor1">
</telerik:RadEditor>
		
<script type="text/javascript">
	function pageLoad(sender, args) {
		var editor = $find("<%= RadEditor1.ClientID %>");

		editor.add_commandExecuted(onCommandExecuted);
	}

	function onCommandExecuted(sender, args) {
		var editor = sender;
		var executedCommand = args.get_commandName();

		alert("The " + executedCommand + " command has been executed!");
	}
</script>
````



## See Also

 * [Overview]({%slug editor/client-side-programming/overview%})

 * [Getting a Reference to the RadEditor Document Object]({%slug editor/client-side-programming/getting-a-reference-to-the-radeditor-document-object%})

 * [RadEditor Object]({%slug editor/client-side-programming/radeditor-object%})
