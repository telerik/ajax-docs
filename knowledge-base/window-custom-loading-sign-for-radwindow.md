---
title: Custom loading sign for RadWindow
description: Custom loading sign for RadWindow. Check it now!
type: how-to
page_title: Custom loading sign for RadWindow
slug: window-custom-loading-sign-for-radwindow
res_type: kb
---
 
## How to

Use a custom loading sign with RadWindow  
  
## Solution
  
There are two common scenarios for customizing the default loading animation which is shown while the RadWindow's content page is being loaded or it is autosized - to change only the loading image or to use your own HTML element.  
  
 1.  Change the loading image  

  In order to get the desired result you should include the image you want to display in the project and then override the default image set to the **RadWindow** by using a style, similar to the below one:  
  
  - for RenderMode="Classic"

  ````CSS
.rwLoading 
{ 
        background-image: url("ImageUrl") !important;   
} 
  ````  

  - for RenderMode="Lightweight":  

  ````CSS
.rwLoading .rwExternalContent
{ 
        background-image: url("ImageUrl") !important;   
} 
  ````

 1.  Use your own HTML element as a loading sign 
 
  This scenario is a little bit more complex and to implement it you should go through the following steps:
   
   - declare the element which you want to use as a loading sign and set its **display** to **none** e.g as shown below:

   ````
   <div id="loading" style="border: solid 1px Red; width: 100px; height: 50px; display: none;
      text-align: center; margin: auto;">
      Custom<br />
      loading....
  </div>
   ````
   
   - override the default loading to display blank:

   ````
   <style type="text/css">
    .rwLoading
    {
        background-image: none !important;
    }
</style>
   ````
   
   - handle the **OnClientShow** and **OnClientPageLoad** events to show and hide your custom loading as shown below:

   ````
   <script type="text/javascript">
    var loadingSign = null;
    var contentCell = null;
    function openRadWnd() {
        $find("<%=RadWindow1.ClientID %>").show();
    }
 
    function OnClientShow(sender, args) {
        loadingSign = $get("loading");
        contentCell = sender._contentCell;
        if (contentCell && loadingSign) {
            contentCell.appendChild(loadingSign);
            contentCell.style.verticalAlign = "middle";
            loadingSign.style.display = "";
        }
    }
 
    function OnClientPageLoad(sender, args) {
        if (contentCell && loadingSign) {
            contentCell.removeChild(loadingSign);
            contentCell.style.verticalAlign = "";
            loadingSign.style.display = "none";
        }
    }
 
</script>
 
<telerik:RadWindow ID="RadWindow1" runat="server" NavigateUrl="ChildPage.aspx" ShowContentDuringLoad="false"
    OnClientShow="OnClientShow" OnClientPageLoad="OnClientPageLoad">
</telerik:RadWindow>
<%--Button to show the window--%>
<input type="button" id="btnOpen" value="Open RadWindow" onclick="openRadWnd(); return false;" />
   ````

>note The provided solution with the custom loading works for the case when the loading should be shown while the content page is loading and thus you should make sure that you have **ShowContentDuringLoad="false"** for the RadWindow.*   
  
>note The above code works only if the **ReloadOnShow** property is not set, as appendChild() removes the original content from the document. If you set this property to **true** a slight modification is needed that utilizes the [cloneNode()](https://developer.mozilla.org/En/DOM/Node.cloneNode) method instead so that the sign appears correctly on subsequent displays of the RadWindow. You can find an example in the attached archive.*  
  
