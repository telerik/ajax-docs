---
title: Telerik.Web.UI.RadComboBoxItemsRequestedEventArgs
page_title: Telerik.Web.UI.RadComboBoxItemsRequestedEventArgs
description: Telerik.Web.UI.RadComboBoxItemsRequestedEventArgs
---

# Telerik.Web.UI.RadComboBoxItemsRequestedEventArgs

Provides data for the RadComboBoxItemsRequested event of the RadComboBoxcontrol.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* Telerik.Web.UI.RadComboBoxItemsRequestedEventArgs

## Properties

###  Context `IDictionary`2`

Gets or sets the context.

###  EndOfItems `Boolean`

EndOfItems is boolean property indicating that no more items should be requested.
            Once set, the serverside ItemsRequested event is no longer fired.

###  Message `String`

Message is the message that appears in the ShowMoreResults box. 
            This is only used when the ShowMoreResultsBox property is True.

###  NumberOfItems `Int32`

NumberOfItems  is the number of items that have been added by all previous calls to the 
            ItemsRequested event handler when the ShowMoreResultsBox property is True.

###  Text `String`

Text is the text in the input area of the combobox. 
            This value can be used to filter the items that are added.

###  Value `String`

Value is the value of the currently selected item.

