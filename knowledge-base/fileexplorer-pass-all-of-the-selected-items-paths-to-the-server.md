---
title: Pass all of the selected items' paths to the server
description: Pass all of the selected items' paths to the server - RadFileExplorer. Check it now!
type: how-to
page_title: Pass all of the selected items' paths to the server
slug: fileexplorer-pass-all-of-the-selected-items-paths-to-the-server
res_type: kb
---


## HOW-TO  
Pass all of the selected items' paths to the server by clicking a button.  
   
## SOLUTION
 
1. Add the needed contols on the page  

      - a Button that triggers the post back (ID="Button1")  

      - a HiddenField that holds the selected items paths (ID=HiddenField1")  

      - a Label - used for demonstration purposes to show the selected item's count. Its Text property is set on the    server.
2. Attach a handler (*sendItemsPathsToServer*) to the *OnClientClick* event of the *Button1*. This function accepts a parameter - the button object.
3. The handler :  
````ASP.NET
<script>
function sendItemsPathsToServer(clickedButton)  
{  
    var oExplorer = $find("<%= RadFileExplorer1.ClientID %>"); // Find the Explorer ;  
    var selectedItems = oExplorer.get_selectedItems(); // Retrieve the selected items ;  
    var selectedItemsPaths = combinePathsInAString(selectedItems); // Get the paths as a string in specific format ;  
 
    var hiddenField = $get("<%= HiddenField1.ClientID %>"); // Find the hiddenField  
    hiddenField.value = selectedItemsPaths;  
    __doPostBack(clickedButton.name, ""); // Call the 'Button1_Click' function on the server ;  
} 
</script>
````
4. The *combinePathsInAString* function accepts an array of type [Telerik.Web.UI.FileExplorerItem]({%slug fileexplorer/client-side-programming/overview}) - the selected items, and returns a string that contains all of the items paths:  
 
 ````ASP.NET
        <telerik:radfileexplorer id="RadFileExplorer1" runat="server" height="300px" width="804px">
            <Configuration UploadPaths="~/Northwind/" DeletePaths="~/Northwind/" ViewPaths="~/Northwind/"></Configuration>
        </telerik:radfileexplorer>
        <asp:HiddenField ID="HiddenField1" runat="server" />
        <asp:Label ID="Label1" runat="server"></asp:Label>
        <asp:Button ID="Button1" runat="server" Text="Send selected FileExplorers' items"
            OnClientClick="sendItemsPathsToServer(this); return false;" OnClick="Button1_Click" />
        <telerik:radcodeblock id="RadCodeBlock1" runat="server">

            <script type="text/javascript">
                function combinePathsInAString(arrayOfSelectedItems)
                {
                    var itemPaths = new Array();
                    for (var i = 0; i < arrayOfSelectedItems.length; i++)
                    {
                        // Pass all the selected paths ;
                        itemPaths.push(arrayOfSelectedItems[i].get_path());
                    }

                    // Return a string that contains the paths ;
                    return itemPaths.join("{}");
                }

                function sendItemsPathsToServer(clickedButton)
                {
                    var oExplorer = $find("<%= RadFileExplorer1.ClientID %>"); // Find the Explorer ;
                    var selectedItems = oExplorer.get_selectedItems(); // Retrieve the selected items ;
                    var selectedItemsPaths = combinePathsInAString(selectedItems); // Get the paths as a string in specific format ;

                    var hiddenField = $get("<%= HiddenField1.ClientID %>"); // Find the hiddenField
                    hiddenField.value = selectedItemsPaths;
                    __doPostBack(clickedButton.name, ""); // Call the 'Button1_Click' function on the server ;
                }
                
            </script>

        </telerik:radcodeblock>
 ````

````C#
protected void Button1_Click(object sender, EventArgs e)  
{  
    string serializedItems = HiddenField1.Value;// Get the paths ;  
 
    // Extract the paths of the selected items ;  
    string[] selectedItemsPaths = serializedItems.Split(new string[] { "{}" }, StringSplitOptions.RemoveEmptyEntries);  
 
    // Use the paths :   
    Label1.Text = "Selected item's count : " + selectedItemsPaths.Length;  
}
````
````VB
Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs) Handles Button1.Click  
     Dim serializedItems As String = HiddenField1.Value  
     ' Get the paths ;  
 
     ' Extract the paths of the selected items ;  
       Dim selectedItemsPaths As String() = serializedItems.Split(New String() {"{}"}, StringSplitOptions.RemoveEmptyEntries)  
 
     ' Use the paths :   
       Label1.Text = "Selected item's count : " & selectedItemsPaths.Length  
End Sub 
````


 