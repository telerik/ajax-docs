---
title: Setting Dictionary Language
page_title: Setting Dictionary Language | RadSpell for ASP.NET AJAX Documentation
description: Setting Dictionary Language
slug: spell/configuration/setting-dictionary-language
tags: setting,dictionary,language
published: True
position: 0
---

# Setting Dictionary Language

## Setting Single Language

The simplest configuration is to specify a single language by setting the **RadSpell DictionaryLanguage** property. The example below configures **RadSpell** to spell check using a French dictionary.

````ASP.NET
<telerik:RadSpell RenderMode="Lightweight" ID="RadSpell1" runat="server" ControlToCheck="TextBox1" DictionaryLanguage="fr-fr" />
````

````C#
RadSpell1.DictionaryLanguage = "fr-fr";
````
````VB	     
RadSpell1.DictionaryLanguage = "fr-fr"
````

## Setting Multiple Languages

**RadSpell** can spellcheck using several language dictionaries at once. Set the **SupportedLanguages** property to a list of cultures that the spell checker will be supporting. With the **SupportedLanguages** property set, **RadSpell** will render an additional dropdown with the specified languages. You can also specify the default selected language by setting the **DictionaryLanguage** property:

````ASP.NET
<telerik:RadSpell RenderMode="Lightweight" runat="server" ID="RadSpell1" ControlToCheck="TextBox1" SupportedLanguages="en-us, English, de-de, German, fr-fr, French" DictionaryLanguage="de-de" />
````

````C#	     
RadSpell1.SupportedLanguages = new string[] {    "en-us", "English",    "de-de", "German",    "fr-fr", "French" };
RadSpell1.DictionaryLanguage = "de-de";		
````
````VB
RadSpell1.SupportedLanguages = New String() {"en-us", "English", "de-de", "German", "fr-fr", "French"}
RadSpell1.DictionaryLanguage = "de-de"		
````

