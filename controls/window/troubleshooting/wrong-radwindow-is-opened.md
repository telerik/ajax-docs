---
title: Wrong RadWindow Is Opened
page_title: Wrong RadWindow Is Opened - RadWindow
description: Check our Web Forms article about Wrong RadWindow Is Opened.
slug: window/troubleshooting/wrong-radwindow-is-opened
tags: wrong,radwindow,is,opened
published: True
position: 5
---

# Wrong RadWindow Is Opened

Sometimes a call to `radopen()` opens a **RadWindow** with unexpected settings or a different one. This is usually the result from the presence of more than one **RadWindowManager** on the page. The **RadWindowManager** is designed to work as a singleton - i.e. only one instance per page. The radopen() (and radalert(), radconfirm(), radprompt() functions as well), being global functions, are attached to the first instance that is created on the page, which may result in some unexpected behavior if other managers are present as well - the **RadWindow** with the given ID (the second argument passed to the function) needs to be in the Windows collection of the targeted manager, otherwise a generic one with the settings from the first manager will be opened. This is most often an issue when multiple master pages and/or user controls are used.

## How to avoid this behavior

There are several approaches that can be taken to avoid this:

* Get a reference to the **RadWindowManager** which you want to use via $find("DesiredRadWindowManagerClientID") and use its own open() method.This approach is shown in [this help article]({%slug window/getting-started/opening-windows%}). The syntax of the open() method is the same as the syntax of radopen(). This is the safest approach.

* Directly open the desired **RadWindow** via $find("RadWindowClientID") and call its show() method. This can be done only if there is a predefined window, if you wish to create a new one you would need the manager's functionality.

* Move all the **RadWindows** you use to the single **RadWindowManager** -for example in the master page. This makes it easy to access them, but will result in unnecessary overhead in larger applications.

## How to determine how many RadWindowManagers are rendered on the page

It is sometimes rather difficult to track the markup of a complex site (e.g. a master page with content pages and user controls). In order to determine how many RadWindowManagers there are on the page the easiest way is to examine the rendered page in the browser (usually View Source after a right click) and look for the $create() statements at the end. Each of them corresponds to an AJAX-enabled control. Here follows a simple example. Note that it begins with the control type - Telerik.Web.UI.RadWindowManager. You can also see its server ID as the name property:

**JavaScript**

	Sys.Application.add_init(function() {

	$create(Telerik.Web.UI.RadWindowManager,

	{"clientStateFieldID":"RadWindowManager1_ClientState","formID":"form1","iconUrl":"","minimizeIconUrl":"","name":"RadWindowManager1","skin":"Default","windowControls":"[]"}, null, null, $get("RadWindowManager1"));

	});

This can help locate the actual controls in the markup so you can make the necessary adjustments to the page.

## See Also

 * [RadWindowManager Client-side API]({%slug window/client-side-programming/radwindowmanager-object%})

 * [RadWindowClient-side API]({%slug window/client-side-programming/radwindow-object%})

 * [Different ways to open a RadWindow]({%slug window/getting-started/opening-windows%})

 * [Opening a RadWindow from the server]({%slug window/troubleshooting/opening-from-the-server%})
