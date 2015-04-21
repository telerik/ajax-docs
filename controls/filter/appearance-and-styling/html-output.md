---
title: HTML Output
page_title: HTML Output | UI for ASP.NET AJAX Documentation
description: HTML Output
slug: filter/appearance-and-styling/html-output
tags: html,output
published: True
position: 1
---

# HTML Output



The typical HTML output of a **RadFilter** control is the following:

````HTML
<div class="RadFilter RadFilter_Default" id="RadFilter1">
    <ul class="rfLines">
        <li>
            <div class="rfDiv">
                <div class="rfLeft">
                </div>
                <div class="rfMid">
                    <a href="#" class="rfOper">And</a>
                </div>
                <div class="rfTools">
                    <a class="rfAddExp" title="Add Expression">Add Expression</a>
                    <a class="rfAddGr" title="Add Group">Add Group</a> 
                    <a class="rfDel" title="Remove Item">Remove Item</a>
                </div>
                <div class="rfRight">
                </div>
            </div>
            <ul>
                <li>
                    <div class="rfDiv">
                        <div class="rfLeft">
                        </div>
                        <div class="rfMid">
                            <a href="#" class="rfField">OrderID</a>
                            <a href="#" class="rfExp">EqualTo</a> ................
                        </div>
                        <div class="rfTools">
                            <a class="rfDel" title="Remove Item">Remove Item</a>
                        </div>
                        <div class="rfRight">
                        </div>
                    </div>
                </li>
                <li class="rfLast">
                    <div class="rfDiv">
                        <div class="rfLeft">
                        </div>
                        <div class="rfMid">
                            <a href="#" class="rfField">ShipName</a> 
                            <a href="#" class="rfExp">EqualTo</a>
                            <input type="text" class="rfText" />
                        </div>
                        <div class="rfTools">
                            <a class="rfDel" title="Remove Item">Remove Item</a>
                        </div>
                        <div class="rfRight">
                        </div>
                    </div>
                </li>
            </ul>
        </li>
    </ul>
    <div class="rfPreview">
        <span class="rfBr">(</span>
        <strong>OrderID</strong> = <span class="rfVal">'0'</span>
        <em>AND </em>
        <strong>ShipName</strong> = <span class="rfVal">''</span><span class="rfBr">)</span>
    </div>
    <div class="rfApply">
        <a href="#"><input type="submit" value="Apply" class="rfButton"></a>
    </div>
    <input type="hidden" id="RadFilter1_ClientState" autocomplete="off" />
</div>
````



* **div.RadFilter.RadFilter_SkinName** - the control's wrapper element, which holds the skin name

* **ul.rfLines** - this the outermost list element, which holds all filter expressions (rendered as list items **&lt;li&gt;**). The filter expressions may be grouped in nested list elements. The rfLines CSS class indicates that the control will display visual clues (line images) connecting the different list items. This functionality depends on the **ShowLineImages** property.

* **li.rfLast** - this is the last list item from a given list element. The CSS class determines the different line image that the list item requires.

* **div.rfDiv** - this element is a child of a list item element and wraps a single line of the control - either an expression or an AND/OR operator

* **div.rfLeft**, **div.rfRight** - these elements have no structural markup value and exist only to hold the list items' background images with rounded corners

* **div.rfMid** - this element contains the field name, filter operator and filter value of each expression

* **div.rfTools** - this element contains all the buttons that a list item may contain - "add group" (**a.rfAddGr**), "add expression" (**a.rfAddExp**), "remove expression" (**a.rfDel**)

* **a.rfField** - the element displays the datafield name of the current filter expression

* **a.rfExp** - the element displays the filtering operator of the current filter expression ('equal to', 'contains', etc)

* **input.rfText** - the textbox that holds the filtering value for string datafields. For other data types (numeric, date, etc), there is another control rendered - RadNumericTextBox, RadDatePicker, etc.

* **div.rfPreview** - this element wraps the human-readable filter expression, which is generated based on the filter conditions in the list items. For the sake of easier styling, the expression preview markup uses the following HTML elements - **<strong>** for datafields, **&lt;em&gt;** for AND/OR, **span.rfBr** for brackets and **span.rfVal** for the filtering values

* **div.rfAppy** - this element holds the control's Apply button, which consists of an anchor (**&lt;a&gt;**) and an **input.rfButton** element inside it. Two elements are used to support rounded corners.

## Notes on RadFilter Skinning

* The RadFilter control is rendered as a list of floated elements with no explicit width. This means that if the control is placed inside a narrow container, the elements from a single line may fall down and occupy multiple lines. In order to avoid this, the control wrapper has a **min-width:400px** style specified in its base stylesheet.
