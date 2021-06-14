---
title: Can't execute code from a freed script error when closing a RadWindow
description: Can't execute code from a freed script error when closing a RadWindow. Check it now!
type: how-to
page_title: Can't execute code from a freed script error when closing a RadWindow
slug: window-cant-execute-code-from-a-freed-script-error-when-closing-a-radwindow
res_type: kb
---


## Problem

You get the **Can't execute code from a freed script** error when closing a RadWindow.

## Description

The "can't execute code from freed script" error usually originates from iframes that have been disposed while some script is still running inside, or some scripts is trying to access them. The exact error means that a line of code is still in memory and tries to execute, but it is orphaned and has no context.

RadWindow uses and iframe to load the page designated by the developer. When its `DestroyOnClose` property is set to true, it disposes that iframe when it closes. If scripts inside are still running at this time, they can throw an error.

## Solution

There are a few ways to avoid such an error:

 - Set the `DestroyOnClose` property to **false**. You can do that with the [client-side API]({%slug window/client-side-programming/radwindow-object%}) of a concrete RadWindow instance as well.

 - Add a **timeout around the .close() call** of the RadWindow so it moves to the end of the stack and allows the other scripts to execute:

 ````
setTimeout(function() {
   GetRadWindow().close();
}, 0);
 ````
 
 - Run the script that closes the RadWindow as late as possible. The Sys.Application.Load event is suitable when registering it from the server. For example:

 ````
string script = "function f(){closeRadWindow(); Sys.Application.remove_load(f);}Sys.Application.add_load(f);";
ScriptManager.RegisterStartupScript(Page, Page.GetType(), "key", script, true);
 ````

  