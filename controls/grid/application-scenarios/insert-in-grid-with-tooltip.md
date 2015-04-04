---
title: Insert in Grid with Tooltip
page_title: Insert in Grid with Tooltip | UI for ASP.NET AJAX Documentation
description: Insert in Grid with Tooltip
slug: grid/application-scenarios/insert-in-grid-with-tooltip
tags: insert,in,grid,with,tooltip
published: True
position: 11
---

# Insert in Grid with Tooltip



## 

[This online example](http://demos.telerik.com/ASPNET/Prometheus/Controls/Examples/Integration/ToolTipGrid/DefaultCS.aspx?product=grid) demonstrates integration between __RadGrid__, __RadToolTip__ and __RadAjax__. The example shows how to insert several new records in the grid with a single button click using Ajax requests.

The control, containing the fields for the new records is added to the content of the __RadToolTip__ when the OnAjaxUpdate event of the RadToolTipManager fires. Once the user hits the [Add Products] button, the new records are inserted into the datatable, the active tooltip is closed and the the appropriate nested table is rebound.

As you cannot display RadAjax loading panel when you are using the RadToolTipManager in this case and generate dynamically the tooltip content, you can display a separate __RadAjaxLoadingPanel__ when you are making Ajax requests.

>note In order to see the new records, you have to expand the corresponding item in the MasterTableView.
>


Below are the code snippets from the demo referred above:

>tabbedCode

````ASPNET
	        <asp:ScriptManager ID="ScriptManager1" runat="server" />
	        <telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" />
	        <asp:UpdatePanel ID="UpdatePanel1" runat="server" UpdateMode="Conditional">
	            <ContentTemplate>
	                <telerik:RadGrid ID="RadGrid1" runat="server" DataSourceID="SqlDataSource1" Width="700px"
	                    AutoGenerateColumns="False" PageSize="10" AllowSorting="True" AllowPaging="True"
	                    GridLines="None" ShowStatusBar="true" OnItemDataBound="RadGrid1_ItemDataBound"
	                    OnDataBound="RadGrid1_DataBound">
	                    <PagerStyle Mode="NumericPages"></PagerStyle>
	                    <MasterTableView DataSourceID="SqlDataSource1" DataKeyNames="SupplierID" AllowMultiColumnSorting="True"
	                        Width="100%" HierarchyLoadMode="ServerOnDemand">
	                        <DetailTables>
	                            <telerik:GridTableView DataKeyNames="ProductID" DataSourceID="SqlDataSource2"
	                                Width="100%" runat="server">
	                                <ParentTableRelation>
	                                    <telerik:GridRelationFields DetailKeyField="SupplierID" MasterKeyField="SupplierID" />
	                                </ParentTableRelation>
	                                <Columns>
	                                    <telerik:GridBoundColumn SortExpression="ProductName" HeaderText="Product name" HeaderButtonType="TextButton"
	                                        DataField="ProductName" UniqueName="ProductName">
	                                    </telerik:GridBoundColumn>
	                                    <telerik:GridBoundColumn SortExpression="QuantityPerUnit" HeaderText="Quantity per unit"
	                                        HeaderButtonType="TextButton" DataField="QuantityPerUnit" UniqueName="QuantityPerUnit">
	                                    </telerik:GridBoundColumn>
	                                    <telerik:GridBoundColumn SortExpression="UnitsInStock" HeaderText="Units in stock"
	                                        HeaderButtonType="TextButton" DataField="UnitsInStock" UniqueName="UnitsInStock">
	                                    </telerik:GridBoundColumn>
	                                    <telerik:GridBoundColumn SortExpression="UnitsOnOrder" HeaderText="Units on order"
	                                        HeaderButtonType="TextButton" DataField="UnitsOnOrder" UniqueName="UnitsOnOrder">
	                                    </telerik:GridBoundColumn>
	                                </Columns>
	                                <SortExpressions>
	                                    <telerik:GridSortExpression FieldName="ProductName"></telerik:GridSortExpression>
	                                </SortExpressions>
	                                <ExpandCollapseColumn Visible="False">
	                                    <HeaderStyle Width="19px" />
	                                </ExpandCollapseColumn>
	                                <RowIndicatorColumn Visible="False">
	                                    <HeaderStyle Width="20px" />
	                                </RowIndicatorColumn>
	                                <EditFormSettings>
	                                    <EditColumn UniqueName="EditCommandColumn1">
	                                    </EditColumn>
	                                </EditFormSettings>
	                            </telerik:GridTableView>
	                        </DetailTables>
	                        <Columns>
	                            <telerik:GridBoundColumn DataField="SupplierID" DataType="System.Int32" HeaderText="SupplierID"
	                                SortExpression="SupplierID" UniqueName="SupplierID">
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
	                            <telerik:GridBoundColumn DataField="Phone" HeaderText="Phone" SortExpression="Phone"
	                                UniqueName="Phone">
	                            </telerik:GridBoundColumn>
	                            <telerik:GridTemplateColumn UniqueName="AddProducts">
	                                <ItemTemplate>
	<asp:HyperLink runat="server" NavigateUrl="#" onclick="return false;" Text="Add Products to Supplier"
	ID="hlAddProducts">
	                                    </asp:HyperLink>
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
	                <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	                    ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM Suppliers">
	                </asp:SqlDataSource>
	                <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	                    ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM Products WHERE (SupplierID = @SupplierID)">
	                    <SelectParameters>
	                        <asp:SessionParameter Name="SupplierID" SessionField="SupplierID" Type="Int32" />
	                    </SelectParameters>
	                </asp:SqlDataSource>
	                <telerik:RadToolTipManager ID="RadToolTipManager1" runat="server" OnAjaxUpdate="RadToolTipManager1_AjaxUpdate"
	                    RelativeTo="Element" Width="225px" Height="390px" style="z-index: 31000" Position="BottomLeft" HideEvent="ManualClose"
	                    Title="Products" ShowEvent="OnClick">
	                </telerik:RadToolTipManager>
	            </ContentTemplate>
	        </asp:UpdatePanel>
	        
````
````C#
	    private Hashtable supplierIDs = new Hashtable();
	
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        if (!Page.IsPostBack)
	        {
	            RadGrid1.SelectedIndexes.Add(0, 0, 0);
	        }
	    }
	
	    protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
	    {
	        if (e.Item.ItemType == GridItemType.Item || e.Item.ItemType == GridItemType.AlternatingItem)
	        {
	            Control hpAddProducts = e.Item.FindControl("hlAddProducts");
	            if (!Object.Equals(hpAddProducts, null))
	            {
	                if (!Object.Equals(this.RadToolTipManager1, null))
	                {
	                    this.RadToolTipManager1.TargetControls.Add(hpAddProducts.ClientID, true);
	
	                    DataRowView currentRow = (DataRowView)e.Item.DataItem;
	                    if (!this.supplierIDs.ContainsKey(hpAddProducts.ClientID))
	                    {
	                        this.supplierIDs.Add(hpAddProducts.ClientID, currentRow.Row["SupplierID"].ToString());
	                    }
	                }
	            }
	        }
	    }
	
	    protected void RadToolTipManager1_AjaxUpdate(object sender, ToolTipUpdateEventArgs e)
	    {
	        AddProductsCS ctrlAddProducts = (AddProductsCS)Page.LoadControl("AddProductsCS.ascx");
	        Hashtable sessionSupplierIDs = (Hashtable)Session["supplierIDs"];
	        _currentSupplier = sessionSupplierIDs[e.TargetControlID].ToString();
	        ctrlAddProducts.ID = _currentSupplier;
	        e.UpdatePanel.ContentTemplateContainer.Controls.Add(ctrlAddProducts);
	    }
	
	    protected void RadGrid1_DataBound(object sender, EventArgs e)
	    {
	        Session["supplierIDs"] = this.supplierIDs;
	    }
	
	    private string _currentSupplier = null;
	
	    protected override void OnPreRender(EventArgs e)
	    {
	        base.OnPreRender(e);
	
	        if (!Object.Equals(_currentSupplier, null))
	        {
	            this.SessionDataSource2.SelectParameters["SupplierID"].DefaultValue = _currentSupplier;
	        }
	    }
	
	    protected override void RaisePostBackEvent(IPostBackEventHandler source, string eventArgument)
	    {
	        base.RaisePostBackEvent(source, eventArgument);
	
	        if (this.RadGrid1.Equals(source) && eventArgument.IndexOf("DetailTableUpdated") != -1)
	        {
	            int index = -1;
	
	            //The lenght of the string "DetailTableUpdated" is 18.
	            string keyValue = eventArgument.Substring(19);
	
	            foreach (GridDataItem item in RadGrid1.MasterTableView.Items)
	            {
	                string keyValues = item.KeyValues;
	                if (keyValues.IndexOf("SupplierID") != -1 && keyValues.Substring(13, keyValues.Length - 15).Equals(keyValue))
	                {
	                    index = item.ItemIndex;
	                    break;
	                }
	            }
	
	            if (index != -1)
	            {
	                GridTableView nestedTableView = (RadGrid1.MasterTableView.Items[index] as GridDataItem).ChildItem.NestedTableViews[0];
	                nestedTableView.Rebind();
	            }
	        }
	    }
