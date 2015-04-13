---
title: Selection Mode
page_title: Selection Mode | UI for ASP.NET AJAX Documentation
description: Selection Mode
slug: autocompletebox/functionality/selection-mode
tags: selection,mode
published: True
position: 3
---

# Selection Mode



## Selection Mode

>note Note that the property is valid after 2012 Q3 SP1 and above.
>


In order to use the single selection mode you will need to have set the __InputType__ property of the RadAutoCompleteBox to __Text__. With __single selection__ RadAutoCompleteBox becomes a single input searchbox, which is a widely used scenario. In single selection mode the user can freely type any characters inside the input and no additional editing is done to the text. The filtering is based on the whole text. At any point the get_text() method can be called to obtain the text of the AutoCompleteBox. For consistency, in this mode the __EntriesCollection__ will have __only one Entry__, which will contain the whole text.

There are two values that can be set with the __TextSettings-SelectionMode__ property - __Single__ and __Multiple__. When no Selection Mode (__TextSettings-SelectionMode__) is set, the default value is __Multiple__.

Either of the two approaches below can be applied:

````ASPNET
<telerik:RadAutoCompleteBox runat="server" ID="RadAutoCompleteBox1" InputType="Text">
	<TextSettings SelectionMode="Single" />
</telerik:RadAutoCompleteBox>
````



````ASPNET
<telerik:RadAutoCompleteBox runat="server" ID="RadAutoCompleteBox1" InputType="Text" TextSettings-SelectionMode="Single">
</telerik:RadAutoCompleteBox>
````



On the __client-side__ you easily set or get the selection mode using the *__set_selectionMode()__* and *__get_selectionMode()__* properties.
