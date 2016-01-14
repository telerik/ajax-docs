---
title: Telerik.Web.UI.SpellChecker
page_title: Telerik.Web.UI.SpellChecker
description: Telerik.Web.UI.SpellChecker
---

# Telerik.Web.UI.SpellChecker

This class can be used to initiate a spell check request using the RadSpell dictionaries.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.SpellChecker : IDisposable

## Properties

###  CheckAllCaps `Boolean`

Specifies whether or not to check words in CAPITALS (e.g. "UNESCO")

###  CheckCapital `Boolean`

Specifies whether or not to check words in Capitals (e.g. "Washington")

###  CheckForRepeatWords `Boolean`

Specifies whether or not to count repeating words as errors (e.g. "very very")

###  CheckWordsWNumbers `Boolean`

Specifies whether or not to check words containing numbers (e.g. "l8r")

###  CustomAppendix `String`

The suffix that gets appended to the custom dictionary file name.  It is usually a user specific string that allows to distinguish dictionaries for different users.
            Default filenames are Language + CustomAppendix + ".txt".
            The default is -Custom

###  CustomDictionarySource `ICustomDictionarySource`

Manipulate the custom dictionary source.  The new value must implement ICustomDictionarySource.

###  CustomDictionarySourceType `ICustomDictionarySource`

The fully qualified name of the type that will be used for the custom dictionary storage.  The type name must include the assembly, culture and public key token.
            A new instance will be created internally unless you set  CustomDictionarySource directly.

###  DictionaryLanguage `String`

The language of the dictionary to be used for spellchecking.  It usually is the same as the corresponding TDF file (without the extension).

#### Remarks
To spellcheck in German you have to have de-DE.tdf inside your dictionary folder, and set DictionaryLanguage to "de-DE"
            C#:
            
            spellChecker.DictionaryLanguage = "de-DE";
            
            VB.NET
            
            spellChecker.DictionaryLanguage = "de-DE"

###  DictionaryPath `String`

The folder path that contains the TDF files.

#### Remarks
The method expects local paths. E.g. "C:\SomeFolder\RadControls\Spell\TDF".  Transform URL's to local paths with the  method.
            C#
            
            SpellChecker checker = new SpellChecker(Server.MapPath("~/RadControls/Spell/TDF"));
            
            VB.NET
            
            Dim checker As SpellChecker
            checker = New SpellChecker(Server.MapPath("~/RadControls/Spell/TDF"))

###  EditDistance `Int32`

Specifies the edit distance. If you increase the value, the checking speed decreases but more suggestions are presented.  It does not do anything for the phonetic spellchecking.

###  Errors `SpellCheckErrors`

The errors after the last spellcheck.  The getter method will call  automatically if the text has not been checked yet.

###  FragmentIgnoreOptions `FragmentIgnoreOptions`

Configures the spellchecker engine, so that it knows whether to skip URL's, email addresses, and filenames and not flag them as erros.

###  SpellCheckProvider `SpellCheckProvider`

Specifies whether RadSpell should use the internal spellchecking algorithm or try to use Microsoft Word. The possible values are defined in the  enum.

###  SpellCheckProviderTypeName `String`

Specifies the type name for the custom spell check provider

###  Text `String`

Sets the text to be spellchecked.  It can be plain text or HTML.

#### Remarks
This property can be used to pass the text to the spellchecker engine programmatically.  The engine can deal with plaintext or any HTML-like format.  
             It ignores text inside angle brackets (<>) and transforms HTML entities to their character values.  E.g. &amp; becomes &
             C#:
             
            using (SpellChecker checker = new SpellChecker(Server.MapPath("~/RadControls/Spell/TDF")))
            {
            	checker.Text = text;
            	return checker.Errors;
            }
             
             VB.NET
             
            Dim checker As SpellChecker
            Try
            	checker = New SpellChecker(Server.MapPath("~/RadControls/Spell/TDF"))
            	checker.Text = text
            	Return checker.Errors
            Finally
            	checker.Dispose()
            End Try

###  TextWords `String`

This property returns the list of words that was generated when the  property is set.

###  WordIgnoreOptions `WordIgnoreOptions`

A set of rules that specify words that should be ignored during the spellcheck. Note that this property should be set before the  property.

## Methods

###  AddToCustom

Adds a new word to the custom dictionary.  It first checks if the word is already present in the current base or custom dictionaries.

#### Parameters

#### word `System.String`

The new custom word.

#### Returns

`System.Void` 

###  CheckText

Performs the actual spellchecking.  It will be automatically called by the Errors property accessor.

#### Returns

`Telerik.Web.UI.SpellCheckErrors` -- a collection with all the errors found.

###  Close

Cleans up any resources held by the SpellChecker object.  It is an alias of the Dispose method.

#### Returns

`System.Void` 

###  Dispose

Clean up used resources.

#### Returns

`System.Void` 

###  GetSuggestions

Gets a list of suggestions from the dictionary for the specified word

#### Parameters

#### word `System.String`

A string containing the word to be used.

#### Returns

`System.String[]` A string array containing the spellcheck suggestions for the input word.

