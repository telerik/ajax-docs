---
title: How to select first item of RadComboBox on blur
description: How to select first item of RadComboBox on blur. Check it now!
type: how-to
page_title: How to select first item of RadComboBox on blur
slug: combobox-how-to-select-first-item-on-blur
res_type: kb
---

## How to

Select the first match when the user tabs out or otherwise blurs the combo box.

## Description

The combo box should not select an item on its own when losing focus because there may be many items in it, and such a selection is not a user action, and can cause invalid data entry that did not originate from the user.

The MarkFirstMatch property only makes it easier for the end user to select it (e.g., by pressing enter). If this property is not enabled, the user has to first highlight the desired entry (e.g., by pressing down arrow) so they can select it (via enter or click).

## Solution

Use the [OnClientBlur event]({%slug combobox/client-side-programming/events/onclientblur%}) of the combo to get the current selection and the [API of the control]({%slug combobox/client-side-programming/objects/radcombobox-object%}) to determine which [item]({%slug combobox/client-side-programming/objects/radcomboboxitem-object%}) you want to have selected. For example:

````ASPX
<telerik:RadComboBox ID="drpStates" runat="server" DataValueField="StateName" DataTextField="StateName"
    EnableTextSelection="true" ChangeTextOnKeyBoardNavigation="true" Filter="Contains" MarkFirstMatch="true" EmptyMessage="select"
    Width="200px" DropDownWidth="200px" Height="100px" EnableViewState="true" ZIndex="999999" OnClientBlur="OnClientBlur">
</telerik:RadComboBox>
<telerik:RadTextBox ID="txtTest" runat="server"></telerik:RadTextBox>
````

````JavaScript
function OnClientBlur(sender, args) {
    if (!sender.get_selectedItem()) {//if the user has selected an item, do nothing
        var match = sender.findFirstMatch(sender.get_text()); //get the first match for the current text. Note that it may not be what you see in the UI or may be null. You can consider using other methods like looping through the items collection and choosing which item you want selected
        if (match) {
            match.select();//select the desired item
        }
        //another approach of getting an item to select
        var items = sender.get_items();
        for (var i = 0; i < items.get_count() ; i++) {
            if (items.getItem(i).get_text().indexOf(sender.get_text()) > -1) {
                items.getItem(i).select();
                break;
            }
        }

    }
}
````

and a simplistic data source

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!Page.IsPostBack)
    {
        DataTable dtData = new DataTable();
 
        dtData.Columns.Add("StateName", typeof(String));
 
        dtData.Rows.Add("California");
        dtData.Rows.Add("Virginia");
        dtData.Rows.Add("Florida");
        dtData.Rows.Add("New York");
        dtData.Rows.Add("Ohio");
 
        drpStates.DataSource = dtData;
        drpStates.DataBind();
    }
}
````

 