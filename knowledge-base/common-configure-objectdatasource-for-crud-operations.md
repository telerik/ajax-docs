---
title: Configure ObjectDataSource for CRUD operations
description: Quick walkthrough configuring the ASP ObjectDataSource control to handle CRUD operations.
type: how-to
page_title: Configure ObjectDataSource for CRUD operations
slug: common-configure-objectdatasource-for-crud-operations
position: 
tags: configure, objectdatasource, for, crud, operations
res_type: kb
---

## ObjectDataSource Configuration

Add an ObjectDataSource component to the Page and configure the following properties:

- `TypeName` - Set the Fully Qualified Name of the Type of the Custom object containing the methods for Selecting, Inserting, Updating, Deleting.
- `SelectMethod` - Set the name of the method to be called for selecting records.
- `InsertMethod` - Set the name of the method to be called for inserting records.
- `UpdateMethod` - Set the name of the method to be called for updating records.
- `DeleteMethod` - Set the name of the method to be called for deleting records.

> For security purposes, it is recommended to add parameters for every method that takes `@parameters`.
>- `SelectParameters`
>- `InsertParameters`
>- `UpdateParameters`
>- `DeleteParameters`

>caption Example

````ASP.NET
<asp:ObjectDataSource ID="ObjectDataSource1" runat="server"
    TypeName="MyNamespace.MyObject"
    SelectMethod="GetCustomers"
    InsertMethod="InsertCustomer"
    UpdateMethod="UpdateCustomer"
    DeleteMethod="DeleteCustomer">
    <InsertParameters>
        <asp:Parameter Name="ContactName" Type="String" />
        <asp:Parameter Name="Country" Type="String" />
    </InsertParameters>

    <UpdateParameters>
        <asp:Parameter Name="CustomerID" Type="Int32" />
        <asp:Parameter Name="ContactName" Type="String" />
        <asp:Parameter Name="Country" Type="String" />
    </UpdateParameters>

    <DeleteParameters>
        <asp:Parameter Name="CustomerID" Type="Int32" />
    </DeleteParameters>
</asp:ObjectDataSource>
````

>caption MyObject Class

````C#
namespace MyNamespace
{
    public class MyObject
    {
        private const string SESSION_KEY = "MySessionKey";

        System.Web.SessionState.HttpSessionState Session
        {
            get
            {
                return System.Web.HttpContext.Current.Session;
            }
        }

        private List<Customer> _customers
        {
            get
            {
                List<Customer> customersList = Session[SESSION_KEY] as List<Customer>;

                if (customersList == null)
                {
                    customersList = new List<Customer>()
                    {
                        new Customer(){ CustomerID = 1, ContactName = "John", Country="USA"},
                        new Customer(){ CustomerID = 2, ContactName = "Dane", Country="USA"},
                        new Customer(){ CustomerID = 3, ContactName = "Rajesh", Country="India"},
                        new Customer(){ CustomerID = 4, ContactName = "Brooke", Country="Canada"},
                    };

                    Session[SESSION_KEY] = customersList;
                }

                return customersList;
            }

            set
            {
                Session[SESSION_KEY] = value;
            }
        }
        public List<Customer> GetCustomers()
        {
            return _customers;
        }

        public void InsertCustomer(string ContactName, string Country)
        {
            int CustomerID = _customers.Count == 0 ? 1 : _customers.Max(c => c.CustomerID) + 1;

            _customers.Add(new Customer()
            {
                CustomerID = CustomerID,
                ContactName = ContactName,
                Country = Country
            });
        }
        public void UpdateCustomer(int CustomerID, string ContactName, string Country)
        {
            Customer customerToUpdate = _customers.Where(c => c.CustomerID == CustomerID).FirstOrDefault();

            if (customerToUpdate != null)
            {
                customerToUpdate.ContactName = ContactName;
                customerToUpdate.Country = Country;
            }
        }
        public void DeleteCustomer(int CustomerID)
        {
            Customer customerToDelete = _customers.Where(c => c.CustomerID == CustomerID).FirstOrDefault();

            if (customerToDelete != null)
            {
                _customers.Remove(customerToDelete);
            }
        }
    }

    public class Customer
    {
        public int CustomerID { get; set; }
        public string ContactName { get; set; }
        public string Country { get; set; }
    }
}
````
````VB
Namespace MyNamespace
    Public Class MyObject
        Private Const SESSION_KEY As String = "MySessionKey"

        Private ReadOnly Property Session As System.Web.SessionState.HttpSessionState
            Get
                Return System.Web.HttpContext.Current.Session
            End Get
        End Property

        Private Property _customers As List(Of Customer)
            Get
                Dim customersList As List(Of Customer) = TryCast(Session(SESSION_KEY), List(Of Customer))

                If customersList Is Nothing Then
                    customersList = New List(Of Customer)() From {
                        New Customer() With {
                            .CustomerID = 1,
                            .ContactName = "John",
                            .Country = "USA"
                        },
                        New Customer() With {
                            .CustomerID = 2,
                            .ContactName = "Dane",
                            .Country = "USA"
                        },
                        New Customer() With {
                            .CustomerID = 3,
                            .ContactName = "Rajesh",
                            .Country = "India"
                        },
                        New Customer() With {
                            .CustomerID = 4,
                            .ContactName = "Brooke",
                            .Country = "Canada"
                        }
                    }
                    Session(SESSION_KEY) = customersList
                End If

                Return customersList
            End Get

            Set(ByVal value As List(Of Customer))
                Session(SESSION_KEY) = value
            End Set
        End Property

        Public Function GetCustomers() As List(Of Customer)
            Return _customers
        End Function

        Public Sub InsertCustomer(ByVal ContactName As String, ByVal Country As String)
            Dim CustomerID As Integer = If(_customers.Count = 0, 1, _customers.Max(Function(c) c.CustomerID) + 1)

            _customers.Add(New Customer() With {
                .CustomerID = CustomerID,
                .ContactName = ContactName,
                .Country = Country
            })
        End Sub

        Public Sub UpdateCustomer(ByVal CustomerID As Integer, ByVal ContactName As String, ByVal Country As String)
            Dim customerToUpdate As Customer = _customers.Where(Function(c) c.CustomerID = CustomerID).FirstOrDefault()

            If customerToUpdate IsNot Nothing Then
                customerToUpdate.ContactName = ContactName
                customerToUpdate.Country = Country
            End If
        End Sub

        Public Sub DeleteCustomer(ByVal CustomerID As Integer)
            Dim customerToDelete As Customer = _customers.Where(Function(c) c.CustomerID = CustomerID).FirstOrDefault()

            If customerToDelete IsNot Nothing Then
                _customers.Remove(customerToDelete)
            End If
        End Sub
    End Class

    Public Class Customer
        Public Property CustomerID As Integer
        Public Property ContactName As String
        Public Property Country As String
    End Class
End Namespace
````

## See Also

- [Configure SqlDatSource for CRUD operations]({%slug common-configure-sqldatasource-for-crud-operations%})

