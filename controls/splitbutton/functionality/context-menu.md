---
title: Embedded Context Menu
page_title: Embedded Context Menu - RadSplitButton
description: Check our Web Forms article about Embedded Context Menu.
slug: splitbutton/functionality/context-menu
tags: contextmenu,dropdown
published: True
position: 0
---

# Embedded Context Menu

The embedded **RadContextMenu** in the **RadSplitButton** is the control that contains a set of all possible actions that the SplitButton can trigger.

You can define and customize the Context Menu via the `<ContextMenu>` inner tag.

The main idea of the SplitButton control is to let the user chose between multiple different commands and execute just the desired one on a click.

## Default Button

The default command and text of the SplitButton are defined by setting the `Text`, `CommandName` and `CommandArgument` properties of the **RadSplitButton** either in its declaration or programmatically in the code-behind:

````ASPX
<telerik:RadSplitButton runat="server" ID="RadSplitButton1" Text="Sort by Name" CommandName="sortByName" CommandArgument="MyArgument">
    <ContextMenu>
        ....
    </ContextMenu>
</telerik:RadSplitButton>
````

## List of Button Commands

To define the set of various Button Commands for the **RadSplitButton** it is enough to declare **RadMenuItem**(s) in the the embedded ContextMenu:

````ASPX
<telerik:RadSplitButton runat="server" ID="RadSplitButton1" Text="Sort by Name" CommandName="sortByName" CommandArgument="MyArgument">
    <ContextMenu>
        <Items>
            <telerik:RadMenuItem Text="Sort by Name" Value="sortByName">
            </telerik:RadMenuItem>
            <telerik:RadMenuItem Text="Sort by Type" Value="sortByType">
            </telerik:RadMenuItem>
            <telerik:RadMenuItem Text="Sort by Size" Value="sortBySize">
            </telerik:RadMenuItem>
        </Items>
    </ContextMenu>
</telerik:RadSplitButton>
````

The `Value` of each **RadMenuItem** acts as a separate `CommandName` for the **SplitButton** that will be processed upon clicking the Item.


>note The value set to `CommandArgument` property is static and remains always the one defined in the RadSplitButton declaration.


