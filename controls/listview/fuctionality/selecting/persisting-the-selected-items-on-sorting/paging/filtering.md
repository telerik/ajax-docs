---
title: Persisting the Selected Items on Sorting/Paging/Filtering
page_title: Persisting the Selected Items on Sorting/Paging/Filtering | RadListView for ASP.NET AJAX Documentation
description: Persisting the Selected Items on Sorting/Paging/Filtering
slug: listview/fuctionality/selecting/persisting-the-selected-items-on-sorting/paging/filtering
tags: persisting,the,selected,items,on,sorting/paging/filtering
published: True
position: 1
---

# Persisting the Selected Items on Sorting/Paging/Filtering



## 

By default RadListView clears its selected items upon sorting, paging or filtering. To persist the selection across these events, follow the below steps:

1. Handle the **ItemCommand** event of the listview.

1. When "Select" command occurs, store the key values for the selected item in a **Session** variable.

1. When "Deselect" command occurs, remove the key values for the deselected item from the **Session** variable.

1. Handle the **PreRender** event of the listview.

1. In the PreRender event traverse the listview items and compare their key values to the values saved in the **Session** variable. Whenever you find a match, mark the item as selected.

1. Rebind the listview at the end of the PreRender event handler.



````C#
	<telerik:RadFilter ID="RadFilter1" runat="server" FilterContainerID="RadListView1">
	</telerik:RadFilter>
	<telerik:RadListView ID="RadListView1" runat="server" DataKeyNames="CustomerID" OnNeedDataSource="RadListView1_NeedDataSource"
	    AllowPaging="True" AllowMultiItemSelection="True" OnItemCommand="RadListView1_ItemCommand"
	    OnPreRender="RadListView1_PreRender">
	    <AlternatingItemTemplate>
	        <tr class="rlvA">
	            <td>
	                <asp:Button ID="SelectButton" runat="server" CommandName="Select" CssClass="rlvBSel"
	                    Text=" " />
	            </td>
	            <td>
	                <asp:Label ID="CustomerIDLabel" runat="server" Text='<%# Eval("CustomerID") %>' />
	            </td>
	            <td>
	                <asp:Label ID="CompanyNameLabel" runat="server" Text='<%# Eval("CompanyName") %>' />
	            </td>
	            <td>
	                <asp:Label ID="ContactNameLabel" runat="server" Text='<%# Eval("ContactName") %>' />
	            </td>
	            <td>
	                <asp:Label ID="ContactTitleLabel" runat="server" Text='<%# Eval("ContactTitle") %>' />
	            </td>
	            <td>
	                <asp:Label ID="CountryLabel" runat="server" Text='<%# Eval("Country") %>' />
	            </td>
	        </tr>
	    </AlternatingItemTemplate>
	    <ItemTemplate>
	        <tr class="rlvI">
	            <td>
	                <asp:Button ID="SelectButton" runat="server" CommandName="Select" CssClass="rlvBSel"
	                    Text=" " />
	            </td>
	            <td>
	                <asp:Label ID="CustomerIDLabel" runat="server" Text='<%# Eval("CustomerID") %>' />
	            </td>
	            <td>
	                <asp:Label ID="CompanyNameLabel" runat="server" Text='<%# Eval("CompanyName") %>' />
	            </td>
	            <td>
	                <asp:Label ID="ContactNameLabel" runat="server" Text='<%# Eval("ContactName") %>' />
	            </td>
	            <td>
	                <asp:Label ID="ContactTitleLabel" runat="server" Text='<%# Eval("ContactTitle") %>' />
	            </td>
	            <td>
	                <asp:Label ID="CountryLabel" runat="server" Text='<%# Eval("Country") %>' />
	            </td>
	        </tr>
	    </ItemTemplate>
	    <EmptyDataTemplate>
	        <div class="RadListView RadListView_Default">
	            <div class="rlvEmpty">
	                There are no items to be displayed.</div>
	        </div>
	    </EmptyDataTemplate>
	    <LayoutTemplate>
	        <div class="RadListView RadListView_Default">
	            <table cellspacing="0" style="width: 100%;">
	                <thead>
	                    <tr class="rlvHeader">
	                        <th>
	                            &nbsp;
	                        </th>
	                        <th>
	                            <asp:LinkButton ID="LinkButton1" runat="server" CommandName="Sort" CommandArgument="CustomerID">CustomerID</asp:LinkButton>
	                        </th>
	                        <th>
	                            <asp:LinkButton ID="LinkButton2" runat="server" CommandName="Sort" CommandArgument="CompanyName">CompanyName</asp:LinkButton>
	                        </th>
	                        <th>
	                            <asp:LinkButton ID="LinkButton3" runat="server" CommandName="Sort" CommandArgument="ContactName">ContactName</asp:LinkButton>
	                        </th>
	                        <th>
	                            <asp:LinkButton ID="LinkButton4" runat="server" CommandName="Sort" CommandArgument="ContactTitle">ContactTitle</asp:LinkButton>
	                        </th>
	                        <th>
	                            <asp:LinkButton ID="LinkButton5" runat="server" CommandName="Sort" CommandArgument="Country">Country</asp:LinkButton>
	                        </th>
	                    </tr>
	                </thead>
	                <tfoot>
	                    <tr>
	                        <td colspan="6">
	                            <telerik:RadDataPager ID="RadDataPager1" runat="server">
	                                <Fields>
	                                    <telerik:RadDataPagerButtonField FieldType="FirstPrev" />
	                                    <telerik:RadDataPagerButtonField FieldType="Numeric" />
	                                    <telerik:RadDataPagerButtonField FieldType="NextLast" />
	                                    <telerik:RadDataPagerPageSizeField />
	                                </Fields>
	                            </telerik:RadDataPager>
	                        </td>
	                    </tr>
	                </tfoot>
	                <tbody>
	                    <tr id="itemPlaceholder" runat="server">
	                    </tr>
	                </tbody>
	            </table>
	        </div>
	    </LayoutTemplate>
	    <SelectedItemTemplate>
	        <tr class="rlvISel">
	            <td>
	                <asp:Button ID="DeselectButton" runat="server" CommandName="Deselect" CssClass="rlvBSel"
	                    Text=" " />
	            </td>
	            <td>
	                <asp:Label ID="CustomerIDLabel" runat="server" Text='<%# Eval("CustomerID") %>' />
	            </td>
	            <td>
	                <asp:Label ID="CompanyNameLabel" runat="server" Text='<%# Eval("CompanyName") %>' />
	            </td>
	            <td>
	                <asp:Label ID="ContactNameLabel" runat="server" Text='<%# Eval("ContactName") %>' />
	            </td>
	            <td>
	                <asp:Label ID="ContactTitleLabel" runat="server" Text='<%# Eval("ContactTitle") %>' />
	            </td>
	            <td>
	                <asp:Label ID="CountryLabel" runat="server" Text='<%# Eval("Country") %>' />
	            </td>
	        </tr>
	    </SelectedItemTemplate>
	</telerik:RadListView>
