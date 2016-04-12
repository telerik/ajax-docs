---
title: Selection Mode
page_title: Selection Mode | RadAutoCompleteBox for ASP.NET AJAX Documentation
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


In order to use the single selection mode you will need to have set the **InputType** property of the RadAutoCompleteBox to **Text**. With **single selection** RadAutoCompleteBox becomes a single input searchbox, which is a widely used scenario. In single selection mode the user can freely type any characters inside the input and no additional editing is done to the text. The filtering is based on the whole text. At any point the get_text() method can be called to obtain the text of the AutoCompleteBox. For consistency, in this mode the **EntriesCollection** will have **only one Entry**, which will contain the whole text.

There are two values that can be set with the **TextSettings-SelectionMode** property - **Single** and **Multiple**. When no Selection Mode (**TextSettings-SelectionMode**) is set, the default value is **Multiple**.

Either of the two approaches below can be applied:

````ASPNET
<telerik:RadAutoCompleteBox RenderMode="Lightweight" runat="server" ID="RadAutoCompleteBox1" InputType="Text">
	<TextSettings SelectionMode="Single" />
</telerik:RadAutoCompleteBox>
````



````ASPNET
<telerik:RadAutoCompleteBox RenderMode="Lightweight" runat="server" ID="RadAutoCompleteBox1" InputType="Text" TextSettings-SelectionMode="Single">
</telerik:RadAutoCompleteBox>
````



On the **client-side** you easily set or get the selection mode using the ***set_selectionMode()*** and ***get_selectionMode()*** properties.
