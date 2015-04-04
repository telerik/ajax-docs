---
title: Client-side Editing
page_title: Client-side Editing | UI for ASP.NET AJAX Documentation
description: Client-side Editing
slug: grid/data-editing/client-side-editing
tags: client-side,editing
published: True
position: 13
---

# Client-side Editing



## 

RadGrid for ASP.NET AJAX supports client-side binding to web services or page methods as demonstrated in [this online demo](http://demos.telerik.com/aspnet-ajax/Grid/Examples/Client/InsertUpdateDelete/DefaultCS.aspx) of the product. In order to assign data source for the grid and refresh its state on the client, utilize the set_dataSource(dataSource) and dataBind() methods from its client-side API. Keep in mind that the data source passed as an argument to the set_dataSource method should have JSON signature which can be serialized by a web service or a page method.

The example illustrates how to:

* Extract information about the selected data item on the client

* Insert/ update/delete grid records client-side using external form

* Bind the grid on the client

The source for the grid is generated via web service (MyWebService.asmx).

Below are the code snippets from the sample:

>tabbedCode

````ASPNET
	   
	       <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	       <script type="text/javascript">
	           var employeeID, currentEmployee, currentRowIndex = null;
	           var employee =
	           {
	               EmployeeID: null,
	               FirstName: null,
	               LastName: null,
	               Title: null,
	               TitleOfCourtesy: null,
	               BirthDate: null,
	               Notes: null,
	
	               create: function () {
	                   var obj = new Object();
	                   obj.EmployeeID = "";
	                   obj.FirstName = "";
	                   obj.LastName = "";
	                   obj.Title = "";
	                   obj.TitleOfCourtesy = "";
	                   obj.BirthDate = "";
	                   obj.Notes = "";
	                   return obj;
	               }
	           };
	
	           function getDataItemKeyValue(radGrid, item) {
	               return parseInt(radGrid.get_masterTableView().getCellByColumnUniqueName(item, "EmployeeID").innerHTML);
	           }
	
	           function pageLoad(sender, args) {
	               //employeeID = $find("<%= RadGrid1.ClientID %>").get_masterTableView().get_dataItems()[0].getDataKeyValue("EmployeeID");
	               employeeID = getDataItemKeyValue($find("<%= RadGrid1.ClientID %>"), $find("<%= RadGrid1.ClientID %>").get_masterTableView().get_dataItems()[0]);
	               $find("<%= LastName.ClientID %>").focus();
	           }
	
	           function rowSelected(sender, args) {
	               //employeeID = args.getDataKeyValue("EmployeeID");
	               employeeID = getDataItemKeyValue(sender, args.get_gridDataItem());
	
	               currentRowIndex = args.get_gridDataItem().get_element().rowIndex;
	               $find("<%= RadTabStrip1.ClientID %>").set_selectedIndex(0);
	
	               MyWebService.GetEmployeeByEmployeeID(employeeID, setValues)
	           }
	
	           function setValues(employee) {
	               $get("<%= EmployeeID.ClientID %>").innerHTML = employee.EmployeeID;
	               $find("<%= LastName.ClientID %>").set_value(employee.LastName);
	               $find("<%= FirstName.ClientID %>").set_value(employee.FirstName);
	               $find("<%= Title.ClientID %>").set_value(employee.Title);
	               $find("<%= TitleOfCourtesy.ClientID %>").findItemByText(employee.TitleOfCourtesy).select();
	               $find("<%= BirthDate.ClientID %>").set_selectedDate(employee.BirthDate);
	               $find("<%= Notes.ClientID %>").set_html(employee.Notes);
	               $find("<%= LastName.ClientID %>").focus();
	           }
	           function getValues() {
	               employee.EmployeeID = $get("<%= EmployeeID.ClientID %>").innerHTML;
	               employee.LastName = $find("<%= LastName.ClientID %>").get_value();
	               employee.FirstName = $find("<%= FirstName.ClientID %>").get_value();
	               employee.Title = $find("<%= Title.ClientID %>").get_value();
	               employee.TitleOfCourtesy = $find("<%= TitleOfCourtesy.ClientID %>").get_value();
	               employee.BirthDate = $find("<%= BirthDate.ClientID %>").get_selectedDate();
	               employee.Notes = $find("<%= Notes.ClientID %>").get_html();
	               return employee;
	           }
	           function updateChanges() {
	               MyWebService.UpdateEmployeeByEmployee(getValues(), updateGrid);
	           }
	
	           function updateGrid(result) {
	               var tableView = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	               tableView.set_dataSource(result);
	               tableView.dataBind();
	
	               var grid = $find("<%= RadGrid1.ClientID %>");
	               grid.repaint();
	           }
	
	           function tabSelected(sender, args) {
	               if (currentEmployee == null) {
	                   currentEmployee = getValues();
	               }
	
	               switch (args.get_tab().get_index()) {
	                   case 1:
	                       {
	                           var gridItems = $find("<%= RadGrid1.ClientID %>").get_masterTableView().get_dataItems();
	                           //var newID = parseInt(gridItems[gridItems.length - 1].getDataKeyValue("EmployeeID")) + 1;                                                
	                           var newID = getDataItemKeyValue($find("<%= RadGrid1.ClientID %>"), gridItems[gridItems.length - 1]) + 1;
	                           var newEmployee = employee.create();
	                           newEmployee.EmployeeID = newID;
	                           setValues(newEmployee);
	
	                           $get(" <%= SaveChanges.ClientID %>").value = "Add";
	                           $get(" <%= Delete.ClientID %>").style.display = "none";
	
	                           break;
	                       }
	                   default:
	                       {
	                           setValues(currentEmployee);
	                           currentEmployee = null;
	                           $get(" <%= SaveChanges.ClientID %>").value = "Save";
	                           $get(" <%= Delete.ClientID %>").style.display = "";
	                           break;
	                       }
	               }
	           }
	
	           function deleteCurrent() {
	               var table = $find("<%= RadGrid1.ClientID %>").get_masterTableView().get_element();
	               var row = table.rows[currentRowIndex];
	               table.deleteRow(currentRowIndex);
	
	               var dataItem = $find(row.id);
	               if (dataItem) {
	                   dataItem.dispose();
	                   Array.remove($find(" <%= RadGrid1.ClientID %>").get_masterTableView()._dataItems, dataItem);
	               }
	
	               var gridItems = $find("<%= RadGrid1.ClientID %>").get_masterTableView().get_dataItems();
	               MyWebService.DeleteEmployeeByEmployeeID(employeeID, updateGrid);
	               gridItems[gridItems.length - 1].set_selected(true);
	           }
	                       
	       </script>
	       </telerik:RadCodeBlock>
	   
	       <div style="height: 100%; padding: 10px">
	    
	       <telerik:RadGrid ID="RadGrid1" CssClass="grid" DataSourceID="SqlDataSource1" runat="server" Skin="Silk"
	           GridLines="None" OnDataBound="RadGrid1_DataBound" OnColumnCreated="RadGrid1_ColumnCreated" Height="300px">
	           <MasterTableView TableLayout="Fixed" ClientDataKeyNames="EmployeeID" />                       
	           <ClientSettings>
	               <Selecting AllowRowSelect="true" />
	               <ClientEvents OnRowSelected="rowSelected"/>
	               <Scrolling AllowScroll="true" UseStaticHeaders="true" />
	           </ClientSettings>
	       </telerik:RadGrid>   
	       
	       <asp:SqlDataSource runat="server" ID="SqlDataSource1"
	           ConflictDetection="CompareAllValues"
	           ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"            
	           SelectCommand="SELECT [EmployeeID], [LastName], [FirstName], [Title], [TitleOfCourtesy], [BirthDate], [Notes] FROM [Employees]">            
	       </asp:SqlDataSource>
	       
	       <telerik:RadTabStrip ID="RadTabStrip1" OnClientTabSelected="tabSelected" Style="margin-top: 10px;"
	           SelectedIndex="0" runat="server" Skin="Silk">
	           <Tabs>
	               <telerik:RadTab Text="Edit employee" />
	               <telerik:RadTab Text="Add new employee" />
	           </Tabs>
	       </telerik:RadTabStrip>
	       <div style="border: 1px solid threedshadow;">
	           <table border="0" style="margin-top: 20px; width: 100%;">
	               <tr>
	                   <td>
	                        Employee ID:
	                   </td>
	                   <td>
	                        <asp:Label ID="EmployeeID" Style="float: left; font-weight: bold;" runat="server" />
	                        <asp:Button ID="SaveChanges" CssClass="button" Style="float: right; color: black;
	                            font-weight: bold;" OnClientClick="updateChanges(); return false;" Text="Save"
	                            runat="server" />
	                        <asp:Button ID="Delete" CssClass="button" Style="float: right; margin-right: 10px;
	                            color: black; font-weight: bold;" OnClientClick="if(!confirm('Are you sure you want to delete this employee?'))return false; deleteCurrent(); return false;"
	                            Text="Delete" runat="server" />
	                   </td>
	               </tr>
	               <tr>
	                   <td>
	                        Last name:
	                   </td>
	                   <td>
	                        <telerik:RadTextBox ID="LastName" runat="server" Skin="Silk" />
	                   </td>
	               </tr>
	               <tr>
	                   <td>
	                        First name:
	                   </td>
	                   <td>
	                        <telerik:RadTextBox ID="FirstName" runat="server" Skin="Silk" />
	                   </td>
	               </tr>
	               <tr>
	                   <td>
	                        Title:
	                   </td>
	                   <td>
	                        <telerik:RadTextBox ID="Title" runat="server" Skin="Silk" />
	                   </td>
	               </tr>
	               <tr>
	                   <td>
	                        Title of courtesy:
	                   </td>
	                   <td>
	                        <telerik:RadComboBox ID="TitleOfCourtesy" runat="server" Skin="Silk">
	                            <Items>
	                                <telerik:RadComboBoxItem Text="" Value="" />
	                                <telerik:RadComboBoxItem Text="Dr." Value="Dr." />
	                                <telerik:RadComboBoxItem Text="Mr." Value="Mr." />
	                                <telerik:RadComboBoxItem Text="Mrs." Value="Mrs." />
	                                <telerik:RadComboBoxItem Text="Ms." Value="Ms." />
	                            </Items>
	                        </telerik:RadComboBox>
	                   </td>
	               </tr>
	               <tr>
	                   <td>
	                        Birth date:
	                   </td>
	                   <td>
	                        <telerik:RadDatePicker ID="BirthDate" MinDate="01/01/1900" runat="server" Skin="Silk" />
	                   </td>
	               </tr>
	               <tr>
	                   <td style="vertical-align: top;">
	                        Notes:
	                   </td>
	                   <td style="height: 400px;float:left;">
	                        <telerik:RadEditor ID="Notes"  Width="100%" runat="server" Skin="Silk" />
	                   </td>
	               </tr>
	           </table>
	       </div>
	
	
	
	
				
````
````C#
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        Notes.Modules.Clear();
	        Notes.Tools.Clear();
	        Notes.EditModes = EditModes.Design;
	        RadGrid1.SelectedIndexes.Add(0);
	    }
	    protected void RadGrid1_DataBound(object sender, EventArgs e)
	    {
	        GridDataItem selectedItem = RadGrid1.Items[0];
	        EmployeeID.Text = selectedItem["EmployeeID"].Text;
	        FirstName.Text = selectedItem["FirstName"].Text;
	        LastName.Text = selectedItem["LastName"].Text;
	        Title.Text = selectedItem["Title"].Text;
	        TitleOfCourtesy.FindItemByText(selectedItem["TitleOfCourtesy"].Text).Selected = true;
	        BirthDate.SelectedDate = DateTime.Parse(selectedItem["BirthDate"].Text);
	        Notes.Content = selectedItem["Notes"].Text;
	    }
	    protected void RadGrid1_ColumnCreated(object sender, GridColumnCreatedEventArgs e)
	    {
	        if (e.Column.IsBoundToFieldName("BirthDate"))
	        {
	            ((GridBoundColumn)e.Column).DataFormatString = "{0:MM/dd/yyyy}";
	        }
	        else if (e.Column.IsBoundToFieldName("Notes"))
	        {
	            e.Column.Visible = false;
	        }
	    }
