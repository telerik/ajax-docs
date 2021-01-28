---
title: Known Issues
page_title: Known Issues - RadNotification
description: Check our Web Forms article about Known Issues.
slug: notification/troubleshooting/known-issues
tags: known,issues
published: True
position: 0
---

# Known Issues



This help article lists the most common issues one can face when using the **RadNotification** control and offers possible solutions for them.

1. [ Using a ScriptControl (e.g. RadGrid) in the RadNotification with the RadScriptManager. ](#using-a-scriptcontrol-eg-radgrid-in-the-radnotification-with-the-radscriptmanager)

1. [ Notification Audio Is Not Played In Mobile Devices. ](#notification-audio-is-not-played-in-mobile-devices)

## Using a ScriptControl (e.g. RadGrid) in the RadNotification with the RadScriptManager

The RadScriptManager combines the scripts for the page into one file. The RadNotification control uses RadXmlHttpPanel internally to initiate its callbacks and it needs to re-evaluate the scripts for the controls inside. This presents a problem when all scripts are combined in the same file, because the control cannot know where the exact scripts are. This results in a JavaScript error being thrown when a callback is initiated. More information about this case is available in [this help article]({%slug xmlhttppanel/troubleshooting%}).

There are three ways to avoid this behavior:

* Use the standard **ASP:ScriptManager** control instead

* Set the **EnableScriptCombine** property of the **RadScriptManager** to **false**

* disable the script evaluation for the RadXmlHttpPanel in the [Sys.Application.Load event](https://msdn.microsoft.com/en-us/library/bb383829.aspx), e.g.`$find("<%=RadNotification1.ClientID %>")._xmlPanel.set_enableClientScriptEvaluation(false);`. Note that this may cause some issues.

## Notification Audio Is Not Played In Mobile Devices

Audio in mobile devices can only be played after a user action. This is a limitation of mobile browsers that also affects the **RadNotification** control. You can find more information and a possible solution in the [Notification Audio Is Not Played In Mobile Devices]({%slug notification/troubleshooting/notification-audio-is-not-played-in-mobile-devices%}) help article.

# See Also

 * [Notification Audio Is Not Played In Mobile Devices]({%slug notification/troubleshooting/notification-audio-is-not-played-in-mobile-devices%})
