---
title: Setting Dictionary Language
page_title: Setting Dictionary Language | UI for ASP.NET AJAX Documentation
description: Setting Dictionary Language
slug: spell/configuration/setting-dictionary-language
tags: setting,dictionary,language
published: True
position: 0
---

# Setting Dictionary Language



## Setting Single Language

The simplest configuration is to specify a single language by setting the __RadSpell____DictionaryLanguage__ property. The example below configures __RadSpell__to spell check using a French dictionary.

````ASPNET
	     
							<telerik:RadSpell     ID="RadSpell1"     runat="server"     ControlToCheck="TextBox1"     DictionaryLanguage="fr-fr" />
				
````



>tabbedCode

````C#
	     
							RadSpell1.DictionaryLanguage = "fr-fr";
				
````



````VB.NET
	     
	RadSpell1.DictionaryLanguage = "fr-fr"
				
````


>end

## Setting Multiple Languages

__RadSpell__ can spellcheck using several language dictionaries at once. Set the __SupportedLanguages__ property to a list of cultures that the spell checker will be supporting. With the __SupportedLanguages__ property set, __RadSpell__ will render an additional dropdown with the specified languages You can also specify the default selected language by setting the __DictionaryLanguage__ property:

````ASPNET
	     
							<telerik:RadSpell     runat="server"     ID="RadSpell1"     ControlToCheck="TextBox1"     SupportedLanguages="en-us, English, de-de, German, fr-fr, French"    DictionaryLanguage="de-de" />
				
````



>tabbedCode

````C#
	     
	RadSpell1.SupportedLanguages = new string[] {    "en-us", "English",    "de-de", "German",    "fr-fr", "French" };
	RadSpell1.DictionaryLanguage = "de-de";
				
````



````VB.NET
	     
	RadSpell1.SupportedLanguages = New String() {"en-us", "English", "de-de", "German", "fr-fr", "French"}
	RadSpell1.DictionaryLanguage = "de-de"
				
````


>end
