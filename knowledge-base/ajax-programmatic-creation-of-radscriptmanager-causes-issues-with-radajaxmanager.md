---
title: Programmatic creation of RadScriptManager causes issues with RadAjaxManager
description: Programmatic creation of RadScriptManager causes issues with RadAjaxManager. Check it now!
type: how-to
page_title: Programmatic creation of RadScriptManager causes issues with RadAjaxManager
slug: ajax-programmatic-creation-of-radscriptmanager-causes-issues-with-radajaxmanager
res_type: kb
---


## PROBLEM

When creating the script manager programmatically, the RadAjaxManager settings do not work.

Creating the script manager programmatically can also cause `RadAjaxManager.GetCurrent(this.Page).ClientID` to throw a null reference exception and that code is often use in the markup to reference the ajax manager.

## SOLUTION

Create the RadAjaxManager programmatically as well.

Note that control creation must be done in Page\_Init, but the [AjaxSettings must be added in Page\_Load]({%slug ajaxmanager/how-to/add-ajaxsettings-programmatically%}).

You can find attached [here](files/ajax-programmatic-sm-and-ram.zip) a basic example.


 