---
title: Block Commands Behavior Change
page_title: Block Commands Behavior Change | RadEditor for ASP.NET AJAX Documentation
description: Block Commands Behavior Change
slug: editor/changes-and-backwards-compatibility/block-commands-behavior-change
tags: block,commands,behavior,change
published: False
position: 2
---

# Block Commands Behavior Change

## What has changed

Beginning Q2 2013, in order to improve the consistency across different browsers and achieve stronger coherence with the desktop text editing applications,we have introduced major changes in the behavior of a number of RadEditor's commands handling the manipulation of block elements.	The so called Block Commands take care of	user actions which have to do with the editing, alignment, and justification of different block elements, such aslists, paragraphs, tables, etc. Common scenarios include inserting lists, aligning, and indenting/outdenting.

As a result of the modification, the block commands now exhibit behavior different from what was observed in previous versions of the control. Below you canfind a list of the updated commands and the period in which they were released.


>caption Updated Block Commands

|  **Release**  |  **Commands**  |
| ------ | ------ |
|[Q2 2013](https://www.telerik.com/products/aspnet-ajax/whats-new/release-history/q2-2013-version-2013-2-611.aspx#Editor)| **Indent/Outdent** , **InsertList** , **Align** |

## How to get the old behavior back

In order to ease the transition between the old and the new behavior of the commands and allow the developers to decide whether or not to implement the introduced breaking change,RadEditor now offers the possibility of bringing back their old behavior.

This can be achieved by referencing the **LegacyCommands.js** script file which resides in**Telerik.Web.UI.Editor.RadEditor.Commands** namespace, as illustrated in the example below.

````ASP.NET
<asp:ScriptManager runat="server" ID="ScriptManager1"></asp:ScriptManager>
<script type="text/javascript" src='<%= Page.ClientScript.GetWebResourceUrl(typeof(RadEditor), "Telerik.Web.UI.Editor.RadEditor.Commands.LegacyCommands.js") %>'></script>
````

>note Please, note that the **LegacyCommand.js** script file has to be included **after** the page's Script Manager in order to override thedefault commands.
