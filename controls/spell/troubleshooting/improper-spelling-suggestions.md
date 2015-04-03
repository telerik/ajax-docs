---
title: Improper Spelling Suggestions
page_title: Improper Spelling Suggestions | UI for ASP.NET AJAX Documentation
description: Improper Spelling Suggestions
slug: spell/troubleshooting/improper-spelling-suggestions
tags: improper,spelling,suggestions
published: True
position: 0
---

# Improper Spelling Suggestions



## 

By default, __RadSpell__ works with a phonetic spellcheck provider that uses phonetic codesto provide "sounds like" word suggestions. It is suitable for English words and provides good suggestions in most cases.In some rare cases __the spellchecker does not provide proper suggestions__, e.g. A typo such as "cetificate"does not produce a suggestion of "certificate", and a typo of "schol" does not produce a suggestion of "school". The issue comes due to thephonetic provider which is the default one, and __can be fixed by switching to another spellcheck provider__as follows:


>caption 

| SpellCheckProvider | Description |
| ------ | ------ |
| __Edit Distance__ (embedded)|Uses the edit distance algorithm and can be enabled by setting __SpellCheckProvider__ property of RadSpell to __"EditDistanceProvider"__ . An additional property __EditDistance__ can be used in order to increase the number of the provided suggestions. For example:<telerik:RadSpell ID="spell1" Runat="server" ControlToCheck="textBox1"SpellCheckProvider="EditDistanceProvider"	EditDistance="2" />|
| __MS Word Spell Checking__ (external)|Microsoft Word support is not enabled by default for RadSpell. In order to enable it, one should follow	the steps provided in[Enabling MS Word Spell Checking](http://www.telerik.com/community/forums/aspnet-ajax/spell/enabling-ms-word-spell-checking.aspx)sticky thread.|
| __OpenOffice Spell Checking__ (external)|Since Q3 2010, Telerik provides support for NHunspell and OpenOffice dictionaries for RadSpell.	In order to enable this feature, one should follow the steps provided in[Using OpenOffice spell provider in RadSpell](http://www.telerik.com/community/code-library/aspnet-ajax/spell/using-openoffice-spell-provider-in-radspell.aspx)code library.|

>note The __Edit Distance provider__ is the only built in provider, while __MS Word and OpenOffice providers__ are external projects that need to be plugged in.
>


# See Also

 * [Enabling MS Word Spell Checking](http://www.telerik.com/community/forums/aspnet-ajax/spell/enabling-ms-word-spell-checking.aspx)

 * [Using OpenOffice spell provider in RadSpell](http://www.telerik.com/community/code-library/aspnet-ajax/spell/using-openoffice-spell-provider-in-radspell.aspx)
