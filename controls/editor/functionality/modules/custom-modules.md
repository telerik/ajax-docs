---
title: Custom Modules
page_title: Custom Modules | RadEditor for ASP.NET AJAX Documentation
description: Custom Modules
slug: editor/functionality/modules/custom-modules
tags: custom,modules
published: True
position: 2
---

# Custom Modules



## 

The example below shows a simple module that displays information about the number of tables and images there are in the content area.

To create a custom module you should register its tag in the Modules inner-tag of RadEditor. Please, note that you should register at least one of the built-in modules when you create a custom module, because due to optimization purposes the editor will not register the modules javascript code, if the modules are not declared:

````XML
	    <asp:ScriptManager ID="ScriptManager" runat="server" />
	    <telerik:RadEditor runat="server" ID="RadEditor1" Height="700px">
	        <Modules>
	            <telerik:EditorModule Name="MyModule" Enabled="true" Visible="true" />
	            <telerik:EditorModule Name="RadEditorStatistics" Enabled="true" Visible="true" />
	        </Modules>
	    </telerik:RadEditor>
	    <script type="text/javascript">
	    MyModule = function(element)
	    {    
	        MyModule.initializeBase(this, [element]);
	    }
	    MyModule.prototype =
	    {    
	        initialize : function()    
	        {        
	            MyModule.callBaseMethod(this, 'initialize');        
	            var selfPointer = this;
	            this.get_editor().add_selectionChange(function ()
	            {
	                selfPointer.doSomething();
	            });
	            this.doSomething();
	        },
	        //A method that does the actual work - it is usually attached to the "selection changed" editor event    
	        doSomething: function ()
	        {
	            var span = document.createElement("SPAN");        
	            span.innerHTML = this.get_editor().get_html();
	            var imageCount = span.getElementsByTagName("IMG").length;        
	            var tableCount = span.getElementsByTagName("TABLE").length;
	            var element = this.get_element();
	            element.innerHTML = "<b>CUSTOM MODULE: Images: " + imageCount + " Tables: " + tableCount + "</b>";
	            element.style.border = "1px solid red";
	            element.style.backgroundColor = "yellow";
	            element.style.color = "red";
	        }
	    };
	    MyModule.registerClass('MyModule', Telerik.Web.UI.Editor.Modules.ModuleBase);</script>
````





# See Also

 * [Built-in Modules](http://demos.telerik.com/aspnet-ajax/editor/examples/builtinmodules/defaultcs.aspx)

 * [Custom Modules](http://demos.telerik.com/aspnet-ajax/editor/examples/custommodules/defaultcs.aspx)
