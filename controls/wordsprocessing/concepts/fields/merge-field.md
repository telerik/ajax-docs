---
title: Merge Field
page_title: Merge Field | UI for ASP.NET AJAX Documentation
description: Merge Field
slug: wordsprocessing/concepts/fields/merge-field
tags: merge,field
published: True
position: 1
---

# Merge Field



Merge field is a [Field]({%slug wordsprocessing/concepts/fields/fields%}) element containing a reference to a data field by its name. When a template document is mail merged with the values from a data source, the data field information replaces the merge field. More information on the mail merge feature is available in the respective article: [Mail Merge]({%slug wordsprocessing/editing/mail-merge%}).

## Syntax

The syntax of a merge field is demonstrated in __Figure 1__.
>caption Figure 1: Merge Field Code Syntax

![Rad Words Processing Concepts Merge Field 01](images/RadWordsProcessing_Concepts_Merge_Field_01.png)

## Inserting

Inserting a merge field is easily achieved through the [RadFlowDocumentEditor]({%slug wordsprocessing/editing/radflowdocumenteditor%})'s __InsertField()__ method. It accepts code as first argument and result as second argument.

__Example 1__ demonstrates how you can insert a merge field.

````C#
	            RadFlowDocumentEditor editor = new RadFlowDocumentEditor(new RadFlowDocument());
	            editor.InsertField("MERGEFIELD First_Name", "Nancy Davolio");
````



## Switches

Switches are a way for the code fragment to specify formatting for the result of the field. More information is available in the *Syntax and Switches* section of the [Fields]({%slug wordsprocessing/concepts/fields/fields%}) article.

The possible switches for a merge field are:

* __\b "text":__ Specifies text which shall be inserted before the Merge Field in case the field is not blank.

* __\f "text":__ Specifies text which shall be inserted after the Merge Field in case the field is not blank.

__Example 2__ shows a possible use of merge field's switches.

````C#
	            editor.InsertField("MERGEFIELD First_Name \\b \"Mr. \" \\f \". \"", "");
````



# See Also

 * [Fields]({%slug wordsprocessing/concepts/fields/fields%})

 * [Mail Merge]({%slug wordsprocessing/editing/mail-merge%})

 * [RadFlowDocumentEditor]({%slug wordsprocessing/editing/radflowdocumenteditor%})
