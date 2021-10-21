---
title: Dropdown Does not Move or Close with RadWindow
description: Dropdown Does not Move or Close with RadWindow. Check it now!
type: how-to
page_title: Dropdown Does not Move or Close with RadWindow
slug: window-dropdown-does-not-move-or-close-with-radwindow
res_type: kb
---

## Issue Description

There is a dropdown control like **RadComboBox** or **RadDropDownList** in the **ContentTemplate** of a **RadWindow**.

**If you expand the dropdown and move or close the dialog, the dropdown remains visible in the old location and does not collapse, hide or close.**

## Solutions

There are two ways to solve this:

 - **Use an aspx page** to load your content. It will be loaded in an &lt;iframe&gt; and will have its own context. You can read more about the differences, pros and cons between these two modes in the [Window - ContentTemplate vs. NavigateUrl](http://demos.telerik.com/aspnet-ajax/window/examples/contenttemplatevsnavigateurl/defaultcs.aspx) live demo description.

 - **Attach an event handler** to the [OnClientDragStart]({%slug window/client-side-programming/events/onclientdragstart%}), [OnClientClose]({%slug window/client-side-programming/events/onclientclose%}) and [OnClientCommand]({%slug window/client-side-programming/events/onclientcommand%}) events of the RadWindow and **close the dropdowns with JavaScript**, as shown in **Example 1**. See the [RadComboBox client-side API]({%slug combobox/client-side-programming/objects/radcombobox-object%}) and the [RadDropDownList client-side API]({%slug dropdownlist/client-side-programming/objects/raddropdownlist-object%}) for details.


>caption Example 1: Hide dropdowns when RadWindow moves or closes.

````ASPX
<script>
    function hideDropdowns(container) {
        $telerik.$(".RadComboBox", container).each(function (index, elem) {
            if (elem && elem.control && elem.control.hideDropDown) {
                elem.control.hideDropDown();
            }
        });
        $telerik.$(".RadDropDownList", container).each(function (index, elem) {
            if (elem && elem.control && elem.control.closeDropDown) {
                elem.control.closeDropDown();
            }
        });
    }
    function hideDropdownsFromEvent(sender, args) {
        var shouldCloseDropDowns = !args.get_commandName;
        if (args.get_commandName) {
            var command = args.get_commandName();
            shouldCloseDropDowns = (command == "Maximize") || (command == "Minimize") || (command == "Restore");
        }
        if (shouldCloseDropDowns) {
            hideDropdowns(sender.get_contentElement());
        }
    }
</script>
<telerik:RadWindow ID="RadWindow1" runat="server" VisibleOnPageLoad="true" OpenerElementID="Button1"
    OnClientClose="hideDropdownsFromEvent" OnClientDragStart="hideDropdownsFromEvent" OnClientCommand="hideDropdownsFromEvent">
    <ContentTemplate>
        <telerik:RadComboBox ID="RadComboBox1" runat="server" EmptyMessage="Open me and move/close the window" Width="250px">
            <Items>
                <telerik:RadComboBoxItem Text="one" />
                <telerik:RadComboBoxItem Text="two" />
                <telerik:RadComboBoxItem Text="three" />
            </Items>
        </telerik:RadComboBox>
        <telerik:RadDropDownList runat="server" ID="RadDropDownList1" Width="250px">
            <Items>
                <telerik:DropDownListItem Text="first" />
                <telerik:DropDownListItem Text="second" />
                <telerik:DropDownListItem Text="third" />
            </Items>
        </telerik:RadDropDownList>
    </ContentTemplate>
</telerik:RadWindow>
<asp:Button ID="Button1" Text="open the dialog" runat="server" />
````

 
