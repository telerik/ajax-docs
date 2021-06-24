---
title: How to export template columns in RadTreeList
description: How to export template columns in RadTreeList. Check it now!
type: how-to
page_title: How to export template columns in RadTreeList
slug: treelist-how-to-export-template-columns
res_type: kb
---

## How to

Export template columns in RadTreeList to Excel.

## Description

The problem with template columns is that they contain controls and not text, so the treelist cannot directly export them. The [ExportMode property]({%slug treelist/functionality/exporting/overview%}) can attempt to extract text from certain interfaces (buttons, textboxes) but it cannot accommodate all scenarios.

Also, various content cannot be exported to Excel (such as images) and that can cause errors during the export operation.

## Solution

If setting **ExportMode** to **ReplaceControls** or **RemoveAll** does not suit your needs, you would need to write a few lines of code.

To avoid errors and to ensure you have content in the template columns, you need to set their **Text** property and **remove any unnecessary controls**. Below is an example that shows how you can use the **ItemDataBound** event and the **IsExporting** flag of the control to access and modify controls and set texts.

````C#
protected void rtl1_ItemDataBound(object sender, TreeListItemDataBoundEventArgs e)
{
    RadTreeList tl = (RadTreeList)sender;
    if (tl.IsExporting)//if the treelist is exporting, we can modify the items
    {
        if (e.Item is TreeListDataItem) //the rows
        {
            TreeListDataItem itm = e.Item as TreeListDataItem;
            //clear the current controls from the template column and set the cell text to the text we want in it
            itm["Images0"].Controls.Clear();//this is similar to setting ExportMode="RemoveAll"
            itm["Images0"].Text = (itm.DataItem as DataRowView)["Images"].ToString();
        }
        if (e.Item is TreeListHeaderItem) //the header template
        {
            TreeListHeaderItem itm = e.Item as TreeListHeaderItem;
            //clear the current controls from the header of the template column and set the cell text to the text we want in it
            itm["Images0"].Controls.Clear();//this is similar to setting ExportMode="RemoveAll"
            itm["Images0"].Text = "header text";
        }
    }
}
````

which is based on the following markup

````ASPX
<asp:Button Text="export to excel" ID="exportBtn" OnClick="exportBtn_Click" runat="server" />
<telerik:RadTreeList runat="server" ID="rtl1" RenderMode="Lightweight" OnNeedDataSource="rtl1_NeedDataSource"
    DataKeyNames="ID" ParentDataKeyNames="ParentID" OnItemDataBound="rtl1_ItemDataBound">
    <ExportSettings Excel-Format="Xlsx" IgnorePaging="true"></ExportSettings>
    <Columns>
        <telerik:TreeListTemplateColumn UniqueName="Images0" HeaderStyle-Width="130px" HeaderText="Images" DataField="Images">
            <HeaderTemplate>
                <asp:Image ID="Image1" ImageUrl="image.gif" runat="server" ToolTip="Images" />
                <asp:Label ID="Image1Text" runat="server" Text="Images" CssClass="hideImg"></asp:Label>
            </HeaderTemplate>
            <ItemTemplate>
                <asp:Image ID="Images" runat="server" Style="cursor: pointer;" />
                <asp:Label ID="ImagesText" runat="server" Text='<%# Eval("Images") %>' CssClass="hideImg"></asp:Label>
            </ItemTemplate>
        </telerik:TreeListTemplateColumn>
    </Columns>
</telerik:RadTreeList>
````

and here is some easy to use data so you can run this example:

````C#
protected void exportBtn_Click(object sender, EventArgs e)
{
    rtl1.ExportToExcel();
}
 
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        //just to have some more expanded items for the export
        rtl1.ExpandedIndexes.Add(new TreeListHierarchyIndex { NestedLevel = 0, LevelIndex = 0 });
    }
}
 
public DataTable GetDataHierarchy()
{
    DataTable table = new DataTable();
    table.Columns.Add("ID");
    table.Columns.Add("ParentID");
    table.Columns.Add("Value");
    table.Columns.Add("Images");
 
    table.Rows.Add(new String[] { "1", null, "World_Continents", "World Continents" });
    table.Rows.Add(new String[] { "2", null, "World_Oceans", "World Oceans" });
 
    table.Rows.Add(new String[] { "3", "1", "Asia", "Asia" });
    table.Rows.Add(new String[] { "4", "1", "Africa", "Africa" });
    table.Rows.Add(new String[] { "5", "1", "Australia", "Australia" });
    table.Rows.Add(new String[] { "6", "1", "Europe", "Europe" });
    table.Rows.Add(new String[] { "7", "1", "North_America", "North America" });
    table.Rows.Add(new String[] { "8", "1", "South_America", "South America" });
 
    table.Rows.Add(new String[] { "9", "2", "Arctic_Ocean", "Arctic Ocean" });
    table.Rows.Add(new String[] { "10", "2", "Atlantic_Ocean", "Atlantic Ocean" });
    table.Rows.Add(new String[] { "11", "2", "Indian_Ocean", "Indian Ocean" });
    table.Rows.Add(new String[] { "12", "2", "Pacific_Ocean", "Pacific Ocean" });
    table.Rows.Add(new String[] { "13", "2", "South_Ocean", "SouthOcean" });
 
    table.Rows.Add(new String[] { "14", "3", "Third_Level", "Third Level" });
 
    table.Rows.Add(new String[] { "15", "14", "Fourth_Level", "Fourth Level" });
 
    table.Rows.Add(new String[] { "16", "7", "Another_Third_Level", "Another Third Level" });
 
    return table;
}
 
protected void rtl1_NeedDataSource(object sender, TreeListNeedDataSourceEventArgs e)
{
    (sender as RadTreeList).DataSource = GetDataHierarchy();
}
````

 