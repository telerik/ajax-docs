---
title: Web Service Binding
page_title: Web Service Binding | RadTreeView for ASP.NET AJAX Documentation
description: Web Service Binding
slug: treeview/load-on-demand/web-service-binding
tags: web,service,binding
published: True
position: 4
---

# Web Service Binding



## 

Instead of supplying a **NodeExpand** event handler to add nodes on-demand to the TreeView, you can let the TreeView call on a WebService to service the request. The path to the web service and the name of the service method are specified in the **WebServiceSettings Path** and **Method** properties:

````ASPNET
<telerik:radtreeview id="RadTreeView1" runat="server" onclientnodepopulating="nodePopulating">
    <Nodes>
        <telerik:RadTreeNode runat="server" Text="Root RadTreeNode1" ExpandMode="WebService"
            Value="1">
        </telerik:RadTreeNode>
        <telerik:RadTreeNode runat="server" Text="Root RadTreeNode2" ExpandMode="WebService"
            Value="2">
        </telerik:RadTreeNode>
    </Nodes>
    <WebServiceSettings Path="ProductCategories.asmx" Method="GetTreeViewCategories" />
</telerik:radtreeview>
````
````JavaScript
function nodePopulating(sender, eventArgs) {

    var node = eventArgs.get_node();
    var context = eventArgs.get_context();
    context["CategoryID"] = node.get_value();
}
````


The HTTP method by default is **POST**. To change that you can set the **UseHttpGet** property of the WebServiceSettings to *True*. This property is added in Q1 2009 release.

To use the integrated support, the Web service should have the signature as shown in the code example below.

>tip Notice in the code below:
>
>* The **ScriptService** attribute marks the **ProductCategories** class and makes the web method callable from client-side script and therefore available to AJAX.
>
>* The signature of the web method includes parameters for a **RadTreeNodeData** and an object. The **RadTreeNodeData** parameter represents the parent node being >populated. The second parameter is an object that contains context information. Cast the object as **IDictionary** as shown in the example below. You can then >retrieve values that have been placed in the dictionary earlier in the **OnClientNodePopulating** client event.
>
>* The array of **RadTreeNodeData** returned by the method is used to store the data that will populate the child nodes. Create and assign properties to the >**RadTreeNodeData** array members just as you would to the actual child nodes.>




````C#
// supports IDictionary
using System.Collections.Generic;
// supports ScriptService attribute
using System.Web.Script.Services;
// supports WebMethod attribute
using System.Web.Services;
using Telerik.Web.UI;
[ScriptService]
public class ProductCategories : WebService
{
   [WebMethod]
   public RadTreeNodeData[] GetTreeViewCategories(RadTreeNodeData node, object context)
   {
       // extract the "context" dictionary information. OnClientNodePopulating event loads the dictionary
       IDictionary<string, object> contextDictionary = (IDictionary<string, object>)context;
// create the array of RadTreeNodeData that will be returned by this method
       List<RadTreeNodeData> result = new List<RadTreeNodeData>();
// add data for child nodes
       RadTreeNodeData nodeData = new RadTreeNodeData();
       nodeData.Text = "child" + contextDictionary["CategoryID"] + i;
       nodeData.Value = contextDictionary["CategoryID"].ToString() + i;
       result.Add(nodeData);
       return result.ToArray();
   }
} 
````
````VB.NET
' supports IDictionary
Imports System.Collections.Generic
' supports ScriptService attribute
Imports System.Web.Script.Services
' supports WebMethod attribute
Imports System.Web.Services
Imports Telerik.Web.UI
<ScriptService()> _
Public Class ProductCategories
    Inherits WebService
    <WebMethod()> _
    Public Function GetTreeViewCategories(ByVal node As RadTreeNodeData, ByVal context As Object) As RadTreeNodeData()
        ' extract the "context" dictionary information. OnClientNodePopulating event loads the dictionary
        Dim contextDictionary As IDictionary(Of String, Object) = DirectCast(context, IDictionary(Of String, Object))
        ' create the array of RadTreeNodeData that will be returned by this method
        Dim result As New List(Of RadTreeNodeData)()
        ' add data for child nodes
        Dim nodeData As New RadTreeNodeData()
        nodeData.Text = "child" + contextDictionary("CategoryID") + i
        nodeData.Value = contextDictionary("CategoryID").ToString() + i
        result.Add(nodeData)
        Return result.ToArray()
    End Function
End Class
````


For a live example of using a Web service to populate a **RadTreeView**, see [Populate From Web Service](http://demos.telerik.com/aspnet-ajax/TreeView/Examples/Programming/WebService/DefaultCS.aspx).
