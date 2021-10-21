---
title: Print RadToolTip content
description: Print RadToolTip content. Check it now!
type: how-to
page_title: Print RadToolTip content
slug: tooltip-print-radtooltip-content
res_type: kb
---


   
## HOW-TO
Print only the RadToolTip content  
   
## SOLUTION
A common scenario is to use RadToolTip for showing additional content about certain items. Sometimes, however, it is needed to print only the additional details which are loaded in the tooltip instead of the entire page and this is what this KB article shows. This can be achieved by using the client API to get the content and then open it in a new window and print it as shown below:  

````ASPX
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Untitled Page</title>
</head>
<body>
    <form id="form1" runat="server">
        <asp:ScriptManager ID="ScriptManager1" runat="server" />
  
        <script type="text/javascript">
          
        function PrintContent()
        {
          var tooltip = $find("<%=tip.ClientID %>");
          var content= tooltip.get_content();
          var pwin=window.open('','print_content','width=300,height=300');
          pwin.document.open();
          pwin.document.write('<html><body onload="window.print()">'+content+'</body></html>');
          pwin.document.close();        
          setTimeout(function(){pwin.close();},1000);
  
        }
          
        </script>
  
        Ouside test content goes here<br />
        Ouside test content goes here<br />
        Ouside test content goes here<br />
        Ouside test content goes here<br />
        Ouside test content goes here<br />
        <br />
        <br />
        <asp:HyperLink ID="target" runat="server" Text="Target control">
       
        </asp:HyperLink>
        <telerik:RadToolTip ID="tip" runat="server" TargetControlID="target" Width="300"
            Height="300" HideEvent="ManualClose">
            test content goes here<br />
            test content goes here<br />
            test content goes here<br />
            test content goes here<br />
            test content goes here<br />
            <asp:Button ID="btn" runat="server" OnClientClick="PrintContent();return false;"
                Text="Print" />
        </telerik:RadToolTip>
          
         
    </form>
</body>
</html>
````
 
  