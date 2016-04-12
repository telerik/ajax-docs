---
title: OnCommand
page_title: OnCommand | RadDataForm for ASP.NET AJAX 
description: OnCommand
slug: dataform/client-side-programming/events/oncommand
tags: oncommand
published: True
position: 1
---

# OnCommand



## 

The **OnCommand** client-side event handler is called when a command is about to be executed.

Two parameters are passed to the event handler:

* **sender** - the **RadDataForm** control that fired the event

* **eventArgs** - an event arguments object of type **Telerik.Web.UI.DataFormCommandEventArg**. It has the following methods:


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_commandName** ||String|Returns the name of the initiated command.|
| **get_commandArgument** ||String|Returns the argument of the initiated command, which will be passed to the server.|

The following example illustrates how you can handle the **OnCommand** event and retrieve the command name and argument:

````ASPNET
<telerik:RadDataForm RenderMode="Lightweight" runat="server" ID="RadDataForm2">
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


