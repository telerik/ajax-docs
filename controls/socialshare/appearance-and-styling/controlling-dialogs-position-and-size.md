---
title: Controlling Dialogs Position and Size
page_title: Controlling Dialogs Position and Size | UI for ASP.NET AJAX Documentation
description: Controlling Dialogs Position and Size
slug: socialshare/appearance-and-styling/controlling-dialogs-position-and-size
tags: controlling,dialogs,position,and,size
published: True
position: 3
---

# Controlling Dialogs Position and Size



## 

The __RadSocialShare__ control uses browser windows to open the social network's site where the user will share the content (add messages, choose privacy, etc.), because they use frame busters which do not allow us to load them in iframes. This means that for the most part their behavior is controlled by the browser and the client's machine and sometimesoverriding it is impossible due to security restrictions. There are, however, ways to control the position and dimensions of the browser windowvia JavaScript and the__RadSocialShare__ exposes them as global properties as well as properties for each separate __RadSocialButton__ which override the ones from the main tag.

This is the list with the properties:

* __DialogHeight__ - this defines the height of the popup

* __DialogWidth__ - this defines the width of the popup

* __DialogLeft__ - this defines the popup's horizontal offset from the left edge of the screen

* __DialogTop__ - this defines the popup's vertical offset from the top edge of the screen

>note By default the browser popups are centered on the screen and are 500px by 500px. This also applies for the popup with the[CompactButtons collection]({%slug socialshare/configuring-buttons/collections%})if it is invoked via the __<telerik:RadSocialButton />__ button with its __SocialNetType__ property set to __CompactButton__ instead of the __<telerik:RadCompactButton />__ which opens a centered popup that is autosized.
>


>note Controlling the position and dimensions of browser windows via JavaScript can sometimes be disabled on the client's machine as it is a user setting for some browsers. Some browsers also do not allow dimensions that are too big, too small, or positions that put the window out of the screen. This is a security measure so that a malicious scripts cannot open them without the user noticing or to use popups to block the user's work.
>

