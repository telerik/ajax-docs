---
title: Telerik.Web.UI.RadComboBox
page_title: Client-side API Reference
description: Telerik.Web.UI.RadComboBox
slug: Telerik.Web.UI.RadComboBox
---

# Telerik.Web.UI.RadComboBox : Telerik.Web.UI.ControlItemContainer 

## Inheritance Hierarchy

* [Telerik.Web.UI.ControlItemContainer]({%slug Telerik.Web.UI.ControlItemContainer%})
* *[Telerik.Web.UI.RadComboBox]({%slug Telerik.Web.UI.RadComboBox%})*


## Methods

### attachDropDown

Use it in this scenario: Ajaxified control in ItemTemplate does a full postback.

#### Parameters

#### Returns

`None` 

### clearCache

Clears the items cache if EnableItemCaching is True.

#### Parameters

#### Returns

`None` 

### clearItems

Clears all items of the RadComboBox.

#### Parameters

#### Returns

`None` 

### clearSelection

Clears the selection.

#### Parameters

#### Returns

`None` 

### commitChanges

Commits the changes made to the RadComboBox that will be preserved over post-backs.

#### Parameters

#### Returns

`None` 

### disable

Disables the RadComboBox.

#### Parameters

#### Returns

`None` 

### disableEvents

Enables the control client-side event emitting. Events are enabled by default.

#### Parameters

#### Returns

`None` 

### enable

Enables the RadComboBox.

#### Parameters

#### Returns

`None` 

### enableCheckAllCheckBox

Enables the "CheckAll" checkbox, when multiple selection is enabled.

#### Parameters

#### Returns

`None` 

### enableEvents

Enables the control client-side event emitting. Events are enabled by default.

#### Parameters

#### Returns

`None` 

### findFirstMatch

Returns the first RadComboBoxItem object whose Text property equals the passed parameter.

#### Parameters

##### text `String`

text

#### Returns

`Telerik.Web.UI.RadComboBoxItem` RadComboBoxItem

### findItemByText

Returns the first RadComboBoxItem object whose;Text property equals to the passed parameter.

#### Parameters

##### text `String`

text

#### Returns

`Telerik.Web.UI.RadComboBoxItem` 

### findItemByValue

Returns the first RadComboBoxItem object whose Value property equals the passed parameter.

#### Parameters

##### value `String`

value

#### Returns

`Telerik.Web.UI.RadComboBoxItem` RadComboBoxItem

### get_allowCustomText

Gets a value indicating whether the RadComboBox" AllowCustomText property is true or false.

#### Parameters

#### Returns

`Boolean` true or false

### get_attributes

Returns the collection of arbitrary attributes.

#### Parameters

#### Returns

`Telerik.Web.UI.AttributeCollection` The attribute collection.

### get_causesValidation

Gets a value indicating whether the RadComboBox causes validation.

#### Parameters

#### Returns

`Boolean` true or false

### get_changeText

True

#### Parameters

#### Returns

`Boolean` 

### get_checkAllCheckBoxDivElement

Returns the dom element for the check all checkbox.

#### Parameters

#### Returns

`Element`

### get_checkedIndices

Returns the indices of all checked items

#### Parameters

#### Returns

`Number[]` Returns array of Integers

### get_checkedItems

Gets an array of the checked RadComboBoxItem objects.

#### Parameters

#### Returns

`Telerik.Web.UI.RadComboBoxItem[]` All checked items

### get_childListElement

Gets the UL element of the RadComboBox drop down. This element contains the Items of the RadComboBox.

#### Parameters

#### Returns

`Element` The UL element of the RadComboBox.

### get_childListElementWrapper

Gets the scrollable DIV element of the RadComboBox drop down (which contains the UL element with Items).

#### Parameters

#### Returns

`Element` The scrollable DIV element of the RadComboBox drop down.

### get_clientTemplate

Returns the value of the RadComboBox" ClientItemTemplate property.

#### Parameters

