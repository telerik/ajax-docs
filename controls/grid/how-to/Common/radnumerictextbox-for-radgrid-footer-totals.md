---
title: RadNumericTextBox for RadGrid Footer Totals
page_title: RadNumericTextBox for RadGrid Footer Totals | RadGrid for ASP.NET AJAX Documentation
description: RadNumericTextBox for RadGrid Footer Totals
slug: grid/how-to/common/radnumerictextbox-for-radgrid-footer-totals
tags: radnumerictextbox,for,radgrid,footer,totals
published: True
position: 8
---

# RadNumericTextBox for RadGrid Footer Totals



##

[This demo](http://demos.telerik.com/aspnet-ajax/Controls/Examples/Integration/GridAndInput/DefaultCS.aspx?product=grid) represents how to calculate footer totals client-side having RadNumericTextBoxes in the RadGrid rows and footer. The sums are calculated dynamically with javascript wiring the OnFocus and OnBlur events of RadInput. Additionally, for easy extraction of the input values, the code takes advantage of the Client-side API of the RadNumericTextBox and its get_value()/set_value(val) methods.

Keep in mind that the changes made by the user will be lost on subsequent postbacks. If you would like to keep the new entries during the page lifecycle, you will need to pass them server-side with custom code logic and refresh the grid source accordingly.

![RadGrid totals with RadNumericTextBox](images/grdTotalsWithRadNumericTextBox.PNG)



````JavaScript
<telerik:RadScriptBlock runat="server" ID="RadScriptBlock1">
  <script type="text/javascript">
    var sumInput = null;
    var tempValue = 0.0;
    function Load(sender, args) {
      sumInput = sender;
    }
    function Blur(sender, args) {
      sumInput.set_value(tempValue + sender.get_value());

    }
    function Focus(sender, args) {
      tempValue = sumInput.get_value() - sender.get_value();
    }
  </script>
</telerik:RadScriptBlock>
````
````ASP.NET
<telerik:RadAjaxManager ID="Manager1" runat="server">
  <AjaxSettings>
    <telerik:AjaxSetting AjaxControlID="RadGrid1">
      <UpdatedControls>
        <telerik:AjaxUpdatedControl ControlID="RadGrid1" />
      </UpdatedControls>
    </telerik:AjaxSetting>
  </AjaxSettings>
</telerik:RadAjaxManager>
<p style="font: normal 11px arial,sans-serif">
  <asp:Label ID="lbl" runat="server" BackColor="Beige" Text="Change arbitrary freight value to recalculate the footer total client-side" />
</p>
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" DataSourceID="SqlDataSource1"
  Skin="Silk" GridLines="None" OnItemDataBound="RadGrid1_ItemDataBound">
  <ExportSettings>
    <Pdf FontType="Subset" PaperSize="Letter" />
    <Excel Format="Html" />
    <Csv ColumnDelimiter="Comma" RowDelimiter="NewLine" />
  </ExportSettings>
  <MasterTableView ShowFooter="true" AutoGenerateColumns="False" CommandItemDisplay="None"
    CurrentResetPageIndexAction="SetPageIndexToFirst" DataKeyNames="OrderID" DataSourceID="SqlDataSource1"
    Dir="LTR" Frame="Border" TableLayout="Auto">
    <RowIndicatorColumn CurrentFilterFunction="NoFilter" FilterListOptions="VaryByDataType"
      Visible="False">
      <HeaderStyle Width="20px" />
    </RowIndicatorColumn>
    <ExpandCollapseColumn CurrentFilterFunction="NoFilter" FilterListOptions="VaryByDataType"
      Resizable="False" Visible="False">
      <HeaderStyle Width="20px" />
    </ExpandCollapseColumn>
    <Columns>
      <telerik:GridBoundColumn CurrentFilterFunction="NoFilter" DataField="OrderID" DataType="System.Int32"
        FilterListOptions="VaryByDataType" ForceExtractValue="None" HeaderText="OrderID"
        ReadOnly="True" SortExpression="OrderID" UniqueName="OrderID">
      </telerik:GridBoundColumn>
      <telerik:GridBoundColumn CurrentFilterFunction="NoFilter" DataField="ShippedDate"
        DataType="System.DateTime" FilterListOptions="VaryByDataType" ForceExtractValue="None"
        HeaderText="ShippedDate" SortExpression="ShippedDate" UniqueName="ShippedDate">
      </telerik:GridBoundColumn>
      <telerik:GridBoundColumn CurrentFilterFunction="NoFilter" DataField="ShipCity" FilterListOptions="VaryByDataType"
        ForceExtractValue="None" HeaderText="ShipCity" SortExpression="ShipCity" UniqueName="ShipCity">
      </telerik:GridBoundColumn>
      <telerik:GridTemplateColumn UniqueName="Template1">
        <ItemTemplate>
          <telerik:RadNumericTextBox ID="TextBox1" runat="server" DbValue='<%# Eval("Freight") %>'>
            <ClientEvents OnBlur="Blur" OnFocus="Focus" />
          </telerik:RadNumericTextBox>
        </ItemTemplate>
        <FooterTemplate>
          <telerik:RadNumericTextBox ID="TextBox2" runat="server">
            <ClientEvents OnLoad="Load" />
          </telerik:RadNumericTextBox>
        </FooterTemplate>
      </telerik:GridTemplateColumn>
    </Columns>
    <EditFormSettings>
      <EditColumn CurrentFilterFunction="NoFilter" FilterListOptions="VaryByDataType">
      </EditColumn>
    </EditFormSettings>
  </MasterTableView>
  <ClientSettings>
  </ClientSettings>
  <PagerStyle Mode="NextPrevAndNumeric" />
</telerik:RadGrid>
<br />
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
   SelectCommand="SELECT [OrderID], [ShippedDate], [ShipCity], [Freight] FROM [Orders]">
</asp:SqlDataSource>
````
````C#
double sum = 0;
protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
{
    if (e.Item is GridDataItem)
    {
        GridDataItem dataItem = (GridDataItem)e.Item;
        sum += double.Parse((dataItem["Template1"].FindControl("TextBox1") as RadNumericTextBox).Value.ToString());
    }
    else if (e.Item is GridFooterItem)
    {
        GridFooterItem footer = (GridFooterItem)e.Item;
        footer["ShipCity"].Controls.Add(new LiteralControl("<span style='color: Black; font-weight: bold;'>Total freight on this page is:</span> "));
        (footer["Template1"].FindControl("TextBox2") as RadNumericTextBox).Value = Double.Parse(sum.ToString());
    }
}
````
````VB
Private sum As Double = 0
Protected Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As GridItemEventArgs)
    If TypeOf e.Item Is GridDataItem Then
        Dim dataItem As GridDataItem = DirectCast(e.Item, GridDataItem)
        sum += Double.Parse((TryCast(dataItem("Template1").FindControl("TextBox1"), RadNumericTextBox)).Value.ToString())
    ElseIf TypeOf e.Item Is GridFooterItem Then
        Dim footer As GridFooterItem = DirectCast(e.Item, GridFooterItem)
        footer("ShipCity").Controls.Add(New LiteralControl("<span style='color: Black; font-weight: bold;'>Total freight on this page is:</span> "))
        Dim numericTextBox As RadNumericTextBox = CType(footer("Template1").FindControl("TextBox2"), RadNumericTextBox)
        numericTextBox.Value = Double.Parse(sum.ToString())
    End If
End Sub
````

