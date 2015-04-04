---
title: Choosing Spell Check Provider
page_title: Choosing Spell Check Provider | UI for ASP.NET AJAX Documentation
description: Choosing Spell Check Provider
slug: spell/configuration/choosing-spell-check-provider
tags: choosing,spell,check,provider
published: True
position: 3
---

# Choosing Spell Check Provider



## 

__RadSpell__ can use three spellcheck algorithms to provide the most adequate spelling suggestions for your language. The algorithms are selected by setting the __SpellCheckProvider__ property to one of the following values:

* __PhoneticProvider__, __TelerikProvider__: This provider uses phonetic codes to provide "sounds like" word suggestions.Really effective for English, but less so for other languages. The __TelerikProvider__ is the default value of the __SpellCheckProvider__ property and is equivalent to __PhoneticProvider__.

* __EditDistanceProvider__: This provider uses the edit distance algorithm. __EditDistanceProvider__ work best for non-western languages. The __EditDistanceProvider__ has a specific setting, called __EditDistance__, which controls the count of the suggested words and affects the performance of the spellcheck algorithm.

* __MicrosoftWordProvider__: This provider automates Microsoft Word via its COM Interop interface. You need to have installed Microsoft Word on your server in order to use this provider.

The example below demonstrates how to use and configure the EditDistanceProvider:

````ASPNET
	<telerik:RadSpell
	   ID="RadSpell1"
	   runat="server"
	   SpellCheckProvider="EditDistanceProvider"
	   EditDistance="2"
	   ControlToCheck="TextBox1"
	/> 
````



>tabbedCode

````C#
	     
		RadSpell1.SpellCheckProvider = SpellCheckProvider.EditDistanceProvider;
		RadSpell1.EditDistance = 2; 
				
````
````VB.NET
	     
	RadSpell1.SpellCheckProvider = SpellCheckProvider.EditDistanceProvider
	RadSpell1.EditDistance = 2
				
````
>end