#### Returns

`None` 

### get_collapseAnimation

Returns an object containing the drop down's collapse animation settings.

#### Parameters

#### Returns

`Telerik.Web.UI.AnimationSettings` 

### get_dropDownElement

Gets the DIV element of the RadComboBox drop down.

#### Parameters

#### Returns

`Element` The DIV element of the RadComboBox drop down.

### get_dropDownVisible

True

#### Parameters

#### Returns

`Boolean` 

### get_emptyMessage

Gets the EmptyMessage text of the RadComboBox.

#### Parameters

#### Returns

`String` string

### get_enabled

Gets a value indicating whether the RadComboBox is enabled.

#### Parameters

#### Returns

`Boolean` True if the RadComboBox is enabled

### get_enableItemCaching

Gets a value indicating whether the Item caching is enabled (in Load On Demand scenario).

#### Parameters

#### Returns

`Boolean` True if the Item caching is enabled

### get_enableTextSelection

True

#### Parameters

#### Returns

`Boolean` 

### get_expandAnimation

Returns an object containing the drop down's expand animation settings.

#### Parameters

#### Returns

`Telerik.Web.UI.AnimationSettings` 

### get_highlightedItem

Gets the currently highlighted item.

#### Parameters

#### Returns

`Telerik.Web.UI.RadComboBoxItem` 

### get_highlightTemplatedItems

Gets a value indicating whether templated Items should be highlighted. (False by default.)

#### Parameters

#### Returns

`Boolean` True if the templated Items are highlighted

### get_id

RadComboBox

#### Parameters

#### Returns

`Object` 

### get_imageDomElement

Gets a the image DOM element (drop down toggle image).

#### Parameters

#### Returns

`Element` The image DOM element.

### get_inputDomElement

Gets a the input DOM element.

#### Parameters

#### Returns

`Element` The input DOM element.

### get_isTemplated

Check if the RadComboBox has instantiated template.

#### Parameters

#### Returns

`Boolean` 

### get_items

Returns the Items collection for the RadComboBox.

#### Parameters

#### Returns

`Telerik.Web.UI.RadComboBoxItemCollection` RadComboBoxItemCollection

### get_lastWord

Gets the word after the last separator in the text of the RadComboBox. If a separator is not set, returns the text itself.

#### Parameters

#### Returns

`String` string

### get_markFirstMatch

True if MarkFirstMatch is true; false otherwise.

#### Parameters

#### Returns

`Boolean` boolean

### get_moreResultsBoxElement

Gets the MoreResultsBox DOM element.

#### Parameters

#### Returns

`Element` The MoreResultsBox DOM element.

### get_moreResultsBoxMessageElement

Gets a reference to the MoreResultsBox Message DOM element.

#### Parameters

#### Returns

`Element` The MoreResultsBox Message DOM element.

### get_originalText

Gets the text which has been rendered from the server.

#### Parameters

#### Returns

`String` The text of the RadComboBox rendered from the server.

### get_readOnly

Gets a value indicating whether the RadComboBox is read-only.

#### Parameters

#### Returns

`Boolean` True if the RadComboBox is read

### get_selectedIndex

Gets the index of the currently selected Item.

#### Parameters

#### Returns

`Number` The index of the currently selected Item.

### get_selectedItem

Gets the currently selected Item.

#### Parameters

#### Returns

`Telerik.Web.UI.RadComboBoxItem` RadComboBoxItem

### get_selectElement

Gets the DomElement of the DropDown in simple rendering mode.

#### Parameters

#### Returns

`Element` The DOM element of the DropDown.

### get_simpleRendering

Checks if the current rendering mode is "Simple rendering mode".

#### Parameters

#### Returns

`Boolean` True if simple rendering mode

### get_slideDirection

Gets the direction of the drop down slide animation.

#### Parameters

#### Returns

`Telerik.Web.UI.jSlideDirection` The direction of the dropdown slide animation 

### get_tableElement

