---
title: Overview
page_title: Client-side Programming Overview | RadEditor for ASP.NET AJAX Documentation
description: Overview
slug: editor/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview

You can find here some basic information that will help you to get started with the client-side API exposed by the __RadEditor__ control.

## Getting Started

The exposed client-side API enables you to manipulate content dynamically, provide [custom commands/tools]({%slug editor/functionality/toolbars/buttons/add-your-own-buttons%}), build [custom content filters]({%slug editor/managing-content/content-filters%}) and handle a rich set of [client-side events]({%slug editor/client-side-programming/events/overview%})

The first thing to now is how to [get a reference to the client-side RadEditor instance](#getting-a-reference-to-the-client-side-object) and use the exposed API.

## Getting a Reference to the Client-side Object

You can get a reference to the editor using the [$find method](https://msdn.microsoft.com/en-us/library/vstudio/bb397441%28v=vs.100%29.aspx).

It is always recommended to assure that the client-side id of the control is used. The best way for that is using the server tags (e.g., ` $find("<%= name.ClientID %>")`).

The following example showcases how to get a client-side reference to the RadEditor instance.

>caption Example 1: Getting a reference to the client-side object of the RadEditor

````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server" />

<telerik:RadEditor ID="RadEditor1" runat="server"></telerik:RadEditor>

<script type="text/javascript">
	Sys.Application.add_load(function () {
		var editor = $find("<%= RadEditor1.ClientID %>"); //get a reference to RadEditor's client object
		alert(editor.get_id()); //returns RadEditor Client ID
	});
</script> 
````

You can find more details about the client-side object creation in the more detailed [Getting a Reference to RadEditor]({%slug editor/client-side-programming/getting-a-reference-to-radeditor%}) article

## Handling Client-side Events

Full list of the exposed client-side events is available in the [Client-side Events Overview]({%slug editor/client-side-programming/events/overview%}) article.

One way to attach a handler is using the __OnClient__ properties of the RadEditor control and type the name of the handler function.

This example demonstrates how add a handler the [OnClientLoad event]({%slug editor/client-side-programming/events/onclientload%}). As you can see, in this case,	the client-side reference of the control is exposed in the event arguments and you do not need to explicitly get it.

>caption Example 2: Attaching a handler function to the client-side load event.

````ASP.NET
<script type="text/javascript">
	function OnClientLoad(editor, args) {

		editor.attachEventHandler("onkeydown", function (e) {
			alert("Content area key down " + e.keyCode);
		});
	}
</script>

<telerik:RadEditor runat="server" ID="RadEditor1" OnClientLoad="OnClientLoad"></telerik:RadEditor> 
````


## See Also

 * [Getting a Reference to RadEditor]({%slug editor/client-side-programming/getting-a-reference-to-radeditor%})

 * [Overview]({%slug editor/client-side-programming/events/overview%})
