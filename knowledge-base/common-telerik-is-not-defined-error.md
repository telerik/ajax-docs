---
title: Uncaught ReferenceError Telerik is not defined error
description: Have you ever received the Uncaught ReferenceError Telerik is not defined JavaScript client error on the page or in the browser console? See how to solve it with Telerik UI for ASP.NET AJAX
type: troubleshooting
page_title: Uncaught ReferenceError Telerik is not defined error
slug: common-telerik-is-not-defined-error
position: 
tags: 
ticketid: 1562680
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Error Message
*Uncaught ReferenceError: Telerik is not defined*

## Description
Have you get the "Uncaught ReferenceError: Telerik is not defined" JavaScript client error on the page or in the browser console? Learn how to solve it in the Description section below.


## Solution
You can solve the client-error Uncaught ReferenceError: Telerik is not defined, which you can get when the Telerik is hidden or still not loaded/available on the page by wrapping the code referencing the Telerik client-side functionality inside the following if statement:

```JavaScript
if (typeof ($telerik) != "undefined" && Telerik.Web.UI.Editor != undefined && Telerik.Web.UI.Editor.Modules != undefined) {
       MyModule = function (element) {
                        MyModule.initializeBase(this, [element]);
        }
        ...
       MyModule.registerClass('MyModule', Telerik.Web.UI.Editor.Modules.ModuleBase);
}
````

For example, check out the following sample:

````ASP.NET
            <telerik:RadEditor ID="RadEditor1" runat="server" Enabled="false">
                <Modules>
                    <telerik:EditorModule Name="MyModule" Enabled="true" Visible="true" />
                    <telerik:EditorModule Name="RadEditorStatistics" Enabled="true" Visible="true" />
                </Modules>
            </telerik:RadEditor>
            <script type="text/javascript">
                if (typeof ($telerik) != "undefined" && Telerik.Web.UI.Editor != undefined && Telerik.Web.UI.Editor.Modules != undefined) {
                    MyModule = function (element) {
                        MyModule.initializeBase(this, [element]);
                    }

                    MyModule.prototype =
                    {
                        initialize: function () {
                            MyModule.callBaseMethod(this, 'initialize');
                            var selfPointer = this;
                            this.get_editor().add_selectionChange(function () { selfPointer.CountCharAction(); });
                            this.get_editor().attachEventHandler("onkeyup", function () { selfPointer.CountCharAction(); });
                            this.CountCharAction();

                        },

                        //A method that does the actual work - it is usually attached to the "selection changed" editor event
                        CountCharAction: function () {
                            var content = this.get_editor().get_html(true);
                            var words = 0;
                            var chars = 0;
                            if (content) {
                                //punctRegX = /[!\.?;,:&_\-\-\{\}\[\]\(\)~#'"]/g;
                                //content = content.replace(punctRegX, "");
                                //trimRegX = /(^\s+)|(\s+$)/g;
                                //content = content.replace(trimRegX, "");
                                if (content) {
                                    splitRegX = /\s+/;
                                    var array = content.split(splitRegX);
                                    words = array.length;
                                    chars = content.length;
                                }
                            }

                            var element = this.get_element();
                            element.innerHTML = "<span style='line-height:22px'>" + "Words: " + words + " Characters: " + chars + "&nbsp;</span>";
                            /*element.style.border = "1px solid red";*/
                            /*element.style.backgroundColor = "yellow";*/
                            /*element.style.color = "red";*/
                        }
                    };

                    MyModule.registerClass('MyModule', Telerik.Web.UI.Editor.Modules.ModuleBase);
                }
            </script>
````
 


## See Also
* [Custom Modules]({%slug editor/functionality/modules/custom-modules %})
* [Cannot read properties of undefined reading Modules error]({%slug editor-cannot-read-properties-of-undefined-reading-modules %})
 
  