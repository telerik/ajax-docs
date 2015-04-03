---
title: Custom Dictionaries
page_title: Custom Dictionaries | UI for ASP.NET AJAX Documentation
description: Custom Dictionaries
slug: spell/dictionaries/custom-dictionaries
tags: custom,dictionaries
published: True
position: 1
---

# Custom Dictionaries



## 

An important feature of the __RadSpell__ is its ability to create custom dictionaries for every language. If you set the __AllowAddCustom__ property to __true__ an "Add to custom" button will appear in the __RadSpell__ dialog. If an unknown word is found the user can add it to the custom dictionary, which will automatically be created.

Custom dictionaries are text files located in the folder specified in the __DictionaryPath__ property ("~*__/App_Data/RadSpell/__*" by default). Their names are composed of the language name + suffix, specified in the __CustomDictionarySuffix__ property. The default value of the CustomDictionarySuffix property is "-custom", so with the default values, the custom dictionary name will be "*en-US-custom.txt"*.
