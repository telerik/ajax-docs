---
title: RadSpell Object
page_title: RadSpell Object | RadSpell for ASP.NET AJAX Documentation
description: RadSpell Object
slug: spell/client-side-programming/radspell-object
tags: radspell,object
published: True
position: 1
---

# RadSpell Object

The following table lists significant members of the client-side **RadSpell** object:

## Public Properties

| Name | Description | Example |
| ------ | ------ | ------ |
|get_clientTextSource|Gets the class of the client side text source object.|See **Example 1**.|
|set_clientTextSource|Sets the class of the client side text source object.||
|get_controlToCheck|Gets the ID of the control to spell check.||
|set_controlToCheck|Sets the ID of the control to spell check.| See **Example 2**.|
|get_dialogOpener|Returns the instance of the client-side DialogOpener object that handles that dialog opening/parameter passing processes.||
|set_dialogOpener|Sets the instance of the client-side DialogOpener object.||
|get_dictionaryLanguage|Gets the dictionary language culture code.||
|set_dictionaryLanguage|Sets the dictionary language culture code.| See **Example 3**.|
|get_selectedLanguage|Gets the language currently selected in the drop down displayed when the SupportedLanguages language property is set.| See **Example 4**.|
|get_spellChecked|Returns true if spell checking for the target control has been completed. (the **OnClientCheckFinished** event has been fired).|See **Example 5**.|
|set_spellChecked|Sets whether the spellcheck process is completed (true) or not (false). Note: Should not be used directly. It is used by the spellcheck validator.||
|get_textSource|Returns the reference to the instance of the TextSource object that RadSpell is attached to.||
|set_textSource|Attaches a custom TextSource object to the RadSpell object.| See **Example 6**.|

>caption **Example 1**: Utilize spell's get_clientTextSource() property.

````JavaScript
var spell = $find('<%= RadSpell1.ClientID %>');
alert(spell.get_clientTextSource);		
````

>caption **Example 2**: Utilize spell's set_controlToCheck() property.

````JavaScript
var spell = $find('<%= RadSpell1.ClientID %>');
spell.set_controlToCheck("<%= TextBox1.ClientID %>");
spell.startSpellCheck();			
````

>caption **Example 3**: Utilize spell's set_dictionaryLanguage() property.

````JavaScript
var spell = $find('<%= RadSpell1.ClientID %>');
spell.set_dictionaryLanguage('fr-FR');
alert('Dictionary Language: ' + spell.get_dictionaryLanguage());
````

>caption **Example 4**: Utilize spell's get_selectedLanguage() property.

````JavaScript	
var spell = $find('<%= RadSpell1.ClientID %>');
alert(spell.get_selectedLanguage());				
````

>caption **Example 5**: Utilize spell's get_spellChecked() property.

````JavaScript
var spell = $find('<%= RadSpell1.ClientID %>');
if (spell.get_spellChecked()) {
	alert('Spell check has been run');
}
````

>caption **Example 6**: Utilize spell's set_textSource() property.

````JavaScript
function MyCustomTextSource() {
	this.get_text = function () {
		return $get("<%= TextBox1.ClientID %>").value;
	}
	this.set_text = function (text) {
		$get("<%= TextBox1.ClientID %>").value = text;
	}
}
function spellCheck() {
	var spell = $find('<%= RadSpell1.ClientID %>');
	spell.set_textSource(new MyCustomTextSource);
	spell.startSpellCheck();
}	
````

## Public Methods


>caption  

| Name | Description | Example |
| ------ | ------ | ------ |
|spellCheck|Launch the spellcheck process for the provided TextSource.|See **Example 7**.|
|startSpellCheck|Launch the spellcheck process| See **Example 8**.|

>caption **Example 7**: Utilize spell's spellCheck() method.

````JavaScript
var spell = $find('<%= RadSpell1.ClientID %>');
spell.spellCheck(new MyCustomTextSource());				
````

>caption **Example 8**: Utilize spell's startSpellCheck() method.

````JavaScript
var spell = $find('<%= RadSpell1.ClientID %>');
spell.startSpellCheck();				
````

## Adding and Removing Client-Side Events

| Name | Description |
| ------ | ------ |
|add_clientCheckCancelled|Add a handler to the OnClientCheckCancelled event|
|add_clientCheckFinished|Add a handler to the OnClientCheckFinished event|
|add_clientCheckStarted|Add a handler to the OnClientCheckStarted event|
|add_clientDialogClosing|Add a handler to the OnClientDialogClosing event|
|remove_clientCheckCancelled|Remove a handler from the OnClientCheckCancelled event|
|remove_clientCheckFinished|Remove a handler from the ClientCheckFinished event|
|remove_clientCheckStarted|Remove a handler from the ClientCheckStarted event|
|remove_clientDialogClosing|Remove a handler from the ClientDialogClosing event|