Gets a the RadComboBox table DOM element (containing the input and toggle image).

#### Parameters

#### Returns

`Element` The RadComboBox table DOM element.

### get_text

Gets the text in the input field.

#### Parameters

#### Returns

`String` The text in the input field.

### get_value

Gets the value of the RadComboBox.

#### Parameters

#### Returns

`String` The value of the RadComboBox.

### get_visibleItems

Returns all visible Items.

#### Parameters

#### Returns

`Telerik.Web.UI.RadComboBoxItem[]` An array containing all visible Items.

### get_webServiceSettings

Gets an object containing Web Service settings.

#### Parameters

#### Returns

`Telerik.Web.UI.WebServiceSettings` 

### getLastWord

Returns the word after the last autocomplete separator of the RadComboBox in the passed text argument.

#### Parameters

##### text `String`

text

#### Returns

`String` string

### hideDropDown

Closes the drop down.

#### Parameters

#### Returns

`None` 

### highlightAllMatches

Filters Items by the passed text argument. The filter criteria is specified by the Filter property.

#### Parameters

##### text `String`

text

#### Returns

`None` 

### highlightFirstVisibleEnabledItem

Highlights the first visible and enabled Item in the drop down.

#### Parameters

#### Returns

`None` 

### highlightMatches

Highlights the first Item which starts with the currently typed text if the MarkFirstMatch property is set to true.

#### Parameters

#### Returns

`None` 

### highlightNextItem

Highlights the first Item starting with the specified letter and positioned after the currently highlighted one. The method sets the text of the new Item to the input or appends it to the current text if an autocomplete separator is specified.

#### Parameters

##### letter `String`

letter

#### Returns

`None` 

### highlightPreviousItem

Highlights the first Item starting with the specified letter and positioned before the currently highlighted one. The method sets the text of the new Item to the input or appends it to the current text if an autocomplete separator is specified.

#### Parameters

#### Returns

`None` 

### isIEDocumentMode8

Checks if the IE mode is 8.

#### Parameters

#### Returns

`Boolean` True if IE mode is 8

### repaint

Repaints RadComboBox" "fake input" (IE8 only) and Label.

#### Parameters

#### Returns

`None` 

### requestItems

Initiates a load-on-demand callback request with the specified text, causing the ItemsRequested server event to fire or a request to be sent to a WebService. The second bool parameter instructs the combobox to append the new items (true) or clear items (false).

#### Parameters

##### text `String`

text

##### appendItems `Boolean`

Indicates whether to append the received items to the current set of items.

#### Returns

`None` 

### saveClientState

Saves the client state to the client state hidden field.

#### Parameters

#### Returns

`None` 

### selectText

Selects a text range in the input specified by the startIndex and endIndex parameters.

#### Parameters

#### Returns

`None` 

### set_allowCustomText

Sets the AllowCustomText property.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### set_causesValidation

Sets a boolean value indicating whether the RadComboBox causes validation.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### set_changeText

ChangeTextOnKeyBoardNavigation

#### Parameters

##### Boolean `Boolean`

#### Returns

`Object` 

### set_clientTemplate

Sets the value of the RadComboBox" ClientItemTemplate property.

#### Parameters

##### value `String`

value

#### Returns

`None` 

### set_closeDropDownOnBlur

showDropDown

#### Parameters

##### Boolean `Boolean`

#### Returns

`Object` 

### set_collapseAnimation

Sets an object containing RadComboBox" drop down collapse animation settings.

#### Parameters

##### value `Telerik.Web.UI.AnimationSettings`

value

#### Returns

`None` 

### set_emptyMessage

Sets the EmptyMessage text of the RadComboBox;

#### Parameters

##### value `String`

value

#### Returns

`None` 

### set_enabled

Sets a boolean value indicating whether the RadComboBox is enabled.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### set_enableItemCaching

Enables/disables item caching (when Load On Demand is enabled).

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### set_enableTextSelection

