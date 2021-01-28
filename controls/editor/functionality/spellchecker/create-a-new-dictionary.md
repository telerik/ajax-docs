---
title: Create a New Dictionary
page_title: Create a New Dictionary - RadEditor
description: Check our Web Forms article about Create a New Dictionary.
slug: editor/functionality/spellchecker/create-a-new-dictionary
tags: create,a,new,dictionary
published: True
position: 1
---

# Create a New Dictionary

Here are the instructions demonstrating how to create a custom TDF dictionary using the [Dictionary Configuration](https://www.telerik.com/support/code-library/using-openoffice-spell-provider-in-radspell) project.

1. See whether the needed dictionary exists on the following site: [Dictionaries](http://extensions.openoffice.org/en/search?f[0]=field_project_tags%3A157) or create a **text** file following the "word-per-line" rule. You should exclude any special symbols after each word for example: **test/SDG** or **test::**. The correct syntax is **test**

1. Save the **text** file with **Unicode (UTF-8 with signature)** encoding

1. Rename the **.dic / .txt** extension to **.tdf**

1. Convert the file by using the [Dictionary Configurator](https://www.telerik.com/support/code-library/dictionary-configuration) tool.

1. Place the new dictionary in the "\RadControls\Spell\TDF" folder of the Dictionary Configuration project, test and verify that the spellchecker works properly with it.If the dictionary language is incompatible with the phonetic spell check provider then set the spellchecker to use its EditDistanceProvider (SpellCheckProvider="EditDistanceProvider").