````
````VB.NET
	    Private supplierIDs As New Hashtable()
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	        If Not Page.IsPostBack Then
	            RadGrid1.SelectedIndexes.Add(0, 0, 0)
	        End If
	    End Sub
	    Protected Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As GridItemEventArgs)
	        If e.Item.ItemType = GridItemType.Item OrElse e.Item.ItemType = GridItemType.AlternatingItem Then
	            Dim hpAddProducts As Control = e.Item.FindControl("hlAddProducts")
	            If Not [Object].Equals(hpAddProducts, Nothing) Then
	                If Not [Object].Equals(Me.RadToolTipManager1, Nothing) Then
	                    Me.RadToolTipManager1.TargetControls.Add(hpAddProducts.ClientID, True)
	                    Dim currentRow As DataRowView = DirectCast(e.Item.DataItem, DataRowView)
	                    If Not Me.supplierIDs.ContainsKey(hpAddProducts.ClientID) Then
	                        Me.supplierIDs.Add(hpAddProducts.ClientID, currentRow.Row("SupplierID").ToString())
	                    End If
	                End If
	            End If
	        End If
	    End Sub
	    Protected Sub RadToolTipManager1_AjaxUpdate(ByVal sender As Object, ByVal e As ToolTipUpdateEventArgs)
	        Dim ctrlAddProducts As AddProductsVB = DirectCast(Page.LoadControl("AddProductsVB.ascx"), AddProductsVB)
	        Dim sessionSupplierIDs As Hashtable = DirectCast(Session("supplierIDs"), Hashtable)
	        _currentSupplier = sessionSupplierIDs(e.TargetControlID).ToString()
	        ctrlAddProducts.ID = _currentSupplier
	        e.UpdatePanel.ContentTemplateContainer.Controls.Add(ctrlAddProducts)
	    End Sub
	    Protected Sub RadGrid1_DataBound(ByVal sender As Object, ByVal e As EventArgs)
	        Session("supplierIDs") = Me.supplierIDs
	    End Sub
	    Private _currentSupplier As String = Nothing
	    Protected Overloads Overrides Sub OnPreRender(ByVal e As EventArgs)
	        MyBase.OnPreRender(e)
	        If Not [Object].Equals(_currentSupplier, Nothing) Then
	            Me.SessionDataSource2.SelectParameters("SupplierID").DefaultValue = _currentSupplier
	        End If
	    End Sub
	    Protected Overloads Overrides Sub RaisePostBackEvent(ByVal source As IPostBackEventHandler, ByVal eventArgument As String)
	        MyBase.RaisePostBackEvent(source, eventArgument)
	        If Me.RadGrid1.Equals(source) AndAlso eventArgument.IndexOf("DetailTableUpdated") <> -1 Then
	            Dim index As Integer = -1
	            Dim keyValue As String = eventArgument.Substring(19)
	            For Each item As GridDataItem In RadGrid1.MasterTableView.Items
	                Dim keyValues As String = item.KeyValues
	                If keyValues.IndexOf("SupplierID") <> -1 AndAlso keyValues.Substring(13, keyValues.Length - 15).Equals(keyValue) Then
	                    index = item.ItemIndex
	                    Exit For
	                End If
	            Next
	            If index <> -1 Then
	                Dim nestedTableView As GridTableView = (TryCast(RadGrid1.MasterTableView.Items(index), GridDataItem)).ChildItem.NestedTableViews(0)
	                nestedTableView.Rebind()
	            End If
	        End If
	    End Sub