EnableTextSelection

#### Parameters

##### boolean `Object`

#### Returns

`Object` 

### set_expandAnimation

Sets an object containing RadComboBox" drop down expand animation settings.

#### Parameters

##### value `Telerik.Web.UI.AnimationSettings`

value

#### Returns

`None` 

### set_highlightTemplatedItems

Sets a boolean value indicating whether templated Items should be highlighted.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### set_items

Sets the Items collection for the RadComboBox.

#### Parameters

##### value `Telerik.Web.UI.RadComboBoxItemCollection`

value

#### Returns

`None` 

### set_markFirstMatch

Sets the MarkFirstMatch property.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### set_selectedIndex

Sets the selected Index of the RadComboBox. The method does not actually select an Item.

#### Parameters

##### value `Number`

value

#### Returns

`None` 

### set_selectedItem

Sets the selected Item.

#### Parameters

##### value `Telerik.Web.UI.RadComboBoxItem`

value

#### Returns

`None` 

### set_slideDirection

Sets the direction of the drop down slide animation. It can be Up or Down.

#### Parameters

#### Returns

`Telerik.Web.UI.jSlideDirection` value

### set_text

Sets the text of the input field to the value of the specified parameter.

#### Parameters

##### value `String`

value

#### Returns

`None` 

### set_value

Sets the value of RadComboBox.

#### Parameters

##### value `String`

value

#### Returns

`None` 

### set_webServiceSettings

Sets an object containing Web Service settings.

#### Parameters

##### value `Telerik.Web.UI.WebServiceSettings`

value

#### Returns

`None` 

### setAllItemsVisible

Sets all items visible / invisible

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### showDropDown

Opens the drop down.

#### Parameters

#### Returns

`None` 

### toggleDropDown

Toggles the drop down visibility.

#### Parameters

#### Returns

`None` 

### trackChanges

Starts tracking changes made to the RadComboBox that will be preserved over post-backs.

#### Parameters

#### Returns

`None` 


## Events

### checkAllChecked

Occurs after the "Check All" check box is checked. 

#### Event Data

##### sender `Telerik.Web.UI.RadComboBox`

The RadComboBox instance raised the event.

##### args `Telerik.Web.UI.ComboBoxCheckAllCheckingEventArgs`

The arguments of the CheckAllChecked event.
### dropDownClosed

Occurs after the drop-down list has been closed.

#### Event Data

##### sender `Telerik.Web.UI.RadComboBox`

The RadComboBox instance raised the event.

##### args `Telerik.Web.UI.RadComboBoxEventArgs`

The arguments of the DropDownClosed event.

### dropDownOpened

Occurs after the drop-down list has been opened.

#### Event Data

##### sender `Telerik.Web.UI.RadComboBox`

The RadComboBox instance raised the event.

##### args `Telerik.Web.UI.RadComboBoxEventArgs`

The arguments of the DropDownOpened event.

### itemsRequested

Occurs after the load-on-demand mechanism has added new items to the RadComboBox. 

#### Event Data

##### sender `Telerik.Web.UI.RadComboBox`

The RadComboBox instance raised the event.

##### args `Telerik.Web.UI.RadComboBoxRequestEventArgs`

The arguments of the ItemsRequested event.

### itemDataBound

Occurs for each item that is created during WebService Load on Demand. 

#### Event Data

##### sender `Telerik.Web.UI.RadComboBox`

The RadComboBox instance raised the event.

##### args `Telerik.Web.UI.RadComboBoxItemDataBoundEventArgs`

The arguments of the ItemDataBound event.


### templateDataBound

Occurs for each item that is created during WebService Load on Demand.

#### Event Data

##### sender `Telerik.Web.UI.RadComboBox`

The RadComboBox instance raised the event.

##### args `Telerik.Web.UI.RadTemplateBoundEventArgs`

The arguments of the TemplateDataBound event.

### itemChecked

Occurs immediately after a particular item has been checked. (in CheckBoxes enabled scenario).

