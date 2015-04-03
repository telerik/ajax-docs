---
title: Various Data Sources
page_title: Various Data Sources | UI for ASP.NET AJAX Documentation
description: Various Data Sources
slug: listview/data-binding/server-side/various-data-sources
tags: various,data,sources
published: True
position: 3
---

# Various Data Sources



## 

RadListView is a component that displays data obtained from a database or other data source. The data is presented in a set of predefined layouts or a custom layout you defined for the listview and its items.

There are three ways to bind the listview control to a database:

* *Using declarative data source controls* - By using declarative data source controls (introduced in ASP.NET 2.x and ASP.NET 35), you can bind the grid declaratively, with no coding necessary.

* *Using the NeedDataSource event* - RadListView calls this event each time it needs a data source.

* *ASP.NET ListView-like binding* - You can set the __DataSource__ property manually in the control declaration. This property specifies the database, which is then used as a source for the grid.

>note When binding RadListView by setting the __DataSource__ property, you can set the __DataSource__ property to an instance of any of the following types:
>
*  __DataSet__ , __DataTable__ , or __DataView__ 
* Array of __DataRow__ 
* Any object collection that implements the __IListSource__ , __IList__ , __IEnumerable__ , or __ICustomTypeDescriptor__ interface.>


You can use a wide variety of data sources for RadListView structure generation (the only requirement is that these custom objects implement the __ITypedList/IEnumarable/ICustomTypeDescriptor__ interfaces). The code in the next paragraph demonstrates how to:

* use __ArrayList__ object for Telerik RadListView structure generation

* bind the listview to list of custom objects (Generic list)

* bind RadListView to a __DataReader__

>tabbedCode

````C#
	    <asp:ScriptManager ID="ScriptManager1" runat="server" />
	    <br />
	    <telerik:RadFormDecorator ID="RadFormDecorator1" runat="server" />
	    <table id="Table1" cellspacing="1" cellpadding="11" border="0" rules="rows" style="width: 95%;">
	        <tr>
	            <td style="white-space: nowrap">
	                <b>Binding RadListView to:</b>
	            </td>
	            <td>
	            </td>
	        </tr>
	        <tr>
	            <td valign="top">
	                <h3>
	                    Array list:</h3>
	            </td>
	            <td>
	                <telerik:RadListView ID="RadListView1" runat="server" ItemPlaceholderID="CityItemsHolder"
	                    OnNeedDataSource="RadListView1_NeedDataSource">
	                    <LayoutTemplate>
	                        <fieldset style="width: 300px;">
	                            <legend>Cities</legend>
	                            <asp:Panel ID="CityItemsHolder" runat="server" />
	                        </fieldset>
	                    </LayoutTemplate>
	                    <ItemTemplate>
	                        <span>
	                            <%#<legacyBold xmlns="http://ddue.schemas.microsoft.com/authoring/2003/5"> Container.DataItem </legacyBold>%></span>
	                    </ItemTemplate>
	                    <ItemSeparatorTemplate>
	                        <span style="color: Olive; font-weight: bold;">&nbsp;&nbsp;::&nbsp;&nbsp;</span>
	                    </ItemSeparatorTemplate>
	                </telerik:RadListView>
	            </td>
	        </tr>
	        <tr>
	            <td valign="top">
	                <h3>
	                    Generic list:</h3>
	            </td>
	            <td>
	                <telerik:RadListView ID="RadListView2" runat="server" ItemPlaceholderID="ProductsHolder"
	                    OnNeedDataSource="RadListView2_NeedDataSource">
	                    <LayoutTemplate>
	                        <fieldset style="width: 700px;">
	                            <legend>Products</legend>
	                            <asp:Panel ID="ProductsHolder" runat="server" />
	                        </fieldset>
	                    </LayoutTemplate>
	                    <ItemTemplate>
	                        <div style="float: left">
	                            <table cellpadding="0" cellspacing="0" style="width: 230px;">
	                                <tr>
	                                    <td style="width: 20%;">
	                                        Name:
	                                    </td>
	                                    <td style="width: 80%; padding-left: 5px;">
	                                        <%#<legacyBold xmlns="http://ddue.schemas.microsoft.com/authoring/2003/5"> (Container.DataItem as Telerik.Web.Examples.Grid.MyBusinessObject).Name </legacyBold>%>
	                                    </td>
	                                </tr>
	                                <tr>
	                                    <td>
	                                        Price:
	                                    </td>
	                                    <td style="width: 80%; padding-left: 5px;">
	                                        <%#<legacyBold xmlns="http://ddue.schemas.microsoft.com/authoring/2003/5"> String.Format("{0:C}",(Container.DataItem as Telerik.Web.Examples.Grid.MyBusinessObject).UnitPrice) </legacyBold>%>
	                                    </td>
	                                </tr>
	                                <tr>
	                                    <td>
	                                        Date:
	                                    </td>
	                                    <td style="width: 80%; padding-left: 5px;">
	                                        <%#<legacyBold xmlns="http://ddue.schemas.microsoft.com/authoring/2003/5"> String.Format("{0:d}", (Container.DataItem as Telerik.Web.Examples.Grid.MyBusinessObject).Date) </legacyBold>%>
	                                    </td>
	                                </tr>
	                                <tr>
	                                    <td>
	                                        Available:
	                                    </td>
	                                    <td style="width: 80%; padding-left: 5px;">
	                                        <%#<legacyBold xmlns="http://ddue.schemas.microsoft.com/authoring/2003/5"> ((bool)DataBinder.Eval(Container.DataItem,"Discontinued") == false ? "Yes" : "No") </legacyBold>%>
	                                    </td>
	                                </tr>
	                                <tr>
	                                    <td>
	                                        <hr />
	                                    </td>
	                                    <td>
	                                        <hr />
	                                    </td>
	                                </tr>
	                            </table>
	                        </div>
	                    </ItemTemplate>
	                </telerik:RadListView>
	            </td>
	        </tr>
	        <tr>
	            <td valign="top">
	                <h3>
	                    DataReader:</h3>
	            </td>
	            <td>
	                <telerik:RadListView ID="RadListView3" runat="server" ItemPlaceholderID="ShippersHolder"
	                    OnNeedDataSource="RadListView3_NeedDataSource" OnDataBound="RadListView3_DataBound">
	                    <LayoutTemplate>
	                        <fieldset style="width: 300px;">
	                            <legend>Shippers</legend>
	                            <asp:Panel ID="ShippersHolder" runat="server" />
	                        </fieldset>
	                    </LayoutTemplate>
	                    <ItemTemplate>
	                        <table width="100%">
	                            <colgroup>
	                                <col title="Shipper name" />
	                                <col title="Phone" />
	                            </colgroup>
	                            <tr>
	                                <td style="width: 50%">
	                                    <%#<legacyBold xmlns="http://ddue.schemas.microsoft.com/authoring/2003/5"> Eval("CompanyName") </legacyBold>%>
	                                </td>
	                                <td style="width: 50%">
	                                    <%#<legacyBold xmlns="http://ddue.schemas.microsoft.com/authoring/2003/5"> Eval("Phone") </legacyBold>%>
	                                </td>
	                            </tr>
	                        </table>
	                    </ItemTemplate>
	                </telerik:RadListView>
	            </td>
	        </tr>
	    </table>