````
````VB.NET
	<telerik:RadFilter ID="RadFilter1" runat="server" FilterContainerID="RadListView1">
	</telerik:RadFilter>
	<telerik:RadListView ID="RadListView1" runat="server" DataKeyNames="CustomerID" OnNeedDataSource="RadListView1_NeedDataSource"
	    AllowPaging="True" AllowMultiItemSelection="True" OnItemCommand="RadListView1_ItemCommand"
	    OnPreRender="RadListView1_PreRender">
	    <AlternatingItemTemplate>
	        <tr class="rlvA">
	            <td>
	                <asp:Button ID="SelectButton" runat="server" CommandName="Select" CssClass="rlvBSel"
	                    Text=" " />
	            </td>
	            <td>
	                <asp:Label ID="CustomerIDLabel" runat="server" Text='<%# Eval("CustomerID") %>' />
	            </td>
	            <td>
	                <asp:Label ID="CompanyNameLabel" runat="server" Text='<%# Eval("CompanyName") %>' />
	            </td>
	            <td>
	                <asp:Label ID="ContactNameLabel" runat="server" Text='<%# Eval("ContactName") %>' />
	            </td>
	            <td>
	                <asp:Label ID="ContactTitleLabel" runat="server" Text='<%# Eval("ContactTitle") %>' />
	            </td>
	            <td>
	                <asp:Label ID="CountryLabel" runat="server" Text='<%# Eval("Country") %>' />
	            </td>
	        </tr>
	    </AlternatingItemTemplate>
	    <ItemTemplate>
	        <tr class="rlvI">
	            <td>
	                <asp:Button ID="SelectButton" runat="server" CommandName="Select" CssClass="rlvBSel"
	                    Text=" " />
	            </td>
	            <td>
	                <asp:Label ID="CustomerIDLabel" runat="server" Text='<%# Eval("CustomerID") %>' />
	            </td>
	            <td>
	                <asp:Label ID="CompanyNameLabel" runat="server" Text='<%# Eval("CompanyName") %>' />
	            </td>
	            <td>
	                <asp:Label ID="ContactNameLabel" runat="server" Text='<%# Eval("ContactName") %>' />
	            </td>
	            <td>
	                <asp:Label ID="ContactTitleLabel" runat="server" Text='<%# Eval("ContactTitle") %>' />
	            </td>
	            <td>
	                <asp:Label ID="CountryLabel" runat="server" Text='<%# Eval("Country") %>' />
	            </td>
	        </tr>
	    </ItemTemplate>
	    <EmptyDataTemplate>
	        <div class="RadListView RadListView_Default">
	            <div class="rlvEmpty">
	                There are no items to be displayed.</div>
	        </div>
	    </EmptyDataTemplate>
	    <LayoutTemplate>
	        <div class="RadListView RadListView_Default">
	            <table cellspacing="0" style="width: 100%;">
	                <thead>
	                    <tr class="rlvHeader">
	                        <th>
	                            &nbsp;
	                        </th>
	                        <th>
	                            <asp:LinkButton ID="LinkButton1" runat="server" CommandName="Sort" CommandArgument="CustomerID">CustomerID</asp:LinkButton>
	                        </th>
	                        <th>
	                            <asp:LinkButton ID="LinkButton2" runat="server" CommandName="Sort" CommandArgument="CompanyName">CompanyName</asp:LinkButton>
	                        </th>
	                        <th>
	                            <asp:LinkButton ID="LinkButton3" runat="server" CommandName="Sort" CommandArgument="ContactName">ContactName</asp:LinkButton>
	                        </th>
	                        <th>
	                            <asp:LinkButton ID="LinkButton4" runat="server" CommandName="Sort" CommandArgument="ContactTitle">ContactTitle</asp:LinkButton>
	                        </th>
	                        <th>
	                            <asp:LinkButton ID="LinkButton5" runat="server" CommandName="Sort" CommandArgument="Country">Country</asp:LinkButton>
	                        </th>
	                    </tr>
	                </thead>
	                <tfoot>
	                    <tr>
	                        <td colspan="6">
	                            <telerik:RadDataPager ID="RadDataPager1" runat="server">
	                                <Fields>
	                                    <telerik:RadDataPagerButtonField FieldType="FirstPrev" />
	                                    <telerik:RadDataPagerButtonField FieldType="Numeric" />
	                                    <telerik:RadDataPagerButtonField FieldType="NextLast" />
	                                    <telerik:RadDataPagerPageSizeField />
	                                </Fields>
	                            </telerik:RadDataPager>
	                        </td>
	                    </tr>
	                </tfoot>
	                <tbody>
	                    <tr id="itemPlaceholder" runat="server">
	                    </tr>
	                </tbody>
	            </table>
	        </div>
	    </LayoutTemplate>
	    <SelectedItemTemplate>
	        <tr class="rlvISel">
	            <td>
	                <asp:Button ID="DeselectButton" runat="server" CommandName="Deselect" CssClass="rlvBSel"
	                    Text=" " />
	            </td>
	            <td>
	                <asp:Label ID="CustomerIDLabel" runat="server" Text='<%# Eval("CustomerID") %>' />
	            </td>
	            <td>
	                <asp:Label ID="CompanyNameLabel" runat="server" Text='<%# Eval("CompanyName") %>' />
	            </td>
	            <td>
	                <asp:Label ID="ContactNameLabel" runat="server" Text='<%# Eval("ContactName") %>' />
	            </td>
	            <td>
	                <asp:Label ID="ContactTitleLabel" runat="server" Text='<%# Eval("ContactTitle") %>' />
	            </td>
	            <td>
	                <asp:Label ID="CountryLabel" runat="server" Text='<%# Eval("Country") %>' />
	            </td>
	        </tr>
	    </SelectedItemTemplate>
	</telerik:RadListView>
