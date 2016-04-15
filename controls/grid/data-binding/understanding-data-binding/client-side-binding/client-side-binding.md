---
title: Client-side Binding
page_title: Client-side Binding | RadGrid for ASP.NET AJAX Documentation
description: Client-side Binding
slug: grid/data-binding/understanding-data-binding/client-side-binding/client-side-binding
tags: client-side,binding
published: True
position: 0
---

# Client-side Binding



RadGrid for ASP.NET AJAX supports client-side binding to web services or page methods as demonstrated in [this](http://demos.telerik.com/aspnet-ajax/Grid/Examples/Client/DeclarativeDataBinding/DefaultCS.aspx) and [this](http://demos.telerik.com/aspnet-ajax/Grid/Examples/Client/DataBinding/DefaultCS.aspx) online demo of the product. In order to assign data source for the grid and refresh its state on the client, utilize the [ set_dataSource(dataSource) ]({%slug grid/client-side-programming/gridtableview-object/methods/set_datasource%}) and [dataBind()]({%slug grid/client-side-programming/gridtableview-object/methods/databind%}) methods from its client-side API. Keep in mind that the data source passed as an argument to the set_dataSource method should have JSON signature which can be serialized by a web service or a page method.

All grid commands will raise the OnCommand client grid event which can be intercepted in order to cancel the default operation and perform a custom action client-side.

The RadGrid client-side binding is especially useful when you would like to perform asynchronous refresh of the grid data using web service invocations (combined with ASP.NET AJAX), thus by-passing the standard event lifecycle of the page and avoiding execution of code logic which is not "connected" to the grid data population.

Below are some important points that you need to have in mind when utilizing the RadGrid client-side data-binding:

>note Generally speaking, RadGrid transfers *JSON* from *client-to-server-to-client* in order to bind/page/sort/filter on the client. If you are using declarative data-binding and *do not* bind RadGrid on the server, it will manage to create its client object properly. However, if you are manually binding it on client and *do not* bind it on server, you need to attach a handler to its ** *OnCommand* ** client event. In both cases RadGrid will bind itself on the server (if you do not bind it explicitly) with dummy data to create PageSize items. Later, when you bind it on the client side, previously created items will be populated with data. If you bind the control on client with rows more than PageSize, RadGrid will create new *tr* elements and populate properly the cells for certain columns.
>If you want to initially hide the empty rows shown on the client, you can set the **RadGrid.ClientSettings.DataBinding.ShowEmptyRowsOnLoad** property to false.
>Since RadGrid transfers *JSON* data when bound on the client, if you have some kind of templates - *GridTemplateColumn/ NestedViewTemplate* - there is no proper way for populating the controls in these templates as they are **templates.** However, for the rows that are initially created on the server (these PageSize items), RadGrid will manage to populate a control in **GridTemplateColumn** if the control in that **ItemTemplate** has **ID** set equal to the **DataField** property of that column.
>


More information about how to use web services and expose them to page methods/client scripts in ASP.NET AJAX can be gathered from the following MSDN resources: [http://www.asp.net/ajax/documentation/live/tutorials/ExposingWebServicesToAJAXTutorial.aspx](http://www.asp.net/ajax/documentation/live/tutorials/ExposingWebServicesToAJAXTutorial.aspx)

[http://www.w3schools.com/webservices/default.asp](http://www.w3schools.com/webservices/default.asp)

## Declarative client-side binding

This [first example](http://demos.telerik.com/aspnet-ajax-beta/Grid/Examples/Client/DeclarativeDataBinding/DefaultCS.aspx) demonstrates how to use declarative client-side data-binding.

RadGrid declarative client-side data-binding is very similar to **ObjectDataSource** data-binding. You need to specify **SelectMethod** and **SelectCountMethod** (if needed) along with **Location** property and the grid will automatically invoke the specified method as **PageMethod** or **WebService method**:

````ASP.NET
...
<ClientSettings> 
  <DataBinding Location="~/Grid/Examples/Client/DeclarativeDataBinding/WebService.asmx" SelectMethod="GetData" SelectCountMethod="GetCount" /> 
</ClientSettings>
...
````



>caution  **Important: These methods should be marked with 
[WebMethod attribute](http://msdn.microsoft.com/en-us/library/byxd99hx(VS.71).aspx)** . Example:
>[WebMethod(EnableSession=true)]public List<MyBusinessObject> GetData(int startRowIndex, int maximumRows, List<GridSortExpression> sortExpression, List<GridFilterExpression> filterExpression){...}
>


In the *ClientSettings.DataBinding* section you can also specify the following properties:

* *StartRowIndexParameterName* - default is "startRowIndex"

* *MaximumRowsIndexParameterName* - default is "maximumRows"

* *SortParameterName* - default is "sortExpression"

* *FilterParameterName* - default is "filterExpression"

>caution  **Important: By default RadGrid will expect SelectMethod with four arguments with the following names and types:** 
>
* int startRowIndex
* int maximumRows
* List<GridSortExpression> sortExpression
* List<GridFilterExpression> filterExpression> **and SelectCountMethod with no arguments!** 
>


To change values on the fly of any of the grid declarative client-side data-binding properties you can use the **OnDataBinding** client-side event:

````ASP.NET
...
<ClientEvents OnDataBinding="RadGrid1_DataBinding" />
...
````



Please refer to the JavaScript code in the demo for more information.To optimize even more the grid client-side data binding you can get both data and total items count in a single request. Example:



````C#	
[WebMethod(EnableSession = true)]
public Dictionary<string, object> GetDataAndCount(int startRowIndex, int maximumRows, List<GridSortExpression> sortExpression, List<GridFilterExpression> filterExpression)
{
    Dictionary<string, object> data = new Dictionary<string, object>();
    data.Add("Data", GetData(startRowIndex, maximumRows, sortExpression, filterExpression));
    data.Add("Count", (int)Session["Count"]); return data;
}
````
````VB 
<WebMethod(EnableSession = True)>
<WebMethod(EnableSession:=True)> _
Public Function GetDataAndCount(ByVal startRowIndex As Integer, ByVal maximumRows As Integer, ByVal sortExpression As List(Of GridSortExpression), ByVal filterExpression As List(Of GridFilterExpression)) As Dictionary(Of String, Object)
    Dim data As New Dictionary(Of String, Object)()
    data.Add("Data", GetData(startRowIndex, maximumRows, sortExpression, filterExpression))
    data.Add("Count", DirectCast(Session("Count"), Integer))
    Return data
End Function
````


The grid will check automatically for "data" and "count" and will not execute a second request.

## Client-side caching

[This example](http://demos.telerik.com/aspnet-ajax/Grid/Examples/Client/Caching/DefaultCS.aspx) demonstrates how to enable/disable the grid client-side caching.

RadGrid can cache data on the client based on the current grid state. To enable/disable this feature you can use the **ClientSettings.DataBinding.EnableCaching** property (its default value is false):

````ASP.NET
...
<ClientSettings> 
  <DataBinding Location="~/Grid/Examples/Client/DeclarativeDataBinding/WebService.asmx" SelectMethod="GetDataAndCount" EnableCaching="true" /> 
</ClientSettings>
...
````



With client-side caching enabled RadGrid will store the start row index, maximum rows, sorting and filtering expressions and will retrieve them from the cache automatically on subsequent client-side refreshes.

## Non-declarative client-side binding

[The second client-side binding demo](http://demos.telerik.com/ASPNET/Prometheus/Grid/Examples/Client/DataBinding/DefaultCS.aspx) illustrates how to:

* extract information about the current page index/virtual item count or set them on the client.

* customize the appearance of the grid items based on their column cell values (intercepting the OnRowDataBound client event of the grid).

* obtain the values of the sort expressions/filter expressions applied to the control.

Further information about the OnCommand/OnRowDataBound events of RadGrid and the client GridTableView object's properties, methods and collections can be gathered from the Client-side API Reference chapter in the documentation.

Below are some code excerpts from the second QSF example:



````ASP.NET
  <html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
   <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
       <script type="text/javascript">
       function pageLoad()
       {
          $get("<%= Panel1.ClientID %>").innerHTML = "";
          if(!$get("<%= CheckBox2.ClientID %>").checked)
          {
              var tableView = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
             
              PageMethods.GetData(0, tableView.get_pageSize(),
                   tableView.get_sortExpressions().toString(), tableView.get_filterExpressions().toString(),
                       updateGrid);
           }
       }
      
       function RadGrid1_Command(sender, args)
       {
           $get("<%= Panel1.ClientID %>").innerHTML = String.format("<b>RadGrid1_Command</b><br />CommandName : {0}, CommandArgument : {1} <br /><br />", args.get_commandName(), args.get_commandArgument());
      
           args.set_cancel(true);
          
           var currentPageIndex = sender.get_masterTableView().get_currentPageIndex();
           var pageSize = sender.get_masterTableView().get_pageSize();
           var sortExpressions = sender.get_masterTableView().get_sortExpressions();
           var filterExpressions = sender.get_masterTableView().get_filterExpressions();
          
           if(sortExpressions.length > 0 && filterExpressions.length > 0 && currentPageIndex > 0)
           {
               sender.get_masterTableView().set_currentPageIndex(0);
           }
          
           var sortExpressionsAsSQL = sortExpressions.toString();
           var filterExpressionsAsSQL = filterExpressions.toString();
          
           var maximumRows = <%= (RadGrid1.AllowPaging)? RadGrid1.PageSize : RadGrid1.Items.Count %>;
           PageMethods.GetData(currentPageIndex * pageSize, maximumRows, sortExpressionsAsSQL, filterExpressionsAsSQL, updateGrid);
          
           if(args.get_commandName() == "Filter")
           {
               PageMethods.GetCount(filterExpressionsAsSQL, updateVirtualItemCount);
           }
       }
       function updateGrid(result)
       {
          var tableView = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
          tableView.set_dataSource(result);
          tableView.dataBind();
       }
      
       function updateVirtualItemCount(result)
       {
          var tableView = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
          tableView.set_virtualItemCount(result);
       }
       function toggleAllowMultiColumnSorting(sender, e)
       {
          var tableView = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
          tableView.set_allowMultiColumnSorting(sender.checked);
       }
      
       function RadGrid1_RowDataBound(sender, args)
       {
           // conditional formatting
           args.get_item().get_cell("TitleOfCourtesy").style.fontWeight = (args.get_dataItem()["TitleOfCourtesy"] == "Dr.")? "bold" : "normal";
           var sb = new Sys.StringBuilder();
          
           sb.appendLine("<b>RadGrid1_RowDataBound</b><br />");
          
           for(var item in args.get_dataItem())
           {
               sb.appendLine(String.format("{0} : {1}<br />", item, args.get_dataItem()[item]));
           }
          
           sb.appendLine("<br />");
           sb.appendLine("<br />");
           $get("<%= Panel1.ClientID %>").innerHTML += sb.toString();
       }
       </script>
   </telerik:RadCodeBlock>
</head>
<body>
   <form runat="server" id="mainForm" method="post" style="width: 100%;">
       <telerik:RadScriptManager ID="ScriptManager1" EnablePageMethods="true" runat="server" />
       <telerik:RadStyleSheetManager ID="RadStyleSheetManager1" runat="server" />
       <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
           <AjaxSettings>
               <telerik:AjaxSetting AjaxControlID="CheckBox2">
                   <UpdatedControls>
                       <telerik:AjaxUpdatedControl ControlID="RadGrid1" />
                   </UpdatedControls>
               </telerik:AjaxSetting>
           </AjaxSettings>
       </telerik:RadAjaxManager>
       <!-- content start -->
       <asp:CheckBox ID="CheckBox1" Text="Allow multi column sorting" Checked="true" runat="server"
           onclick="toggleAllowMultiColumnSorting(this, event);" />
       <br />
       <asp:CheckBox ID="CheckBox2" Text="Bind the grid server-side on initial load" Checked="true"
           AutoPostBack="true" runat="server" />
       <br />
       <br />
       <telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" EnableViewState="false" PageSize="2" Skin="Sunset"
           runat="server" AllowPaging="true" AllowSorting="True" AllowFilteringByColumn="true"
           GridLines="None">
           <MasterTableView AllowMultiColumnSorting="true" />
           <PagerStyle Mode="NextPrevAndNumeric" />
           <ClientSettings>
               <ClientEvents OnCommand="RadGrid1_Command" OnRowDataBound="RadGrid1_RowDataBound" />
           </ClientSettings>
       </telerik:RadGrid>
       <br />
       <br />
       Events:
       <asp:Panel ID="Panel1" Style="height: 200px; overflow: auto; padding: 15px;" CssClass="module"
           runat="server">
       </asp:Panel>
   </form>
</body>
</html>
````
````C#
protected override void OnInit(System.EventArgs e)
{
    base.OnInit(e);
    RadGrid1.NeedDataSource += new Telerik.Web.UI.GridNeedDataSourceEventHandler(RadGrid1_NeedDataSource); RadGrid1.ColumnCreated += new Telerik.Web.UI.GridColumnCreatedEventHandler(RadGrid1_ColumnCreated);
}
void RadGrid1_ColumnCreated(object sender, Telerik.Web.UI.GridColumnCreatedEventArgs e)
{
    if (e.Column.IsBoundToFieldName("BirthDate")) { ((GridBoundColumn)e.Column).DataFormatString = "{0:dd/MM/yyyy}"; }
}
void RadGrid1_NeedDataSource(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    RadGrid1.AllowCustomPaging = true; RadGrid1.VirtualItemCount = GetCount(RadGrid1.MasterTableView.FilterExpression);
    RadGrid1.DataSource = (CheckBox2.Checked) ? GetData(0, GetCount(RadGrid1.MasterTableView.FilterExpression), "", "") : new List<Employee>();
}
[WebMethod]
public static int GetCount(string filterExpressions)
{
    int count = 0;
    using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString))
    {
        SqlCommand command = new SqlCommand(String.Format("SELECT COUNT(*) FROM Employees {0}", (filterExpressions != String.Empty) ? String.Format("WHERE {0}", filterExpressions) : ""), connection);
        connection.Open();
        SqlDataReader reader = command.ExecuteReader();
        while (reader.Read()) { count = reader.GetInt32(0); }
        reader.Close();
    }
    return count;
}
[WebMethod]
public static List<Employee> GetData(int startIndex, int maximumRows, string sortExpressions, string filterExpressions)
{
    startIndex = startIndex + 1;
    List<Employee> list = new List<Employee>();
    StringBuilder sqlBuilder = new StringBuilder(); sqlBuilder.AppendLine("DECLARE @startRowIndex int");
    sqlBuilder.AppendLine("DECLARE @maximumRows int");
    sqlBuilder.AppendLine(String.Format("SET @startRowIndex = {0}", startIndex));
    sqlBuilder.AppendLine(String.Format("SET @maximumRows = {0}", maximumRows));
    sqlBuilder.AppendLine("DECLARE @first_id int, @startRow int ");
    sqlBuilder.AppendLine("SET ROWCOUNT @startRowIndex");
    sqlBuilder.AppendLine("SELECT ");
    sqlBuilder.AppendLine(" @first_id = EmployeeID ");
    sqlBuilder.AppendLine("FROM Employees ");
    sqlBuilder.AppendLine("ORDER BY EmployeeID");
    sqlBuilder.AppendLine("SET ROWCOUNT @maximumRows");
    sqlBuilder.AppendLine("SELECT e.*");
    sqlBuilder.AppendLine("FROM Employees e");
    sqlBuilder.AppendLine("WHERE EmployeeID >= @first_id");
    string where = string.Empty;
    if (filterExpressions != String.Empty)
    {
        sqlBuilder.AppendLine(String.Format(" And {0}", filterExpressions));
    }
    if (sortExpressions != String.Empty)
    {
        sqlBuilder.AppendLine(String.Format(" Order By {0}", sortExpressions));
    }
    using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString))
    {
        SqlCommand command = new SqlCommand(sqlBuilder.ToString(), connection);
        connection.Open();
        SqlDataReader reader = command.ExecuteReader();
        while (reader.Read())
        {
            Employee newEmployee = new Employee();
            for (int i = 0; i < reader.FieldCount; i++)
            {
                switch (reader.GetName(i))
                {
                    case "EmployeeID":
                        newEmployee.EmployeeID = reader.GetInt32(i);
                        break;
                    case "LastName":
                        newEmployee.LastName = reader.GetString(i);
                        break;
                    case "FirstName":
                        newEmployee.FirstName = reader.GetString(i);
                        break;
                    case "Title":
                        newEmployee.Title = reader.GetString(i);
                        break;
                    case "TitleOfCourtesy":
                        newEmployee.TitleOfCourtesy = reader.GetString(i);
                        break;
                    case "BirthDate":
                        newEmployee.BirthDate = reader.GetDateTime(i);
                        break;
                    default:
                        break;
                }
            }
            list.Add(newEmployee);
        }
        reader.Close();
    }
    return list;
}
public class Employee
{
    private int _EmployeeID;
    private string _LastName;
    private string _FirstName;
    private string _Title;
    private string _TitleOfCourtesy;
    private System.Nullable<System.DateTime> _BirthDate;
    public Employee()
    {
    }
    public int EmployeeID
    {
        get { return this._EmployeeID; }
        set
        {
            if ((this._EmployeeID != value))
            { this._EmployeeID = value; }
        }
    }
    public string LastName
    {
        get { return this._LastName; }
        set
        {
            if ((this._LastName != value))
            { this._LastName = value; }
        }
    }
    public string FirstName
    {
        get { return this._FirstName; }
        set
        {
            if ((this._FirstName != value))
            { this._FirstName = value; }
        }
    }
    public string Title
    {
        get
        { return this._Title; }
        set
        {
            if ((this._Title != value))
            { this._Title = value; }
        }
    }
    public string TitleOfCourtesy
    {
        get { return this._TitleOfCourtesy; }
        set
        {
            if ((this._TitleOfCourtesy != value))
            {
                this._TitleOfCourtesy = value;
            }
        }
    }
    public System.Nullable<System.DateTime> BirthDate
    {
        get { return this._BirthDate; }
        set
        {
            if ((this._BirthDate != value))
            { this._BirthDate = value; }
        }
    }
}

````
````VB
Protected Overloads Overrides Sub OnInit(ByVal e As System.EventArgs)
    MyBase.OnInit(e)
    AddHandler RadGrid1.NeedDataSource, AddressOf RadGrid1_NeedDataSource
    AddHandler RadGrid1.ColumnCreated, AddressOf RadGrid1_ColumnCreated
End Sub
Sub RadGrid1_ColumnCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridColumnCreatedEventArgs)
    If e.Column.IsBoundToFieldName("BirthDate") Then
        CType(e.Column, GridBoundColumn).DataFormatString = "{0:dd/MM/yyyy}"
    End If
End Sub
Sub RadGrid1_NeedDataSource(ByVal source As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs)
    RadGrid1.AllowCustomPaging = True
    RadGrid1.VirtualItemCount = GetCount(RadGrid1.MasterTableView.FilterExpression)
    RadGrid1.DataSource = IIf(CheckBox2.Checked, GetData(0, GetCount(RadGrid1.MasterTableView.FilterExpression), "", ""), New List(Of Employee)())
End Sub
<WebMethod()>
Public Shared Function GetCount(ByVal filterExpressions As String) As Integer
    Dim count As Integer = 0
    Using connection As New SqlConnection(ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString)
        Dim command As New SqlCommand([String].Format("SELECT COUNT(*) FROM Employees {0}", IIf((filterExpressions <> [String].Empty), [String].Format("WHERE {0}", filterExpressions), "")), connection)
        connection.Open()
        Dim reader As SqlDataReader = command.ExecuteReader()
        While reader.Read()
            count = reader.GetInt32(0)
        End While

        reader.Close()
    End Using
    Return count
End Function
<WebMethod()>
Public Shared Function GetData(ByVal startIndex As Integer, ByVal maximumRows As Integer, ByVal sortExpressions As String, ByVal filterExpressions As String) As List(Of Employee)
    startIndex = startIndex + 1
    Dim list As New List(Of Employee)()
    Dim sqlBuilder As New StringBuilder()
    sqlBuilder.AppendLine("DECLARE @startRowIndex int")
    sqlBuilder.AppendLine("DECLARE @maximumRows int")
    sqlBuilder.AppendLine([String].Format("SET @startRowIndex = {0}", startIndex))
    sqlBuilder.AppendLine([String].Format("SET @maximumRows = {0}", maximumRows))
    sqlBuilder.AppendLine("DECLARE @first_id int, @startRow int" & Chr(9) & "")
    sqlBuilder.AppendLine("SET ROWCOUNT @startRowIndex")
    sqlBuilder.AppendLine("SELECT ")
    sqlBuilder.AppendLine("" & Chr(9) & "@first_id = EmployeeID ")
    sqlBuilder.AppendLine("FROM Employees ")
    sqlBuilder.AppendLine("ORDER BY EmployeeID")
    sqlBuilder.AppendLine("SET ROWCOUNT @maximumRows")
    sqlBuilder.AppendLine("SELECT e.*")
    sqlBuilder.AppendLine("FROM Employees e")
    sqlBuilder.AppendLine("WHERE EmployeeID >= @first_id")
    Dim where As String = String.Empty
    If filterExpressions <> [String].Empty Then
        sqlBuilder.AppendLine([String].Format(" And {0}", filterExpressions))
    End If
    If sortExpressions <> [String].Empty Then
        sqlBuilder.AppendLine([String].Format(" Order By {0}", sortExpressions))
    End If
    Using connection As New SqlConnection(ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString)
        Dim command As New SqlCommand(sqlBuilder.ToString(), connection)
        connection.Open()
        Dim reader As SqlDataReader = command.ExecuteReader()
        While reader.Read()
            Dim newEmployee As New Employee()
            Dim i As Integer = 0
            While i < reader.FieldCount
                Select Case reader.GetName(i)
                    Case "EmployeeID"
                        newEmployee.EmployeeID = reader.GetInt32(i)
                        Exit Select
                    Case "LastName"
                        newEmployee.LastName = reader.GetString(i)
                        Exit Select
                    Case "FirstName"
                        newEmployee.FirstName = reader.GetString(i)
                        Exit Select
                    Case "Title"
                        newEmployee.Title = reader.GetString(i)
                        Exit Select
                    Case "TitleOfCourtesy"
                        newEmployee.TitleOfCourtesy = reader.GetString(i)
                        Exit Select
                    Case "BirthDate"
                        newEmployee.BirthDate = reader.GetDateTime(i)
                        Exit Select
                    Case Else
                        Exit Select
                End Select
                System.Math.Max(System.Threading.Interlocked.Increment(i), i - 1)
            End While
            list.Add(newEmployee)
        End While
        reader.Close()
    End Using
    Return list
End Function
Public Class Employee
    Private _EmployeeID As Integer
    Private _LastName As String
    Private _FirstName As String
    Private _Title As String
    Private _TitleOfCourtesy As String
    Private _BirthDate As System.Nullable(Of Date)

    Public Sub New()
    End Sub
    Public Property EmployeeID() As Integer
        Get
            Return Me._EmployeeID
        End Get
        Set(ByVal value As Integer)
            If (Me._EmployeeID <> value) Then
                Me._EmployeeID = value
            End If
        End Set
    End Property
    Public Property LastName() As String
        Get
            Return Me._LastName
        End Get
        Set(ByVal value As String)
            If (Me._LastName <> value) Then
                Me._LastName = value
            End If
        End Set
    End Property
    Public Property FirstName() As String
        Get
            Return Me._FirstName
        End Get
        Set(ByVal value As String)
            If (Me._FirstName <> value) Then
                Me._FirstName = value
            End If
        End Set
    End Property
    Public Property Title() As String
        Get
            Return Me._Title
        End Get
        Set(ByVal value As String)
            If (Me._Title <> value) Then
                Me._Title = value
            End If
        End Set
    End Property
    Public Property TitleOfCourtesy() As String
        Get
            Return Me._TitleOfCourtesy
        End Get
        Set(ByVal value As String)
            If (Me._TitleOfCourtesy <> value) Then
                Me._TitleOfCourtesy = value
            End If
        End Set
    End Property
    Public Property BirthDate() As System.Nullable(Of Date)
        Get
            Return Me._BirthDate
        End Get
        Set(ByVal value As System.Nullable(Of Date))
            If (Not Me._BirthDate.Equals(value)) Then
                Me._BirthDate = value
            End If
        End Set
    End Property
End Class
````

