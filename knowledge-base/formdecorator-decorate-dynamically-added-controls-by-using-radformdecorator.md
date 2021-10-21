---
title: Decorate dynamically added controls by using RadFormDecorator
description: Decorate dynamically added controls by using RadFormDecorator. Check it now!
type: how-to
page_title: Decorate dynamically added controls by using RadFormDecorator
slug: formdecorator-decorate-dynamically-added-controls-by-using-radformdecorator.md
res_type: kb
---


## HOW-TO
Decorate dynamically added controls by using RadFormDecorator
   
## SOLUTION
   
  The **RadFormDecorator** control iterates through the page controls and decorates them when the page loads. However, a common scenario is that controls are added dynamically after the page has already been loaded and in this case the **RadFormDecorator** should be forced to decorate them because the decoration has already been done on page load. In order to achieve this, you can use the client - side method **decorate** which the **RadFormDecorator** provides for such cases. The method receives two arguments - the first one is the HTML element which is the container of the newly added controls and the second parameter is a boolean one which determines whether to add decorator specific CSS classes to the container.  
   
 Sample code which shows forcing decoration is available below:  
   
````ASP.NET
<form id="form1" runat="server">
    <div>
        <asp:ScriptManager ID="ScriptManager1" runat="server">
            <Scripts>
                <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
                <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQuery.js" />
            </Scripts>
        </asp:ScriptManager>
        <telerik:RadFormDecorator ID="RadFormDecorator1" runat="server" Skin="Forest" DecoratedControls="All" />
        <div>
            <fieldset>
                <legend>initial controls:</legend>
                <br />
                <asp:TextBox ID="txt1" runat="server"></asp:TextBox><asp:Button ID="but1" runat="server"
                    Text="Postback" />
                <br />
                <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox><asp:Button ID="Button1"
                    runat="server" Text="Postback" />
                <br />
                <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox><asp:Button ID="Button2"
                    runat="server" Text="Postback" />
                <br />
            </fieldset>
        </div>
    </div>
    <div id="container">
    </div>
    <script type="text/javascript">
    function addControls()
    {
        var $ = $telerik.$;
        function handle_rewrite_posts(data, status)
        {
            $("#container").html(data);
            //decorate new controls here
            var decorator = $find("<%= RadFormDecorator1.ClientID %>");
            if (decorator)
            {
                decorator.decorate($get("container"), false);
            }
        }
        $.get("HTMLPage.htm", "", handle_rewrite_posts);
        return false;
    }
    </script>
    <button onclick="addControls();return false;">
        Add more controls</button>
</form>
````
   
 In the sample code above, the second argument of the **decorate** method is false because the container DIV element is present when the page loads and thus it already has the CSS added.  


   