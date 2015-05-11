---
title: Choosing Spell Check Provider
page_title: Choosing Spell Check Provider | RadSpell for ASP.NET AJAX Documentation
description: Choosing Spell Check Provider
slug: spell/configuration/choosing-spell-check-provider
tags: choosing,spell,check,provider
published: True
position: 3
---

# Choosing Spell Check Provider

**RadSpell** can use three spellcheck algorithms to provide the most adequate spelling suggestions for your language. The algorithms are selected by setting the **SpellCheckProvider** property to one of the following values:

* **PhoneticProvider**, **TelerikProvider**: This provider uses phonetic codes to provide "sounds like" word suggestions. Really effective for English, but less so for other languages. The **TelerikProvider** is the default value of the **SpellCheckProvider** property and is equivalent to **PhoneticProvider**.

* **EditDistanceProvider**: This provider uses the edit distance algorithm. **EditDistanceProvider** work best for non-western languages. The **EditDistanceProvider** has a specific setting, called **EditDistance**, which controls the count of the suggested words and affects the performance of the spellcheck algorithm.

* **MicrosoftWordProvider**: This provider automates Microsoft Word via its COM Interop interface. You need to have installed Microsoft Word on your server in order to use this provider.

The example below demonstrates how to use and configure the EditDistanceProvider:

````ASP.NET
<telerik:RadSpell
   ID="RadSpell1"
   runat="server"
   SpellCheckProvider="EditDistanceProvider"
   EditDistance="2"
   ControlToCheck="TextBox1"
/> 
````

````C#	     
RadSpell1.SpellCheckProvider = SpellCheckProvider.EditDistanceProvider;
RadSpell1.EditDistance = 2; 				
````
````VB	     
RadSpell1.SpellCheckProvider = SpellCheckProvider.EditDistanceProvider
RadSpell1.EditDistance = 2				
````

