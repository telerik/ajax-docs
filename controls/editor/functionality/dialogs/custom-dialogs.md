---
title: Custom Dialogs
page_title: Custom Dialogs | RadEditor for ASP.NET AJAX Documentation
description: Custom Dialogs
slug: editor/functionality/dialogs/custom-dialogs
tags: custom,dialogs
published: True
position: 8
---

# Custom Dialogs

RadEditor provides a flexible mechanism for adding custom dialogs that plug directly into the undo/redo mechanism and have the Telerik RadEditor look and feel. In addition, the editor provides the developer with the ability to specify arguments to be passed to the custom dialog and back to the editor.Here are the steps to create and add a custom Insert Link dialog to RadEditor's toolbar.

1. Add a custom button that will open the dialog:

	**ASP.NET**

		<telerik:RadEditor runat="server" ID="RadEditor1">
			<Tools>
				<telerik:EditorToolGroup>
					<telerik:EditorTool Name="InsertSpecialLink" Text="Insert Special Link" />
				</telerik:EditorToolGroup>
			</Tools>
			<Content>        
				Sample Content   
			</Content>
		</telerik:RadEditor>

1. To display your own icon for the InsertSpecialLink button set the following style tag in your page:

	**ASP.NET**
	
		<style type="text/css">
	        .reToolbar.Default .InsertSpecialLink
	        {
	            background-image: url(http://www.telerik.com/DEMOS/ASPNET/RadControls/Editor/Skins/Default/buttons/Custom.gif);
	        }
	    </style>

1. Add the following JavaScript command under the editor's declaration:

	**JavaScript**
	    
		<script type="text/javascript">
	        Telerik.Web.UI.Editor.CommandList["InsertSpecialLink"] = function (commandName, editor, args)
	        {   
	            var elem = editor.getSelectedElement(); //returns the selected element.            
	            if (elem.tagName == "A")   
	            {        
	                editor.selectElement(elem);        
	                argument = elem;   
	            }   
	            else   
	            {      
	                var content = editor.getSelectionHtml();      
	                var link = editor.get_document().createElement("A");      
	                link.innerHTML = content;               
	                argument = link;
	            }     
	
	            var myCallbackFunction = function(sender, args)   
	            {       
	                editor.pasteHtml(String.format("<a href={0} target='{1}' class='{2}'>{3}</a> ", args.href, args.target, args.className, args.name))
	            }
	
	            editor.showExternalDialog(
	                'InsertLink.aspx',
	                argument,
	                270,
	                300,
	                myCallbackFunction,
	                null,
	                'Insert Link',
	                true,
	                Telerik.Web.UI.WindowBehaviors.Close + Telerik.Web.UI.WindowBehaviors.Move,
	                false,
	                false);
	        };
	    </script>

	The custom command functions are to open a specified custom dialog and to supply arguments from the main page to the opened dialog by firing the showExternalDialog method. The editor's showExternalDialog() method has the following arguments: **showExternalDialog(_url (aspx/html file), argument, width, height, callbackFunction, callbackArgs, title, modal, behaviors, showStatusbar, showTitlebar_)**;

1. The next step is to create the dialog aspx file. For this scenario, you should create a page named InsertLink.aspx. Once the dialog file is created add the following JavaScript code in it as well as the code for the link insertion:

	**JavaScript**
	    
		<fieldset style="width: 214px; height: 192px">
	        Link name:
	        <input type="text" id="linkName" /><br />
	        Link URL:
	        <input type="text" id="linkUrl" /><br />
	        Link target:
	        <input type="text" id="linkTarget" /><br />
	        Link class:
	        <input type="text" id="linkClass" /><br />
	        <input type="button" onclick="javascript:insertLink();" value="Insert Link" />
	    </fieldset>
	    
		<script type="text/javascript">
	        if (window.attachEvent)
	        {
	            window.attachEvent("onload", initDialog);
	        }
	        else if (window.addEventListener)
	        {
	            window.addEventListener("load", initDialog, false);
	        }
	
	        var linkUrl = document.getElementById("linkUrl");
	        var linkTarget = document.getElementById("linkTarget");
	        var linkClass = document.getElementById("linkClass");
	        var linkName = document.getElementById("linkName");
	        var workLink = null;
	
	        function getRadWindow()
	        {
	            if (window.radWindow)
	            {
	                return window.radWindow;
	            }
	
	            if (window.frameElement && window.frameElement.radWindow)
	            {
	                return window.frameElement.radWindow;
	            }
	
	            return null;
	        }
	
	        function initDialog()
	        {
	            var clientParameters = getRadWindow().ClientParameters; //return the arguments supplied from the parent page   
	                            
	            linkUrl.value = clientParameters.href;
	            linkTarget.value = clientParameters.target;
	            linkClass.value = clientParameters.className;
	            linkName.value = clientParameters.innerHTML;
	            workLink = clientParameters;
	        }
	        function insertLink() //fires when the Insert Link button is clicked    
	        {
	            //create an object and set some custom properties to it            
	            workLink.href = linkUrl.value;
	            workLink.target = linkTarget.value;
	            workLink.className = linkClass.value;
	            workLink.name = linkName.value;
	            getRadWindow().close(workLink); //use the close function of the getRadWindow to close the dialog and pass the arguments from the dialog to the callback function on the main page.    
	        }    
	    </script>


1. When the getRadWindow().close(closeArguments) is fired it will pass the closeArguments value to the myCallbackFunction function on the main page. Thus you will be able to construct an HTML link and paste it in the editor with the pasteHtml function:

	**JavaScript**
	
	    var myCallbackFunction = function(sender, args){ editor.pasteHtml(String.format("<a href='{0}' target='{1}' class='{2}'>{3}</a> ", args.href, args.target, args.className, args.name)) }



## See Also

 * [Add Custom Dialogs](http://demos.telerik.com/aspnet/prometheus/Editor/Examples/CustomDialogs/DefaultCS.aspx)
