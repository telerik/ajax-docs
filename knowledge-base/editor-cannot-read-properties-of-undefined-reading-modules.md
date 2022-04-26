---
title: Uncaught TypeError Cannot read properties of undefined reading Modules error
description: Have you received "Uncaught TypeError: Cannot read properties of undefined (reading 'Modules')" JavaScript client error on the page or in the browser console? See how to solve it with Telerik UI for ASP.NET AJAX - Telerik Web UI
type: troubleshooting
page_title: Uncaught TypeError Cannot read properties of undefined reading Modules error
slug: editor-cannot-read-properties-of-undefined-reading-modules
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
			<td>RadEditor for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Error Message
Uncaught TypeError: Cannot read properties of undefined (reading 'Modules')

## Description
Have you received "Uncaught TypeError Cannot read properties of undefined reading Modules error" JavaScript client error on the page or in the browser console? See how to solve it in the section below



## Solution
You can solve the client-side error

*Uncaught TypeError Cannot read properties of undefined reading Modules error*

which you can get when the Telerik RadEditor is initially hidden or still not fully loaded or available on the page by wrapping the code referencing the RadEditor client-side functionality inside the following if statement:

```JavaScript
if (typeof ($telerik) != "undefined" && Telerik.Web.UI.Editor != undefined && Telerik.Web.UI.Editor.Modules != undefined) {
       MyModule = function (element) {
                        MyModule.initializeBase(this, [element]);
        }
        ...
       MyModule.registerClass('MyModule', Telerik.Web.UI.Editor.Modules.ModuleBase);
}
````

e.g.

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

                        CountCharAction: function () {
                            var content = this.get_editor().get_html(true);
                            var words = 0;
                            var chars = 0;
                            if (content) {
                                if (content) {
                                    splitRegX = /\s+/;
                                    var array = content.split(splitRegX);
                                    words = array.length;
                                    chars = content.length;
                                }
                            }

                            var element = this.get_element();
                            element.innerHTML = "<span style='line-height:22px'>" + "Words: " + words + " Characters: " + chars + "&nbsp;</span>";
                        }
                    };

                    MyModule.registerClass('MyModule', Telerik.Web.UI.Editor.Modules.ModuleBase);
                }
            </script>
````
 


## See Also
* [Custom Modules]({%slug editor/functionality/modules/custom-modules %})
* [Uncaught ReferenceError Telerik is not defined error]({%slug common-telerik-is-not-defined-error %})


 