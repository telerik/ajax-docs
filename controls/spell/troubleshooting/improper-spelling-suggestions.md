---
title: Improper Spelling Suggestions
page_title: Improper Spelling Suggestions | RadSpell for ASP.NET AJAX Documentation
description: Improper Spelling Suggestions
slug: spell/troubleshooting/improper-spelling-suggestions
tags: improper,spelling,suggestions
published: True
position: 0
---

# Improper Spelling Suggestions

By default, **RadSpell** works with a phonetic spellcheck provider that uses phonetic codes to provide "sounds like" word suggestions. It is suitable for English words and provides good suggestions in most cases. In some rare cases **the spellchecker does not provide proper suggestions**, e.g. A typo such as "cetificate"does not produce a suggestion of "certificate", and a typo of "schol" does not produce a suggestion of "school". The issue comes due to the phonetic provider which is the default one, and **can be fixed by switching to another spellcheck provider** as follows:

| SpellCheckProvider | Description |
| ------ | ------ |
| **Edit Distance** (embedded)|Uses the edit distance algorithm and can be enabled by setting **SpellCheckProvider** property of RadSpell to **"EditDistanceProvider"** . An additional property **EditDistance** can be used in order to increase the number of the provided suggestions. For example:`<telerik:RadSpell RenderMode="Lightweight" ID="spell1" Runat="server" ControlToCheck="textBox1"SpellCheckProvider="EditDistanceProvider"	EditDistance="2" />`|
| **MS Word Spell Checking** (external)|Microsoft Word support is not enabled by default for RadSpell. In order to enable it, one should follow	the steps provided in [Enabling MS Word Spell Checking](http://www.telerik.com/community/forums/aspnet-ajax/spell/enabling-ms-word-spell-checking.aspx) sticky thread.|
| **OpenOffice Spell Checking** (external)|Since Q3 2010, Telerik provides support for NHunspell and OpenOffice dictionaries for RadSpell.	In order to enable this feature, one should follow the steps provided in [Using OpenOffice spell provider in RadSpell](http://www.telerik.com/community/code-library/aspnet-ajax/spell/using-openoffice-spell-provider-in-radspell.aspx) code library.|

>tip The **Edit Distance provider** is the only built in provider, while **MS Word and OpenOffice providers** are external projects that need to be plugged in.

# See Also

 * [Enabling MS Word Spell Checking](http://www.telerik.com/community/forums/aspnet-ajax/spell/enabling-ms-word-spell-checking.aspx)

 * [Using OpenOffice spell provider in RadSpell](http://www.telerik.com/community/code-library/aspnet-ajax/spell/using-openoffice-spell-provider-in-radspell.aspx)
