---
title: Declarative Style Editors
page_title: Declarative Style Editors - RadGrid
description: Learn how to configure Telerik UI for ASP.NET AJAX RadGrid column editors declaratively and create custom editors at runtime.
slug: grid/appearance-and-styling/declarative-style-editors
components: ["grid"]
tags: declarative,style,editors
published: True
position: 12
---

# Declarative Style Editors

You can set the column editors declaratively by setting the **ColumnEditorID** property of the corresponding column to the ID of the custom column editor. This gives you the flexibility to easily customize the look of the column editors.

To add a column editor declaratively, add an instance of the column editor to the page that contains your grid. If you are using a built-in column editor type and customizing its properties, drag the column editor from the toolbox onto your page:

> caption Figure 1: Column editors in the Visual Studio toolbox

![Column editors in the Visual Studio toolbox](images/grd_DeclarativeColumnEditor_Toolbox.png)

Assign the properties of the column editor to customize it how you want it:

> caption Example: Customizing a declarative column editor

````ASP.NET
<telerik:GridTextBoxColumnEditor ID="TextEditor1" runat="server">
  <TextBoxStyle BackColor="#edffc3" BorderColor="#ecbb0d" BorderStyle="Solid" ForeColor="#7fa822" />
</telerik:GridTextBoxColumnEditor>
````



Assign the ID of the column editor to the column you want to attach it to:

> caption Example: Assigning a column editor to a GridBoundColumn

````ASP.NET
<telerik:GridBoundColumn ColumnEditorID="TextEditor1" DataField="ShipName" EditFormHeaderTextFormat="{0} - Customized text editor"
  HeaderText="Ship Name" UniqueName="ShipName">
</telerik:GridBoundColumn>
````



The code above will result in the following:

> caption Figure 2: GridBoundColumn with a declarative column editor

![GridBoundColumn with a declarative column editor](images/grd_DeclarativeColumnEditor.png)

For an online example that uses declarative custom editors, see the [grid server-side API extraction demo](https://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/ExtractValues/DefaultVB.aspx).

## Creating Declarative Custom Editors Programmatically

If you want to assign declarative custom editors at runtime, you need to instantiate them in a **Page_Init** handler and add them to the **Controls** collection of a place holder control:



> caption Example: Declaring a runtime column editor

````ASP.NET
<asp:PlaceHolder ID="PlaceHolder1" runat="server" />
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" Width="97%" AutoGenerateColumns="False">
  <MasterTableView>
    <Columns>
      <telerik:GridDropDownColumn UniqueName="DropDownListColumn" ListTextField="ContactName"
        ListValueField="ContactName" DataSourceID="SqlDataSource2" HeaderText="DropDown Column"
        DataField="ContactName" AllowSorting="true" ColumnEditorID="ddEditor1">
      </telerik:GridDropDownColumn>
    </Columns>
  </MasterTableView></telerik:RadGrid>
````
````C#
protected void Page_Init(object sender, EventArgs e)
{
    GridDropDownListColumnEditor ddEditor1 = new GridDropDownListColumnEditor();
    ddEditor1.ID = "ddEditor1";
    ddEditor1.DropDownStyle.BorderColor = System.Drawing.Color.Coral;
    ddEditor1.DropDownStyle.BorderStyle = BorderStyle.Solid;
    ddEditor1.DropDownStyle.BackColor = System.Drawing.Color.DeepSkyBlue;
    PlaceHolder1.Controls.Add(ddEditor1);
}
````
````VB
Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs) Handles MyBase.Init
    Dim ddEditor1 As New GridDropDownListColumnEditor()
    ddEditor1.ID = "ddEditor1"
    ddEditor1.DropDownStyle.BorderColor = System.Drawing.Color.Coral
    ddEditor1.DropDownStyle.BorderStyle = BorderStyle.Solid
    ddEditor1.DropDownStyle.BackColor = System.Drawing.Color.DeepSkyBlue
    PlaceHolder1.Controls.Add(ddEditor1)
End Sub
````


## See Also

 * [Custom Editors Extending Auto-Generated Editors]({%slug grid/data-editing/grid-editors/custom-editors-extending-auto-generated-editors%})

 * [Auto-Generated Editors]({%slug grid/data-editing/grid-editors/auto-generated-editors%})
