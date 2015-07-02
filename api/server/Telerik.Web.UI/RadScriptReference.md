---
title: Telerik.Web.UI.RadScriptReference
page_title: Telerik.Web.UI.RadScriptReference
description: Telerik.Web.UI.RadScriptReference
---

# Telerik.Web.UI.RadScriptReference

This type of script reference allows the user to exclude a script reference from 
            combining by RadScriptManager (when RadScriptManager.EnableScriptCombine is set to true).
            The property Combine (true by default) controls this behavior.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.ScriptReferenceBase
* System.Web.UI.ScriptReference
* Telerik.Web.UI.RadScriptReference

## Properties

###  Combine `Boolean`

Set this property to tell RadScriptManager whether to combine the script reference or serve it as a separate resource.
            True by default.

###  OutputPosition `ScriptReferenceOutputPosition`

Set this property to one of the available values -  
                ScriptReferenceOutputPosition.Beggining, 
                ScriptReferenceOutputPosition.Same,
                ScriptReferenceOutputPosition.End - 
            to move the current script to the beginning of the whole script block, remain on its place in the order of registration or 
            move at the end of the script block. ScriptReferenceOutputPosition.Same by default.

