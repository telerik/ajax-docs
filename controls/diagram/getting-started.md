---
title: Getting Started
page_title: Getting Started | UI for ASP.NET AJAX Documentation
description: Getting Started
slug: diagram/getting-started
tags: getting,started
published: True
position: 1
---

# Getting Started



The following tutorial demonstrates how you can add a simple __RadDiagram__ control with several shapes and connections. The end result will be similar to__Figure 1__:
>caption Figure 1: A RadDiagram configuration with a few shapes and connections

![diagram-simple-setup](images/diagram-simple-setup.png)

## 

1. Add a __ScriptManager__ control on a Web Form.

1. Add a __RadDiagram__ control on this AJAX-enabled Web Form:__Example 1__: Declaration of a __RadDiagram__ control

````ASPNET
	        <asp:ScriptManager runat="server" ID="ScriptManager1"  />
	        <telerik:RadDiagram ID="RadDiagram1" runat="server">
	        </telerik:RadDiagram>
````



1. Add a few shapes in the __ShapesCollection__ of the diagram. It is recommended to set different values for their __X__ and __Y__ properties so that they are not positioned on the same location.

>note Setting the __Id__ property of each shape is important, because you will need it when creating connections.
>


1. Set some of the [properties of the shapes](http://www.telerik.com/help/aspnet-ajax/t_telerik_web_ui_diagramshape.html) like __Background__, __Type__, __Width__ and __Height__ to make them distinctive.__Example 2__: The diagram now contains several shapes

````ASPNET
	        <asp:ScriptManager runat="server" ID="ScriptManager1"  />
	        <telerik:RadDiagram ID="RadDiagram1" runat="server">
	            <ShapesCollection>
	                <telerik:DiagramShape Id="DiagramShape5" Width="100" Height="70" X="260" Y="100" Type="rectangle">
	                    <ContentSettings Text="Parent" />
	                    <FillSettings Color="#25a0da" />
	                </telerik:DiagramShape>
	                <telerik:DiagramShape Id="DiagramShape6" Height="70" X="60" Y="250" Type="circle">
	                    <ContentSettings Text="Child 1" />
	                    <FillSettings Color="#FFBE33" />
	                </telerik:DiagramShape>
	                <telerik:DiagramShape Id="DiagramShape7" Height="70" X="245" Y="250" Type="circle">
	                    <ContentSettings Text="Child 2" />
	                    <FillSettings Color="#FFBE33" />
	                </telerik:DiagramShape>
	                <telerik:DiagramShape Id="DiagramShape8" Height="70" X="440" Y="250" Type="circle">
	                    <ContentSettings Text="Child 3" />
	                    <FillSettings Color="#FFBE33" />
	                </telerik:DiagramShape>
	            </ShapesCollection>
	        </telerik:RadDiagram>
````



1. Add some connections between the shapes in the diagram to the __ConnectionsCollections__. It is important to specify valid shapes from which a connection starts and to which it ends. If the __ShapeId__property in __FromSettings__ and __ToSettings__ contains an Id of a nonexistent shape, the connection will not be created.

1. You can configure some of the [properties of the connections](http://www.telerik.com/help/aspnet-ajax/t_telerik_web_ui_diagramconnection.html)like __StartCap__, __EndCap__, __FromSetting__ > __Connector__ and__ToSetting__ > __Connector__ to specify the starting and ending point of a connection, as well as the appearance of the connection's start and end cap.

1. Press F5 to run the application. You will see the diagram that is displayed in __Figure 1__. From this point you can start interacting with the diagram using the actions that are described in the [Rich User Interaction]({%slug diagram/functionality/rich-user-interaction%}) help article.__Example 3__: The shapes in the diagram are connected

````ASPNET
	        <asp:ScriptManager runat="server" ID="ScriptManager1"  />
	        <telerik:RadDiagram ID="RadDiagram1" runat="server">
	            <ShapesCollection>
	                <telerik:DiagramShape Id="DiagramShape1" Width="100" Height="70" X="260" Y="100" Type="rectangle">
	                    <ContentSettings Text="Parent" />
	                    <FillSettings Color="#25a0da" />
	                </telerik:DiagramShape>
	                <telerik:DiagramShape Id="DiagramShape2" Height="70" X="60" Y="250" Type="circle">
	                    <ContentSettings Text="Child 1" />
	                    <FillSettings Color="#FFBE33" />
	                </telerik:DiagramShape>
	                <telerik:DiagramShape Id="DiagramShape3" Height="70" X="245" Y="250" Type="circle">
	                    <ContentSettings Text="Child 2" />
	                    <FillSettings Color="#FFBE33" />
	                </telerik:DiagramShape>
	                <telerik:DiagramShape Id="DiagramShape4" Height="70" X="440" Y="250" Type="circle">
	                    <ContentSettings Text="Child 3" />
	                    <FillSettings Color="#FFBE33" />
	                </telerik:DiagramShape>
	            </ShapesCollection>
	            <ConnectionsCollection>
	                <telerik:DiagramConnection StartCap="FilledCircle" EndCap="ArrowEnd">
	                    <FromSettings Connector="Bottom" ShapeId="DiagramShape1" />
	                    <ToSettings Connector="Top" ShapeId="DiagramShape2" />
	                </telerik:DiagramConnection>
	                <telerik:DiagramConnection StartCap="FilledCircle" EndCap="ArrowEnd">
	                    <FromSettings Connector="Bottom" ShapeId="DiagramShape1" />
	                    <ToSettings Connector="Top" ShapeId="DiagramShape3" />
	                </telerik:DiagramConnection>
	                 <telerik:DiagramConnection StartCap="FilledCircle" EndCap="ArrowEnd">
	                    <FromSettings Connector="Bottom" ShapeId="DiagramShape1" />
	                    <ToSettings Connector="Top" ShapeId="DiagramShape4" />
	                </telerik:DiagramConnection>
	            </ConnectionsCollection>
	        </telerik:RadDiagram>
````



# See Also

 * [RadDiagram Structure]({%slug diagram/structure/overview%})

 * [RadDiagram Rich User Interaction]({%slug diagram/functionality/rich-user-interaction%})

 * [RadDiagram Server-Side Programming]({%slug diagram/server-side-programming%})