````




````C#
	    private ArrayList SelectedItems
	    {
	        get
	        {
	            if (Session["temp"] == null)
	            {
	                Session["temp"] = new ArrayList();
	            }
	            return (ArrayList)Session["temp"];
	        }
	        set
	        {
	            Session["temp"] = value;
	        }
	    }
	    protected void RadListView1_NeedDataSource(object sender, RadListViewNeedDataSourceEventArgs e)
	    {
	        OleDbConnection conn = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" + Server.MapPath("~/App_Data/Nwind.mdb"));
	        OleDbDataAdapter adapter = new OleDbDataAdapter();
	        adapter.SelectCommand = new OleDbCommand("SELECT * FROM Customers", conn);
	        DataTable myDataTable = new DataTable();
	        conn.Open();
	        try
	        {
	            adapter.Fill(myDataTable);
	        }
	        finally
	        {
	            conn.Close();
	        }
	        RadListView1.DataSource = myDataTable;
	    }
	    protected void RadListView1_ItemCommand(object sender, RadListViewCommandEventArgs e)
	    {
	        ArrayList temp = SelectedItems;
	        if (e.CommandName == RadListView.SelectCommandName && e.ListViewItem is RadListViewDataItem)
	        {
	            RadListViewDataItem dataItem = (RadListViewDataItem)e.ListViewItem;
	            string customerID = dataItem.GetDataKeyValue("CustomerID").ToString();
	            temp.Add(customerID);
	            SelectedItems = temp;
	        }
	        if (e.CommandName == RadListView.DeselectCommandName && e.ListViewItem is RadListViewDataItem)
	        {
	            RadListViewDataItem dataItem = (RadListViewDataItem)e.ListViewItem;
	            string customerID = dataItem.GetDataKeyValue("CustomerID").ToString();
	            temp.Remove(customerID);
	            SelectedItems = temp;
	        }
	    }
	    protected void RadListView1_PreRender(object sender, EventArgs e)
	    {
	        if (SelectedItems.Count > 0)
	        {
	            foreach (RadListViewDataItem item in RadListView1.Items)
	            {
	                string customerID = item.GetDataKeyValue("CustomerID").ToString();
	                if (SelectedItems.Contains(customerID))
	                {
	                    item.Selected = true;
	                }
	            }
	            RadListView1.Rebind();
	        }
	    }
