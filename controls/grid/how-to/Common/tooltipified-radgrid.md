---
title: Tooltipified RadGrid
page_title: Tooltipified RadGrid | RadGrid for ASP.NET AJAX Documentation
description: Tooltipified RadGrid
slug: grid/how-to/common/tooltipified-radgrid
tags: tooltipified,radgrid
published: True
position: 16
---

# Tooltipified RadGrid



##

There are situations when the RadToolTipManager's TargetControls collection should be updated. [This example](https://demos.telerik.com/aspnet-ajax/tooltip/examples/targetcontrolsandajax/defaultcs.aspx?product=grid) shows a common scenario when this should be done - it contains a RadGrid which has its paging and sorting turned on. Every time a page is changed or the grid is sorted, it is updated through AJAX and the RadToolTipManager's TargetControls collection should get updated, too. In order to achieve this, both the grid and the RadToolTipManager are ajaxified by using a RadAjaxManager control.

Move the mouse over a product name to see more details about it:

![Tooltipified RadGrid](images/grd_TooltipifiedRadGrid.png)

>note When the page index is changed, or a sorting has been done, the RadToolTipManager's TargetControls collection is cleared because the records on the new grid's page have the same ClientIDs as the old ones.
>


Here is a complete source code sample:

**ASPX:**

````C#
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
  <AjaxSettings>
    <telerik:AjaxSetting AjaxControlID="RadGrid1">
      <UpdatedControls>
        <telerik:AjaxUpdatedControl ControlID="RadGrid1" LoadingPanelID="RadAjaxLoadingPanel1" />
        <telerik:AjaxUpdatedControl ControlID="RadToolTipManager1" />
      </UpdatedControls>
    </telerik:AjaxSetting>
  </AjaxSettings>
</telerik:RadAjaxManager>
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server">
</telerik:RadAjaxLoadingPanel>
<telerik:RadToolTipManager RenderMode="Lightweight" ID="RadToolTipManager1" OffsetY="-1" HideEvent="ManualClose"
  Width="250" Height="350" runat="server" EnableShadow="true" OnAjaxUpdate="OnAjaxUpdate"
  RelativeTo="Element" Position="MiddleRight">
</telerik:RadToolTipManager>
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" Width="550" runat="server" DataSourceID="SqlDataSource1"
  GridLines="None" OnItemDataBound="RadGrid1_ItemDataBound" AllowPaging="true" AllowSorting="true"
  PageSize="10" OnItemCommand="RadGrid1_ItemCommand">
  <MasterTableView AutoGenerateColumns="False" CommandItemDisplay="None" CurrentResetPageIndexAction="SetPageIndexToFirst"
    DataKeyNames="ProductID" DataSourceID="SqlDataSource1" Dir="LTR" Frame="Border"
    TableLayout="Auto">
    <Columns>
      <telerik:GridBoundColumn CurrentFilterFunction="NoFilter" DataField="ProductID" Display="false"
        DataType="System.Int32" FilterListOptions="VaryByDataType" ForceExtractValue="None"
        HeaderText="ProductID" ReadOnly="True" SortExpression="ProductID" UniqueName="ProductID">
      </telerik:GridBoundColumn>
      <telerik:GridTemplateColumn HeaderText="Product" SortExpression="ProductName">
        <ItemTemplate>
          <asp:HyperLink ID="targetControl" runat="server" NavigateUrl="#" Text='<%# Eval("ProductName") %>'></asp:HyperLink>
        </ItemTemplate>
      </telerik:GridTemplateColumn>
      <telerik:GridBoundColumn AllowSorting="true" DataField="CompanyName" HeaderText="Supplier"
        SortExpression="CompanyName" UniqueName="CompanyName">
      </telerik:GridBoundColumn>
      <telerik:GridBoundColumn AllowSorting="true" DataField="UnitPrice" DataFormatString="{0:C}"
        HeaderText="Price" SortExpression="UnitPrice">
      </telerik:GridBoundColumn>
    </Columns>
    <EditFormSettings>
      <EditColumn CurrentFilterFunction="NoFilter" FilterListOptions="VaryByDataType">
      </EditColumn>
    </EditFormSettings>
  </MasterTableView>
</telerik:RadGrid>
<asp:SqlDataSource ID="SqlDataSource1" runat="server"
    ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" ProviderName="System.Data.SqlClient"
    SelectCommand="SELECT * FROM [Products] INNER JOIN [Suppliers] ON Products.SupplierID=Suppliers.SupplierID ">
</asp:SqlDataSource>
````
````ASP.NET
<table runat="server" style="width: 100%" id="ProductWrapper" border="0" cellpadding="2"
  cellspacing="0">
  <tr>
    <td style="text-align: center;">
      <asp:FormView ID="ProductsView" DataSourceID="ProductDataSource" DataKeyNames="ProductID"
        runat="server" OnDataBound="ProductsView_DataBound">
        <ItemTemplate>
          <asp:Label CssClass="title" ID="Category" runat="server"><%# Eval("ProductName")%></asp:Label>
          <hr />
          <asp:Image ID="image" Width="200" Height="200" runat="server" ImageUrl='<%# Eval("ProductID", "../../../Img/Northwind/Products/{0}.jpg") %>' />
          <br />
          <span class='title'>Quantity Per Unit:</span>
          <asp:Label CssClass="info" ID="Label1" runat="server"><%# Eval("QuantityPerUnit")%></asp:Label>
          <br />
          <span class='title'>Unit Price:</span>
          <asp:Label CssClass="info" ID="Label2" runat="server"><%# Eval("UnitPrice")%></asp:Label>
          <br />
          <span class='title'>Units In Stock:</span>
          <asp:Label CssClass="info" ID="Label3" runat="server"><%# Eval("UnitsInStock")%></asp:Label>
          <br />
          <span class='title'>Units On Order:</span>
          <asp:Label CssClass="info" ID="Label4" runat="server"><%# Eval("UnitsOnOrder")%></asp:Label>
        </ItemTemplate>
      </asp:FormView>
    </td>
  </tr>