#### Event Data

##### sender `Telerik.Web.UI.RadComboBox`

The RadComboBox instance raised the event.

##### args `Telerik.Web.UI.RadComboBoxItemEventArgs`

The arguments of the ItemChecked event.

### checkAllChecking

Occurs just before the "Check All" check box is checked. 

#### Event Data

##### sender `Telerik.Web.UI.RadComboBox`

The RadComboBox instance raised the event.

##### args `Telerik.Web.UI.ComboBoxCheckAllCheckingEventArgs`

The arguments of the CheckAllChecking event.

### dropDownClosing

Occurs just before the drop-down list closes.

#### Event Data

##### sender `Telerik.Web.UI.RadComboBox`

The RadComboBox instance raised the event.

##### args `Telerik.Web.UI.RadComboBoxCancelEventArgs`

The arguments of the DropDownClosing event.

### dropDownOpening

Occurs just before the drop-down list gets opened. 

#### Event Data

##### sender `Telerik.Web.UI.RadComboBox`

The RadComboBox instance raised the event.

##### args `Telerik.Web.UI.RadComboBoxCancelEventArgs`

The arguments of the DropDownOpening event.

### selectedIndexChanging

Occurs just before the RadComboBox selection is about to be changed to a new item. 

#### Event Data

##### sender `Telerik.Web.UI.RadComboBox`

The RadComboBox instance raised the event.

##### args `Telerik.Web.UI.RadComboBoxItemCancelEventArgs`

The arguments of the SelectedIndexChanging event.

### itemChecking

Occurs when a particular item is about to be checked (in CheckBoxes enabled scenario).

#### Event Data

##### sender `Telerik.Web.UI.RadComboBox`

The RadComboBox instance raised the event.

##### args `Telerik.Web.UI.RadComboBoxItemCancelEventArgs`

The arguments of the ItemChecking event.

### itemsRequestFailed

Occurs when an error has occurred while loading elements using the load-on-demand mechanism. 

#### Event Data

##### sender `Telerik.Web.UI.RadComboBox`

The RadComboBox instance raised the event.

##### args `Telerik.Web.UI.RadComboBoxItemsRequestFailedEventArgs`

The arguments of the ItemsRequestFailed event.

### itemsRequesting

Occurs when EnableLoadOnDemand is enabled and the RadComboBox is about to send a server-side request to load more items.

#### Event Data

##### sender `Telerik.Web.UI.RadComboBox`

The RadComboBox instance raised the event.

##### args `Telerik.Web.UI.RadComboBoxRequestCancelEventArgs`

The arguments of the ItemsRequesting event.

### keyPressing

Occurs when the RadComboBox receives the focus and the user presses a key. 

#### Event Data

##### sender `Telerik.Web.UI.RadComboBox`

The RadComboBox instance raised the event.

##### args `Telerik.Web.UI.RadComboBoxEventArgs`

The arguments of the TextChange event.

### onClientFocus

Occurs when the RadComboBox receives the input focus. 

#### Event Data

##### sender `Telerik.Web.UI.RadComboBox`

The RadComboBox instance raised the event.

##### args `Telerik.Web.UI.RadComboBoxEventArgs`

The arguments of the OnClientFocus event.

### selectedIndexChanged

Occurs when the RadComboBox selection has just changed to a new item. 

#### Event Data

##### sender `Telerik.Web.UI.RadComboBox`

The RadComboBox instance raised the event.

##### args `Telerik.Web.UI.RadComboBoxItemEventArgs`

The arguments of the SelectedIndexChanged event.

### textChange

Occurs when the user enters custom text in the input field of RadComboBox. Not triggered until the control is blurred or Enter key is pressed.

#### Event Data

##### sender `Telerik.Web.UI.RadComboBox`

The RadComboBox instance raised the event.

##### args `Telerik.Web.UI.RadComboBoxCancelEventArgs`

The arguments of the TextChange event.


