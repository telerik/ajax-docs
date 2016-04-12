---
title: Various Built-in Column Editors
page_title: Various Built-in Column Editors | RadGrid for ASP.NET AJAX Documentation
description: Various Built-in Column Editors
slug: grid/how-to/data-editing/various-built-in-column-editors
previous_url: grid/how-to/various-built-in-column-editors
tags: various,built-in,column,editors
published: True
position: 5
---

# Various Built-in Column Editors



##

[This example](http://demos.telerik.com/aspnet-ajax/grid/examples/generalfeatures/columntypes/defaultcs.aspx) and [this one](http://demos.telerik.com/aspnet-ajax/controls/examples/integration/raduploadinajaxifiedgrid/defaultcs.aspx?product=grid) demonstrate how to configure various built-in column editors for updating/inserting records in RadGrid.

Telerik RadGrid supports all widely used column types as well built-in columns with other controls as editors (RadDatePickers, RadDateInput, RadNumericTextBox, RadMaskedTextBox, RadComboBox, RadEditor and RadUpload). Thus you can define that the new data entries input by the end user will have an automatic filter criteria set and at the same time expose richer user experience. In addition, two-way data-binding is supported out-of-the-box and you do not need to write a single line of code to update/insert/delete records in the grid having any column editor type (see the source code under the tabs below).

The supported column types with other controls as editors are listed below:

* GridDateTimeColumn - with option to choose RadDatePicker, RadDateTimePicker, RadTimePicker or simply RadDateInput as editor. To choose the editor type use the **PickerType** property of the column

* GridDropDownColumn - with option to choose standard MS DropDownList or RadComboBox as editor. To choose the editor type use the **DropDownControlType** property of the column

* GridNumericColumn - with RadNumericTextBox as editor

* GridMaskedColumn - with RadMaskedTextBox as editor

* GridHTMLEditorColumn - with RadEditor control for editing

* GridBinaryImageColumn - with RadUpload control for image upload

Here are the relevant code snippets from the online demo:



````ASP.NET
<asp:ScriptManager ID="ScriptManager" runat="server" />
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
  <AjaxSettings>
    <telerik:AjaxSetting AjaxControlID="RadGrid1">
      <UpdatedControls>
        <telerik:AjaxUpdatedControl ControlID="RadGrid1" LoadingPanelID="RadAjaxLoadingPanel1" />
      </UpdatedControls>
    </telerik:AjaxSetting>
  </AjaxSettings>
</telerik:RadAjaxManager>
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" Height="75px"
  Width="75px" Transparency="20">
  <img alt="Loading..." src='<%= RadAjaxLoadingPanel.GetWebResourceUrl(Page, "Telerik.Web.UI.Skins.Default.Ajax.loading.gif") %>'
    style="border: 0;" />
</telerik:RadAjaxLoadingPanel>
<telerik:GridNumericColumnEditor ID="GridNumericColumnEditor1" runat="server">
  <NumericTextBox MaxLength="4" EmptyMessage="Ext.">
    <NumberFormat GroupSeparator="" />
  </NumericTextBox>
</telerik:GridNumericColumnEditor>
<telerik:RadGrid RenderMode="Lightweight" DataSourceID="SqlDataSource1" Skin="Vista" AllowAutomaticDeletes="true"
  AllowAutomaticInserts="true" AllowAutomaticUpdates="true" ID="RadGrid1" runat="server">
  <MasterTableView DataKeyNames="EmployeeID" Width="100%" CommandItemDisplay="Top"
    AutoGenerateColumns="false">
    <Columns>
      <telerik:GridEditCommandColumn UniqueName="EditCommandColumn">
        <ItemStyle Width="50px" />
      </telerik:GridEditCommandColumn>
      <telerik:GridHTMLEditorColumn UniqueName="Notes" SortExpression="Notes" HeaderText="Notes"
        DataField="Notes">
      </telerik:GridHTMLEditorColumn>
      <telerik:GridDropDownColumn DataSourceID="XmlDataSource1" ListTextField="Text" ListValueField="Value"
        UniqueName="TitleOfCourtesy" SortExpression="TitleOfCourtesy" HeaderText="Title"
        DropDownControlType="RadComboBox" DataField="TitleOfCourtesy">
      </telerik:GridDropDownColumn>
      <telerik:GridDropDownColumn DataSourceID="XmlDataSource2" ListTextField="Text" ListValueField="Value"
        UniqueName="City" SortExpression="City" HeaderText="City" DataField="City" DropDownControlType="RadComboBox">
      </telerik:GridDropDownColumn>
      <telerik:GridMaskedColumn Mask="(###) ###-####" UniqueName="HomePhone" SortExpression="HomePhone"
        HeaderText="HomePhone" DataField="HomePhone">
        <ItemStyle Width="100px" />
      </telerik:GridMaskedColumn>
      <telerik:GridNumericColumn UniqueName="Extension" SortExpression="Extension" HeaderText="Extension"
        DataField="Extension" ColumnEditorID="GridNumericColumnEditor1">
      </telerik:GridNumericColumn>
      <telerik:GridDateTimeColumn UniqueName="HireDate" PickerType="DateTimePicker" HeaderText="HireDate"
        DataField="HireDate">
        <ItemStyle Width="120px" />
      </telerik:GridDateTimeColumn>
    </Columns>
  </MasterTableView>
</telerik:RadGrid>
<!-- content end -->
<asp:SqlDataSource ID="SqlDataSource1" UpdateCommand="update Employees set Notes=@Notes, TitleOfCourtesy=@TitleOfCourtesy, City=@City, HomePhone=@HomePhone, Extension=@Extension, HireDate=@HireDate where EmployeeID=@EmployeeID"
  SelectCommand="SELECT top 3 * FROM Employees" InsertCommand="insert into Employees (Notes, TitleOfCourtesy, City, HomePhone, Extension, HireDate) values(@Notes, @TitleOfCourtesy, @City, @HomePhone, @Extension, @HireDate)"
  runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>">        
</asp:SqlDataSource>
<asp:XmlDataSource ID="XmlDataSource1" runat="server">
  <Data>                
    <Items>                      
      <Item Value="Ms" Text="Ms."/>
      <Item Value="Dr" Text="Dr."/>
      <Item Value="Mrs" Text="Mrs."/>                      
      <Item Value="Mr" Text="Mr."/>                
    </Items>            
  </Data>
</asp:XmlDataSource>
<asp:XmlDataSource ID="XmlDataSource2" runat="server">
  <Data>                
    <Items>                      
      <Item Value="Seattle" Text="Seattle"/>                      
      <Item Value="Tacoma" Text="Tacoma"/>                     
      <Item Value="Redmond" Text="Redmond"/>                      
      <Item Value="London" Text="London"/>                      
      <Item Value="Sofia" Text="Sofia"/>                
    </Items>            
  </Data>
</asp:XmlDataSource>
````
````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!Page.IsPostBack)
    {
        RadGrid1.EditIndexes.Add(0);
    }
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
    If Not Page.IsPostBack Then
        RadGrid1.EditIndexes.Add(0)
    End If
