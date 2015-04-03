---
title: Using RadToolTipManager in MS AJAX UpdatePanels
page_title: Using RadToolTipManager in MS AJAX UpdatePanels | UI for ASP.NET AJAX Documentation
description: Using RadToolTipManager in MS AJAX UpdatePanels
slug: tooltip/troubleshooting/using-radtooltipmanager-in-ms-ajax-updatepanels
tags: using,radtooltipmanager,in,ms,ajax,updatepanels
published: True
position: 1
---

# Using RadToolTipManager in MS AJAX UpdatePanels



## 

__RadToolTipManager__ fully integrates into MS AJAX __UpdatePanels__. For example, if the UpdatePanel participates in an AJAX request, the developer has a chance to update the TargetControls collection.

One common scenario is to place a RadGrid and a RadToolTipManager together in an UpdatePanel and to use the RadToolTipManager to tooltipify grid elements. When a column of the grid is sorted, or some other AJAX event happens, the manager is able to correctly re-tooltipify the grid elements.

>note In addition to working properly inside MS AJAX UpdatePanel, RadToolTipManager subscribes to the page AJAX update event. The manager is able to detect that a part of the page was AJAX-updated and re-tooltipifies its elements if necessary.
>


>caution When the RadToolTipManager is used together with MS AJAX UpdatePanels and its own OnAjaxUpdate event is used, the __UpdateMode__ property of the __UpdatePanel__ wrapping the RadToolTipManager should be set to __Conditional.__ 
>When an UpdatePanel triggers an AJAX update, it causes all UpdatePanels to have their content updated. This is not desirable in this case because it degrades performance and slows AJAX requests unnecessarily. Also, in order to perform its own AJAX update, the RadToolTipManager uses an internal UpdatePanel. Thus, in effect, if the UpdateMode = Conditional is not set on the page UpdatePanels, each showing of a tooltip triggers an AJAX event that updates all panels. This can even result in error if the manager is inside such an UpdatePanel as the system tries to dispose it at the very same time as it is displaying a tooltip.
>In summary, using RadToolTipManager with MS AJAX UpdatePanels is easy and the integration is seamless in most cases, but in some scenarios UpdateMode = Conditional must be set to ensure proper behavior.
>


````ASPNET
	    <asp:ScriptManager ID="ScriptManager1" runat="server">
	    </asp:ScriptManager>
	    <asp:UpdatePanel ID="UpdatePanel1" runat="server" UpdateMode="Conditional">
	        <ContentTemplate>
	            <telerik:RadGrid ID="telerikrid1" runat="server" DataSourceID="AccessDataSource1"
	                Width="95%" AutoGenerateColumns="False" PageSize="3" AllowSorting="True" AllowPaging="True"
	                GridLines="None" AllowAutomaticDeletes="True" OnItemDataBound="telerikrid1_ItemDataBound">
	                <PagerStyle Mode="NumericPages"></PagerStyle>
	                <MasterTableView DataSourceID="AccessDataSource1" DataKeyNames="SupplierID" AllowMultiColumnSorting="True"
	                    Width="100%">
	                    <Columns>
	                        <telerik:GridBoundColumn DataField="SupplierID" DataType="System.Int32" HeaderText="SupplierID"
	                            ReadOnly="True" SortExpression="SupplierID" UniqueName="SupplierID">
	                        </telerik:GridBoundColumn>
	                        <telerik:GridBoundColumn DataField="CompanyName" HeaderText="CompanyName" SortExpression="CompanyName"
	                            UniqueName="CompanyName">
	                        </telerik:GridBoundColumn>
	                        <telerik:GridBoundColumn DataField="ContactName" HeaderText="ContactName" SortExpression="ContactName"
	                            UniqueName="ContactName">
	                        </telerik:GridBoundColumn>
	                        <telerik:GridBoundColumn DataField="ContactTitle" HeaderText="ContactTitle" SortExpression="ContactTitle"
	                            UniqueName="ContactTitle">
	                        </telerik:GridBoundColumn>
	                        <telerik:GridBoundColumn DataField="Address" HeaderText="Address" SortExpression="Address"
	                            UniqueName="Address">
	                        </telerik:GridBoundColumn>
	                        <telerik:GridBoundColumn DataField="Phone" HeaderText="Phone" SortExpression="Phone"
	                            UniqueName="Phone">
	                        </telerik:GridBoundColumn>
	                        <telerik:GridBoundColumn DataField="Fax" HeaderText="Fax" SortExpression="Fax" UniqueName="Fax">
	                        </telerik:GridBoundColumn>
	                        <telerik:GridTemplateColumn UniqueName="AddProducts">
	                            <ItemTemplate>
	                                <asp:HyperLink runat="server" NavigateUrl="#" Text="Add Products" ID="hlAddProducts">                            </asp:HyperLink>
	                            </ItemTemplate>
	                        </telerik:GridTemplateColumn>
	                    </Columns>
	                    <SortExpressions>
	                        <telerik:GridSortExpression FieldName="CompanyName"></telerik:GridSortExpression>
	                    </SortExpressions>
	                    <ExpandCollapseColumn>
	                        <HeaderStyle Width="19px" />
	                    </ExpandCollapseColumn>
	                    <RowIndicatorColumn Visible="False">
	                        <HeaderStyle Width="20px" />
	                    </RowIndicatorColumn>
	                </MasterTableView>
	            </telerik:RadGrid>
	            <asp:AccessDataSource ID="AccessDataSource1" runat="server" DataFile="Nwind.mdb"
	                SelectCommand="SELECT * FROM [Suppliers]"></asp:AccessDataSource>
	            <telerik:RadToolTipManager ID="RadToolTipManager1" runat="server" OnAjaxUpdate="RadToolTipManager1_AjaxUpdate"
	                RelativeTo="Element" Width="350px" Height="250px" Position="BottomLeft" Sticky="true"
	                Title="Products">
	            </telerik:RadToolTipManager>
	        </ContentTemplate>
	    </asp:UpdatePanel>
