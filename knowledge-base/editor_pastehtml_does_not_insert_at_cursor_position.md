---
title: RadEditor block item not inserted to where cursor is using PasteHtml
description: The PasteHtml function of RadEditor does not paste the content inside the selected block element. Use the provided override to fix the problem.
type: troubleshooting
page_title: RadEditor block item not inserted to where cursor is using PasteHtml
slug: editor_pastehtml_does_not_insert_at_cursor_position
position: 
tags: 
ticketid: 1571190
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
The PasteHtml function does not paste the content inside the selected block element. Use the provided override to fix the problem.

## Solution
To achieve the desired behavior to always paste the content inside the selected block element you have to apply the following override which is discussed in the following forum thread -> Telerik.Web.UI.Editor.NestedElementsFix.prototype.applyFix = function () { };, e.g.

````ASP.NET
            <script>
                Telerik.Web.UI.Editor.NestedElementsFix.prototype.applyFix = function () { };

                function addControl(edId) {
                    var ed = $find(edId); //edId=EditorControlClientID

                    var tag = '';
                    tag = '<table style="display: inline;" cellspacing="1" >';
                    tag = tag + '<tbody><tr><td>';
                    tag = tag + '<input type="checkbox"  />';
                    tag = tag + '<label>Check Box</label>';
                    tag = tag + '</td></tr>';
                    tag = tag + '</tbody></table>';

                    ed.pasteHtml(tag);
                }
            </script>
            <asp:Button ID="Button1" Text="paste at cursor position"  OnClientClick="addControl('RadEditorControl'); return false;" runat="server"  />

            
            <telerik:RadEditor Skin="Silk" EnableEmbeddedSkins="true"  NewLineMode="Br" runat="server" Height="600px" width="100%" ID="RadEditorControl" UseRadContextMenu="false" >
                <Content>
                    <p>xx</p>
                    <table id="test::::5"  cellspacing="1">
                        <tbody>
                            <tr>
                                <td><input type="checkbox" /><label>Check Box</label></td>
                            </tr>
                        </tbody>
                    </table>
                    <p></p>
                    <p></p>
                    <p>yy</p>
                </Content>
                <Modules>
                    <telerik:EditorModule Name="RadEditorHtmlInspector" Visible="true" />
                </Modules>
            </telerik:RadEditor>
````

   