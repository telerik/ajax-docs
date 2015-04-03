---
title: RadSpell Object
page_title: RadSpell Object | UI for ASP.NET AJAX Documentation
description: RadSpell Object
slug: spell/client-side-programming/radspell-object
tags: radspell,object
published: True
position: 1
---

# RadSpell Object



The following table lists significant members of the client-side __RadSpell__ object:

## Public Properties


>caption  

| Name | Description | Example |
| ------ | ------ | ------ |
|get_clientTextSource|Gets the class of the client side text source object.||
|set_clientTextSource|Sets the class of the client side text source object.|

````JavaScript
	
	var spell = $find('<%= RadSpell1.ClientID %>');
	alert(spell.get_selectedLanguage());
				
````

|
|get_controlToCheck|Gets the ID of the control to spell check.||
|set_controlToCheck|Sets the ID of the control to spell check.|

````JavaScript
	
	var spell = $find('<%= RadSpell1.ClientID %>');
	spell.set_controlToCheck("<%= TextBox1.ClientID %>");
	spell.startSpellCheck();
				
````

|
|get_dialogOpener|Returns the instance of the client-side DialogOpener object that handles that dialog opening/parameter passing processes.||
|set_dialogOpener|Sets the instance of the client-side DialogOpener object.||
|get_dictionaryLanguage|Gets the dictionary language culture code.||
|set_dictionaryLanguage|Sets the dictionary language culture code.|

````JavaScript
	     
	var spell = $find('<%= RadSpell1.ClientID %>');
	spell.set_dictionaryLanguage('fr-FR');
	alert('Dictionary Language: ' + spell.get_dictionaryLanguage());
				
````

|
|get_selectedLanguage|Gets the language currently selected in the drop down displayed when the SupportedLanguages language property is set.|

````JavaScript
	
	var spell = $find('<%= RadSpell1.ClientID %>');
	alert(spell.get_selectedLanguage());
				
````

|
|get_spellChecked|Returns true if spell checking for the target control has been completed. (the __OnClientCheckFinished__ event has been fired).||
|set_spellChecked|Sets whether the spellcheck process is completed (true) or not (false). Note: Should not be used directly. It is used by the spellcheck validator.|

````JavaScript
	var spell = $find('<%= RadSpell1.ClientID %>');
	if (spell.get_spellChecked()) {
		alert('Spell check has been run');
	}
````

|
|get_textSource|Returns the reference to the instance of the TextSource object that RadSpell is attached to.||
|set_textSource|Attaches a custom TextSource object to the RadSpell object.|

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

|

## Public Methods


>caption  

| Name | Description | Example |
| ------ | ------ | ------ |
|spellCheck|Launch the spellcheck process for the provided TextSource.|

````JavaScript
	
	var spell = $find('<%= RadSpell1.ClientID %>');
	spell.spellCheck(new MyCustomTextSource());
				
````

|
|startSpellCheck|Launch the spellcheck process|

````JavaScript
	
	var spell = $find('<%= RadSpell1.ClientID %>');
	spell.startSpellCheck()
				
````

|

## Adding and Removing Client-Side Events


>caption  

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
