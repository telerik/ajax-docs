---
title: Document Variables
page_title: Document Variables | UI for ASP.NET AJAX Documentation
description: Document Variables
slug: wordsprocessing/concepts/fields/document-variables
tags: document,variables
published: True
position: 2
---

# Document Variables



Document variables provide a mechanism to store information in the document in a key-value format. The Document Variable field is a [field]({%slug wordsprocessing/concepts/fields/fields%}) element used to access and display the value which corresponds to the given field-argument. The argument is the name of the variable.

## DocumentVariableCollection

[](dd4dbe18-3a7a-4b31-a1e4-2b2ff6fba91e) has a __DocumentVariableCollection__ property which holds document variable records. The collection maps string keys to string values. You can add a record in it through an indexer or with the collection's __Add()__ method. __Example 1__ demonstrates both approaches.

````C#
	            RadFlowDocument document = new RadFlowDocument();
	            document.DocumentVariables["Job"] = "Software Engineer";
	            document.DocumentVariables.Add("Name", "Nancy Davolio");
````



The code in __Example 1__ adds two document variables – *"Name"*, which will be evaluated to *"Nancy Davolio"*, and *"Job"* with *"Software Engineer"* value.

The same two methods can be used to modify the value of an existing variable in the collection.

Removing defined variables can be achieved by using the __Remove()__ method of the variables collection. It accepts the name of the variable as a parameter.

````C#
	            document.DocumentVariables.Remove("Job");     
````



## Syntax

The syntax of a document variable field code is pretty simple as demonstrated on __Figure 1__.
>caption Figure 1: Document Variable Field Code Syntax

![Rad Words Processing Concepts Document Variables 01](images/RadWordsProcessing_Concepts_Document_Variables_01.png)

## Inserting

A __DocumentVariable__ field can be inserted through [RadFlowDocumentEditor]({%slug wordsprocessing/editing/radflowdocumenteditor%})'s __InsertField()__ method. More information on fields is available in the [Fields]({%slug wordsprocessing/concepts/fields/fields%}) article. __Example 3__ shows insertion of the field created in __Example 1__.

````C#
	            editor.InsertField("DOCVARIABLE Name", "Nancy Davolio");
````



>warning A variable needs to be included in the document variables collection of the document before you insert it.
>


# See Also

 * [Fields]({%slug wordsprocessing/concepts/fields/fields%})[](dd4dbe18-3a7a-4b31-a1e4-2b2ff6fba91e)