````



````VB.NET
	    <asp:ScriptManager ID="ScriptManager1" runat="server" />
	    <br />
	    <telerik:RadFormDecorator ID="RadFormDecorator1" runat="server" />
	    <table id="Table1" cellspacing="1" cellpadding="11" border="0" rules="rows" style="width: 95%;">
	        <tr>
	            <td style="white-space: nowrap">
	                <b>Binding RadListView to:</b>
	            </td>
	            <td>
	            </td>
	        </tr>
	        <tr>
	            <td valign="top">
	                <h3>
	                    Array list:</h3>
	            </td>
	            <td>
	                <telerik:RadListView ID="RadListView1" runat="server" ItemPlaceholderID="CityItemsHolder">
	                    <LayoutTemplate>
	                        <fieldset style="width: 300px;">
	                            <legend>Cities</legend>
	                            <asp:Panel ID="CityItemsHolder" runat="server" />
	                        </fieldset>
	                    </LayoutTemplate>
	                    <ItemTemplate>
	                        <span>
	                            <%#<legacyBold xmlns="http://ddue.schemas.microsoft.com/authoring/2003/5"> Container.DataItem </legacyBold>%></span>
	                    </ItemTemplate>
	                    <ItemSeparatorTemplate>
	                        <span style="color: Olive; font-weight: bold;">&nbsp;&nbsp;::&nbsp;&nbsp;</span>
	                    </ItemSeparatorTemplate>
	                </telerik:RadListView>
	            </td>
	        </tr>
	        <tr>
	            <td valign="top">
	                <h3>
	                    Generic list:</h3>
	            </td>
	            <td>
	                <telerik:RadListView ID="RadListView2" runat="server" ItemPlaceholderID="ProductsHolder">
	                    <LayoutTemplate>
	                        <fieldset style="width: 700px;">
	                            <legend>Products</legend>
	                            <asp:Panel ID="ProductsHolder" runat="server" />
	                        </fieldset>
	                    </LayoutTemplate>
	                    <ItemTemplate>
	                        <div style="float: left">
	                            <table cellpadding="0" cellspacing="0" style="width: 230px;">
	                                <tr>
	                                    <td style="width: 20%;">
	                                        Name:
	                                    </td>
	                                    <td style="width: 80%; padding-left: 5px;">
	                                        <%#<legacyBold xmlns="http://ddue.schemas.microsoft.com/authoring/2003/5">CType(Container.DataItem, Telerik.Web.Examples.Grid.MyBusinessObject).Name</legacyBold>%>
	                                    </td>
	                                </tr>
	                                <tr>
	                                    <td>
	                                        Price:
	                                    </td>
	                                    <td style="width: 80%; padding-left: 5px;">
	                                        <%#<legacyBold xmlns="http://ddue.schemas.microsoft.com/authoring/2003/5">String.Format("{0:C}", CType(Container.DataItem, Telerik.Web.Examples.Grid.MyBusinessObject).UnitPrice)</legacyBold>%>
	                                    </td>
	                                </tr>
	                                <tr>
	                                    <td>
	                                        Date:
	                                    </td>
	                                    <td style="width: 80%; padding-left: 5px;">
	                                        <%#<legacyBold xmlns="http://ddue.schemas.microsoft.com/authoring/2003/5">String.Format("{0:d}", CType(Container.DataItem, Telerik.Web.Examples.Grid.MyBusinessObject).Date)</legacyBold>%>
	                                    </td>
	                                </tr>
	                                <tr>
	                                    <td>
	                                        Available:
	                                    </td>
	                                    <td style="width: 80%; padding-left: 5px;">
	                                        <%#<legacyBold xmlns="http://ddue.schemas.microsoft.com/authoring/2003/5">IIf(DataBinder.Eval(Container.DataItem, "Discontinued") = False, "Yes", "No")</legacyBold>%>
	                                    </td>
	                                </tr>
	                                <tr>
	                                    <td>
	                                        <hr />
	                                    </td>
	                                    <td>
	                                        <hr />
	                                    </td>
	                                </tr>
	                            </table>
	                        </div>
	                    </ItemTemplate>
	                </telerik:RadListView>
	            </td>
	        </tr>
	        <tr>
	            <td valign="top">
	                <h3>
	                    DataReader:</h3>
	            </td>
	            <td>
	                <telerik:RadListView ID="RadListView3" runat="server" ItemPlaceholderID="ShippersHolder">
	                    <LayoutTemplate>
	                        <fieldset style="width: 300px;">
	                            <legend>Shippers</legend>
	                            <asp:Panel ID="ShippersHolder" runat="server" />
	                        </fieldset>
	                    </LayoutTemplate>
	                    <ItemTemplate>
	                        <table width="100%">
	                            <colgroup>
	                                <col title="Shipper name" />
	                                <col title="Phone" />
	                            </colgroup>
	                            <tr>
	                                <td style="width: 50%">
	                                    <%#<legacyBold xmlns="http://ddue.schemas.microsoft.com/authoring/2003/5"> Eval("CompanyName") </legacyBold>%>
	                                </td>
	                                <td style="width: 50%">
	                                    <%#<legacyBold xmlns="http://ddue.schemas.microsoft.com/authoring/2003/5"> Eval("Phone") </legacyBold>%>
	                                </td>
	                            </tr>
	                        </table>
	                    </ItemTemplate>
	                </telerik:RadListView>
	            </td>
	        </tr>
	    </table>
