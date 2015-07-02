---
title: Telerik.Web.UI.SpellCheckError
page_title: Telerik.Web.UI.SpellCheckError
description: Telerik.Web.UI.SpellCheckError
---

# Telerik.Web.UI.SpellCheckError

Contains the information about a spellcheck error.  The most important properties are the mistaken word and its offset in the source text.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.SpellCheckError

## Properties

###  WordIndex `Int32`

The index of the misspelled word

###  OffsetInText `Int32`

The offset in the source text.  It is useful for locating the original word and replacing it with one of the suggestions.

###  MistakenWord `String`

The original word that the spellchecker has determined to be wrong.

###  Suggestions `String[]`

Suggestions for replacing the mistaken word.