````
````VB.NET
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	        Notes.Modules.Clear()
	        Notes.Tools.Clear()
	        Notes.EditModes = EditModes.Design
	        RadGrid1.SelectedIndexes.Add(0)
	    End Sub
	    Protected Sub RadGrid1_DataBound(ByVal sender As Object, ByVal e As EventArgs)
	        Dim selectedItem As GridDataItem = RadGrid1.Items(0)
	        EmployeeID.Text = selectedItem("EmployeeID").Text
	        FirstName.Text = selectedItem("FirstName").Text
	        LastName.Text = selectedItem("LastName").Text
	        Title.Text = selectedItem("Title").Text
	        TitleOfCourtesy.FindItemByText(selectedItem("TitleOfCourtesy").Text).Selected = True
	        BirthDate.SelectedDate = DateTime.Parse(selectedItem("BirthDate").Text)
	        Notes.Content = selectedItem("Notes").Text
	    End Sub
	    Protected Sub RadGrid1_ColumnCreated(ByVal sender As Object, ByVal e As GridColumnCreatedEventArgs)
	        If e.Column.IsBoundToFieldName("BirthDate") Then
	            DirectCast(e.Column, GridBoundColumn).DataFormatString = "{0:MM/dd/yyyy}"
	        ElseIf e.Column.IsBoundToFieldName("Notes") Then
	            e.Column.Visible = False
	        End If
	    End Sub
