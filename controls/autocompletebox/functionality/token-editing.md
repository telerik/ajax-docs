---
title: Token Editing
page_title: Token Editing - RadAutoCompleteBox
description: Check our Web Forms article about Token Editing.
slug: autocompletebox/functionality/token-editing
tags: token,editing
published: True
position: 4
---

# Token Editing



## AllowTokenEditing

**RadAutoCompleteBox** allows user to edit a single token by double-clicking it when the **AllowTokenEditing** property is set to **"true"**:

````ASPNET
<telerik:RadAutoCompleteBox RenderMode="Lightweight" runat="server" ID="RadAutoCompleteBox1" 
	 DataSourceID="SqlDataSource1"  DataTextField="FirstName" InputType="Token" > 
	<TokensSettings AllowTokenEditing="true" /> 
</telerik:RadAutoCompleteBox > 
````



Only one token can be edited at a time. If while a token is in edit mode another one is clicked- it goes in edit mode instead of the previous one.

The user confirms Token text editing explicitly by pressing the **"Enter"** key and the Token text editing is canceled if the focus moves out of the Token input, or the user presses **"Esc"** key.

>note The **AllowCustomEntry** property should be set to **true** in order to be able to edit tokens in **RadAutoCompleteBox** control.
>


# See Also

 * [RadAutoCompleteBox overview demo](https://demos.telerik.com/aspnet-ajax/autocompletebox/examples/default/defaultcs.aspx)