</table>
<asp:SqlDataSource ID="ProductDataSource" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
  ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM [Products] WHERE ([ProductID] = @ProductID)">
  <SelectParameters>
    <asp:Parameter Name="ProductID" Type="Int32" />
  </SelectParameters>
</asp:SqlDataSource>
````





````C#
protected void OnAjaxUpdate(object sender, ToolTipUpdateEventArgs args)
{
    this.UpdateToolTip(args.Value, args.UpdatePanel);
}
private void UpdateToolTip(string elementID, UpdatePanel panel)
{
    Control ctrl = Page.LoadControl("ProductDetails.ascx");
    panel.ContentTemplateContainer.Controls.Add(ctrl);
    ProductDetails details = (ProductDetails)ctrl;
    details.ProductID = elementID;
}
protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
{
    if (e.Item.ItemType == GridItemType.Item || e.Item.ItemType == GridItemType.AlternatingItem)
    {
        Control target = e.Item.FindControl("targetControl");
        if (!Object.Equals(target, null))
        {
            if (!Object.Equals(this.RadToolTipManager1, null))
            {
                //Add the button (target) id to the tooltip manager              
                this.RadToolTipManager1.TargetControls.Add(target.ClientID, (e.Item as GridDataItem).GetDataKeyValue("ProductID").ToString(), true);
            }
        }
    }
}
protected void RadGrid1_ItemCommand(object source, GridCommandEventArgs e)
{
    if (e.CommandName == "Sort" || e.CommandName == "Page")
    {
        RadToolTipManager1.TargetControls.Clear();
    }
}
````
````VB
Protected Sub OnAjaxUpdate(ByVal sender As Object, ByVal args As ToolTipUpdateEventArgs)
    Me.UpdateToolTip(args.Value, args.UpdatePanel)
End Sub
Private Sub UpdateToolTip(ByVal elementID As String, ByVal panel As UpdatePanel)
    Dim ctrl As Control = Page.LoadControl("ProductDetails.ascx")
    panel.ContentTemplateContainer.Controls.Add(ctrl)
    Dim details As ProductDetails = DirectCast(ctrl, ProductDetails)
    details.ProductID = elementID
End Sub
Protected Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As GridItemEventArgs)
    If e.Item.ItemType = GridItemType.Item OrElse e.Item.ItemType = GridItemType.AlternatingItem Then
        Dim target As Control = e.Item.FindControl("targetControl")
        If Not [Object].Equals(target, Nothing) Then
            If Not [Object].Equals(Me.RadToolTipManager1, Nothing) Then
                'Add the button (target) id to the tooltip manager
                Me.RadToolTipManager1.TargetControls.Add(target.ClientID, (TryCast(e.Item, GridDataItem)).GetDataKeyValue("ProductID").ToString(), True)
            End If
        End If
    End If
End Sub
Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As GridCommandEventArgs)
    If e.CommandName = "Sort" OrElse e.CommandName = "Page" Then
        RadToolTipManager1.TargetControls.Clear()
    End If
End Sub
````
````C#
public string ProductID
{
    get
    {
        if (ViewState["ProductID"] == null)
        {
            return "";
        }
        return (string)ViewState["ProductID"];
    }
    set
    {
        ViewState["ProductID"] = value;
    }
}
protected override void OnPreRender(EventArgs e)
{
    base.OnPreRender(e);
    this.ProductDataSource.SelectParameters["ProductID"].DefaultValue = this.ProductID;
    this.DataBind();
}
protected void ProductsView_DataBound(object sender, EventArgs e)
{
    System.Web.UI.WebControls.Image image = (System.Web.UI.WebControls.Image)ProductsView.FindControl("image");
    if (image == null)
        return;
    if (!File.Exists(MapPath(image.ImageUrl)))
    {
        image.ImageUrl = "../../Img/Northwind/Products/noimage.jpg";
    }
}
````
````VB
Public Property ProductID() As String
    Get
        If ViewState("ProductID") Is Nothing Then
            Return ""
        End If
        Return DirectCast(ViewState("ProductID"), String)
    End Get
    Set(ByVal value As String)
        ViewState("ProductID") = value
    End Set
End Property
Protected Overrides Sub OnPreRender(ByVal e As EventArgs)
    MyBase.OnPreRender(e)
    Me.ProductDataSource.SelectParameters("ProductID").DefaultValue = Me.ProductID
    Me.DataBind()
End Sub
Protected Sub ProductsView_DataBound(ByVal sender As Object, ByVal e As EventArgs)
    Dim image As System.Web.UI.WebControls.Image = DirectCast(ProductsView.FindControl("image"), System.Web.UI.WebControls.Image)
    If image Is Nothing Then
        Return
    End If
    If Not File.Exists(MapPath(image.ImageUrl)) Then
        image.ImageUrl = "../../Img/Northwind/Products/noimage.jpg"
    End If
End Sub
````