````
>end

>tabbedCode

````C#
	    using System;
	    using System.Collections.Generic;
	    using System.Globalization;
	    using System.Text;
	    using System.Web;
	    using System.Web.Script.Services;
	    using System.Web.Services;
	    using System.Web.UI;
	    [WebService(Namespace = "http://tempuri.org/")]
	    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
	    [ScriptService]
	    public class MyWebService : System.Web.Services.WebService
	    {    
	          EmployeesList employeesList = null;
	   
	        public MyWebService()
	        {        
	            employeesList = new EmployeesList();
	            if (HttpContext.Current.Session["MyData"] == null)
	            {            
	                HttpContext.Current.Session["MyData"] = employeesList;
	            }
	        }
	   
	        [WebMethod(EnableSession=true)]
	        public EmployeesList UpdateEmployeeByEmployee(Employee employee)
	        {
	            Employee employeeToUpdate = GetEmployeeByEmployeeID(employee.EmployeeID);
	            EmployeesList list = (EmployeesList)HttpContext.Current.Session["MyData"];
	            if (employeeToUpdate == null)
	            {
	                employeeToUpdate = new Employee();
	                employeeToUpdate.EmployeeID = employee.EmployeeID;
	                list.Add(employeeToUpdate);           
	            }
	            employeeToUpdate.LastName = employee.LastName;
	            employeeToUpdate.FirstName = employee.FirstName;
	            employeeToUpdate.Title = employee.Title;
	            employeeToUpdate.TitleOfCourtesy = employee.TitleOfCourtesy;
	            employeeToUpdate.BirthDate = employee.BirthDate;
	            employeeToUpdate.Notes = employee.Notes;
	            HttpContext.Current.Session["MyData"] = list;
	       
	            return list;
	        }
	        [WebMethod(EnableSession = true)]
	        public EmployeesList DeleteEmployeeByEmployeeID(int employeeID)
	        {
	            Employee employeeToDelete = GetEmployeeByEmployeeID(employeeID);
	            EmployeesList list = (EmployeesList)HttpContext.Current.Session["MyData"];
	            list.Remove(employeeToDelete);
	            HttpContext.Current.Session["MyData"] = list;
	            return list;
	        }
	
	        [WebMethod(EnableSession = true)]
	        public Employee GetEmployeeByEmployeeID(int employeeID)
	        {
	            EmployeesList list = (EmployeesList)HttpContext.Current.Session["MyData"];
	            return list.GetEmployeeByEmployeeID(employeeID);
	        }
	    }
	
