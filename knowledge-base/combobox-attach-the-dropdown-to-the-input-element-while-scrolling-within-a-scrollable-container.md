---
title: Attach the dropdow to the input element while scrolling within a scrollable container
description: Check out how to attach the dropdow to the input element while scrolling within a scrollable container.
type: how-to
page_title: Attach the dropdow to the input element while scrolling within a scrollable container. | RadComboBox
slug: combobox-attach-the-dropdown-to-the-input-element-while-scrolling-within-a-scrollable-container
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms ComboBox for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description 

This article demonstrates a solution for a common issue encountered with the ComboBox control: when placed within a scrollable container, scrolling with the mouse while the drop-down is open causes the drop-down element to remain fixed on the screen while other elements scroll, creating an undesirable visual effect.

* Please note that for sample purposes the scrollable container has fixed height and padding value. The scenario is a bit extended  so the drop down is closed either when the RadComboBox reaches the upper or bottom part of the container. 

This functionality is achieved with some client-side calculations explained with few comments in the code. Please NOTE that those calculations would work as expected only if the scrollable container has position relative.

## Solution 

This functionality is achieved with some client-side calculations explained with few comments in the code. Please NOTE that those calculations would work as expected only if the scrollable container has position relative.

````ASP.NET
<div class="scrollabeContainer">
    <telerik:RadComboBox ID="RadComboBox1" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <telerik:RadComboBox ID="RadComboBox2" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <hr />
    <telerik:RadComboBox ID="RadComboBox3" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <telerik:RadComboBox ID="RadComboBox4" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <hr />
    <telerik:RadComboBox ID="RadComboBox5" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <telerik:RadComboBox ID="RadComboBox6" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <hr />
    <telerik:RadComboBox ID="RadComboBox7" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <telerik:RadComboBox ID="RadComboBox8" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <hr />
    <telerik:RadComboBox ID="RadComboBox9" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <telerik:RadComboBox ID="RadComboBox10" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <hr />
    <telerik:RadComboBox ID="RadComboBox11" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <telerik:RadComboBox ID="RadComboBox12" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <hr />
    <telerik:RadComboBox ID="RadComboBox13" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <telerik:RadComboBox ID="RadComboBox14" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <hr />
    <telerik:RadComboBox ID="RadComboBox15" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <telerik:RadComboBox ID="RadComboBox16" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <hr />
    <telerik:RadComboBox ID="RadComboBox17" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <telerik:RadComboBox ID="RadComboBox18" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <hr />
    <telerik:RadComboBox ID="RadComboBox19" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <telerik:RadComboBox ID="RadComboBox20" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <hr />
    <telerik:RadComboBox ID="RadComboBox21" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <telerik:RadComboBox ID="RadComboBox22" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <hr />
    <telerik:RadComboBox ID="RadComboBox23" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <telerik:RadComboBox ID="RadComboBox24" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <hr />
    <telerik:RadComboBox ID="RadComboBox25" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <telerik:RadComboBox ID="RadComboBox26" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <hr />
    <telerik:RadComboBox ID="RadComboBox27" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <telerik:RadComboBox ID="RadComboBox28" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <hr />
    <telerik:RadComboBox ID="RadComboBox29" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <telerik:RadComboBox ID="RadComboBox30" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <hr />
    <telerik:RadComboBox ID="RadComboBox31" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <telerik:RadComboBox ID="RadComboBox32" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <hr />
    <telerik:RadComboBox ID="RadComboBox33" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <telerik:RadComboBox ID="RadComboBox34" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <hr />
    <telerik:RadComboBox ID="RadComboBox35" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <telerik:RadComboBox ID="RadComboBox36" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <hr />
    <telerik:RadComboBox ID="RadComboBox37" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <telerik:RadComboBox ID="RadComboBox38" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item 1" />
            <telerik:RadComboBoxItem Text="Item 2" />
            <telerik:RadComboBoxItem Text="Item 3" />
            <telerik:RadComboBoxItem Text="Item 4" />
            <telerik:RadComboBoxItem Text="Item 5" />
            <telerik:RadComboBoxItem Text="Item 6" />
        </Items>
    </telerik:RadComboBox>
    <hr />
</div>
````

````JavaScript
<script>
    Sys.Application.add_load(function () {
        var $ = $telerik.$,
            AllComboBoxes = Telerik.Web.UI.RadComboBox.ComboBoxes,
            $scrollabeContainer = $(".scrollabeContainer"),
            currentCombo = null;

        Array.forEach(AllComboBoxes, function (combo) {
            combo.add_dropDownOpened(function () {
                currentCombo = combo;
            });
            combo.add_dropDownClosed(function () {
                currentCombo = null;
            });
        });

        $scrollabeContainer.on("scroll", function (e) {
            if (currentCombo !== null) {

                // If you want the dropdown to be always visible uncomment the following lines
                // currentCombo._positionDropDown();

                // And remove these
                // Otherwise, the combo dropdown will close when it scrolls out of view
                var comboOffsetTop = currentCombo.get_element().offsetTop;
                if (comboOffsetTop > this.scrollTop && comboOffsetTop < this.scrollTop + this.clientHeight) {
                    currentCombo._positionDropDown();
                } else {
                    currentCombo._hideDropDown();
                }
            }
        });
    });
</script>
````

````CSS
<style>
    .scrollabeContainer {
        padding: 20px;
        height: 250px;
        border: 10px solid gray;
        background: #f0f0f0;
        position: relative;
        overflow: auto;
    }
</style>
````
  
