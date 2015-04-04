---
title: Virtual Scrolling
page_title: Virtual Scrolling | UI for ASP.NET AJAX Documentation
description: Virtual Scrolling
slug: grid/functionality/scrolling/virtual-scrolling
tags: virtual,scrolling
published: True
position: 4
---

# Virtual Scrolling



When working with large data sets, it is convenient to use the __RadGrid__ paging mechanism. However, for really huge data sets, crawling through pages using only the grid pager may become a hard and boring task for users. For really huge data sets, __RadGrid__ allows virtual scrolling.

## Virtual scroll bar

When scrolling with the virtual scroll bar, __RadGrid__ can use either standard postbacks or AJAX requests (when AJAX callbacks are enabled using __RadAjaxManager__, __RadAjaxPanel__, or MS __UpdatePanel__). By using AJAX callbacks, the overall behavior is smooth, with no flicker.

![Virtual Paging/Scrolling](images/grd_VirtualPaging_markedup.png)

To enable virtual scrolling for browsing large record sets,

1. Set the __ClientSettings.Scrolling.AllowScroll__ and __ClientSettings.Scrolling.EnableVirtualScrollPaging__ properties to __True__.

1. Set the __AllowPaging__ and __AllowCustomPaging__ properties to __True__. Set the __VirtualItemCount__ property to the total number of records in the data source.

1. Bind the grid using the __NeedDataSource__ event, and in the event handler, use the __CurrentPageIndex__ property to determine which subset of the records to fetch.



````ASPNET
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
	    Width="75px" Transparency="25">
	    <img alt="Loading..." src='<%= RadAjaxLoadingPanel.GetWebResourceUrl(Page, "Telerik.Web.UI.Skins.Default.Ajax.loading.gif") %>'
	      style="border: 0;" /></telerik:RadAjaxLoadingPanel>
	  <telerik:RadGrid ID="RadGrid1" runat="server" Width="97%" Skin="Silk" AllowSorting="True"
	    AllowPaging="True" PageSize="14" AllowCustomPaging="true" VirtualItemCount="100000"
	    OnNeedDataSource="RadGrid1_NeedDataSource">
	    <PagerStyle Mode="NumericPages" />
	    <MasterTableView TableLayout="Fixed" />
	    <ClientSettings>
	      <Scrolling AllowScroll="True" EnableVirtualScrollPaging="True" UseStaticHeaders="True"
	        SaveScrollPosition="True" />
	    </ClientSettings>
	  </telerik:RadGrid>
