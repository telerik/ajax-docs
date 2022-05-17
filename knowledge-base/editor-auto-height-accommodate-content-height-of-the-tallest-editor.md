---
title: Setting the height of each editor to expand to the height of largest one
description: Learn how to automatically resize the height of each editor to expand to the height of the largest one - RadEditor for ASP.NET AJAX
type: how-to
page_title: Setting the height of each editor to expand to the height of largest one
slug: editor-auto-height-accommodate-content-height-of-the-tallest-editor
position: 
tags: 
ticketid: 1564906
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


## Description
*I have an ASP.NET table where each row has 3 cells with RadEditors in each cell populated with dynamic content. Is there a way to set the height of each editor to expand to the largest one in the row. For example, the first editor is populated and has a larger height than the other two, which are not populated. I'd like the heights to somehow be the same, without having to set a static value in code-behind. I'd like each row's 3 editor controls to match the height of the largest in the row.*

## Solution
Solution 1: When the RadEditor controls are enabled - get references to all editors, get their div content area height, compare them to get the highest value and set it via the editor.setSize method:

````ASP.NET
           <script>
                var divHeight;
                const editorHeight = [];
                function OnClientLoad(editor, args) {
                    
                    divHeight = editor.get_contentArea().offsetHeight;
                    
                    
                    editorHeight.push(divHeight);
                        
                    const max = Math.max(...editorHeight);
                        editor.setSize(700, max + 100);
                }
            </script>
            <table >
                <tr>
                    <td>
                        <telerik:RadEditor ID="RadEditor1" runat="server" Height="100%" ContentAreaMode="div" OnClientLoad="OnClientLoad">
                            <Content>
                                line1 <br/> line 2 <br /> line 3 <br /> line4 <br/> line 5 <br /> line 6 <br/> line 7 <br /> line 8 <br /> line 9 <br /> line 10 <br /> line 11line1 <br/> line 2 <br /> line 3 <br /> line4 <br/> line 5 <br /> line 6 <br/> line 7 <br /> line 8 <br /> line 9 <br /> line 10 <br /> line 11
                            </Content>
                            <Tools>
                                <telerik:EditorToolGroup>
                                    <telerik:EditorTool Name="Bold" />
                                </telerik:EditorToolGroup>
                            </Tools>
                            <Modules>
                                <telerik:EditorModule Visible="false" Enabled="false" />
                            </Modules>
                        </telerik:RadEditor>
                    </td>
                    <td>
                        <telerik:RadEditor ID="RadEditor2" runat="server" height="100%" ContentAreaMode="div" OnClientLoad="OnClientLoad">
                            <Content>
                                line1 <br/> line 2 <br /> line 3 <br /> line4 <br/> line 5 <br /> line 6 <br/> line 7 <br /> line 8 <br /> line 9 <br /> line 10 <br /> line 11
                            </Content>
                            <Tools>
                                <telerik:EditorToolGroup>
                                    <telerik:EditorTool Name="Bold" />
                                </telerik:EditorToolGroup>
                            </Tools>
                            <Modules>
                                <telerik:EditorModule Visible="false" Enabled="false" />
                            </Modules>
                        </telerik:RadEditor>
                    </td>
                    <td>
                        <telerik:RadEditor ID="RadEditor3" runat="server" height="100%" ContentAreaMode="div"  OnClientLoad="OnClientLoad">
                            <Tools>
                                <telerik:EditorToolGroup>
                                    <telerik:EditorTool Name="Bold" />
                                </telerik:EditorToolGroup>
                            </Tools>
                            <Content>
                                line1 <br/> line 2 <br /> line 3
                            </Content>
                            <Modules>
                                <telerik:EditorModule Visible="false" Enabled="false" />
                            </Modules>
                        </telerik:RadEditor>
                    </td>
                </tr>
            </table>
````

Solution 2: When the editors are disabled with Enabled="false" - when the Enabled property is set to false, the editor is rendered as a simple div element with the content in it. You can use the pageLoad event to get references to the div elements, measure their height and set the size of the tallest one, e.g.

````ASP.NET
<script>
    var divHeight;
    const editorHeight = [];
    function pageLoad() {
        var editorsIds = ["RadEditor1", "RadEditor2", "RadEditor3"];
        for (var i = 0; i < editorsIds.length; i++) {
            var editorContentWrappers = document.getElementById(editorsIds[i]);
            divHeight = editorContentWrappers.offsetHeight;
            editorHeight.push(divHeight);
            const max = Math.max(...editorHeight);
            console.log(max)
            //editor.setSize(700, max + 100);
            editorContentWrappers.style.height = max + "px";
            editorContentWrappers.style.border = "1px solid red";
        }
    }
</script>
<table >
    <tr>
        <td>
            <telerik:RadEditor ID="RadEditor1" runat="server" Height="100%" ContentAreaMode="div" OnClientLoad="OnClientLoad" Enabled="false">
                <Content>
                    line1 <br/> line 2 <br /> line 3 <br /> line4 <br/> line 5 <br /> line 6 <br/> line 7 <br /> line 8 <br /> line 9 <br /> line 10 <br /> line 11 <br />line1 <br/> line 2 <br /> line 3 <br /> line4 <br/> line 5 <br /> line 6 <br/> line 7 <br /> line 8 <br /> line 9 <br /> line 10 <br /> line 11
                </Content>
                <Tools>
                    <telerik:EditorToolGroup>
                        <telerik:EditorTool Name="Bold" />
                    </telerik:EditorToolGroup>
                </Tools>
                <Modules>
                    <telerik:EditorModule Visible="false" Enabled="false" />
                </Modules>
            </telerik:RadEditor>
        </td>
        <td>
            <telerik:RadEditor ID="RadEditor2" runat="server" height="100%" ContentAreaMode="div" OnClientLoad="OnClientLoad" Enabled="false">
                <Content>
                    line1 <br/> line 2 <br /> line 3 <br /> line4 <br/> line 5 <br /> line 6 <br/> line 7 <br /> line 8 <br /> line 9 <br /> line 10 <br /> line 11
                </Content>
                <Tools>
                    <telerik:EditorToolGroup>
                        <telerik:EditorTool Name="Bold" />
                    </telerik:EditorToolGroup>
                </Tools>
                <Modules>
                    <telerik:EditorModule Visible="false" Enabled="false" />
                </Modules>
            </telerik:RadEditor>
        </td>
        <td>
            <telerik:RadEditor ID="RadEditor3" runat="server" height="100%" ContentAreaMode="div"  OnClientLoad="OnClientLoad" Enabled="false">
                <Tools>
                    <telerik:EditorToolGroup>
                        <telerik:EditorTool Name="Bold" />
                    </telerik:EditorToolGroup>
                </Tools>
                <Content>
                    line1 <br/> line 2 <br /> line 3
                </Content>
                <Modules>
                    <telerik:EditorModule Visible="false" Enabled="false" />
                </Modules>
            </telerik:RadEditor>
        </td>
    </tr>
</table>
````

## See Also
* [Automatic Height Resize](https://demos.telerik.com/aspnet-ajax/editor/examples/autoresizeheight/defaultcs.aspx)
 
 
   