````


>end

>tabbedCode

````C#
	    protected void RadListView1_NeedDataSource(object source, Telerik.Web.UI.RadListViewNeedDataSourceEventArgs e)        
	    {            
	        ArrayList list = new ArrayList();            
	        list.Add("New York");            
	        list.Add("Madrid");            
	        list.Add("Rome");            
	        list.Add("Tokio");            
	        list.Add("Moscow");            
	        RadListView1.DataSource = list;        
	    }      
	    protected void RadListView2_NeedDataSource(object source, Telerik.Web.UI.RadListViewNeedDataSourceEventArgs e)        
	    {            
	        MyBusinessObjectCollection col = new MyBusinessObjectCollection();            
	        List<MyBusinessObject> productsCollection = col.Select(1,9);            
	        this.RadListView2.DataSource = productsCollection;        
	    }      
	    SqlConnection conn = null;        
	    SqlDataReader reader = null;        
	    protected void RadListView3_NeedDataSource(object source, Telerik.Web.UI.RadListViewNeedDataSourceEventArgs e)        
	    {            
	        RadListView3.DataSource = ReadRecords("SELECT ShipperID, CompanyName, Phone FROM Shippers");        
	    }       
	    private SqlDataReader ReadRecords(string query)        
	    {            
	        String ConnString = ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;            
	        conn = new SqlConnection(ConnString);            
	        conn.Open();            
	        SqlCommand cmd = new SqlCommand(query, conn);            
	        reader = cmd.ExecuteReader();            
	        return reader;        
	    }     
	    protected void RadListView3_DataBound(object sender, System.EventArgs e)        
	    {            
	        reader.Close();            
	        conn.Close();        
	    }			
````