````
````C#
	
	    protected void RadGrid1_NeedDataSource(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
	    {
	        RadGrid1.DataSource = GetDataTable("SELECT [OrderID], [ProductID], [Quantity], [Discount] FROM [LargeOrderDetails] WHERE ID BETWEEN " + 
	            RadGrid1.CurrentPageIndex * RadGrid1.PageSize + " AND " + ((RadGrid1.CurrentPageIndex + 1) * RadGrid1.PageSize));
	    }
	
````
````VB.NET
	    Protected Sub RadGrid1_NeedDataSource(ByVal source As Object, ByVal e As GridNeedDataSourceEventArgs)
	        RadGrid1.DataSource = GetDataTable("SELECT [OrderID], [ProductID], [Quantity], [Discount] FROM [LargeOrderDetails] WHERE ID BETWEEN " &
	                                           RadGrid1.CurrentPageIndex * RadGrid1.PageSize & " AND " & ((RadGrid1.CurrentPageIndex + 1) * RadGrid1.PageSize))
	    End Sub
````


>note NOTE: RadGrid's virtual scrolling / paging feature does not support rows of variable height. All rows in all pages should have the same height for the scroll position to be properly calculated.
>


## Fetching additional records when the scroll bar reaches its endpoint

Another approach is to trigger an AJAX request to increase the page size when the user drags the scroll bar to the bottom. This is attained with a few lines of javascript and server-side code. Additional data is supplied as long as the rendered rows are less than the entire source record count:![Virtual scrolling](images/GoogleStyleScroll.PNG)

The following steps describe how to achieve this effect:

1. Add a __RadGrid__ control to your Web page.

1. Bind it to a data source.

1. Enable __Paging__ in the grid, but set the __PagerStyle.Visible__ property to __False__ so that the pager does not show.

1. Enable Scrolling in the grid. Set the __ClientSettings.Scrolling.ScrollHeight__ sufficiently small so that the scroll bar appears when the grid first loads.

1. Add a __RadAjaxManager__ and __RadAjaxLoadingPanel__ to the Web page.

1. Configure the __RadAjaxManager__ so that it lets __RadGrid__ initiate AJAX requests. Set __RadGrid__ as the control to update in response to those requests, and set the __LoadingPanelID__ property for those updates to the ID of the __RadAjaxLoadingPanel__.

1. Add an __AjaxRequest__ event handler to the __RadAjaxManager__. In the event handler, increase the __PageSize__ property of the __RadGrid__ and the call the grid's __Rebind__ method. This increases the number of pages that the grid can display.

1. In the ASPX file, Add a __RadCodeBlock__ with a javascript function (called "HandleScrolling" in the example below) to triggers an AJAX request when the grid's scroll bar is at the bottom. This AJAX request will cause the __AjaxRequest__ event handler that you just added to execute and fetch more records.

1. Assign the javascript function as the event handler for the __OnScroll__ client event of the grid.

````C#
	  <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	    <script type="text/javascript">
	      function HandleScrolling(e) {
	        var grid = $find("<%=RadGrid1.ClientID %>");
	        var scrollArea = document.getElementById("<%= RadGrid1.ClientID %>" + "_GridData");
	        if (IsScrolledToBottom(scrollArea)) {
	          var currentlyDisplayedRecords = grid.get_masterTableView().get_pageSize() * (grid.get_masterTableView().get_currentPageIndex() + 1);
	          //if the visible items are less than the entire record count  
	          //trigger an ajax request to increase them     
	          if (currentlyDisplayedRecords < 100) {
	            $find("<%= RadAjaxManager1.ClientID %>").ajaxRequest("LoadMoreRecords");
	          }
	        }
	      }
	      //calculate when the scroll bar is at the bottom   
	      function IsScrolledToBottom(scrollArea) {
	        var currentPosition = scrollArea.scrollTop + scrollArea.clientHeight; return currentPosition == scrollArea.scrollHeight;
	      }  
	    </script>
	  </telerik:RadCodeBlock>
	  <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" OnAjaxRequest="RadAjaxManager1_AjaxRequest">
	    <AjaxSettings>
	      <telerik:AjaxSetting AjaxControlID="RadGrid1">
	        <UpdatedControls>
	          <telerik:AjaxUpdatedControl ControlID="RadGrid1" LoadingPanelID="RadAjaxLoadingPanel1" />
	        </UpdatedControls>
	      </telerik:AjaxSetting>
	    </AjaxSettings>
	  </telerik:RadAjaxManager>
	  <telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" Height="75px"
	    Width="75px" Transparency="25">
	    <img alt="Loading..." src='<%= RadAjaxLoadingPanel.GetWebResourceUrl(Page, "Telerik.Web.UI.Skins.Default.Ajax.loading.gif") %>'
	      style="border: 0;" />
	  </telerik:RadAjaxLoadingPanel>
	  <telerik:RadGrid ID="RadGrid1" runat="server" Skin="Silk" DataSourceID="SqlDataSource1"
	    AllowSorting="True" AllowPaging="True" PageSize="15" Width="97%" GridLines="None">
	    <PagerStyle Visible="False" />
	    <MasterTableView Width="99%" TableLayout="Fixed" CommandItemDisplay="None" CurrentResetPageIndexAction="SetPageIndexToFirst"
	      DataSourceID="AccessDataSource1" PageSize="15">
	    </MasterTableView>
	    <ClientSettings>
	      <Scrolling AllowScroll="True" UseStaticHeaders="True" ScrollHeight="100px" />
	      <ClientEvents OnScroll="HandleScrolling" />
	    </ClientSettings>
	  </telerik:RadGrid>
	  <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	            SelectCommand="SELECT * FROM [Customers]"></asp:SqlDataSource>
````





````C#
	
	    protected void RadAjaxManager1_AjaxRequest(object sender, AjaxRequestEventArgs e)
	    {
	        RadGrid1.PageSize = 10 + RadGrid1.PageSize;
	        RadGrid1.Rebind();
	    }
	
````
````VB.NET
	    Protected Sub RadAjaxManager1_AjaxRequest(ByVal sender As Object, ByVal e As Web.UI.AjaxRequestEventArgs)
	        RadGrid1.PageSize = 10 + RadGrid1.PageSize
	        RadGrid1.Rebind()
	    End Sub
````


For a live example demonstrating the techniques described above, see [Virtual scrolling and paging](http://demos.telerik.com/aspnet-ajax/Grid/Examples/Client/VirtualScrollPaging/DefaultCS.aspx).

# See Also

 * [Virtual Scrolling and Paging]({%slug grid/ajaxified-radgrid/virtual-scrolling-and-paging%})
