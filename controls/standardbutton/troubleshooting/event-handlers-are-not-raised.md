---
title: Event Handlers Are Not Raised
page_title: Event Handlers Are Not Raised | RadStandardButton for ASP.NET AJAX Documentation
description: Event Handlers Are Not Raised
slug: standardbutton/troubleshooting/event-handlers-are-not-raised
tags: event,handlers,are,not,raised
published: True
position: 1
---

# Event Handlers Are Not Raised

When RadCompression is enabled and you are using .NET 4.0, event handlers might not be raised in a default document in IIS 7 or IIS 7.5 Integrated Mode, **which could break the normal work of RadStandardButton**.

This problem is caused by a breaking change in .NET 4.0 described in this official [ASP.NET Breaking Changes](http://www.asp.net/learn/whitepapers/aspnet4/breaking-changes#0.1**Toc256770154) section. To workaround it one can set **preCondition="managedHandler"** for the RadCompression module. You may also need to remove the **runAllManagedModulesForAllRequests** setting from your web.config if you have it (or set it to false).

## See Also

 * [RadStandardButton Not Performing Postback]({%slug standardbutton/troubleshooting/radstandardbutton-not-performing-postback%})

 * [Client-side Click Event Handler Is Not Executed]({%slug standardbutton/troubleshooting/client-side-click-event-handler-is-not-executed%})
