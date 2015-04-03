---
title: Binding to RadClientDataSource
page_title: Binding to RadClientDataSource | UI for ASP.NET AJAX Documentation
description: Binding to RadClientDataSource
slug: menu/data-binding/binding-to-radclientdatasource
tags: binding,to,radclientdatasource
published: True
position: 7
---

# Binding to RadClientDataSource



This article demonstrates how to bind __RadMenu__ to __RadClientDataSource__.

## 

Since __Q2 2014__ RadMenu can be bound to a __RadClientDataSource__ control. An important aspect of binding to the RadClientDataSource is that the RadMenu __DataText__ and __DataValue__, __DataFieldID__, __DataFieldParentID__ and __DataNavigateUrlField__ fields should be associated with the custom object properties. Thus you can choose which property value to be shown as RadMenu item text and value. For reference at the bottom of the web service implementation below you will find the custom class and its properties declaration.

## 

The code snippet below shows sample configuration of RadMenu bound to RadClientDataSource. The peculiarity of such scenario comes from the fact that the RadMenu represents hierarchical data. Considering that fact we expect such type of data to be returned by the web service to the RadClientDataSource.

>note Initially the RadMenu control requests only the root items data from the RadClientDataSource. In the example below it will check for all items data that have __ParentID__ property value to null.
>


````ASPNET
	        <telerik:RadClientDataSource runat="server" ID="CD1">
	            <ClientEvents />
	            <DataSource>
	                <WebServiceDataSourceSettings BaseUrl="http://url/Service.svc/">
	                    <Select Url="LoadCustomSelfReferencingData" DataType="JSON" RequestType="Post" ContentType="application/json; charset=utf-8" />
	                </WebServiceDataSourceSettings>
	            </DataSource>
	
	            <Schema DataName="d">
	            </Schema>
	            <ClientEvents />
	        </telerik:RadClientDataSource>
	
	        <telerik:RadMenu ID="RadMenu1" runat="server" Height="300px" Width="100%" ClientDataSourceID="CD1" PersistLoadOnDemandNodes="false"
	            DataFieldParentID="ParentID" DataFieldID="ID" DataTextField="Name" DataValueField="Value" DataNavigateUrlField="URL">
	        </telerik:RadMenu>
````



>tabbedCode

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


>end
