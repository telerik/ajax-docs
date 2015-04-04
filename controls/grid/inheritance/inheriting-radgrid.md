---
title: Inheriting RadGrid
page_title: Inheriting RadGrid | UI for ASP.NET AJAX Documentation
description: Inheriting RadGrid
slug: grid/inheritance/inheriting-radgrid
tags: inheriting,radgrid
published: True
position: 0
---

# Inheriting RadGrid



## 

Let's say you have an assembly called __InheritedGrid.dll__ and the grid name is __InheritedGrid__. Furthermore, you have a __TagPrefix__ assembly attribute with value of __myRadG__. By this means VS designer will not have any problem recognizing the tag prefix when you drag and drop this control from the toolbox to the designer surface. Merely add the following line in the AssemblyInfo file in your application:

__[assembly: TagPrefix("MyBaseNamespace.MyControls","myRadG")]__

When you create applications with the inherited control version, you should have both of the following Register directives in the aspx of the page:

__<%@ Register TagPrefix="radG" Namespace="Telerik.Web.UI" Assembly="Telerik.Web.UI"%><%@ Register TagPrefix="myRadG" Namespace="MyBaseNamespace.MyControls" Assembly="InheritedGrid"%>__

The first one states that you will reference classes declared in the __Telerik.Web.UI__assembly. The second one is your assembly, where the inherited controls are.

Then you can add instances of your custom grid control on the page:

__<mytelerik: InheritedGrid ... >__

__</mytelerik: InheritedGrid>__

But the __GridTableView__, __GridBoundColumn__ etc. classes are defined in the __Telerik.Web.UI__ assembly. That is why the declaration in your grid body should have the following syntax:

````ASPNET
	<mytelerik:InheritedGrid ... >
	    <MasterTableView>
	        <Columns>
	            <telerik:GridBoundColumn ...>
	            </telerik: GridBoundColumn>
	        </Columns>
	        <DetailTables>
	            <telerik:GridTableView ...>
	            </telerik:GridTableView>
	        </DetailTables>
	    <MasterTableView>
	</mytelerik:InheritedGrid>          
````



This should be enough for the VS designer to register the tag prefixes the right way. Then the Telerik RadGrid Property Builder will serialize correctly the design time markup.

If you would like to inherit the GridTableView object for your grid, here are some basic rules that you need to follow:

>tabbedCode

````ASPNET
	<%@ Register Namespace="MyNamespace" TagPrefix="my" %>
	 ...
	        <my:MyGrid ID="MyGrid1" runat="server" OnNeedDataSource="MyGrid1_NeedDataSource">
	            <MasterTableView>
	                <DetailTables>
	                    <my:MyGridTableView />
	                </DetailTables>
	            </MasterTableView>
	        </my:MyGrid>			
````
````C#
	     
	
	namespace MyNamespace
	{
	    public class MyGrid : RadGrid
	    {
	            public override GridTableView CreateTableView()
	            {
	                return new MyGridTableView(this);
	            }
	    }
	
	    public class MyGridTableView : GridTableView
	    {
	            public MyGridTableView()
	            {
	                //
	            }
	
	            public MyGridTableView(RadGrid owner) : base(owner)
	            {
	                //
	            }
	    }
	}
				
````
````VB.NET
	
	
	Namespace MyNamespace
	 Public Class MyGrid  Inherits RadGrid
	            Public Overloads Overrides Function CreateTableView() As GridTableView
	                Return New MyGridTableView(Me)
	            End Function
	        End Class
	
	 Public Class MyGridTableView  Inherits GridTableView
	            Public Sub New()
	                '
	            End Sub
	
	  Public Sub New(ByVal owner As RadGrid)   MyBase.New(owner)
	                '
	            End Sub
	        End Class
	    End Namespace
	
````
>end

Basically, you need to override the CreateTableView() method of the RadGrid class and return an instance of your custom GridTableView.

As the inheritance of a control is an ASP.NET feature, these rules are applicable to inherit and use ASP.NET server control.

>note Note that we do not support issues with inherited versions of RadGrid and the purpose of this topic is to provide basic instructions how to inherit your custom grid control from RadGrid.
>

