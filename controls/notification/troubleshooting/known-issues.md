---
title: Known Issues
page_title: Known Issues | UI for ASP.NET AJAX Documentation
description: Known Issues
slug: notification/troubleshooting/known-issues
tags: known,issues
published: True
position: 0
---

# Known Issues



This help article lists the most common issues one can face when using the __RadNotification__ control and offers possible solutions for them.

1. [ Using a ScriptControl (e.g. RadGrid) in the RadNotification with the RadScriptManager. ](#using-a-scriptcontrol-(e.g.-radgrid)-in-the-radnotification-with-the-radscriptmanager)

1. [ Notification Audio Is Not Played In Mobile Devices. ](#notification-audio-is-not-played-in-mobile-devices)

## Using a ScriptControl (e.g. RadGrid) in the RadNotification with the RadScriptManager

The RadScriptManager combines the scripts for the page into one file. The RadNotification control uses RadXmlHttpPanel internally to initiate its callbacksand it needs to re-evaluate the scripts for the controls inside. This presents a problem when all scripts are combiend in the same file, because the control cannotknow where the exact scripts are. This results in a JavaScript error being thrown when a callback is initiated. More information about this case is availablein [this help article](97553E94-46FD-4506-ACDA-37C4CD3677DA).

There are three ways to avoid this behavior:

* Use the standard __ASP:ScriptManager__ control instead

* Set the __EnableScriptCombine__ property of the __RadScriptManager__ to __false__

* disable the script evaluation for the RadXmlHttpPanel in the[Sys.Application.Load event](http://msdn.microsoft.com/en-us/library/bb383829.aspx), e.g.:$find("<%=RadNotification1.ClientID %>")._xmlPanel.set_enableClientScriptEvaluation(false);.Note that this may cause some issues.

## Notification Audio Is Not Played In Mobile Devices

Audio in mobile devices can only be played after a user action. This is a limitation of mobile browsers that also affects the __RadNotification__ control. You can find more information and a possible solution in the [Notification Audio Is Not Played In Mobile Devices]({%slug notification/troubleshooting/notification-audio-is-not-played-in-mobile-devices%}) help article.

# See Also

 * [Notification Audio Is Not Played In Mobile Devices]({%slug notification/troubleshooting/notification-audio-is-not-played-in-mobile-devices%})
