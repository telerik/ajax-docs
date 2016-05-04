---
title: Telerik.Web.UI.RadScriptBlock
page_title: Telerik.Web.UI.RadScriptBlock
description: Telerik.Web.UI.RadScriptBlock
---

# Telerik.Web.UI.RadScriptBlock

Telerik.Web.UI.RadScriptBlock is used where you have JavaScript that evaluates 
            after an AJAX request, for example when the content of Telerik.Web.UI.RadAjaxPanel is updated asynchronously. Telerik.Web.UI.RadScriptBlock also can be used like 
            Telerik.Web.UI.RadScriptBlock to handle server code blocks (&lt;% ... %&gt;).

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* Telerik.Web.UI.RadScriptBlock

## Methods

###  IsChildOf

Test if control is child of another control

#### Parameters

#### controlToCheck `System.Web.UI.Control`

child

#### parent `System.Web.UI.Control`

parent

#### Returns

`System.Boolean` 

###  RegisterInScriptManager

Registers the content of the ScriptBlock with the ScriptManager

#### Parameters

#### global `System.Web.UI.Control`

Determinates if Page or the Control will be used when registering the script

#### Returns

`System.Void` 

