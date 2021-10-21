---
title: Resize RadComboBox input to show all of the selected item text
description: Resize RadComboBox input to show all of the selected item text. Check it now!
type: how-to
page_title: Resize RadComboBox input to show all of the selected item text
slug: combobox-resize-combobox-input-to-show-all-of-the-selected-item-text
res_type: kb
---

## How to

Resize the ComboBox element to show the whole selected item similar to the [DropDownAutoWidth]({%slug combobox/functionality/dropdown-autowidth%})functionality:

![ComboBoxInput-Autowidth](images/combobox-resize-combobox-input-to-show-all-of-the-selected-item-text.gif)

## Solution

To achieve the desired result, the width of the ComboBox element should be calculated to be sufficient for showing the text without clipping. To calculate the width of the text, we will create a &lt;div&gt; element with our text as its innerText and we get the div's width as suggested in this StackOverflow article: [Get input text width when typing](https://stackoverflow.com/a/44303103). Then we add the paddings and border widths and we have the necessary ComboBox width. This resizing should be done in OnClientLoad and OnClientSelectedIndexChanged events:

````ASPX
<div id='measurement-div'></div>

<telerik:RadComboBox RenderMode="Lightweight"
    OnClientLoad="OnClientLoad" OnClientSelectedIndexChanged="OnClientSelectedIndexChanged"
    DropDownAutoWidth="Enabled" ID="RadComboBox1" runat="server">
    <Items>
        <telerik:RadComboBoxItem Text="Fairly looooooooooooong item"></telerik:RadComboBoxItem>
        <telerik:RadComboBoxItem Text="Veeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeery Looooooooooong item"></telerik:RadComboBoxItem>
        <telerik:RadComboBoxItem Text="Short item"></telerik:RadComboBoxItem>
    </Items>
</telerik:RadComboBox>
````

````CSS
#measurement-div {
    width: auto;
    display: inline-block;
    visibility: hidden;
    position: fixed;
    overflow: auto;
}
````

````JavaScript
function OnClientSelectedIndexChanged(sender, args) {
    autoWidthComboBox(sender);
}
function OnClientLoad(sender, args) {
    autoWidthComboBox(sender);
}
function autoWidthComboBox(combo) {
    //https://stackoverflow.com/questions/44302717/get-input-text-width-when-typing
    var elemDiv = document.getElementById('measurement-div');
    elemDiv.innerText = combo.get_inputDomElement().value;

    var $inputParentSpan = $telerik.$(combo.get_inputDomElement().parentElement);
    var paddingLeft = parseInt($inputParentSpan.css("padding-left"));
    var paddingRight = parseInt($inputParentSpan.css("padding-right"));
    var bordersWidth = 4;
    var width = elemDiv.offsetWidth + paddingLeft + paddingRight + bordersWidth + 'px';
    combo.get_element().style.width = width
}
````

 