````VB.NET
	    Protected Sub RadListView1_NeedDataSource(ByVal source As Object, ByVal e As Telerik.Web.UI.RadListViewNeedDataSourceEventArgs) Handles RadListView1.NeedDataSource
	        Dim list As New ArrayList()
	
	        list.Add("New York")
	        list.Add("Madrid")
	        list.Add("Rome")
	        list.Add("Tokio")
	        list.Add("Moscow")
	
	        RadListView1.DataSource = list
	    End Sub
	
	    Protected Sub RadListView2_NeedDataSource(ByVal source As Object, ByVal e As Telerik.Web.UI.RadListViewNeedDataSourceEventArgs) Handles RadListView2.NeedDataSource
	        Dim col As New MyBusinessObjectCollection()
	        Dim productsCollection As List(Of MyBusinessObject) = col.[Select](1, 9)
	
	        Me.RadListView2.DataSource = productsCollection
	    End Sub
	
	    Private conn As SqlConnection = Nothing
	    Private reader As SqlDataReader = Nothing
	
	    Protected Sub RadListView3_NeedDataSource(ByVal source As Object, ByVal e As Telerik.Web.UI.RadListViewNeedDataSourceEventArgs) Handles RadListView3.NeedDataSource
	        RadListView3.DataSource = ReadRecords("SELECT ShipperID, CompanyName, Phone FROM Shippers")
	    End Sub
	
	    Private Function ReadRecords(ByVal query As String) As SqlDataReader
	        Dim ConnString As [String] = ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString
	        conn = New SqlConnection(ConnString)
	        conn.Open()
	
	        Dim cmd As New SqlCommand(query, conn)
	        reader = cmd.ExecuteReader()
	
	        Return reader
	    End Function
	
	    Protected Sub ListView3_DataBound(ByVal sender As Object, ByVal e As System.EventArgs) Handles RadListView3.DataBound
	        reader.Close()
	        conn.Close()
	    End Sub
````


>end

>tabbedCode

