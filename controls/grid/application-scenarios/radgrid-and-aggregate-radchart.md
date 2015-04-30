---
title: RadGrid and Aggregate RadChart
page_title: RadGrid and Aggregate RadChart | RadGrid for ASP.NET AJAX Documentation
description: RadGrid and Aggregate RadChart
slug: grid/application-scenarios/radgrid-and-aggregate-radchart
tags: radgrid,and,aggregate,radchart
published: True
position: 10
---

# RadGrid and Aggregate RadChart



## 

[This demo](http://demos.telerik.com/aspnet-ajax/Controls/Examples/Integration/GridAndChart/GridAndAggregateChart/DefaultCS.aspx?product=grid) represents how RadGrid and RadChart can display the same data in their presentation format. To see the functionality in action select customer from the RadComboBox instance and both the grid and the chart controls will show his/her products information in par with the orders he/she made. The name of the series items are created on-the-fly wiring the **ItemDataBound** event of the RadChart.

In addition, the three controls on the page are ajaxified by RadAjaxManager to refresh their state with asynchronous request instead of standard postback.

![Grid and Aggregate Chart](images/grdGridWithAggregateChart.PNG)

Below are the relevant code excerpts:



````ASP.NET
	                  <asp:ScriptManager ID="ScriptManager1" runat="server" />
	                  <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	                      <AjaxSettings>
	                          <telerik:AjaxSetting AjaxControlID="RadComboBox1">
	                              <UpdatedControls>
	                                  <telerik:AjaxUpdatedControl ControlID="RadComboBox1" />
	                                  <telerik:AjaxUpdatedControl ControlID="RadGrid1" LoadingPanelID="RadAjaxLoadingPanel1" />
	                                  <telerik:AjaxUpdatedControl ControlID="RadChart1" LoadingPanelID="RadAjaxLoadingPanel1" />
	                              </UpdatedControls>
	                          </telerik:AjaxSetting>
	                      </AjaxSettings>
	                  </telerik:RadAjaxManager>
	                 <telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server"> 
	                 </telerik:RadAjaxLoadingPanel>
	                    
	                    Select Customer:
	                    <telerik:RadComboBox ID="RadComboBox1" runat="server" DataSourceID="SqlDataSource1"
	                        DataTextField="ContactName" DataValueField="CustomerID" AutoPostBack="true">
	                    </telerik:RadComboBox>
	                 <strong>Products and amount in USD for the selected customer</strong><br />
	                 <div style="float: left">
	                    <telerik:RadGrid ID="RadGrid1" runat="server" DataSourceID="SqlDataSource2" AutoGenerateColumns="False"
	                        Width="240px" Style="float: left; margin-right: 7px;" GridLines="None">
	                        <MasterTableView DataSourceID="SqlDataSource2">
	                            <Columns>
	                                <telerik:GridBoundColumn DataField="productId" UniqueName="productId" HeaderText="product Id"
	                                    EmptyDataText="&amp;nbsp;" />
	                                <telerik:GridBoundColumn DataField="pName" UniqueName="pName" HeaderText="Product Name"
	                                    EmptyDataText="&amp;nbsp;" />
	                                <telerik:GridBoundColumn DataField="spentMoney" UniqueName="spentMoney" HeaderText="Amount &lt;br/&gt; in USD"
	                                    EmptyDataText="&amp;nbsp;" />
	                            </Columns>
	                            <RowIndicatorColumn>
	                                <HeaderStyle Width="20px" />
	                            </RowIndicatorColumn>
	                            <ExpandCollapseColumn>
	                                <HeaderStyle Width="20px" />
	                            </ExpandCollapseColumn>
	                        </MasterTableView>
	                        <FilterMenu EnableTheming="True">
	                            <CollapseAnimation Duration="200" Type="OutQuint" />
	                        </FilterMenu>
	                    </telerik:RadGrid>
	                </div>
	                <div style="float: right">
	                    <telerik:RadChart ID="RadChart1" DataSourceID="SqlDataSource2" runat="server"
	                        Width="465px" Height="260px" DefaultType="Pie" OnItemDataBound="RadChart1_ItemDataBound" 
	                        AutoLayout="true" AutoTextWrap="true" CreateImageMap="false">
	                        <ChartTitle>
	                            <TextBlock Text="Amount spent">
	                            </TextBlock>
	                          </ChartTitle>
	                        <Series>
	                            <telerik:ChartSeries DataYColumn="spentMoney" Name="spentMoney" Type="Pie">
	                                <Appearance LegendDisplayMode="ItemLabels">
	                                </Appearance>
	                            </telerik:ChartSeries>
	                        </Series>
	                        </telerik:RadChart>
	                </div>
	                <div style="clear: both; height: 1px;">
	                    <!-- -->
	                </div>
	                <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	                    SelectCommand="SELECT top 20 [CustomerID], [ContactName] FROM [Customers]"></asp:SqlDataSource>
	                <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	                    SelectCommand="SELECT TOP 7 p.productId, p.ProductName as pName, sum(p.UnitPrice) as spentMoney, c.CustomerID as cID, c.ContactName as cName&#13;&#10;FROM products as p, orders as o, [order details] as od, customers as c&#13;&#10;WHERE p.productID = od.productID &#13;&#10;and od.OrderID = o.OrderID&#13;&#10;and c.CustomerID = o.CustomerID&#13;&#10;and (c.CustomerID = @CustomerID)&#13;&#10;GROUP BY c.CustomerID, c.ContactName, p.productID, p.ProductName">
	                    <SelectParameters>
	                       <asp:ControlParameter ControlID="RadComboBox1" DefaultValue="ALFKI" Name="CustomerID"
	                       PropertyName="SelectedValue" Type="String" />
	                    </SelectParameters>
	                </asp:SqlDataSource>
````
````C#
	
	    protected void RadChart1_ItemDataBound(object sender, Telerik.Charting.ChartItemDataBoundEventArgs e)
	    {
	        e.SeriesItem.Name = (string)DataBinder.Eval(e.DataItem, "pName");
	    }
	
````
````VB
	
	    Protected Sub RadChart1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Charting.ChartItemDataBoundEventArgs)
	        e.SeriesItem.Name = DirectCast(DataBinder.Eval(e.DataItem, "pName"), String)
	    End Sub
````