````



````VB.NET
	    Imports System
	Imports System.Collections.Generic
	Imports System.Globalization
	Imports System.Text
	Imports System.Web
	Imports System.Web.Script.Services
	Imports System.Web.Services
	Imports System.Web.UI
	    <WebService([Namespace]:="http://tempuri.org/")> _
	    <WebServiceBinding(ConformsTo:=WsiProfiles.BasicProfile1_1)> _
	    <ScriptService()> _
	    Public Class MyWebService
	        Inherits System.Web.Services.WebService
	        Private employeesList As EmployeesList = Nothing
	        Public Sub New()
	            employeesList = New EmployeesList()
	            If HttpContext.Current.Session("MyData") = Nothing Then
	                HttpContext.Current.Session("MyData") = employeesList
	            End If
	        End Sub
	        <WebMethod(EnableSession:=True)> _
	        Public Function UpdateEmployeeByEmployee(ByVal employee As Employee) As EmployeesList
	            Dim employeeToUpdate As Employee = GetEmployeeByEmployeeID(employee.EmployeeID)
	            Dim list As EmployeesList = DirectCast(HttpContext.Current.Session("MyData"), EmployeesList)
	            If employeeToUpdate = Nothing Then
	                employeeToUpdate = New Employee()
	                employeeToUpdate.EmployeeID = employee.EmployeeID
	                list.Add(employeeToUpdate)
	            End If
	            employeeToUpdate.LastName = employee.LastName
	            employeeToUpdate.FirstName = employee.FirstName
	            employeeToUpdate.Title = employee.Title
	            employeeToUpdate.TitleOfCourtesy = employee.TitleOfCourtesy
	            employeeToUpdate.BirthDate = employee.BirthDate
	            employeeToUpdate.Notes = employee.Notes
	            HttpContext.Current.Session("MyData") = list
	            Return list
	        End Function
	        <WebMethod(EnableSession:=True)> _
	        Public Function DeleteEmployeeByEmployeeID(ByVal employeeID As Integer) As EmployeesList
	            Dim employeeToDelete As Employee = GetEmployeeByEmployeeID(employeeID)
	            Dim list As EmployeesList = DirectCast(HttpContext.Current.Session("MyData"), EmployeesList)
	            list.Remove(employeeToDelete)
	            HttpContext.Current.Session("MyData") = list
	            Return list
	        End Function
	
	        <WebMethod(EnableSession:=True)> _
	        Public Function GetEmployeeByEmployeeID(ByVal employeeID As Integer) As Employee
	            Dim list As EmployeesList = DirectCast(HttpContext.Current.Session("MyData"), EmployeesList)
	            Return list.GetEmployeeByEmployeeID(employeeID)
	        End Function
	    End Class
	
