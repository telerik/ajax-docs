---
title: AjaxSpellCheck Object
page_title: AjaxSpellCheck Object | UI for ASP.NET AJAX Documentation
description: AjaxSpellCheck Object
slug: editor/client-side-programming/ajaxspellcheck-object
tags: ajaxspellcheck,object
published: True
position: 5
---

# AjaxSpellCheck Object



The AjaxSpellCheck object exposes the following public methods and properties to control its behavior:

## 

AjaxSpellCheck Client-Side Methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|addCustomWord|`String`||Adds a custom word to the collection.The method takes the following arguments:

1. word - The word to be added.|
|cancelSpellCheck|`Boolean`||Stops the spell checking and retrieves the original state of the content.The method takes the following arguments:

1. raiseEvent? - Indicates whether to raise the spellCheckEnd event.|
|finishSpellCheck|`Boolean`||Stops the spell checking and updates the content.The method takes the following arguments:

1. raiseEvent? - Indicates whether to raise the spellCheckEnd event.|
|get_editor||Telerik.Web.UI.RadEditor|Returns the RadEditor instance.|
|get_language||String|Gets the language used by the Spell-Check service.|
|set_editor|`Telerik.Web.UI.RadEditor`||Sets the RadEditor instance.The method takes the following arguments:

1. editor - The RadEditor instance.|
|set_language|`String`||Sets the language used by the Spell-Check service.The method takes the following arguments:

1. language - The language.|
|spellCheck|||Performs a spell check on the content.|

## 

AjaxSpellCheck Client-Side Methods for attaching/detaching client-side event handlers


| Name | Arguments | Description |
| ------ | ------ | ------ |
|add_spellCheckEnd|Function|Adds a handler for the spellCheckEnd AjaxSpellCheck client event.|
|add_spellCheckStart|Function|Adds a handler for the spellCheckStart AjaxSpellCheck client event.|
|remove_spellCheckEnd|Function|Removes a handler for the spellCheckEnd AjaxSpellCheck client event.|
|remove_spellCheckStart|Function|Removes a handler for the spellCheckStart AjaxSpellCheck client event.|
