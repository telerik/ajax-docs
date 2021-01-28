---
title: Custom Modules
page_title: Custom Modules - RadEditor
description: Check our Web Forms article about Custom Modules.
slug: editor/functionality/modules/custom-modules
tags: custom,modules
published: True
position: 2
---

# Custom Modules

The example below shows a simple module that displays information about the number of tables and images there are in the content area.

To create a custom module you should register its tag in the Modules inner-tag of RadEditor. Please, note that you should register at least one of the built-in modules when you create a custom module, because due to optimization purposes the editor will not register the modules JavaScript code, if the modules are not declared:

````XML
<asp:ScriptManager ID="ScriptManager" runat="server" />

<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor1" Height="700px">
	<Modules>
		<telerik:EditorModule Name="MyModule" Enabled="true" Visible="true" />
		<telerik:EditorModule Name="RadEditorStatistics" Enabled="true" Visible="true" />
	</Modules>
</telerik:RadEditor>

<script type="text/javascript">
	MyModule = function(element){    
		MyModule.initializeBase(this, [element]);
	}
	
	MyModule.prototype = {    
		initialize : function(){        
			MyModule.callBaseMethod(this, 'initialize');        
			var selfPointer = this;
			this.get_editor().add_selectionChange(function ()
			{
				selfPointer.doSomething();
			});
			this.doSomething();
		},
		
		//A method that does the actual work - it is usually attached to the "selection changed" editor event    
		
		doSomething: function (){
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
	
	MyModule.registerClass('MyModule', Telerik.Web.UI.Editor.Modules.ModuleBase);
</script>
````

If you have a RadEditor with modules already on the page, you can keep all module declarations in the markup. The custom module scripts must be added after the RadEditor scripts so the needed namespaces and classes are instnatiated. If you are adding the editor dynamically via AJAX, you would need to register the module scripts via the `ScriptManager.RegisterStartupScript` method so they are added at the end of the response in order for them to remain after the editor scripts.

## See Also

 * [Built-in Modules](https://demos.telerik.com/aspnet-ajax/editor/examples/builtinmodules/defaultcs.aspx)

 * [Custom Modules](https://demos.telerik.com/aspnet-ajax/editor/examples/custommodules/defaultcs.aspx)
