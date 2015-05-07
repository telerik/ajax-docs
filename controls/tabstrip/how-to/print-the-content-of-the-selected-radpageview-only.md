---
title: Print the Content of the Selected RadPageView only
page_title: Print the Content of the Selected RadPageView only | RadTabStrip for ASP.NET AJAX Documentation
description: Print the Content of the Selected RadPageView only
slug: tabstrip/how-to/print-the-content-of-the-selected-radpageview-only
tags: print,the,content,of,the,selected,radpageview,only
published: True
position: 2
---

# Print the Content of the Selected RadPageView only

## 

````ASPNET
<form id="form1" runat="server">
   <asp:ScriptManager ID="ScriptManager1" runat="server">
   </asp:ScriptManager>
   <script type="text/javascript">
   function printPageView()
   {
       var myPageView = $find('<%= RadMultiPage1.ClientID %>');              
       var myIframe = document.getElementById('ifrmPrint');
       var pvContent = myPageView.get_selectedPageView().get_element().innerHTML;
       var myDoc = (myIframe.contentWindow || myIframe.contentDocument);
       if (myDoc.document) myDoc = myDoc.document;
               myDoc.write("<html><head><title>title</title>");
               myDoc.write("</head><body onload='this.focus(); this.print();'>");
               myDoc.write(pvContent + "</body></html>");    
               myDoc.close();         
   }
   </script>
   <telerik:RadTabStrip ID="RadTabStrip1" runat="server" MultiPageID="RadMultiPage1">
       <Tabs>
           <telerik:RadTab runat="server" Text="Root RadTab1">
           </telerik:RadTab>
           <telerik:RadTab runat="server" Text="Root RadTab2">
           </telerik:RadTab>
       </Tabs>
   </telerik:RadTabStrip>
   <telerik:RadMultiPage ID="RadMultiPage1" runat="server">
       <telerik:RadPageView ID="RadPageView1" runat="server">
           RadPageView1<br />
           <br />
           Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed vel sem at tellus iaculis vestibulum! Cras consequat euismod nisi. Nullam eros nibh, dignissim non, cursus eget, elementum dignissim, turpis. Sed nibh elit, volutpat id, auctor eget, molestie sit amet, turpis. Cras justo metus, vehicula vitae, tincidunt vitae, scelerisque tempor, pede. Morbi ullamcorper laoreet neque. Etiam pulvinar rhoncus ante? Cras vulputate, dui vitae mollis blandit, nulla felis consequat eros, et dapibus purus nibh id augue. Suspendisse euismod, purus id semper faucibus, augue ipsum congue leo, quis sagittis neque nibh ut risus! Etiam iaculis.
       </telerik:RadPageView>
       <telerik:RadPageView ID="RadPageView2" runat="server">
           RadPageView2<br />
           <br />
           Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed vel sem at tellus iaculis vestibulum! Cras consequat euismod nisi. Nullam eros nibh, dignissim non, cursus eget, elementum dignissim, turpis. Sed nibh elit, volutpat id, auctor eget, molestie sit amet, turpis. Cras justo metus, vehicula vitae, tincidunt vitae, scelerisque tempor, pede. Morbi ullamcorper laoreet neque. Etiam pulvinar rhoncus ante? Cras vulputate, dui vitae mollis blandit, nulla felis consequat eros, et dapibus purus nibh id augue. Suspendisse euismod, purus id semper faucibus, augue ipsum congue leo, quis sagittis neque nibh ut risus! Etiam iaculis.
       </telerik:RadPageView>
   </telerik:RadMultiPage>
   <input id="Button1" type="button" value="Print" onclick="printPageView()" />
   <iframe src="#" style="width: 0; height: 0; border: none" id="ifrmPrint"></iframe>
</form> 			
````