````
````VB.NET
	    Private Property SelectedItems() As ArrayList
	        Get
	            If Session("temp") = Nothing Then
	                Session("temp") = New ArrayList()
	            End If
	            Return DirectCast(Session("temp"), ArrayList)
	        End Get
	        Set(ByVal value As ArrayList)
	            Session("temp") = value
	        End Set
	    End Property
	    Protected Sub RadListView1_NeedDataSource(ByVal sender As Object, ByVal e As RadListViewNeedDataSourceEventArgs)
	        Dim conn As New OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" + Server.MapPath("~/App_Data/Nwind.mdb"))
	        Dim adapter As New OleDbDataAdapter()
	        adapter.SelectCommand = New OleDbCommand("SELECT * FROM Customers", conn)
	        Dim myDataTable As New DataTable()
	        conn.Open()
	        Try
	            adapter.Fill(myDataTable)
	        Finally
	            conn.Close()
	        End Try
	        RadListView1.DataSource = myDataTable
	    End Sub
	    Protected Sub RadListView1_ItemCommand(ByVal sender As Object, ByVal e As RadListViewCommandEventArgs)
	        Dim temp As ArrayList = SelectedItems
	        If e.CommandName = RadListView.SelectCommandName AndAlso TypeOf e.ListViewItem Is RadListViewDataItem Then
	            Dim dataItem As RadListViewDataItem = DirectCast(e.ListViewItem, RadListViewDataItem)
	            Dim customerID As String = dataItem.GetDataKeyValue("CustomerID").ToString()
	            temp.Add(customerID)
	            SelectedItems = temp
	        End If
	        If e.CommandName = RadListView.DeselectCommandName AndAlso TypeOf e.ListViewItem Is RadListViewDataItem Then
	            Dim dataItem As RadListViewDataItem = DirectCast(e.ListViewItem, RadListViewDataItem)
	            Dim customerID As String = dataItem.GetDataKeyValue("CustomerID").ToString()
	            temp.Remove(customerID)
	            SelectedItems = temp
	        End If
	    End Sub
	    Protected Sub RadListView1_PreRender(ByVal sender As Object, ByVal e As EventArgs)
	        If SelectedItems.Count > 0 Then
	            For Each item As RadListViewDataItem In RadListView1.Items
	                Dim customerID As String = item.GetDataKeyValue("CustomerID").ToString()
	                If SelectedItems.Contains(customerID) Then
	                    item.Selected = True
	                End If
	            Next
	            RadListView1.Rebind()
	        End If
	    End Sub
````