````



>tabbedCode

````C#
	
	using System;
	using System.Web.UI;
	using System.Web.UI.WebControls;
	using Telerik.Web.UI;
	
	public partial class _Default : System.Web.UI.Page
	{
		protected void RadToolTipManager1_AjaxUpdate(object sender, Telerik.Web.UI.ToolTipUpdateEventArgs e)
		{
			Label lblInsideToolTip = new Label();
			lblInsideToolTip.Text = "This is RadToolTip.";
			e.UpdatePanel.ContentTemplateContainer.Controls.Add(lblInsideToolTip);
		}
		protected void telerikrid1_ItemDataBound(object sender, GridItemEventArgs e)
		{
			if (e.Item.ItemType == GridItemType.Item || e.Item.ItemType == GridItemType.AlternatingItem)
			{
				Control hlAddProducts = e.Item.FindControl("hlAddProducts");
				if (hlAddProducts != null)
				{
					if (this.RadToolTipManager1 != null)
					{
						this.RadToolTipManager1.TargetControls.Add(hlAddProducts.ClientID, true);
					}
				}
			}
		}
	}
	
````



````VB.NET
	
	Imports System
	Imports System.Web.UI
	Imports System.Web.UI.WebControls
	Imports Telerik.Web.UI
	
	Partial Public Class _Default
	    Inherits System.Web.UI.Page
	    Protected Sub RadToolTipManager1_AjaxUpdate(ByVal sender As Object, ByVal e As Telerik.Web.UI.ToolTipUpdateEventArgs)
	        Dim lblInsideToolTip As New Label()
	        lblInsideToolTip.Text = "This is RadToolTip."
	        e.UpdatePanel.ContentTemplateContainer.Controls.Add(lblInsideToolTip)
	    End Sub
	    Protected Sub telerikrid1_ItemDataBound(ByVal sender As Object, ByVal e As GridItemEventArgs)
	        If e.Item.ItemType = GridItemType.Item OrElse e.Item.ItemType = GridItemType.AlternatingItem Then
	            Dim hlAddProducts As Control = e.Item.FindControl("hlAddProducts")
	            If hlAddProducts <> Nothing Then
	                If Me.RadToolTipManager1 <> Nothing Then
	                    Me.RadToolTipManager1.TargetControls.Add(hlAddProducts.ClientID, True)
	                End If
	            End If
	        End If
	    End Sub
	End Class
````


>end

# See Also

 * [Load Content On Demand]({%slug tooltip/radtooltipmanager/load-content-on-demand%})

 * [Using the TargetControls Collection]({%slug tooltip/radtooltipmanager/using-the-targetcontrols-collection%})

 * [Overview]({%slug tooltip/radtooltipmanager/overview%})
