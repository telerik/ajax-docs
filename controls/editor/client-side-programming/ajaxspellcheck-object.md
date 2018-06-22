---
title: AjaxSpellCheck Object
page_title: AjaxSpellCheck Object | RadEditor for ASP.NET AJAX Documentation
description: AjaxSpellCheck Object
slug: editor/client-side-programming/ajaxspellcheck-object
tags: ajaxspellcheck,object
published: True
position: 5
---

# AjaxSpellCheck Object

This article shows how to get a reference to the spellcheck object of RadEditor and lists its API.

The spellchecker object in RadEditor is based on RadSpell, but is an asyncronously created instance that integrates with the RadEditor UI and as such provides more limited functionality. It is only created when the spell check is invoked and otherwise it will be `undefined`. To manipulate its API you need to use a timeout before getting the reference, because otherwise the object will not be created yet.

>caption How to get a reference to the AjaxSpellCheck object of RadEditor

````ASP.NET
<telerik:RadEditor runat="server" ID="RadEditor1">
    <Content>
        miztake in showing how to invoke a spell check before saving
    </Content>
</telerik:RadEditor>
<asp:Button Text="save" OnClientClick="spellCheckAndSave(this); return false;" 
    ID="btnSave" OnClick="btnSave_Click" runat="server" />
<script>
    function spellCheckAndSave(btn) {
        btn.setAttribute("disabled", "disabled");
        //get a reference to the editor object
        var editor = $find("<%=RadEditor1.ClientID%>");
        //execute the spellcheck command
        editor.fire("AjaxSpellCheck");
        //use a timeout before getting the reference and using the control API
        setTimeout(function () {
            var spell = editor.get_ajaxSpellCheck();
            spell.add_spellCheckEnd(checkFinished);
        }, 10);
    }

    function checkFinished(sender, args) {
        __doPostBack("<%=btnSave.UniqueID%>", "");
    }
</script>
````
````C#
protected void btnSave_Click(object sender, EventArgs e)
{
    Response.Write(string.Format("page posted on {0}, editor content is:<br />{1}", DateTime.Now, RadEditor1.Content));
}
````
````VB
Protected Sub btnSave_Click(ByVal sender As Object, ByVal e As EventArgs) Handles btnSave.Click
    Response.Write(String.Format("page posted on {0}, editor content is:<br />{1}", DateTime.Now, RadEditor1.Content))
End Sub
````

The AjaxSpellCheck object exposes the following public methods and properties to control its behavior:

>caption AjaxSpellCheck Client-Side Methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|addCustomWord|`String`||Adds a custom word to the collection.The method takes the following arguments: **word** - The word to be added.|
|cancelSpellCheck|`Boolean`||Stops the spell checking and retrieves the original state of the content.The method takes the following arguments: **raiseEvent?** - Indicates whether to raise the spellCheckEnd event.|
|finishSpellCheck|`Boolean`||Stops the spell checking and updates the content.The method takes the following arguments: **raiseEvent?** - Indicates whether to raise the spellCheckEnd event.|
|get_editor||Telerik.Web.UI.RadEditor|Returns the RadEditor instance.|
|get_language||String|Gets the language used by the Spell-Check service.|
|set_editor|`Telerik.Web.UI.RadEditor`||Sets the RadEditor instance.The method takes the following arguments: **editor** - The RadEditor instance.|
|set_language|`String`||Sets the language used by the Spell-Check service.The method takes the following arguments: **language** - The language.|
|spellCheck|||Performs a spell check on the content.|

>caption AjaxSpellCheck Client-Side Methods for attaching/detaching client-side event handlers


| Name | Arguments | Description |
| ------ | ------ | ------ |
|add_spellCheckEnd|Function|Adds a handler for the spellCheckEnd AjaxSpellCheck client event.|
|add_spellCheckStart|Function|Adds a handler for the spellCheckStart AjaxSpellCheck client event.|
|remove_spellCheckEnd|Function|Removes a handler for the spellCheckEnd AjaxSpellCheck client event.|
|remove_spellCheckStart|Function|Removes a handler for the spellCheckStart AjaxSpellCheck client event.|
