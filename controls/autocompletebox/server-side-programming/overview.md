---
title: Overview
page_title: Server-Side Programming Overview - RadAutoCompleteBox
description: Check our Web Forms article about Telerik's ASP.NET AutoCompleteBox Server-Side Programming Overview.
slug: autocompletebox/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-Side Programming Overview



## Properties


>caption  

| Name | Type | Return Type | Description |
| ------ | ------ | ------ | ------ |
|Text|Getter|String|Gets the text of the input area.|
|InputType|Getter/Setter|Telerik.Web.UI.RadAutoCompleteFilter|Gets/sets the input type.|

````ASPNET
RadAutoCompleteInputType:
{
	Token,
	Text,
}
````

| Name | Type | Return Type | Description |
| ------ | ------ | ------ | ------ |
|Filter|Getter/Setter|Telerik.Web.UI.RadAutoCompleteFilter|Gets/sets the filter type.|

````ASPNET
RadAutoCompleteFilter:
{
	StartsWith,
	Contains,
}
````

| Name | Type | Return Type | Description |
| ------ | ------ | ------ | ------ |
|AllowCustomEntry|Getter/Setter|Bool|Determines whether custom entris will be allowed.|
|Attributes|Getter|System.Web.UI.AttrbuteCollection|Gets the collection of arbitrary attributes that do not correspond to the properties of the control.|
|Delimiter|Getter/Setter|String|Gets/sets a value indicating what delimiter should be used when the control displays the selected entries as a	sequence of strings (when InputType is set to "Text").|
|DropDownItemTemplate|Getter/Setter|System.Web.UI.ITemplate|Gets/sets the template for the items that appear in the drop-down container.|
|Entries|Getter|Telerik.Web.UI.AutoCompleteBoxEntryCollection|Gets a collection of the selected entries.|
|ID|Getter/Setter|String|Gets/sets the server ID.|
|DataTextField|Getter/Setter|String|Gets/sets the field of the data source that provides the text content of the drop-down items.|
|DataValueField|Getter/Setter|String|Gets/sets the field of the data source that provides the value content of the drop-down items.|

## Events


>caption  

| Name | Parameters | Description |
| ------ | ------ | ------ |
|[EntryAdded]({%slug autocompletebox/server-side-programming/events/onentryadded%})|RadAutoCompleteBox object, AutoCompleteEntryEventArgs|Fires when an entry is added to the Entries collection of RadAutoCompleteBox. The event is raised only when the input type of RadAutoCompleteBox is set to "Token".|
|[EntryRemoved]({%slug autocompletebox/server-side-programming/events/onentryremoved%})|RadAutoCompleteBox object, AutoCompleteEntryEventArgs|Fires when an entry is removed from the Entries collection of RadAutoCompleteBox. The event is raised only when the input type of RadAutoCompleteBox is set to "Token".|
|[TextChanged]({%slug autocompletebox/server-side-programming/events/ontextchanged%})|RadAutoCompleteBox object, AutoCompleteTextEventArgs|Fires when the text is changed in the input area of RadAutoCompleteBox. The event is raised only when the input type of RadAutoCompleteBox is set to "Text".|
|[DropDownTemplateNeeded]({%slug autocompletebox/server-side-programming/events/ondropdowntemplateneeded%})|RadAutoCompleteBox object, AutoCompleteDropDownItemEventArgs|Fires before template is being applied to the drop-down item.|
