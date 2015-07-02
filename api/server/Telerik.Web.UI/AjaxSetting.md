---
title: Telerik.Web.UI.AjaxSetting
page_title: Telerik.Web.UI.AjaxSetting
description: Telerik.Web.UI.AjaxSetting
---

# Telerik.Web.UI.AjaxSetting

Represents a single AjaxManager setting - a mapping between a control that
            initiates an AJAX request and a collection of controls to be updated by the
            operation.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.AjaxSetting

## Properties

###  AjaxControlID `String`

This field holds the control id of the control that can initiate an
            AJAX request.

###  EventName `String`

Corresponds to the EventName property of the internally created AsyncPostBackTrigger.

###  UpdatedControls `AjaxUpdatedControlsCollection`

A collection of controls that will be updated by the AjaxManager