````C#
	using System;
	using System.Collections.Generic;
	using Telerik.Web.UI;
	using System.ComponentModel;
	namespace Telerik.Web.Examples.Grid
	{ 
	    public class MyBusinessObjectCollection    
	    {        
	        const int _maxItems = 100000;        
	        string[] names = new string[]{ "C?te de Blaye", "Boston Crab Meat", "Singaporean Hokkien Fried Mee", "Gula Malacca", "Rogede sild", "Spegesild", "Zaanse koeken", "Chocolade", "Maxilaku", "Valkoinen suklaa" };       
	        double[] prizes = new double[] { 23.2500, 9.0000, 45.6000, 32.0000, 14.0000, 19.0000, 263.5000, 18.4000, 3.0000, 14.0000 };     
	        DateTime[] dates = new DateTime[] { new DateTime(2007, 5, 10), new DateTime(2008, 9, 13), new DateTime(2008, 2, 22), new DateTime(2009, 1, 2), new DateTime(2007, 4, 13), new DateTime(2008, 5, 12), new DateTime(2008, 1, 19), new DateTime(2008, 8, 26), new DateTime(2008, 7, 31), new DateTime(2007, 7, 16) };     
	        bool[] bools = new bool[] { true, false, true, false, true, false, true, false, true, false };      
	        public MyBusinessObjectCollection()     
	        {    
	        }   
	        public int SelectCount()      
	        {          
	            return _maxItems;     
	        }      
	        public List<MyBusinessObject> Select()     
	        {       
	            if (System.Web.HttpContext.Current.Cache["data"] == null)      
	            {             
	                System.Web.HttpContext.Current.Cache["data"] = Select(0, _maxItems);    
	            }           
	            return (List<MyBusinessObject>)System.Web.HttpContext.Current.Cache["data"];    
	        }       
	        public List<MyBusinessObject> Select(int startRowIndex, int maximumRows)   
	        {        
	            Random Random1 = new Random();       
	            List<MyBusinessObject> list = new List<MyBusinessObject>();     
	            int i = startRowIndex;     
	            while (i < Math.Min(_maxItems, startRowIndex + maximumRows))     
	            {            
	                MyBusinessObject Product1 = new MyBusinessObject();    
	                Product1.ID = i;            
	                Product1.Name = names[Random1.Next(9)];   
	                Product1.UnitPrice = prizes[Random1.Next(9)];     
	                Product1.Date = dates[Random1.Next(9)];              
	                Product1.Discontinued = bools[Random1.Next(9)]; 
	                list.Add(Product1);       
	                i++;    
	            }    
	            return list;   
	        } 
	    }
	
	    public class MyBusinessObject  
	    {    
	        private int _id;   
	        private string _name;    
	        private double _unitPrice; 
	        private DateTime _date;   
	        private bool _discontinued; 
	        public MyBusinessObject()     
	        {     
	        }     
	        public MyBusinessObject(int _id, string _name, double _unitPrice, DateTime _date, bool _discontinued)     
	        {          
	            this._id = _id;      
	            this._name = _name;     
	            this._unitPrice = _unitPrice;  
	            this._date = _date;         
	            this._discontinued = _discontinued;    
	        }        public int ID   
	        {   
	            get { return _id; }    
	            set { _id = value; }   
	        }     
	        public string Name  
	        {   
	            get { return _name; } 
	            set { _name = value; }     
	        }       
	        public double UnitPrice    
	        {          
	            get { return _unitPrice; }      
	            set { _unitPrice = value; }      
	        }        public DateTime Date   
	        {          
	            get { return _date; } 
	            set { _date = value; }    
	        }        public bool Discontinued     
	        {         
	            get { return _discontinued; }      
	            set { _discontinued = value; }     
	        }
	    }   
	    public class GridGenericSorter<T> : IComparer<T> 
	    {    
	        GridSortExpression _expression = null; 
	        PropertyDescriptor _descriptor = null;        
	        public GridGenericSorter(GridSortExpression expression)   
	        {          
	            _descriptor = TypeDescriptor.GetProperties(GetType().GetGenericArguments()[0]).Find(expression.FieldName, true);       
	            _expression = expression;    
	        }     
	        public int Compare(T o1, T o2)  
	            {     
	                IComparable comparable1 = (IComparable)_descriptor.GetValue(o1);           
	            IComparable comparable2 = (IComparable)_descriptor.GetValue(o2);       
	            if (_expression.SortOrder == GridSortOrder.Ascending)    
	            {           
	                return comparable1.CompareTo(comparable2);           
	            }            else   
	            {       
	                return comparable2.CompareTo(comparable1);         
	            }  
	        }   
	    }   
	    public class GridGenericFilterer<T>  
	    {   
	        GridFilterExpression _expression = null;      
	        PropertyDescriptor _descriptor = null;      
	        Type _propertyType = null;    
	        GridKnownFunction _filterFunction;  
	        public GridGenericFilterer(GridFilterExpression expression)  
	        {         
	            _expression = expression;  
	            _descriptor = TypeDescriptor.GetProperties(GetType().GetGenericArguments()[0]).Find(expression.FieldName, true);    
	            _propertyType = _descriptor.PropertyType;     
	            _filterFunction = (GridKnownFunction)Enum.Parse(typeof(GridKnownFunction), _expression.FilterFunction);    
	        }      
	        public bool Filter(T item) 
	        {         
	            object value = _descriptor.GetValue(item);     
	            string stringValue = value.ToString();   
	            if (_propertyType == typeof(String))     
	            {               
	                if (_filterFunction == GridKnownFunction.Contains)
	                {             
	                    return stringValue.Contains(_expression.FieldValue);       
	                }             
	                else if (_filterFunction == GridKnownFunction.DoesNotContain)           
	                {                   
	                    return !stringValue.Contains(_expression.FieldValue);       
	                }            
	                else if (_filterFunction == GridKnownFunction.StartsWith)           
	                {            
	                    return stringValue.StartsWith(_expression.FieldValue);       
	                }          
	                else if (_filterFunction == GridKnownFunction.EndsWith)          
	                {                  
	                    return stringValue.EndsWith(_expression.FieldValue);     
	                }          
	                else if (_filterFunction == GridKnownFunction.EqualTo)    
	                {                
	                    return stringValue.Equals(_expression.FieldValue);     
	                }        
	                else if (_filterFunction == GridKnownFunction.NotEqualTo)      
	                {             
	                    return !stringValue.Equals(_expression.FieldValue);     
	                }             
	                else if (_filterFunction == GridKnownFunction.IsEmpty)          
	                {         
	                    return stringValue.Equals(String.Empty);    
	                }       
	                else if (_filterFunction == GridKnownFunction.NotIsEmpty)  
	                {              
	                    return !stringValue.Equals(String.Empty);     
	                }          
	                else if (_filterFunction == GridKnownFunction.GreaterThan)     
	                {                  
	                    return stringValue.CompareTo(_expression.FieldValue) > 0;   
	                }          
	                else if (_filterFunction == GridKnownFunction.GreaterThanOrEqualTo)   
	                {                  
	                    return stringValue.CompareTo(_expression.FieldValue) >= 0;      
	                }         
	                else if (_filterFunction == GridKnownFunction.LessThan)  
	                {        
	                    return stringValue.CompareTo(_expression.FieldValue) < 0;       
	                }         
	                else if (_filterFunction == GridKnownFunction.LessThanOrEqualTo)       
	                {                 
	                    return stringValue.CompareTo(_expression.FieldValue) <= 0;    
	                }        
	            }        
	            else if (_propertyType == typeof(Boolean))      
	            {          
	                if (_filterFunction == GridKnownFunction.EqualTo)     
	                {      
	                    return Boolean.Parse(stringValue).Equals(Boolean.Parse(_expression.FieldValue));   
	                }                
	                else if (_filterFunction == GridKnownFunction.NotEqualTo)        
	                {              
	                    return !Boolean.Parse(stringValue).Equals(Boolean.Parse(_expression.FieldValue));     
	                }      
	            }         
	            else if (_propertyType == typeof(DateTime))   
	            {         
	                if (_filterFunction == GridKnownFunction.EqualTo)        
	                {               
	                    return DateTime.Parse(stringValue).Equals(DateTime.Parse(_expression.FieldValue));       
	                }               
	                else if (_filterFunction == GridKnownFunction.NotEqualTo)            
	                {               
	                    return !DateTime.Parse(stringValue).Equals(DateTime.Parse(_expression.FieldValue));     
	                }         
	                else if (_filterFunction == GridKnownFunction.GreaterThan)   
	                {               
	                    return DateTime.Parse(stringValue).CompareTo(DateTime.Parse(_expression.FieldValue)) > 0;   
	                }               
	                else if (_filterFunction == GridKnownFunction.GreaterThanOrEqualTo)            
	                {              
	                    return DateTime.Parse(stringValue).CompareTo(DateTime.Parse(_expression.FieldValue)) >= 0;   
	                }                
	                else if (_filterFunction == GridKnownFunction.LessThan)   
	                {          
	                    return DateTime.Parse(stringValue).CompareTo(DateTime.Parse(_expression.FieldValue)) < 0;    
	                }            
	                else if (_filterFunction == GridKnownFunction.LessThanOrEqualTo) 
	                {                
	                    return DateTime.Parse(stringValue).CompareTo(DateTime.Parse(_expression.FieldValue)) <= 0;          
	                }           
	            }         
	            else if (IsNumeric(_propertyType))     
	            {                    
	                if (_filterFunction == GridKnownFunction.EqualTo)    
	                    {       
	                    return Decimal.Parse(stringValue).Equals(Decimal.Parse(_expression.FieldValue));      
	                }           
	                else if (_filterFunction == GridKnownFunction.NotEqualTo)       
	                {           
	                    return !Decimal.Parse(stringValue).Equals(Decimal.Parse(_expression.FieldValue));   
	                }              
	                else if (_filterFunction == GridKnownFunction.GreaterThan)   
	                {            
	                    return Decimal.Parse(stringValue).CompareTo(Decimal.Parse(_expression.FieldValue)) > 0;   
	                }    
	                else if (_filterFunction == GridKnownFunction.GreaterThanOrEqualTo)         
	                {                 
	                    return Decimal.Parse(stringValue).CompareTo(Decimal.Parse(_expression.FieldValue)) >= 0;     
	                }          
	                else if (_filterFunction == GridKnownFunction.LessThan)   
	                {       
	                    return Decimal.Parse(stringValue).CompareTo(Decimal.Parse(_expression.FieldValue)) < 0;    
	                }             
	                else if (_filterFunction == GridKnownFunction.LessThanOrEqualTo)  
	                {            
	                    return Decimal.Parse(stringValue).CompareTo(Decimal.Parse(_expression.FieldValue)) <= 0;           
	                }        
	            }           
	            if (_filterFunction == GridKnownFunction.IsNull)     
	            {    
	                return value.Equals(null);       
	            }       
	            else if (_filterFunction == GridKnownFunction.NotIsNull)           
	            {           
	                return !value.Equals(null);   
	            }          
	            return true;    
	        }      
	        static bool IsNumeric(Type type)    
	        {         
	            if (!type.IsEnum)    
	            {              
	                switch (Type.GetTypeCode(type))       
	                {                 
	                    case TypeCode.Char:    
	                    case TypeCode.SByte:   
	                    case TypeCode.Byte:       
	                    case TypeCode.Int16:      
	                    case TypeCode.UInt16:     
	                    case TypeCode.Int32:      
	                    case TypeCode.UInt32:     
	                    case TypeCode.Int64:    
	                    case TypeCode.UInt64:  
	                    case TypeCode.Single:  
	                    case TypeCode.Double:    
	                    case TypeCode.Decimal:    
	                    return true;        
	                }        
	            }       
	            return false; 
	        }
	    }
	}
