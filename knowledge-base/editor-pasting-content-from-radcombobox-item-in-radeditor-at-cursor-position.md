---
title: Pasting content from RadComboBox item in RadEditor at cursor position
description: See how to paste content from another component into RadEditor at carret position
type: how-to
page_title: Pasting content from RadComboBox item in RadEditor at cursor position
slug: editor-pasting-content-from-radcombobox-item-in-radeditor-at-cursor-position
res_type: kb
---

## Description

Learn how to paste content from RadCombobox into RadEditor at carret position

## Solution
When the user clicks on the combobox control the selection in the editor's content area is lost. The code below demonstrates how to make all comboboxes' items unselectable to prevent selection lost in RadEditor's content area.

In addition the getSelectedItemValue function is attached to the OnClientSelectedIndexChanged event of RadCombobox and pastes the selected item value at cursor position in the editor when the user selects a combobox item:

````ASP.NET
<script type="text/javascript">
function OnClientLoad(combobox, args)
{
    makeUnselectable(combobox.get_element());
}
  
function OnClientItemsRequested(combobox, args)
{
    $telerik.$("*", combobox.get_dropDownElement()).attr("unselectable", "on");
}
      
//Make all combobox items unselectable to prevent selection in editor being lost
function makeUnselectable(element)
{
    $telerik.$("*", element).attr("unselectable", "on");
}
    
function getSelectedItemValue(combobox, args)
{
  var value = combobox.get_value();
  //alert("The selected combobox value is: " + value);
  //get a reference to RadEditor client object 
  //and paste the selected combobox item content in it
  var editor = $find("<%=RadEditor1.ClientID%>"); 
  editor.pasteHtml(value);
}  
</script>
<telerik:radeditor runat="server" ID="RadEditor1" Content="test mest"></telerik:radeditor>
<div style="padding: 15px 0 0 0;font-family:Arial;font-size:14px;">
    RadComboBox with static items:
    <telerik:RadComboBox OnClientSelectedIndexChanged="getSelectedItemValue" OnClientLoad="OnClientLoad" ID="RadCombobox1" runat="server">
        <Items>
            <telerik:RadComboBoxItem Text="Item1" Value="<strong>Item 1</strong>" />
            <telerik:RadComboBoxItem Text="Item2" Value="<strong>Item 2</strong>" />
            <telerik:RadComboBoxItem Text="Item3" Value="<strong>Item 3</strong>" />
        </Items>
    </telerik:RadComboBox>
</div>
<div style="padding: 15px 0 0 0;font-family:Arial;font-size:14px;">
    RadComboBox with Load-On-Demand:
    <telerik:RadComboBox OnClientSelectedIndexChanged="getSelectedItemValue" OnClientItemsRequested="OnClientItemsRequested" OnClientLoad="OnClientLoad" ID="RadCombobox2" runat="server" 
        OnItemsRequested="RadCombobox2_ItemsRequested" EnableLoadOnDemand="true"></telerik:RadComboBox>
</div>
````

````C#
using Telerik.Web.UI;
      
protected void RadCombobox2_ItemsRequested(object o, Telerik.Web.UI.RadComboBoxItemsRequestedEventArgs e)
{
        for (int i = 0; i < 10; i++)
        {
            RadCombobox2.Items.Add(new RadComboBoxItem("Item" + i.ToString(), "<strong>Item " + i.ToString() + "</strong>"));
        }
}
````

