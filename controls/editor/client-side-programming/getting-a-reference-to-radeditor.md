---
title: Getting a Reference to RadEditor
page_title: Getting a Reference to RadEditor | RadEditor for ASP.NET AJAX Documentation
description: Getting a Reference to RadEditor
slug: editor/client-side-programming/getting-a-reference-to-radeditor
tags: getting,a,reference,to,radeditor
published: True
position: 1
---

# Getting a Reference to RadEditor

Telerik RadEditor provides a client-side object of type **Telerik.Web.UI.RadEditor**. You can get a reference to it using `$find("<%= name.ClientID %>")`. The following code demonstrates that:

````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server" />

<telerik:RadEditor RenderMode="Lightweight" ID="RadEditor1" runat="server"></telerik:RadEditor>

<script type="text/javascript">
	Sys.Application.add_load(function () {
		var editor = $find("<%= RadEditor1.ClientID %>"); //get a reference to RadEditor's client object
		alert(editor.get_id()); //returns RadEditor Client ID
	});
</script> 
````

>note You should note that in MS ASP.NET AJAX, client control objects are created in a manner similar to this:

````ASP.NET
	   .......
   <script type="text/javascript">
   <!--
	   Sys.Application.initialize();
	   Sys.Application.add_init(function ()
	   {
		   $create(MS.AJAX.SomeControl, { controlparameters: '' }, null, $get("controlelement"));
	   });
   // -->
   </script>
 
</body>
</html>
````

You can see that the client object representation of MS AJAX controls are created just as the last code on the page in the Sys.Application.init event, which is raised after the window.onload event. For that reason you can get a reference to RadEditor no earlier that in the [Sys.Application.load](https://www.asp.net/AJAX/Documentation/Live/ClientReference/Sys/ApplicationClass/SysApplicationLoadEvent.aspx) event, which is raised after all scripts have been loaded and the objects in the application have been created and initialized.

Using the client-side **RadEditor** object, you can access the exposed properties and methods.

>note If the Enabled property is set to false, the editor is rendered as a standard DIV on the page and does not expose its client-side object and API.

## See Also

 * [Client-Side API](https://demos.telerik.com/aspnet/prometheus/Editor/Examples/ClientsideAPI/DefaultCS.aspx)
