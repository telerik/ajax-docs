---
title: Indenting panel items when loaded from database in RadPanelBar
description: Indenting panel items when loaded from database in RadPanelBar. Check it now!
type: how-to
page_title: Indenting panel items when loaded from database in RadPanelBar
slug: panelbar-indenting-panel-items-when-loaded-from-database
res_type: kb
---

## How to

Indent each level of panel items when loaded from database.  
   
## Solution

You will need to populate the PanelBar using its databinding feature and subscribe to the PanelItemDataBound server event. Then, in the respective event handler, check the depth level of the panel item currently bound (you can obtain the value from the Level column in the database) and assign a style to that item in conjunction with its position in the panelbar hierarchy.  
   
````ASPX
<head> 
    ..... 
    <link href="panelbar.css" rel="Stylesheet" type="text/css" /> 
</head> 
 .....
<telerik:RadPanelBar ID="RadPanelBar1" runat="server" style="Z-INDEX: 101; LEFT: 32px; POSITION: absolute; TOP: 24px" OnItemDataBound="RadPanelBar1_ItemDataBound"></telerik:RadPanelBar> 
````

````CSS
.panelbarInnerCollapsed 
{ 
    FONT-SIZE: 11px; 
    COLOR: green; 
    FONT-FAMILY: Arial,Verdana; 
    cursor: hand; 
    height: 25px; 
    padding-left: 90px; 
    padding-top: 6px; 
} 
 
.panelbarHeaderCollapsed 
{   
    FONT-SIZE: 11px; 
    COLOR: blue; 
    font-weight: bold; 
    FONT-FAMILY: Arial,Verdana; 
    cursor: hand; 
    height: 35px; 
    padding-left: 24px; 
} 
 
.panelbarItem 
{ 
    FONT-SIZE: 11px; 
    COLOR: red; 
    font-weight: bold; 
    FONT-FAMILY: Arial,Verdana; 
    cursor: hand; 
    text-decoration: none; 
    padding-left: 60px; 
    height: 24px; 
} 
````

````C#
protected void Page_Load(object sender, EventArgs e) 
{ 
    OleDbConnection OldDbCon =  
        new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Request.MapPath(this.TemplateSourceDirectory + "\\App_Data\\Panels.mdb")); 

    OleDbDataAdapter adpPanelBar = new OleDbDataAdapter("SELECT * FROM Panelbar", OldDbCon); 

    DataSet dsPanelBar = new DataSet(); 

    adpPanelBar.Fill(dsPanelBar); 

    RadPanelBar1.DataFieldID = "ID"; 
    RadPanelBar1.DataFieldParentID = "ParentID"; 
    RadPanelBar1.DataSource = dsPanelBar; 
    RadPanelBar1.DataBind(); 
} 

protected void RadPanelBar1_ItemDataBound(object sender, Telerik.Web.UI.RadPanelBarEventArgs e) 
{ 
    if (((DataRowView)e.Item.DataItem)["Level"].ToString() == "0") 
    { 
        e.Item.Text = ((DataRowView)e.Item.DataItem)["Label"].ToString(); 
        e.Item.CssClass = "panelbarHeaderCollapsed"; 
        e.Item.ExpandedCssClass = "panelbarHeaderCollapsed"; 
        e.Item.SelectedCssClass = "panelbarHeaderCollapsed"; 
    } 
    else if (((DataRowView)e.Item.DataItem)["Level"].ToString() == "1") 
    { 
        e.Item.Text = ((DataRowView)e.Item.DataItem)["Label"].ToString(); 
        e.Item.CssClass = "panelbarItem"; 
        e.Item.ExpandedCssClass = "panelbarItem"; 
        e.Item.SelectedCssClass = "panelbarItem"; 
    } 
    else 
    { 
        e.Item.Text = ((DataRowView)e.Item.DataItem)["Label"].ToString(); 
        e.Item.CssClass = "panelbarInnerCollapsed"; 
        e.Item.ExpandedCssClass = "panelbarInnerCollapsed"; 
        e.Item.SelectedCssClass = "panelbarInnerCollapsed"; 
    } 
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) 
    Dim OldDbCon As New OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Request.MapPath(Me.TemplateSourceDirectory + "\App_Data\Panels.mdb")) 
 
    Dim adpPanelBar As New OleDbDataAdapter("SELECT * FROM Panelbar", OldDbCon) 
 
    Dim dsPanelBar As New DataSet() 
 
    adpPanelBar.Fill(dsPanelBar) 
 
    RadPanelBar1.DataFieldID = "ID" 
    RadPanelBar1.DataFieldParentID = "ParentID" 
    RadPanelBar1.DataSource = dsPanelBar 
    RadPanelBar1.DataBind() 
End Sub 
 
Protected Sub RadPanelBar1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadPanelBarEventArgs) 
    If (DirectCast(e.Item.DataItem, DataRowView))("Level").ToString() = "0" Then 
        e.Item.Text = (DirectCast(e.Item.DataItem, DataRowView))("Label").ToString() 
        e.Item.CssClass = "panelbarHeaderCollapsed" 
        e.Item.ExpandedCssClass = "panelbarHeaderCollapsed" 
        e.Item.SelectedCssClass = "panelbarHeaderCollapsed" 
ElseIf (DirectCast(e.Item.DataItem, DataRowView))("Level").ToString() = "1" Then 
        e.Item.Text = (DirectCast(e.Item.DataItem, DataRowView))("Label").ToString() 
        e.Item.CssClass = "panelbarItem" 
        e.Item.ExpandedCssClass = "panelbarItem" 
        e.Item.SelectedCssClass = "panelbarItem" 
    Else 
        e.Item.Text = (DirectCast(e.Item.DataItem, DataRowView))("Label").ToString() 
        e.Item.CssClass = "panelbarInnerCollapsed" 
        e.Item.ExpandedCssClass = "panelbarInnerCollapsed" 
        e.Item.SelectedCssClass = "panelbarInnerCollapsed" 
    End If 
End Sub
````

 