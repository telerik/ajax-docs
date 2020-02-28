---
title: RadPivotGrid OLAP Support
page_title: RadPivotGrid OLAP Support | RadPivotGrid for ASP.NET AJAX Documentation
description: RadPivotGrid OLAP Support
slug: pivotgrid/data-binding/radpivotgrid-olap-support
tags: radpivotgrid,olap,support
published: True
position: 2
---

# RadPivotGrid OLAP Support


>note To display data from OLAP data sources you should download [Microsoft.Analysis Services library](https://www.microsoft.com/en-us/download/details.aspx?id=30440) and put it into the Bin folder or GAC.
>


## Binding Through XMLA

Extensible Markup Language for Analysis (XMLA) is a standard that allows client applications to talk to multi-dimensional or Online Analytical Processing (OLAP) data sources. The communication of messages back and forth is done using web standards – HTTP, SOAP, and XML. The query language used is MDX, which is the most commonly used multi-dimensional expression language today. Oracle's Essbase, Microsoft's Analysis Services, and SAP's NetWeaver all support the MDX language and the XMLA spec.

RadPivotGrid allows for binding to OLAP data sources through XMLA.

Here are the property settings you need to configure the XMLA data provider for RadPivotGrid

* **OlapSettings.ProviderType** – tells the pivot grid control what type of provider should be used for binding to the OLAP data source. In this case, it should be set to Xmla.

* **OlapSettings.XmlaConnectionSettings** - this property is of type XmlaConnectionSettings. It is used to define all needed connection settings through the XmlaConnectionSettings properties:

* *Cube* - string property defining the exact name of the Cube.

* *Database* - string property defining the exact name of the Database.

* *ServerAddress* - string property defining the exact address(with protocol used) of the server.

* *Credentials* - this property is of type XmlaNetworkCredential and it is used to define the authentication details for the server(if it has any kind of authentication).

* **OlapSettings.SetConditionListCapacity** – sets the capacity of the set condition filter (checkbox filter into filter window) when the pivot is bind to OLAP.

The following configuration will give RadPivotGrid XMLA access to the Adventure Works cube at the OLAP server address given below:

````ASPNET
<OlapSettings ProviderType="Xmla"> 
   <XmlaConnectionSettings  
      Cube="Adventure Works"  
      Database=" AdventureWorksDW2012Multidimensional-EE"  
      ServerAddress="https://demos.telerik.com/olap/msmdpump.dll"> 
   </ XmlaConnectionSettings> 
</OlapSettings> 
````



## Binding Through Adomd

ADOMD.NET is a Microsoft .NET Framework data provider that is designed to communicate with Microsoft SQL Server Analysis Services. ADOMD.NET uses the XML for Analysis protocol to communicate with analytical data sources. More information about ADOMD can be found [here](https://msdn.microsoft.com/en-us/library/ms123483%28v=sql.90%29.aspx).

RadPivotGrid supports displaying data from OLAP data sources through the ADOMD.NET data provider.

You can find below the property necessary to configure the XMLA data provider for RadPivotGrid:

* **OlapSettings.ProviderType** = “Adomd”.

* **OlapSettings.AdomdConnectionSettings** - this property is of type AdomdConnectionSettings and it exposes several properties that are mandatory when connecting to the OLAP Cube:

* *Cube* - string property defining the exact name of the Cube.

* *Database* - string property defining the exact name of the Database.

* *ConnectionString* - string property used to open a database. It is in OLE DB connection string format.

* *Credentials* - this property is of type XmlaNetworkCredential and it is used to define the authentication.

* **OlapSettings.SetConditionListCapacity** – sets the capacity of the set condition filter (checkbox filter into filter window) when the pivot is bind to OLAP.

The OLE DB connection string format has several keys and values connected with equal sign. The different key-value pairs are separated by semicolon characters. Some of the important properties are Provider, Data Source, Integrated Security, etc. Here are some examples for different OLE DB connection strings:

* "Provider=MSOLAP; Data Source=myServerAddress;

* Initial Catalog=myDataBase;"

* "Provider=MSOLAP; Data Source=http://serverName/;

* Initial Catalog=myDataBase; User Id=domain\user; Password=myPassword;"

* "Provider=MSOLAP; Integrated Security=SSPI; Persist Security Info=False; Data Source=https://serverName/;

* Initial Catalog=myDataBase;"

The following setting will provide the information necessary for the ADOMD.NET provider to connect to the Adventure Works cube at the OLAP server address specified:

````ASPNET
<OlapSettings ProviderType="Adomd"> 
   <AdomdConnectionSettings  
      Cube="Adventure Works"  
      Database="Adventure Works DW 2008R2"  
      ConnectionString="Data Source= https://demos.telerik.com/olap/msmdpump.dll; Catalog=AdventureWorksDW2012Multidimensional-EE"> 
   </ AdomdConnectionSettings> 
</OlapSettings> 
````



Since **Q1 2014 SP1** version, **RadPivotGrid** provides a new **PrepareDescriptionForField** and **GetDescriptionsDataCompleted** events when bound to an OLAP source.

You can use **PrepareDescriptionForField** handler to enhance the sorting capabilities of the control as demonstrated in the sample provided in the [Basic Sorting]({%slug pivotgrid/functionality/sorting%}) article.

Into **GetDescriptionsDataCompleted** event all nodes from the OLAP cube are available and you can remove some of them based on your logic. For example if you want to show only nodes (and theirs child nodes) which are [Account] and [Department] you can use the following code snippet:



````C#
protected void RadPivotGrid1_GetDescriptionsDataCompleted(object sender, GetDescriptionsDataCompletedEventArgs e)
{
    var root = e.DescriptionsData.RootFieldInfo;

    if (root.HasChildren)
    {
        List<ContainerNode> nodes = new List<ContainerNode>();

        foreach (var item in root.Children)
        {
            nodes.Add(item);
        }

        foreach (var item in nodes)
        {
            if (item.Name != "[Account]" &&
                item.Name != "[Department]")
            {
                root.Children.Remove(item);
            }
        }
    }
}
````
````VB.NET
Protected Sub RadPivotGrid1_GetDescriptionsDataCompleted(sender As Object, e As GetDescriptionsDataCompletedEventArgs)
    Dim root = e.DescriptionsData.RootFieldInfo

    If root.HasChildren Then
        Dim nodes As New List(Of ContainerNode)()

        For Each item As var In root.Children
            nodes.Add(item)
        Next

        For Each item As var In nodes
            If item.Name <> "[Account]" AndAlso item.Name <> "[Department]" Then
                root.Children.Remove(item)
            End If
        Next
    End If
End Sub
````


## Support for OLAP connection strings stored in web.config

This functionality allows you to set the connection string for your pivot controls globally, in your web.config file. The key name should be set to the **ConnectionString** property in **OlapSettings** and it should be put in the*appSettings* section under *configuration* in your web.config file. The following example demonstrates that.

````ASPNET
<OlapSettings ConnectionString="PivotGridOlapConnectionString">
</OlapSettings>
````



````XML
<configuration>
   <appSettings>
     <add key="PivotGridOlapConnectionString" value="Data Source=http://website/msmdpump.dll; Initial Catalog=name; Cube=name; OlapProvider=Adomd"/>
````



All you need to do to configure the OLAP connection is to add the aforementioned key to the web.config file and set the **ConnectionString** property. The only configurable settings, other than the connection string itself is the **OlapProvider** parameter. It has two possible values – **Xmla**, or **Adomd**. If the parameter is not set, the control will assume that the provider type is **Adomd**.
