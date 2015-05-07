---
title: Conditional Image Display in GridButtonColumn and GridTemplateColumn
page_title: Conditional Image Display in GridButtonColumn and GridTemplateColumn | RadGrid for ASP.NET AJAX Documentation
description: Conditional Image Display in GridButtonColumn and GridTemplateColumn
slug: grid/how-to/conditional-image-display-in-gridbuttoncolumn-and-gridtemplatecolumn
tags: conditional,image,display,in,gridbuttoncolumn,and,gridtemplatecolumn
published: True
position: 6
---

# Conditional Image Display in GridButtonColumn and GridTemplateColumn



## 

There are cases in which you would like to display/not display image inside **GridButtonColumn/GridTemplateColumn** in relation with value in other column.

The example below demonstrates how to fulfill this task for **GridButtonColumn** and **GridCheckBoxColumn** (note that similar operations can be performed for GridTemplateColumn and other column types).You can retrieve reference to the **checkbox** the inside the grid item cell which correspond to the **GridCheckBoxColumn**. This can be done in the **ItemDataBound** handler of the grid. After you get the checkbox control you can verify whether the checkbox is checked (to assign **ImageUrl** for the **ImageButton** in the **GridButtonColumn**) or not checked (to **clear** the controls inside the respective **GridButtonColumn** cell).

Here is an example (**CheckBoxColumn** and **ButtonColumn** are the [ UniqueNames]({%slug grid/rows/accessing-cells-and-rows%}) for our columns):



````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server">
  <MasterTableView AutoGenerateColumns="False">
    <Columns>
      <telerik:GridButtonColumn CommandName="MyCommand" ButtonType="ImageButton" UniqueName="ButtonColumn">
      </telerik:GridButtonColumn>
      <telerik:GridBoundColumn HeaderText="ContactName" DataField="ContactName" UniqueName="ContactName">
      </telerik:GridBoundColumn>
      <telerik:GridBoundColumn HeaderText="ContactTitle" DataField="ContactTitle" UniqueName="ContactTitle">
      </telerik:GridBoundColumn>
      <telerik:GridCheckBoxColumn UniqueName="CheckBoxColumn" DataField="Bool">
      </telerik:GridCheckBoxColumn>
    </Columns>
  </MasterTableView>
</telerik:RadGrid>
````
````C#
private void RadGrid1_ItemDataBound(object sender, Telerik.Web.UI.GridItemEventArgs e)
{
    if (e.Item is GridDataItem)
    {
        GridDataItem dataItem = e.Item as GridDataItem;
        CheckBox box = dataItem["CheckBoxColumn"].Controls[0] as CheckBox;
        if (box.Checked)
        {
            (dataItem["ButtonColumn"].Controls[0] as ImageButton).ImageUrl = "RadControls/Grid/Skins/Default/Edit.gif";
        }
        else
        {
            dataItem["ButtonColumn"].Controls[0].Visible = false;
        }
    }
}
````
````VB
Private Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs)
    If TypeOf e.Item Is GridDataItem Then
        Dim dataItem As GridDataItem = CType(e.Item, GridDataItem)
        Dim box As CheckBox = CType(dataItem("CheckBoxColumn").Controls(0), CheckBox)
        If box.Checked Then
            CType(dataItem("ButtonColumn").Controls(0), ImageButton).ImageUrl = "RadControls/Grid/Skins/Default/Edit.gif"
        Else
            dataItem("ButtonColumn").Controls(0).Visible = False
        End If
    End If
End Sub
````