````
>end

````ASPNET
	  <asp:Button ID="btnAddNewProduct" runat="server" Text="Add more" UseSubmitBehavior="false"
	    OnClick="btnAddNewProduct_Click" /><br />
	    <br />
	    <span style="color: Red">You must fill all inputs before adding extra fields or inserting
	      the product</span>
	    <br />
	    <br />
	    <asp:Panel ID="pNewProducts" runat="server" Width="200px" Style="float: left;">
	    </asp:Panel>
	    &nbsp;
	    <div style="clear: both; height: 1px; margin-bottom: -1px;">
	      <!-- -->
	    </div>
	    <br />
	  <asp:Button ID="btnAddProducts" runat="server" Text="Add products" OnClick="btnAddProducts_Click"
	    UseSubmitBehavior="false" />
````



>tabbedCode

````C#
	    private int _loadedControls = 0;
	    private bool _isPostBack = false;
	
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        if (!_isPostBack)
	        {
	            AddInitialNewProducts();
	        }
	    }
	
	    protected void AddInitialNewProducts()
	    {
	        this.pNewProducts.Controls.Add(LoadProduct(LoadedControls));
	        LoadedControls++;
	        this.pNewProducts.Controls.Add(LoadProduct(LoadedControls));
	        LoadedControls++;
	    }
	
	    protected void btnAddNewProduct_Click(object sender, EventArgs e)
	    {
	        this.pNewProducts.Controls.Add(LoadProduct(LoadedControls));
	        LoadedControls++;
	    }
	
	    protected void btnAddProducts_Click(object sender, EventArgs e)
	    {
	        ControlCollection newProductsFields = this.pNewProducts.Controls;
	        ArrayList newProducts = new ArrayList();
	        foreach (Control newProduct in newProductsFields)
	        {
	            if ((newProduct is NewProductFormCS) && ((NewProductFormCS)newProduct).ProductName != String.Empty)
	            {
	                newProducts.Add(newProduct);
	            }
	        }
	
	        if (newProducts.Count > 0)
	        {
	            foreach (Control newProduct in newProducts)
	            {
	                NewProductFormCS product = (NewProductFormCS)newProduct;
	                SessionDataSource products = (SessionDataSource)Page.FindControl("SessionDataSource2");
	                if (products != null)
	                {
	
	                    IDataSource dataSource = (IDataSource)products;
	                    DataSourceView view = dataSource.GetView("DefaultView");
	
	                    IOrderedDictionary data = new OrderedDictionary();
	                    data.Add("ProductName", product.ProductName);
	                    data.Add("QuantityPerUnit", product.QuantityPerUnit);
	                    data.Add("UnitsInStock", product.UnitsInStock);
	                    data.Add("UnitsOnOrder", product.UnitsOnOrder);
	                    data.Add("SupplierID", this.ID);
	
	                    view.Insert(data, new DataSourceViewOperationCallback(OnDataSourceOperationComplete));
	                }
	            }
	        }
	
	        //Close the active ToolTip.
	        ScriptManager.RegisterClientScriptBlock(
	            this.Page,
	            this.GetType(),
	            "WebUserControlSript",
	            "CloseActiveToolTip('" + this.ID + "')",
	            true);
	    }
	
	    private bool OnDataSourceOperationComplete(int count, Exception e)
	    {
	        if (e != null)
	        {
	            throw e;
	        }
	
	        return true;
	    }
	
	    private Control LoadProduct(int index)
	    {
	        Control product = Page.LoadControl("NewProductFormCS.ascx");
	        product.ID = "MyControl" + index.ToString();
	        return product;
	    }
	
	    protected override void LoadViewState(object savedState)
	    {
	        object[] state = (object[])savedState;
	        LoadedControls = (int)state[0];
	        string controlID = (string)state[1];
	
	        if (controlID == this.ID)
	        {
	            for (int i = 0; i < LoadedControls; i++)
	            {
	                pNewProducts.Controls.Add(LoadProduct(i));
	            }
	
	            _isPostBack = true;
	        }
	        else
	        {
	            _loadedControls = 0;
	            _isPostBack = false;
	        }
	
	        base.LoadViewState(state[2]);
	    }
	
	    protected override object SaveViewState()
	    {
	        object[] state = new object[] {
	            LoadedControls,
	            this.ID,
	            base.SaveViewState()
	        };
	        return state;
	    }
	
	    public int LoadedControls
	    {
	        get
	        {
	            return _loadedControls;
	        }
	        set
	        {
	            _loadedControls = value;
	        }
	    }