````



````VB.NET
	Imports System
	Imports System.Collections.Generic
	Imports Telerik.Web.UI
	Imports System.ComponentModel
	Namespace Telerik.Web.Examples.Grid
	        Public Class MyBusinessObjectCollection
	            Const _maxItems As Integer = 100000
	            Private names As String() = New String() {"C�te de Blaye", "Boston Crab Meat", "Singaporean Hokkien Fried Mee", "Gula Malacca", "Rogede sild", "Spegesild", _
	             "Zaanse koeken", "Chocolade", "Maxilaku", "Valkoinen suklaa"}
	            Private prizes As Double() = New Double() {23.25, 9, 45.6, 32, 14, 19, _
	             263.5, 18.4, 3, 14}
	            Private dates As DateTime() = New DateTime() {New DateTime(2007, 5, 10), New DateTime(2008, 9, 13), New DateTime(2008, 2, 22), New DateTime(2009, 1, 2), New DateTime(2007, 4, 13), New DateTime(2008, 5, 12), _
	             New DateTime(2008, 1, 19), New DateTime(2008, 8, 26), New DateTime(2008, 7, 31), New DateTime(2007, 7, 16)}
	            Private bools As Boolean() = New Boolean() {True, False, True, False, True, False, _
	             True, False, True, False}
	            Public Sub New()
	            End Sub
	            Public Function SelectCount() As Integer
	                Return _maxItems
	            End Function
	            Public Function [Select]() As List(Of MyBusinessObject)
	                If System.Web.HttpContext.Current.Cache("data") = Nothing Then
	                    System.Web.HttpContext.Current.Cache("data") = [Select](0, _maxItems)
	                End If
	                Return DirectCast(System.Web.HttpContext.Current.Cache("data"), List(Of MyBusinessObject))
	            End Function
	            Public Function [Select](ByVal startRowIndex As Integer, ByVal maximumRows As Integer) As List(Of MyBusinessObject)
	                Dim Random1 As New Random()
	                Dim list As New List(Of MyBusinessObject)()
	                Dim i As Integer = startRowIndex
	                While i < Math.Min(_maxItems, startRowIndex + maximumRows)
	                    Dim Product1 As New MyBusinessObject()
	                    Product1.ID = i
	                    Product1.Name = names(Random1.[Next](9))
	                    Product1.UnitPrice = prizes(Random1.[Next](9))
	                    Product1.[Date] = dates(Random1.[Next](9))
	                    Product1.Discontinued = bools(Random1.[Next](9))
	                    list.Add(Product1)
	                    System.Math.Max(System.Threading.Interlocked.Increment(i), i - 1)
	                End While
	                Return list
	            End Function
	        End Class
	
	        Public Class MyBusinessObject
	            Private _id As Integer
	            Private _name As String
	            Private _unitPrice As Double
	            Private _date As DateTime
	            Private _discontinued As Boolean
	
	            Public Sub New()
	            End Sub
	            Public Sub New(ByVal _id As Integer, ByVal _name As String, ByVal _unitPrice As Double, ByVal _date As DateTime, ByVal _discontinued As Boolean)
	                Me._id = _id
	                Me._name = _name
	                Me._unitPrice = _unitPrice
	                Me._date = _date
	                Me._discontinued = _discontinued
	            End Sub
	            Public Property ID() As Integer
	                Get
	                    Return _id
	                End Get
	                Set(ByVal value As Integer)
	                    _id = value
	                End Set
	            End Property
	            Public Property Name() As String
	                Get
	                    Return _name
	                End Get
	                Set(ByVal value As String)
	                    _name = value
	                End Set
	            End Property
	            Public Property UnitPrice() As Double
	                Get
	                    Return _unitPrice
	                End Get
	                Set(ByVal value As Double)
	                    _unitPrice = value
	                End Set
	            End Property
	            Public Property [Date]() As DateTime
	                Get
	                    Return _date
	                End Get
	                Set(ByVal value As DateTime)
	                    _date = value
	                End Set
	            End Property
	            Public Property Discontinued() As Boolean
	                Get
	                    Return _discontinued
	                End Get
	                Set(ByVal value As Boolean)
	                    _discontinued = value
	                End Set
	            End Property
	        End Class
	        Public Class GridGenericSorter(Of T)
	            Implements IComparer(Of T)
	            Private _expression As GridSortExpression = Nothing
	            Private _descriptor As PropertyDescriptor = Nothing
	            Public Sub New(ByVal expression As GridSortExpression)
	                _descriptor = TypeDescriptor.GetProperties([GetType]().GetGenericArguments()(0)).Find(expression.FieldName, True)
	                _expression = expression
	            End Sub
	            Public Function Compare(ByVal o1 As T, ByVal o2 As T) As Integer
	                Dim comparable1 As IComparable = DirectCast(_descriptor.GetValue(o1), IComparable)
	                Dim comparable2 As IComparable = DirectCast(_descriptor.GetValue(o2), IComparable)
	                If _expression.SortOrder = GridSortOrder.Ascending Then
	                    Return comparable1.CompareTo(comparable2)
	                Else
	                    Return comparable2.CompareTo(comparable1)
	                End If
	            End Function
	        End Class
	        Public Class GridGenericFilterer(Of T)
	            Private _expression As GridFilterExpression = Nothing
	            Private _descriptor As PropertyDescriptor = Nothing
	            Private _propertyType As Type = Nothing
	            Private _filterFunction As GridKnownFunction
	            Public Sub New(ByVal expression As GridFilterExpression)
	                _expression = expression
	                _descriptor = TypeDescriptor.GetProperties([GetType]().GetGenericArguments()(0)).Find(expression.FieldName, True)
	                _propertyType = _descriptor.PropertyType
	                _filterFunction = DirectCast([Enum].Parse(GetType(GridKnownFunction), _expression.FilterFunction), GridKnownFunction)
	            End Sub
	            Public Function Filter(ByVal item As T) As Boolean
	                Dim value As Object = _descriptor.GetValue(item)
	                Dim stringValue As String = value.ToString()
	                If _propertyType = GetType([String]) Then
	                    If _filterFunction = GridKnownFunction.Contains Then
	                        Return stringValue.Contains(_expression.FieldValue)
	                    ElseIf _filterFunction = GridKnownFunction.DoesNotContain Then
	                        Return Not stringValue.Contains(_expression.FieldValue)
	                    ElseIf _filterFunction = GridKnownFunction.StartsWith Then
	                        Return stringValue.StartsWith(_expression.FieldValue)
	                    ElseIf _filterFunction = GridKnownFunction.EndsWith Then
	                        Return stringValue.EndsWith(_expression.FieldValue)
	                    ElseIf _filterFunction = GridKnownFunction.EqualTo Then
	                        Return stringValue.Equals(_expression.FieldValue)
	                    ElseIf _filterFunction = GridKnownFunction.NotEqualTo Then
	                        Return Not stringValue.Equals(_expression.FieldValue)
	                    ElseIf _filterFunction = GridKnownFunction.IsEmpty Then
	                        Return stringValue.Equals([String].Empty)
	                    ElseIf _filterFunction = GridKnownFunction.NotIsEmpty Then
	                        Return Not stringValue.Equals([String].Empty)
	                    ElseIf _filterFunction = GridKnownFunction.GreaterThan Then
	                        Return stringValue.CompareTo(_expression.FieldValue) > 0
	                    ElseIf _filterFunction = GridKnownFunction.GreaterThanOrEqualTo Then
	                        Return stringValue.CompareTo(_expression.FieldValue) >= 0
	                    ElseIf _filterFunction = GridKnownFunction.LessThan Then
	                        Return stringValue.CompareTo(_expression.FieldValue) < 0
	                    ElseIf _filterFunction = GridKnownFunction.LessThanOrEqualTo Then
	                        Return stringValue.CompareTo(_expression.FieldValue) <= 0
	                    End If
	                ElseIf _propertyType = GetType([Boolean]) Then
	                    If _filterFunction = GridKnownFunction.EqualTo Then
	                        Return [Boolean].Parse(stringValue).Equals([Boolean].Parse(_expression.FieldValue))
	                    ElseIf _filterFunction = GridKnownFunction.NotEqualTo Then
	                        Return Not [Boolean].Parse(stringValue).Equals([Boolean].Parse(_expression.FieldValue))
	                    End If
	                ElseIf _propertyType = GetType(DateTime) Then
	                    If _filterFunction = GridKnownFunction.EqualTo Then
	                        Return DateTime.Parse(stringValue).Equals(DateTime.Parse(_expression.FieldValue))
	                    ElseIf _filterFunction = GridKnownFunction.NotEqualTo Then
	                        Return Not DateTime.Parse(stringValue).Equals(DateTime.Parse(_expression.FieldValue))
	                    ElseIf _filterFunction = GridKnownFunction.GreaterThan Then
	                        Return DateTime.Parse(stringValue).CompareTo(DateTime.Parse(_expression.FieldValue)) > 0
	                    ElseIf _filterFunction = GridKnownFunction.GreaterThanOrEqualTo Then
	                        Return DateTime.Parse(stringValue).CompareTo(DateTime.Parse(_expression.FieldValue)) >= 0
	                    ElseIf _filterFunction = GridKnownFunction.LessThan Then
	                        Return DateTime.Parse(stringValue).CompareTo(DateTime.Parse(_expression.FieldValue)) < 0
	                    ElseIf _filterFunction = GridKnownFunction.LessThanOrEqualTo Then
	                        Return DateTime.Parse(stringValue).CompareTo(DateTime.Parse(_expression.FieldValue)) <= 0
	                    End If
	                ElseIf IsNumeric(_propertyType) Then
	                    If _filterFunction = GridKnownFunction.EqualTo Then
	                        Return [Decimal].Parse(stringValue).Equals([Decimal].Parse(_expression.FieldValue))
	                    ElseIf _filterFunction = GridKnownFunction.NotEqualTo Then
	                        Return Not [Decimal].Parse(stringValue).Equals([Decimal].Parse(_expression.FieldValue))
	                    ElseIf _filterFunction = GridKnownFunction.GreaterThan Then
	                        Return [Decimal].Parse(stringValue).CompareTo([Decimal].Parse(_expression.FieldValue)) > 0
	                    ElseIf _filterFunction = GridKnownFunction.GreaterThanOrEqualTo Then
	                        Return [Decimal].Parse(stringValue).CompareTo([Decimal].Parse(_expression.FieldValue)) >= 0
	                    ElseIf _filterFunction = GridKnownFunction.LessThan Then
	                        Return [Decimal].Parse(stringValue).CompareTo([Decimal].Parse(_expression.FieldValue)) < 0
	                    ElseIf _filterFunction = GridKnownFunction.LessThanOrEqualTo Then
	                        Return [Decimal].Parse(stringValue).CompareTo([Decimal].Parse(_expression.FieldValue)) <= 0
	                    End If
	                End If
	                If _filterFunction = GridKnownFunction.IsNull Then
	                    Return value.Equals(Nothing)
	                ElseIf _filterFunction = GridKnownFunction.NotIsNull Then
	                    Return Not value.Equals(Nothing)
	                End If
	                Return True
	            End Function
	            Shared Function IsNumeric(ByVal type As Type) As Boolean
	                If Not type.IsEnum Then
	                    Select Case Type.GetTypeCode(type)
	                        Case TypeCode.[Char], TypeCode.[SByte], TypeCode.[Byte], TypeCode.Int16, TypeCode.UInt16, TypeCode.Int32, _
	                         TypeCode.UInt32, TypeCode.Int64, TypeCode.UInt64, TypeCode.[Single], TypeCode.[Double], TypeCode.[Decimal]
	                            Return True
	                    End Select
	                End If
	                Return False
	            End Function
	        End Class
	    End Namespace
````


>end
