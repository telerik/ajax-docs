---
title: Internationalization
page_title: SpeechToTextButton Internationalization 
description: "Internationalization of the Telerik WebForms SpeechToTextButton component."
slug: speechtotextbutton/accessibility/internationalization
tags: internationalization
position: 1
---

# Internationalization

The SpeechToTextButton supports Internationalization by its `Messages` collection. The collection consists of text messages, used as aria-labels by the control. Users can use this option to customize or localize the messages.

Example

````ASP.NET
<telerik:RadSpeechToTextButton runat="server" ID="RadSpeechToTextButton1">
    <Messages NotInitialized="Not Initializaed yet" Start="Started" Stop="Stopped" Unsupported="This is not supported" />
</telerik:RadSpeechToTextButton>
````

The available Messages can be found in the [Server Properties article]({%slug speechtotextbutton/server-side-programming/properties#messages%}).