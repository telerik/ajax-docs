---
title: Set focus to RadEditor body on click of Tab of previous control
description: See how to set focus to RadEditor body on click of Tab from the previous control.
type: how-to
page_title: Set focus to RadEditor body on click of Tab of previous control
slug: editor-set-focus-to-from-content-area-to-next-previous-control-use-tab-key-shift-tab-press
res_type: kb
---

## How-To

* Set focus to RadEditor body on click of Tab of previous control
* Set focus to the next control after RadEditor via Tab key press
* Skip RadEditor toolbar and its buttons when pressing Tab or Shift+Tab

## Description

The TabIndex property of RadEditor sets the tabIndex attribute on the RadEditor div wrapper and when the end user tabs through the controls on the page, the whole editor will get selected. After that the tab will go through all toolbar buttons one by one. The same is valid for the Shift + Tab combination which moves the focus from the content area of RadEditor to the last toolbar button.

## Solution

The provided code solution below shows, how to:
* set the tabIndex attribute to the content area element of RadEditor (in the concrete example its an editable div element)
* disable the built-in InsertTab feature which inserts 4 &nbsp; entities in the content area when the Tab is hit in it. This is similar to the Indent feature of MS Word.
* disable the built-in InsertShiftTab, which capture the Shift+Tab shortcut and moves the focus on the last toolbar button instead of selecting the control/element before RadEditor. 

````ASP.NET
Tab Index 1:
<telerik:RadTextBox runat="server" ID="RadTextBoxInput" TabIndex="1"></telerik:RadTextBox>
<br />
<br />
Tab Index 2:
<telerik:RadEditor ID="RadEditor1" Skin="Default" OnClientLoad="OnClientLoad" ContentAreaMode="Div" runat="server">
</telerik:RadEditor>
<br />
Tab Index 2:
<telerik:RadTextBox runat="server" ID="RadTextBox2" TabIndex="3"></telerik:RadTextBox>
  
<script type="text/javascript">
    function OnClientLoad(editor, args) {
        editor.get_contentArea().tabIndex = "2"; //set the tabIndex to the content area
        
       //disable the built-in InsertTab feature which inserts 4 empty spaces on Tab press like in MS Word
        editor.removeShortCut("InsertTab");
        editor.removeShortCut("InsertShiftTab");
        
        //disable tabbing through the toolbar buttons
        var buttonsHolder = $get(editor.get_id() + "Top"); //get a reference to the top toolbar zone of the editor
        var buttons = buttonsHolder.getElementsByTagName("A"); //get a reference to all A elements on the toolbar and disable the tabbing through them
        for (var i = 0; i < buttons.length; i++) {
            var a = buttons[i];
            a.tabIndex = -1;
            a.tabStop = false;
        }
    }
</script>
````