End Sub
````


Detailed descriptions regarding the demonstrated column types (along with comparison tables) and column usage you can find in the **Grid columns** chapter from product's documentation:

[Column types]({%slug grid/columns/column-types%})

[Using columns]({%slug grid/columns/using-columns%})

A demo project which mirrors the presented functionality can be found [here](http://www.telerik.com/support/kb/article/b454K-kkb-b454T-a-b454c-a.aspx).

Additional resources about how to integrate custom editors in Telerik RadGrid you can find below:

[Using RadComboBox as editor in template column of RadGrid](http://www.telerik.com/support/kb/article/b454K-gmk-b454T-cbb.aspx)

[Using RadDatePicker/RadDateTimePicker as editors in template columns of RadGrid](http://www.telerik.com/support/kb/article/b454K-gmg-b454T-cbb.aspx)

[Using RadEditor as editor in template column of RadGrid](http://www.telerik.com/support/kb/article/b454K-tae-b454T-cbb.aspx)

[ Using Telerik RadComboBox with AutoComplete as a custom editor in Telerik RadGrid ](http://www.telerik.com/support/kb/article/b454K-gca-b454T-cbb.aspx)

[ Building a RadDatePicker custom column editor for Telerik RadGrid ](http://www.telerik.com/community/code-library/submission/b311D-dgkaa.aspx)

## See Also

 * [Online example](http://demos1x.telerik.com/aspnet/Controls/Examples/Integration/GridEditorAndCombo/DefaultCS.aspx)
