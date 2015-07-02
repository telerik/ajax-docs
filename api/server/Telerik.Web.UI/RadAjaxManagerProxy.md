---
title: Telerik.Web.UI.RadAjaxManagerProxy
page_title: Telerik.Web.UI.RadAjaxManagerProxy
description: Telerik.Web.UI.RadAjaxManagerProxy
---

# Telerik.Web.UI.RadAjaxManagerProxy

RadAjax no longer allows more than one Telerik.Web.UI.RadAjaxManager on the page. Instead, 
            in a complex scenario like WebUserControls or Master/ContentPages, one should
            place Telerik.Web.UI.RadAjaxManager instance on the main/master page and add a proxy control
            to the user control/content page. Telerik.Web.UI.RadAjaxManagerProxy copies the exact same 
            Telerik.Web.UI.RadAjaxManager designer configuration so that one can set all the necessary 
            AJAX settings within the WebUserControl/ContentPage entirely through the designer.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* Telerik.Web.UI.RadAjaxManagerProxy

## Properties

###  AjaxSettings `AjaxSettingsCollection`

Gets the ajax settings.

