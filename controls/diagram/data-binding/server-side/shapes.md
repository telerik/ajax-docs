---
title: Shapes
page_title: Shapes | UI for ASP.NET AJAX Documentation
description: Shapes
slug: diagram/data-binding/server-side/shapes
tags: shapes
published: True
position: 0
---

# Shapes



## 

In this article you can check how to data bind the shapes in this __ASP.NET AJAX Diagram__ control. __RadDiagram__ can use the standard	data sources for binding an ASP.NET control:

* Declarative ASP.NET data sources (SqlDatasource, ObjectDataSource, LinqDataSource, etc.)

* Server-side collections that implement the __IEnumerable__ interface.

Similar to setting a data source for an ASP.NET control, you should either use the __DataSourceID__ property when data binding declaratively or __DataSource__ when the data source of the control is set on the server-side (such it the case in__Example 1__).

The data source should have columns for each of the diagram fields that you want to specify. For example, if you want to pull the width of the shape from the data source, this will require a separate column that contains the widths of each shape.

The columns of the data source are attached to their corresponding data fields in the shapes via the properties with the structure __Data[__ in __RadDiagram > BindingSettings > ShapeSettings__. You can find the full set of properties in the [Server-Side API of RadDiagram](http://www.telerik.com/help/aspnet-ajax/t_telerik_web_ui_raddiagram.html).

__Example 1__: Data binding shapes in a diagram to a collection of custom objects.

````ASPNET
	            <telerik:RadDiagram ID="RadDiagram1" runat="server">
	                <BindingSettings>
	                    <ShapeSettings DataContentTextField="text" DataIdField="id" DataTypeField="type"
	                        DataXField="x" DataYField="y" />
	                </BindingSettings>
	            </telerik:RadDiagram>
````



>tabbedCode

````C#
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        if (!IsPostBack)
	        {
	            RadDiagram1.DataSource = GetShapes();
	            RadDiagram1.DataBind();
	        }
	    }
	
	    private IEnumerable GetShapes()
	    {
	        return new[] {
	            new {id="Shape1", text="Shape 1", type="circle", x=100, y=300, width=300, height=100},
	            new {id="Shape2", text="Shape 2", type="rectangle", x=200, y=100, width=200, height=200},
	            new {id="Shape3", text="Shape 3", type="circle", x=300, y=300, width=300, height=100},
	            new {id="Shape4", text="Shape 4", type="rectangle", x=400, y=100, width=200, height=200},
	            new {id="Shape5", text="Shape 5", type="circle", x=500, y=300, width=300, height=100}
	        };
	    }
````



````VB
	    Protected Sub Page_Load(sender As Object, e As EventArgs)
	        If Not IsPostBack Then
	            RadDiagram1.DataSource = GetShapes()
	            RadDiagram1.DataBind()
	        End If
	    End Sub
	
	    Private Function GetShapes() As IEnumerable
	        Return New Object() {New With { _
	         .id = "Shape1", _
	         .text = "Shape 1", _
	         .type = "circle", _
	         .x = 100, _
	         .y = 300, _
	         .width = 300, _
	         .height = 100 _
	    }, New With { _
	         .id = "Shape2", _
	         .text = "Shape 2", _
	         .type = "rectangle", _
	         .x = 200, _
	         .y = 100, _
	         .width = 200, _
	         .height = 200 _
	    }, New With { _
	         .id = "Shape3", _
	         .text = "Shape 3", _
	         .type = "circle", _
	         .x = 300, _
	         .y = 300, _
	         .width = 300, _
	         .height = 100 _
	    }, New With { _
	         .id = "Shape4", _
	         .text = "Shape 4", _
	         .type = "rectangle", _
	         .x = 400, _
	         .y = 100, _
	         .width = 200, _
	         .height = 200 _
	    }, New With { _
	         .id = "Shape5", _
	         .text = "Shape 5", _
	         .type = "circle", _
	         .x = 500, _
	         .y = 300, _
	         .width = 300, _
	         .height = 100 _
	    }}
	    End Function
````


>end

# See Also

 * [RadDiagram Server-Side API](http://www.telerik.com/help/aspnet-ajax/t_telerik_web_ui_raddiagram.html)
