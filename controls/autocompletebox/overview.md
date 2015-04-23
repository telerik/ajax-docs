---
title: Overview
page_title: RadAutoCompleteBox Overview | UI for ASP.NET AJAX Documentation
description: Telerik's ASP.NET AutoCompleteBox Overview
slug: autocompletebox/overview
tags: overview
published: True
position: 0
---

# AutoCompleteBox Overview



Telerik RadAutoCompleteBox for ASP.NET AJAX is a powerful drop-down list control which gives the ability to select multiple entries, displaying them as a sequence of strings separated by a delimiter, or fancy styled tokens depending on your preferences.

## How RadAutoCompleteBox works?

When a user starts typing into the input area, the data contained in the drop-down container is filtered against the typed text. The first entry to match the typed text is highlighted, whilst the others are only listed in the drop-down list. The user is able to select an entry by pressing the 'Enter' key, which marks the entry as selected and puts it in the input area. After a selection is made the drop-down list closes, leaving the focus on the input area which gives the user a possibility to continue the selection. The user is also given the possibility to traverse the entries, by either using the 'Up' and 'Down' arrow keys, or by using the mouse. One fascinating feature supported out-of-the-box by RadAutoCompleteBox is the ability to insert new entries at runtime. That is, if the user types a text, which does not match any of the items already contained in the drop-down list, and types the defined delimiter next to it, presses the 'Enter' key, the item will be added in the Entry collection of the control visualizing the result in the input area. The text typed in the input area will represent the new entry’s text. The entries currently present in the input area are deleted by pressing the "Backspace" key regardless of the input type. When the entries are displayed as tokens, the user can also use the ‘X’ button, placed in the upper right corner, to delete the token.

## End-user scenarios

* Control which allows the user to type anything in the input area and still provide suggestions based on the text typed.

* Control which allows multiple entries to be present in the input area, separating them by a previously defined delimiter.

* Control which provides the ability to display the entries currently present in the input area as separate tokens either on single, or multiple lines.

## Why choose RadAutoCompleteBox?

* Because of its intuitive UI for filtering and selecting multiple entries from a large list.

* Because of the operations supported which include selecting, removing, and navigating through the entries as well as through the drop-down items by using the mouse, or the keyboard.

* And last but not least, a very important fact about RadAutoCompleteBox is its ability to be populated with data from various data sources. The control can be populated by defining declarative items, by server-side binding (DataSource controls), and by client-side binding(Web service, WCF, service, and OData).

## Summary of features supported by RadAutoCompleteBox

* **Data Binding**

	* Declarative entries – defined in the markup, in the Entries section.

	* Server-side – server API for setting data source using DataSource controls, to which RadAutoCompleteBox is bound.

	* Client-side – client API for setting data source using Web services, WCF services, and OData, to which RadAutoCompleteBox is bound.

* **Filtering** – client filter based on the users’ input. Users are given the possibility to choose from 'StartsWith' and 'Contains' filter mode. The default filter mode is set to 'Contains'.

* **Text and Token Input Types** – depending on users’ preference, the selected items are displayed either as a sequence of strings separated by delimiter, or as tokens. The property to set the preferred visual appearance is InputType – the options to choose from are 'Text' and 'Token', having the 'Token' input type set by default.

* **Selecting items from the drop-down container**– allows selection of multiple items from the drop-down list, inserting them to the Entry collectionof the control and visualizing them in the input area.

* **Templates** – provides the ability to define your own visual presentation of the entries contained in the drop-down area. Server as well as client templates are supported out-of-the-box by RadAutoCompleteBox.
