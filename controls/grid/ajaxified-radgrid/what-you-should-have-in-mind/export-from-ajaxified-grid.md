---
title: Export from Ajaxified Grid
page_title: Export from Ajaxified Grid | RadGrid for ASP.NET AJAX Documentation
description: Export from Ajaxified Grid
slug: grid/ajaxified-radgrid/what-you-should-have-in-mind/export-from-ajaxified-grid
tags: export,from,ajaxified,grid
published: True
position: 0
---

# Export from Ajaxified Grid



##

Generally speaking, the exporting feature of the control work with regular postbacks only. The reason is the grid prepares additional information when performing export operation (available on postback). When the action is performed through asynchronous requests, this information can not be passed through the *XMLHttpRequest* object - that is why the communication between the browser and the server fails.
Since Q1 2016 the default built-in export buttons are already performing regular postback, therefore it is not needed to manually exclude them from Ajax, even the RadGrid control is ajaxified, to perform export with them.
Also since this release (Q1 2016) a new *"PostBackControls"* property is exposed for the RadAjaxManager/RadAjaxPanel control. It accepts collection of control's ID's to be added and this will automatically make those controls postback triggers and they will no longer perform Ajax requests.
````ASP.NET
<telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server" PostBackControls="ImageButton1,ImageButton2,ImageButton3" CssClass="demo-container no-bg">
     <asp:ImageButton ID="ImageButton1" ImageUrl="images/file-extension-doc-icon_bigger.png"
         OnClick="Button1_Click" runat="server" CssClass="ImageButtons" />
     <asp:ImageButton ID="ImageButton3" ImageUrl="images/file-extension-docx-icon_bigger.png"
         OnClick="ImageButton3_Click" runat="server" CssClass="ImageButtons" />
     <asp:ImageButton ID="ImageButton2" ImageUrl="images/file-extension-csv-icon_bigger.png"
         OnClick="Button2_Click" runat="server" CssClass="ImageButtons" />
     <br />
     <br />
     <telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" DataSourceID="SqlDataSource1" AllowSorting="True" Skin="Silk"
         AutoGenerateColumns="false" AllowPaging="True" PageSize="10" runat="server" OnItemCommand="RadGrid1_ItemCommand">
         <ExportSettings HideStructureColumns="true">
         </ExportSettings>
         <MasterTableView Width="100%" CommandItemDisplay="Top">
             <CommandItemSettings ShowExportToWordButton="true" ShowExportToCsvButton="true" ShowAddNewRecordButton="false" ShowRefreshButton="false" />
             <PagerStyle Mode="NextPrevNumericAndAdvanced"></PagerStyle>
             <Columns>
                 <telerik:GridBoundColumn DataField="CustomerID" HeaderText="CustomerID">
                     <HeaderStyle BackColor="#8EDDFF" Font-Bold="true" />
                     <ItemStyle BackColor="#B2F4FF" Font-Italic="true" />
                 </telerik:GridBoundColumn>
                 <telerik:GridBoundColumn DataField="CompanyName" HeaderText="Company Name">
             </Columns>        
         </MasterTableView>
     </telerik:RadGrid>
 </telerik:RadAjaxPanel>
````
````C#
protected void Button1_Click(object sender, System.EventArgs e)
        {
            RadGrid1.ExportSettings.Word.Format = Web.UI.GridWordExportFormat.Html;
            ConfigureExport();
            RadGrid1.MasterTableView.ExportToWord();
        }

        protected void Button2_Click(object sender, System.EventArgs e)
        {
            ConfigureExport();
            RadGrid1.MasterTableView.ExportToCSV();
        }

        protected void RadGrid1_ItemCommand(object sender, Telerik.Web.UI.GridCommandEventArgs e)
        {
            if (e.CommandName == Telerik.Web.UI.RadGrid.ExportToWordCommandName ||
                e.CommandName == Telerik.Web.UI.RadGrid.ExportToCsvCommandName)
            {
                ConfigureExport();
            }
        }

        public void ConfigureExport()
        {
            RadGrid1.ExportSettings.ExportOnlyData = true;
            RadGrid1.ExportSettings.IgnorePaging =true;
            RadGrid1.ExportSettings.OpenInNewWindow = true;
            RadGrid1.ExportSettings.UseItemStyles = true;
        }
        protected void ImageButton3_Click(object sender, System.Web.UI.ImageClickEventArgs e)
        {
            RadGrid1.ExportSettings.Word.Format = Web.UI.GridWordExportFormat.Docx;
            ConfigureExport();
            RadGrid1.MasterTableView.ExportToWord();
        }      
````

Another approach to bypass this limitation is to wire the *OnRequestStart* event of the ajax panel or ajax manager, determine whether the target control is ajaxified and explicitly disable its ajax mode to export with regular postback. The demo from [this code library project](http://www.telerik.com/support/code-library/export-radgrid-content-to-excel-word-csv-pdf-with-ajax-enabled) presents how to export the grid content to *Excel*/*Word* when:

* *RadGrid* resides inside *RadAjaxPanel*

* *RadGrid* is ajaxified through *RadAjaxManager*

````JavaScript
function onRequestStart(sender, args) {
  if (args.get_eventTarget().indexOf("btnExport") >= 0)
    args.set_enableAjax(false);
}
````


In case you export from a *Button* that is nested in **MS AJAX UpdatePanel**, you should set this control as *PostBackTrigger*:

````ASP.NET
<triggers>         
    <asp:PostBackTrigger ControlID="btnExport" />
</triggers>
````



It is also possible to register the control as a trigger for *postback* in code-behind:

````C#
ScriptManager.GetCurrent(Page).RegisterPostBackControl(btnExport);          
````



````VB
ScriptManager.GetCurrent(Page).RegisterPostBackControl(btnExport)          
````



Refer to the following link for more information:[Exclude controls from ajaxifying](http://www.telerik.com/help/aspnet-ajax/ajxexclude.html)
