---
title: Binding to RadClientDataSource
page_title: Binding to RadClientDataSource - RadTreeView
description: Check our Web Forms article about Binding to RadClientDataSource.
slug: treeview/data-binding/binding-to-radclientdatasource
tags: binding,to,radclientdatasource
published: True
position: 8
---

# Binding to RadClientDataSource



This article demonstrates how to bind **RadTreeView** to **RadClientDataSource**.

## 

Since **Q2 2014** **RadTreeView** can be bound to a **RadClientDataSource** control. An important aspect of binding to the **RadClientDataSource** is that the **RadTreeView** **DataText** and **DataValue**, **DataFieldID**, **DataFieldParentID** and **DataNavigateUrlField** fields should be associated with the custom object properties. Thus you can choose which property value to be shown as **RadTreeView** item text and value. For reference at the bottom of the web service implementation below you will find the custom class and its properties declaration.

## 

The code snippet below shows sample configuration of **RadTreeView** bound to **RadClientDataSource**. The peculiarity of such scenario comes from the fact that the **RadTreeView** represents hierarchical data. Considering that fact we expect such type of data to be returned by the service to the **RadClientDataSource**.

>note Initially the **RadTreeView** control requests only the root items data from the **RadClientDataSource**. In the example below it will check for all items data that have **ParentID** property value to null.
>


````ASPNET
<telerik:RadClientDataSource runat="server" ID="CD1">
    <clientevents />
    <datasource>
            <WebServiceDataSourceSettings BaseUrl="url/Service.svc/">
                <Select Url="LoadCustomSelfReferencingData" DataType="JSON" RequestType="Post" ContentType="application/json; charset=utf-8" />
            </WebServiceDataSourceSettings>
        </datasource>

    <schema dataname="d">
        </schema>
    <clientevents />
</telerik:RadClientDataSource>

<telerik:RadTreeView RenderMode="Lightweight" ID="RadTreeView1" runat="server" Height="300px" Width="100%" PersistLoadOnDemandNodes="false" ClientDataSourceID="CD1"
    DataFieldParentID="ParentID" DataFieldID="ID" DataTextField="Name" DataValueField="Value">
</telerik:RadTreeView>
````
````C#
[OperationContract]
public SelfReferencingData[] LoadCustomSelfReferencingData()
{
    var list = new List<SelfReferencingData>();

    list.Add(new SelfReferencingData() { Name = "Cars", Value = "11", ParentID = null, ID = "1" });
    list.Add(new SelfReferencingData() { Name = "Ford", Value = "22", ParentID = "1", ID = "2" });
    list.Add(new SelfReferencingData() { Name = "Mustang 1", Value = "33", ParentID = "2", ID = "3" });
    list.Add(new SelfReferencingData() { Name = "Mustang 2", Value = "44", ParentID = "2", ID = "4" });

    list.Add(new SelfReferencingData() { Name = "Bikes", Value = "55", ParentID = null, ID = "5" });
    list.Add(new SelfReferencingData() { Name = "Cross", Value = "66", ParentID = "5", ID = "6" });
    list.Add(new SelfReferencingData() { Name = "Mon 1", Value = "77", ParentID = "6", ID = "7" });
    list.Add(new SelfReferencingData() { Name = "Mon 2", Value = "88", ParentID = "6", ID = "8" });

    return list.ToArray();
}

public class SelfReferencingData
{
    public string Name { get; set; }
    public string Value { get; set; }
    public string ID { get; set; }
    public string ParentID { get; set; }
    //public string NavigateURL { get; set; }
}
````
````VB.NET
    Inherits System.Web.UI.Page
    <OperationContract> _
    Public Function LoadCustomSelfReferencingData() As SelfReferencingData()
        Dim list = New List(Of SelfReferencingData)()

	list.Add(New SelfReferencingData() With { _
		Key .Name = "Cars", _
		Key .Value = "11", _
		Key .ParentID = Nothing, _
		Key .ID = "1" _
	})
	list.Add(New SelfReferencingData() With { _
		Key .Name = "Ford", _
		Key .Value = "22", _
		Key .ParentID = "1", _
		Key .ID = "2" _
	})
	list.Add(New SelfReferencingData() With { _
		Key .Name = "Mustang 1", _
		Key .Value = "33", _
		Key .ParentID = "2", _
		Key .ID = "3" _
	})
	list.Add(New SelfReferencingData() With { _
		Key .Name = "Mustang 2", _
		Key .Value = "44", _
		Key .ParentID = "2", _
		Key .ID = "4" _
	})

	list.Add(New SelfReferencingData() With { _
		Key .Name = "Bikes", _
		Key .Value = "55", _
		Key .ParentID = Nothing, _
		Key .ID = "5" _
	})
	list.Add(New SelfReferencingData() With { _
		Key .Name = "Cross", _
		Key .Value = "66", _
		Key .ParentID = "5", _
		Key .ID = "6" _
	})
	list.Add(New SelfReferencingData() With { _
		Key .Name = "Mon 1", _
		Key .Value = "77", _
		Key .ParentID = "6", _
		Key .ID = "7" _
	})
	list.Add(New SelfReferencingData() With { _
		Key .Name = "Mon 2", _
		Key .Value = "88", _
		Key .ParentID = "6", _
		Key .ID = "8" _
	})

        Return list.ToArray()
    End Function

    Public Class SelfReferencingData
        Public Property Name() As String
            Get
                Return m_Name
            End Get
            Set(value As String)
                m_Name = Value
            End Set
        End Property
        Private m_Name As String
        Public Property Value() As String
            Get
                Return m_Value
            End Get
            Set(value As String)
                m_Value = Value
            End Set
        End Property
        Private m_Value As String
        Public Property ID() As String
            Get
                Return m_ID
            End Get
            Set(value As String)
                m_ID = Value
            End Set
        End Property
        Private m_ID As String
        Public Property ParentID() As String
            Get
                Return m_ParentID
            End Get
            Set(value As String)
                m_ParentID = Value
            End Set
        End Property
        Private m_ParentID As String
        'public string NavigateURL { get; set; }
    End Class
#End Region

End Class
````