````


>end

>tabbedCode

````C#
	public class EmployeesList : List<Employee>
	{
	   #region Constuctors
	   public EmployeesList()
	   {
	       LoadAllEmployees();
	   }
````



````VB.NET
	    Public Class EmployeesList
	        Inherits List(Of Employee)
	        Public Sub New()
	            LoadAllEmployees()
	        End Sub
	        Private Sub LoadAllEmployees()
	            If Me.Count > 0 Then
	                Me.Clear()
	            End If
	            Dim conn As New SqlConnection(ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString)
	            Dim cmd As New SqlCommand("SELECT [EmployeeID], [LastName], [FirstName], [Title], [TitleOfCourtesy], [BirthDate], [Notes] FROM [Employees]", conn)
	            cmd.CommandType = CommandType.Text
	            Try
	                conn.Open()
	                Dim dr As SqlDataReader = cmd.ExecuteReader()
	                While dr.Read()
	                    Me.Add(New Employee(dr))
	                End While
	            Finally
	                conn.Close()
	            End Try
	        End Sub
	        Public Function GetEmployeeByEmployeeID(ByVal id As Integer) As Employee
	            For Each employee As Employee In Me
	                If employee.EmployeeID = id Then
	                    Return employee
	                End If
	            Next
	            Return Nothing
	        End Function
	    End Class
````


>end

>tabbedCode

````C#
	public class Employee
	{    
	   #region Private fields
	   private int _EmployeeID;
	   private string _LastName;
	   private string _FirstName;
	   private string _Title;
	   private string _TitleOfCourtesy;
	   private System.Nullable<System.DateTime> _BirthDate;
	   private string _Notes;
````



````VB.NET
	    Public Class Employee
	        Private _EmployeeID As Integer
	        Private _LastName As String
	        Private _FirstName As String
	        Private _Title As String
	        Private _TitleOfCourtesy As String
	        Private _BirthDate As System.Nullable(Of Date)
	        Private _Notes As String
	        Public Sub New()
	        End Sub
	        Public Sub New(ByVal reader As SqlDataReader)
	            _EmployeeID = Convert.ToInt32(reader("EmployeeID"))
	            _LastName = reader("LastName").ToString()
	            _FirstName = reader("FirstName").ToString()
	            _Title = reader("Title").ToString()
	            _TitleOfCourtesy = reader("TitleOfCourtesy").ToString()
	            _BirthDate = Convert.ToDateTime(reader("BirthDate"))
	            _Notes = reader("Notes").ToString()
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
	                If (Me._BirthDate <> value) Then
	                    Me._BirthDate = value
	                End If
	            End Set
	        End Property
	        Public Property Notes() As String
	            Get
	                Return Me._Notes
	            End Get
	            Set(ByVal value As String)
	                If (Me._Notes <> value) Then
	                    Me._Notes = value
	                End If
	            End Set
	        End Property
	    End Class
````


>end
