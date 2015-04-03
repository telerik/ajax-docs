---
title: OnCommand
page_title: OnCommand | UI for ASP.NET AJAX Documentation
description: OnCommand
slug: dataform/client-side-programming/events/oncommand
tags: oncommand
published: True
position: 1
---

# OnCommand



## 

The __OnCommand__ client-side event handler is called when a command is about to be executed.

Two parameters are passed to the event handler:

* __sender__ - the __RadDataForm__ control that fired the event

* __eventArgs__ - an event arguments object of type __Telerik.Web.UI.DataFormCommandEventArg__. It has the following methods:


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __get_commandName__ ||String|Returns the name of the initiated command.|
| __get_commandArgument__ ||String|Returns the argument of the initiated command, which will be passed to the server.|

The following example illustrates how you can handle the __OnCommand__ event and retrieve the command name and argument:

````ASPNET
	        <telerik:RadDataForm runat="server" ID="RadDataForm2">
	            <ClientSettings>
	                <ClientEvents OnCommand="onCommand" />
	            </ClientSettings>
	        </telerik:RadDataForm>
````



````JavaScript
	        <script type="text/javascript">
	            function onCommand(sender, args) {
	                var commandName = args.get_commandName();
	                var commandArgument = args.get_commandArgument();
	
	            }
	        </script>
````


