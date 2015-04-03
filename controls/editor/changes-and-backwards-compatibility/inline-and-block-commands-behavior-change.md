---
title: Inline and Block Commands Behavior Change
page_title: Inline and Block Commands Behavior Change | UI for ASP.NET AJAX Documentation
description: Inline and Block Commands Behavior Change
slug: editor/changes-and-backwards-compatibility/inline-and-block-commands-behavior-change
tags: inline,and,block,commands,behavior,change
published: True
position: 4
---

# Inline and Block Commands Behavior Change



## What Has Been Changed

During the last few years, the editor got many new important features and functionalities. All these goodies highly increasedthe end-user’s usability and support for different scenarios, although they led to some unwanted side effects with the basicfunctionalities. In addition to that, lots of new browsers and browser versions were released through the time. The RadEditorcontrol is designed to depend on browser commands for most of the basic editing functionalities.

Since Q2 2013, in order to improve the consistency across different browsers and achieve stronger coherence with the desktop text editing applications,we have introduced major changes in the behavior of some major commands used in the __RadEditor__ control. These commands take careof user actions for editing, insertion and modification of inline (span, font etc.) and block (lists, paragraphs, tables, etc.) elements.

As a result of the modification, these commands now exhibit behavior different from what was observed in previous versions of that control.

## What Are the Goals

* Creation of a list over inline nodes separated by line breaks. All inline content should be put in a single block wrapper. This is the default behavior in MS Word;

* The end user should be able to align/indent/outdent a single block element by clicking inside it or marking it;

* Consistent behavior of the Bold, Italic and Strike-trough commands under all major browsers.

* The end user should be able to align/indent/outdent multiple block elements at the same time;

* Creation of a list from an empty line using the corresponding command;

* Creation of a list over multiple block elements;

>note The editing behavior of the inline and block elements is directly related to the set value of the[NewLineMode property]({%slug editor/managing-content/control-new-line-behavior%}), which by default is set to "Br".For example the selection of multiple lines, separated by <br> is considered as one whole block element, although if they are separated by <p> - all selected lines are considered as different block elements.
>


## User Experience with RadEditor

The users has already gained experience for text editing from desktop rich text editors (e.g. MS Word). For their convenience most of the known commands are implemented in the __RadEditor__ control via different [tools]({%slug editor/functionality/toolbars/overview%}) and their [keyboard shortcuts](6C74ED39-DB39-45F5-ADD5-1CCA662C580A).

If the __NewLineMode__ property is used with its default value ("Br") some known actions are somehow different in the __RadEditor__. You can find a list of them in the following table.


| Action | RadEditor | MS Word |
| ------ | ------ | ------ |
|Insert Line Break|keyboard shortcut __Shift+Enter__ 

>tip If the NewLineMode="Br" property is used - __Enter__ key
>
|keyboard shortcut __Shift+Enter__ |
|Insert Paragraph|keyboard shortcut __Ctrl+Enter__ 

>tip If the NewLineMode="P" property is used - __Enter__ key
>
| __Enter__ key|

>note As shown in this table if the __NewLineMode__ property is set to "P", the user would be able to use the __RadEditor__ with the same experience as in MS Word.
>


## List of the Updated Commands


|  __Release__  |  __Commands__  |
| ------ | ------ |
|[Q2 2013](http://www.telerik.com/products/aspnet-ajax/whats-new/release-history/q2-2013-version-2013-2-611.aspx#Editor)| __Indent/Outdent__ , __InsertList__ , __Align__ and __Insert List (Sorted and Bulleted)__ .|
|[Q3 2013](http://www.telerik.com/products/aspnet-ajax/whats-new/release-history/q3-2013-version-2013-3-1015.aspx).| __Bold__ , __Italic__ , __Underline__  __Strikethrough__ |

## How to Get the Old Behavior Back

>note For the convenience of the developers who are using the functionality to roll-back the behavior, we want to assure you that the following JavaScript files	will be included in all the future releases of the Telerik UI for ASP.NET AJAX suite. Also it should be noted that they are deprecated and there will be no further implementation in their logic.
>


In order to ease the transition between the old and the new behavior of the commands and allow the developers to decide whether to implement or not the introduced breaking change,there is a built-in ability that offers the possibility of bringing back their old behavior.

For the block commands this can be achieved by referencing the __LegacyCommands.js__ script file which resides in__Telerik.Web.UI.Editor.RadEditor.Commands__ namespace, as illustrated in the example below.

````ASPNET
			<asp:ScriptManager runat="server" ID="ScriptManager1"></asp:ScriptManager>
			<script type="text/javascript" src='<%= Page.ClientScript.GetWebResourceUrl(typeof(RadEditor), "Telerik.Web.UI.Editor.RadEditor.Commands.LegacyCommands.js") %>'></script>
````



And for the inline commands - the __LegacyInlineCommands.js__ script file which resides in__Telerik.Web.UI.Editor.RadEditor.Commands__ namespace, as illustrated in the example below.

````ASPNET
			<asp:ScriptManager runat="server" ID="ScriptManager1"></asp:ScriptManager>
			<script type="text/javascript" src="<%= Page.ClientScript.GetWebResourceUrl(typeof(RadEditor), "Telerik.Web.UI.Editor.RadEditor.Commands.LegacyInlineCommands.js") %>"></script>
````



>note Please, note that the JavaScript files has to be included __after__ the page's Script Manager in order to override the	default commands.
>


# See Also

 * [Control New Line Behavior]({%slug editor/managing-content/control-new-line-behavior%})