````
````VB.NET
	    Private _loadedControls As Integer = 0
	    Private _isPostBack As Boolean = False
	
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	        If Not _isPostBack Then
	            AddInitialNewProducts()
	        End If
	    End Sub
	
	    Protected Sub AddInitialNewProducts()
	        Me.pNewProducts.Controls.Add(LoadProduct(LoadedControls))
	        LoadedControls += 1
	        Me.pNewProducts.Controls.Add(LoadProduct(LoadedControls))
	        LoadedControls += 1
	    End Sub
	
	    Protected Sub btnAddNewProduct_Click(ByVal sender As Object, ByVal e As EventArgs)
	        Me.pNewProducts.Controls.Add(LoadProduct(LoadedControls))
	        LoadedControls += 1
	    End Sub
	
	    Protected Sub btnAddProducts_Click(ByVal sender As Object, ByVal e As EventArgs)
	        Dim newProductsFields As ControlCollection = Me.pNewProducts.Controls
	        Dim newProducts As New ArrayList()
	        For Each newProduct As Control In newProductsFields
	            If (TypeOf newProduct Is NewProductFormVB) AndAlso DirectCast(newProduct, NewProductFormVB).ProductName <> [String].Empty Then
	                newProducts.Add(newProduct)
	            End If
	        Next
	
	        If newProducts.Count > 0 Then
	            For Each newProduct As Control In newProducts
	                Dim product As NewProductFormVB = DirectCast(newProduct, NewProductFormVB)
	                Dim products As SessionDataSource = DirectCast(Page.FindControl("SessionDataSource2"), SessionDataSource)
	                If products IsNot Nothing Then
	
	                    Dim dataSource As IDataSource = DirectCast(products, IDataSource)
	                    Dim view As DataSourceView = dataSource.GetView("DefaultView")
	
	                    Dim data As IOrderedDictionary = New OrderedDictionary()
	                    data.Add("ProductName", product.ProductName)
	                    data.Add("QuantityPerUnit", product.QuantityPerUnit)
	                    data.Add("UnitsInStock", product.UnitsInStock)
	                    data.Add("UnitsOnOrder", product.UnitsOnOrder)
	                    data.Add("SupplierID", Me.ID)
	
	                    view.Insert(data, New DataSourceViewOperationCallback(AddressOf OnDataSourceOperationComplete))
	                End If
	            Next
	        End If
	
	        'Close the active ToolTip.
	        ScriptManager.RegisterClientScriptBlock(Me.Page, Me.[GetType](), "WebUserControlSript", "CloseActiveToolTip('" & Convert.ToString(Me.ID) & "')", True)
	    End Sub
	
	    Private Function OnDataSourceOperationComplete(ByVal count As Integer, ByVal e As Exception) As Boolean
	        If e IsNot Nothing Then
	            Throw e
	        End If
	
	        Return True
	    End Function
	
	    Private Function LoadProduct(ByVal index As Integer) As Control
	        Dim product As Control = Page.LoadControl("NewProductFormVB.ascx")
	        product.ID = "MyControl" & index.ToString()
	        Return product
	    End Function
	
	    Protected Overrides Sub LoadViewState(ByVal savedState As Object)
	        Dim state As Object() = DirectCast(savedState, Object())
	        LoadedControls = CInt(state(0))
	        Dim controlID As String = DirectCast(state(1), String)
	
	        If controlID = Me.ID Then
	            For i As Integer = 0 To LoadedControls - 1
	                pNewProducts.Controls.Add(LoadProduct(i))
	            Next
	
	            _isPostBack = True
	        Else
	            _loadedControls = 0
	            _isPostBack = False
	        End If
	
	        MyBase.LoadViewState(state(2))
	    End Sub
	
	    Protected Overrides Function SaveViewState() As Object
	        Dim state As Object() = New Object() {LoadedControls, Me.ID, MyBase.SaveViewState()}
	        Return state
	    End Function
	
	    Public Property LoadedControls() As Integer
	        Get
	            Return _loadedControls
	        End Get
	        Set(ByVal value As Integer)
	            _loadedControls = value
	        End Set
	    End Property
	
````
>end
