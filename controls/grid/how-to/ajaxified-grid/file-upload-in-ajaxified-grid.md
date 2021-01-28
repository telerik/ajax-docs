---
title: File Upload in Ajaxified Grid
page_title: File Upload in Ajaxified Grid - RadGrid
description: Check our Web Forms article about File Upload in Ajaxified Grid.
slug: grid/how-to/ajaxified-grid/what-you-should-have-in-mind/file-upload-in-ajaxified-grid
previous_url: controls/grid/ajaxified-radgrid/what-you-should-have-in-mind/file-upload-in-ajaxified-grid
tags: file,upload,in,ajaxified,grid
published: True
position: 1
---

# File Upload in Ajaxified Grid



##

File upload is not supported using AJAX calls. This is a limitation of the **XmlHttpRequest** component, used in all AJAX frameworks for asynchronous calls to the application. In order to upload a file you should perform a full page postback.

Fortunately, there is a workaround available which can allow you to upload files while still using AJAX to improve the performance of **RadGrid**. If you have button (or other control) which normally does postbacks, you can attach an event handler to the **OnRequestStart** client-side event of the **RadAjaxManager** or **RadAjaxPanel** that disables the AJAX functionality when that particular button is clicked.

The following example illustrates this approach:

````ASP.NET
<telerik:RadCodeBlock runat="server" ID="RadCodeBlock2">
  <script type="text/javascript">
    //on insert and update buttons click temporarily disables ajax to perform upload actions
    function conditionalPostback(sender, e) {
      var theRegexp = new RegExp("\.UpdateButton$|\.PerformInsertButton$", "ig");
      if (e.get_eventTarget().match(theRegexp)) {
        e.set_enableAjax(false);
      }
    }
  </script>
</telerik:RadCodeBlock>
<telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server" ClientEvents-OnRequestStart="conditionalPostback">
  <telerik:RadProgressManager ID="RadProgressManager1" runat="server" />
  <telerik:RadProgressArea RenderMode="Lightweight" ID="RadProgressArea1" runat="server" />
  <telerik:RadGrid RenderMode="Lightweight" runat="server" ID="RadGrid1" AllowPaging="True" AllowSorting="True"
    AutoGenerateColumns="False" Width="97%" DataSourceID="SqlDataSource1" AllowAutomaticInserts="true"
    AllowAutomaticUpdates="true" AllowAutomaticDeletes="true" ShowStatusBar="True"
    GridLines="None" OnItemDataBound="RadGrid1_ItemDataBound" OnItemCreated="RadGrid1_ItemCreated"
    PageSize="3">
    <MasterTableView Width="100%" CommandItemDisplay="Top" DataKeyNames="ID" DataSourceID="SqlDataSource1">
      <Columns>
        <telerik:GridEditCommandColumn ButtonType="ImageButton">
        </telerik:GridEditCommandColumn>
        <telerik:GridBinaryImageColumn DataField="Data" HeaderText="Image" UniqueName="Upload">
        </telerik:GridBinaryImageColumn>
      </Columns>
      <EditFormSettings>
        <EditColumn ButtonType="ImageButton" />
      </EditFormSettings>
    </MasterTableView>
    <PagerStyle Mode="NumericPages" AlwaysVisible="true" />
  </telerik:RadGrid>
</telerik:RadAjaxPanel>
````



An online demo demonstrating the approach in reality can be viewed [ here](https://demos.telerik.com/aspnet-ajax/Controls/Examples/Integration/RadUploadInAjaxifiedGrid/DefaultCS.aspx?product=grid)
