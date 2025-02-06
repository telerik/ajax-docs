---
title: Overview
page_title: AIPrompt Client-side Programming
description: "Overview of the Client-side APIs you can use to create and configure the Telerik WebForms AIPrompt Control."
slug: aiprompt/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview

Overview of the Client-side APIs you can use to configure the Telerik WebForms AIPrompt Control.

>important The Client-side APIs only allow making changes to a rendered `AIPrompt` element. As an ASP.NET WebForms Component, it can only be created the server, see [Server-side Programming Overview]({%slug aiprompt/server-side-programming/overview%})

## Get Client-side reference

Example of getting Client-side reference to the `Telerik.Web.UI.RadAIPrompt` object at Page Load.

````ASP.NET
<telerik:RadAIPrompt runat="server" ID="RadAIPrompt1" Width="400px" />
````

````JavaScript
function pageLoadHandler() {
    let aiPrompt = $find("<%= RadAIPrompt1.ClientID %>");
    let kendoAIPrompt = aiPrompt.get_kendoWidget();
}

Sys.Application.add_load(pageLoadHandler);  
````

For more details about referencing Telerik Controls on the Client-side, you can check out the [Getting Client-Side References]({%slug general-information/get-client-side-reference%}) article.

## Telerik WebForms AIPrompt API

The WebForms AIPrompts exposes a few Client-side properties and enums that can be used to change certain elements on  the client. For a list of available properties, you can refer to the [Properties]({%slug aiprompt/client-side-programming/properties%})  article.

Example of adding a prompt output and changing the active view on Page Load

````ASP.NET
<telerik:RadAIPrompt runat="server" ID="RadAIPrompt1" Width="400px" />
````

````JavaScript
function pageLoadHandler() {
    let aiPrompt = $find("<%= RadAIPrompt1.ClientID %>");

    let promptOutput = {
        prompt: "Write 'Hello World!'",
        output: 'Hello World!'
    }

    setTimeout(() => {
        aiPrompt.set_activeView(1);
        aiPrompt.set_promptOutput(promptOutput);
    }, 1000);
}

Sys.Application.add_load(pageLoadHandler);  
````

## Kendo jQuery AIPrompt API

Since the Telerik WebForms AIPrompt is an ASP.NET WebForms wrapper over the Kendo jQuery widget, you can also access the Kendo object and use its APIs. The complete API reference for the Kendo jQuery AIPrompt can be found at [kendo.ui.AIPrompt](https://docs.telerik.com/kendo-ui/api/javascript/ui/aiprompt).

Example of using the underlying Kendo widget and achieving the same outcome as in the [Telerik WebForms AIPrompt API](#telerik-webforms-aiprompt-api) example.

````ASP.NET
<telerik:RadAIPrompt runat="server" ID="RadAIPrompt1" Width="400px" />
````

````JavaScript
function pageLoadHandler() {
    let aiPrompt = $find("<%= RadAIPrompt1.ClientID %>");
    let kendoAIPrompt = aiPrompt.get_kendoWidget();

    let promptOutput = {
        prompt: "Write 'Hello World!'",
        output: 'Hello World!'
    }

    setTimeout(() => {
        kendoAIPrompt.activeView(1);
        kendoAIPrompt.addPromptOutput(promptOutput);
    }, 1000);
}

Sys.Application.add_load(pageLoadHandler);  
````

## Next Steps

- [Properties]({%slug aiprompt/client-side-programming/properties%})
- [Events]({%slug aiprompt/client-side-programming/events%})
