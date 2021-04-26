---
title: Inserting lists, indenting, outdenting and justify a single line
description: See how to apply indentation, justify and a list on a single line
type: how-to
page_title: Inserting lists, indenting, outdenting and justify a single line
slug: editor-insert-lists-indenting-outdenting-and-justify-a-single-line
res_type: kb
---

## Introduction

During the years we are trying to create the RadEditor with easy to use functionalities and many features. With the main goal, creating an MS Word-like editor, there are outlined some conflicts in the behavior of commands like inserting a list, indenting, outdenting and justifying a single line. The main differences in rich text formatting of the editor is the use of the browser's engine, on which the control relies. The problem is that these browsers’ commands produce quite different HTML content under the different browsers.

## Problem

Inserting a list, indenting, outdenting and justify affects a block of text instead of just the selected line.

## Description

When typing lines of text in the editor's content hitting enter will append an <br> element at the end of the line. Since the lines that are separated by <br> elements are still interpreted as a whole block, executing the following operations will affect all of them:
* Inserting list;
* Indent;
* Outdent;
* Justify;


For example the typed lines of text will look like that in the HTML mode:

````ASP.NET
Line 1<br>
Line 2<br>
Line 3
````

After selecting LIne 2 and pressing the Bullet List button, the HTML output will be formatted as shown below:

````ASP.NET
<ul>
    <li>Line 1<br />
    Line 2<br />
    Line 3</li>
</ul>
````

## Solution

The following examples are workaround solutions for this issue:

After typing a line of text, you can press the New Paragraph button. This way the entered content will be formed as a block element and only the content after the new line will be affected by the operations mentioned above.
Setting the NewLineMode ="P" will format all lines into paragraphs on hitting the Enter key (insert new line) and respectively to block elements.
   
````ASP.NET
<telerik:RadEditor ID="RadEditor1" runat="server" NewLineMode="P"></telerik:RadEditor>
````

The following override of the indent and outdent functionalities will allow you to modify separate lines:

````ASP.NET
<telerik:RadEditor ID="RadEditor1" runat="server">
</telerik:RadEditor>
<script>
    (function ($, $E, undefined) {
 
        if (!$E) return;
 
        $E.CommandList.Indent =
        $E.CommandList.Outdent = function (commandName, editor, oTool) {
            editor.setActive();
 
            var bCanUnexecute = "SelectAll" != commandName;
 
            //Unlink only works on fully selected links in FireFox
            if (commandName == "Unlink" && !editor.isIE) {
                var elem = editor.getSelectedElement();
                if (elem && elem.tagName == "A") editor.selectElement(elem, false); //false => avoid throwing selection changed
            }
 
            editor.executeBrowserCommand(commandName, bCanUnexecute, null, null);
 
            //Update tool state
            return true;
        };
 
    })($telerik.$, Telerik.Web.UI.Editor);
</script>
````



