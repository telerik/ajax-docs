---
title: Telerik.Web.UI.RadSpell
page_title: Client-side API Reference
description: Telerik.Web.UI.RadSpell
slug: Telerik.Web.UI.RadSpell
---

# Telerik.Web.UI.RadSpell  

## Inheritance Hierarchy

* *[Telerik.Web.UI.RadSpell]({%slug Telerik.Web.UI.RadSpell%})*


## Methods

###  set_useClassicDialogs

Determines what type of dialog the control should use - a RadWindow or a browser dialog.

#### Parameters

##### shouldUseBrowserDialog `Boolean`

When true is passed, a browser dialog will be used. If false is passed, a RadWindow will be used.

#### Returns

`None` 

### get_controlToCheck

Gets the ID of the control to spell check.

#### Parameters

#### Returns

`None` 

### get_dialogOpener

Returns the instance of the client-side DialogOpener object that handles that dialog opening/parameter passing processes.

#### Parameters

#### Returns

`None` 

### get_dictionaryLanguage

Gets the dictionary language culture code.

#### Parameters

#### Returns

`None` 

### get_selectedLanguage

Gets the language currently selected in the drop down displayed when the SupportedLanguages language property is set.

#### Parameters

#### Returns

`None` 

### get_spellChecked

OnClientCheckFinished

#### Parameters

#### Returns

`None` 

### get_textSource

Returns the reference to the instance of the TextSource object that RadSpell is attached to.

#### Parameters

#### Returns

`None` 

### set_controlToCheck

Sets the ID of the control to spell check.

#### Parameters

#### Returns

`None` 

### set_dialogOpener

Sets the instance of the client-side DialogOpener object.

#### Parameters

#### Returns

`None` 

### set_dictionaryLanguage

Sets the dictionary language culture code.

#### Parameters

#### Returns

`None` 

### set_spellChecked

Sets whether the spellcheck process is completed (true) or not (false). Note: Should not be used directly. It is used by the spellcheck validator.

#### Parameters

#### Returns

`None` 

### set_textSource

Attaches a custom TextSource object to the RadSpell object.

#### Parameters

#### Returns

`None` 

### spellCheck

Launch the spellcheck process for the provided TextSource.

#### Parameters

#### Returns

`None` 

### startSpellCheck

Launch the spellcheck process

#### Parameters

#### Returns

`None` 


## Events

### clientCheckCancelled 

The clientCheckCancelled client-side event occurs if the user cancels the spell check. 

#### Event Data

##### sender `Telerik.Web.UI.RadSpell`

The instance of the RadSpell raised the event.

#####  args `Sys.EventArgs`

Empty event argument.

### clientCheckFinished 

The clientCheckFinished client-side event occurs after the spell check is complete. 

#### Event Data

##### sender `Telerik.Web.UI.RadSpell`

The instance of the RadSpell raised the event.

#####  args `Telerik.Web.UI.SpellClientCheckFinishedEventArgs`

The event arguments.

### clientCheckStarted 

The clientCheckStarted client-side event occurs when the spell check begins and before the spell check dialog appears. 

#### Event Data

##### sender `Telerik.Web.UI.RadSpell`

The instance of the RadSpell raised the event.

#####  args `Sys.CancelEventArgs`

The event arguments.

### clientDialogClosing 

The clientDialogClosing client-side event occurs just before the spell check dialog closes. 

#### Event Data

##### sender `Telerik.Web.UI.RadSpell`

The instance of the RadSpell raised the event.

#####  args `Sys.EventArgs`

Empty event argument.

### load 

The load client-side event occurs after the RadSpell loads on the page. 

#### Event Data

##### sender `Telerik.Web.UI.RadSpell`

The instance of the RadSpell raised the event.

#####  args `Sys.EventArgs`

Empty event argument.

