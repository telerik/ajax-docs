---
title: Client-side Binding Specifics
page_title: Client-side Binding Specifics | RadGrid for ASP.NET AJAX Documentation
description: Client-side Binding Specifics
slug: grid/data-binding/understanding-data-binding/client-side-binding/client-side-binding-specifics
tags: client-side,binding,specifics
published: True
position: 1
---

# Client-side Binding Specifics



## Binding RadGrid to an array

When binding RadGrid on the client, the data must have a valid JSON syntax, in order to be properly parsed. The data itself may be coming from a WebService/PageMethod, or declared statically. The last approach is useful when presenting a small amount of data to the user, which does not need necessarily to be fetched from an actual database. An example of this is binding the grid to an array on the client. As mentioned previously, the array must conform to the JSON syntax. Thus, its structure must have the following layout:
          [value1, value2, ..., valueN]
        

essentially these are one or more values, separated by a coma. The value itself, can be one of the following:

* string

* number

* object

* array

* true

* false

* null

There are additional rules, which apply to the entities mentioned above, which are reviewed in greater detail in the following location - [http://www.json.org/](http://www.json.org/)

To provide a practical example of RadGrid binding to such an array, we can use the following code:

````JavaScript
	    function pageLoad() {
	      var data = [{ "ID": 1, "Text": "Text1" }, { "ID": 2, "Text": "Text2"}];
	      var mtv = $find("RadGrid1").get_masterTableView(); mtv.set_dataSource(data); mtv.dataBind();
	    }
````



````ASPNET
	  <asp:ScriptManager runat="server" ID="ScriptManager1">
	  </asp:ScriptManager>
	  <telerik:RadGrid runat="server" ID="RadGrid1" AutoGenerateColumns="false">
	    <MasterTableView>
	      <Columns>
	        <telerik:GridBoundColumn DataField="ID" HeaderText="ID">
	        </telerik:GridBoundColumn>
	        <telerik:GridBoundColumn DataField="Text" HeaderText="Text">
	        </telerik:GridBoundColumn>
	      </Columns>
	    </MasterTableView>
	    <ClientSettings>
	      <ClientEvents OnCommand="function(){}" />
	    </ClientSettings>
	  </telerik:RadGrid>
````



## Generate title and href attributes for hyperlinks on the client

There are scenarios, when RadGrid is data-bound on the client, and one needs to alter properties of controls nested in different cells. Such cases include:*Generating title and href attributes for hyperlinks on the clientGeneratingsrc attributes for images on the client*

The proper way to handle these requirements is in the onRowDataBound client side event handler, where we can access the cell(s) within the data item, and alter their properties. This is demonstrated in the code snippet below:

````JavaScript
	    function OnRowDataBound(sender, args) {
	      var spanControl = args.get_item().get_cell("Change").getElementsByTagName('span')[0];
	      var image = args.get_item().get_cell("Change").getElementsByTagName('img')[0];
	      //This is where we manually set the hyperlink's title
	      var item = args.get_item(); var dataItem = args.get_dataItem();
	      var link = item.get_cell("StockTicker").getElementsByTagName("a")[0]; link.title = dataItem.StockTicker + " (change: " + dataItem.Change + ")";
	      if (args.get_dataItem().Change > 0) {
	        image.style.display = ""; image.src = "Images/up.gif"; spanControl.style.color = "green";
	      }
	      else if (args.get_dataItem().Change < 0) {
	        image.style.display = ""; image.src = "Images/down.gif"; spanControl.style.color = "red";
	      }
	      else {
	        image.style.display = "none"; spanControl.style.color = "";
	      }
	    }
````



A complete, working example is available in the [following location](http://demos.telerik.com/aspnet-ajax/grid/examples/client/livedata/defaultcs.aspx).

In addition to setting the image source property, we can also modify the title, or any other valid attribute. This extends the flexibility of the setup, and eliminates some of the limitations, associated with client side data binding.

## Client side data-binding limitations

Basically, a grid bound using client side data-binding improves the performance of RadGrid. However, there are certain limitations, due to this client side model. These are listed below:

* Data editing and grid editors. Since the control is bound on the client, and no subsequent trips are made to the server, the default editors cannot be rendered, and shown, which is the standard behavior, when the grid is bound on the server. The most straightforward option to work-around this is to use an external edit form, which is demonstrated in the [following example](http://demos.telerik.com/aspnet-ajax/grid/examples/client/insertupdatedelete/defaultcs.aspx).

* Hierarchical structures - with the client side data binding approach for the grid, there is no out-of-the-box support for hierarchical structures (possible solutions are presented in [this blog post](http://blogs.telerik.com/vladimirenchev/posts/08-09-09/how-to-telerik-radgrid-master-detail-client-side-data-binding-using-linq-to-sql-and-webservice.aspx	)).

* Grouping with client-side binding is not supported. Server binding only should be used in order to achieve grouping.

* Sorting/Filter expressions. With the standard server side data-binding of the grid control, one could declare/set filter and sorting expressions, which would then be applied to the control - for example declaratively in the aspx markup, or dynamically, in the code-behind section. When using client side data-binding, the same logic can be executed, but in a slightly different manner. The filter/sorting expression can be passed to the relevant page method, which would in turn use it to return the proper data. This is demonstrated in the code snippet below:

````JavaScript
	    function RadGrid1_Command(sender, args) {
	      $get("<%= Panel1.ClientID %>").innerHTML = String.format("<b>RadGrid1_Command</b><br />CommandName : {0}, CommandArgument : {1} <br /><br />", args.get_commandName(), args.get_commandArgument());
	      args.set_cancel(true);
	      var pageSize = sender.get_masterTableView().get_pageSize();
	      var sortExpressions = sender.get_masterTableView().get_sortExpressions(); var filterExpressions = sender.get_masterTableView().get_filterExpressions();
	      var currentPageIndex = sender.get_masterTableView().get_currentPageIndex();
	      if (args.get_commandName() == "Filter") currentPageIndex = 0;
	      var sortExpressionsAsSQL = sortExpressions.toString();
	      var filterExpressionsAsSQL = filterExpressions.toString();
	      $find("<%= RadAjaxLoadingPanel1.ClientID %>").show("<%= RadGrid1.ClientID %>");
	      PageMethods.GetData(currentPageIndex * pageSize, pageSize, sortExpressionsAsSQL, filterExpressions.toList(), updateGrid);
	      if (args.get_commandName() == "Filter") {
	        PageMethods.GetCount(filterExpressions.toList(),
	       updateVirtualItemCount);
	      }
	    }
	    function updateGrid(result) {
	      var tableView = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	      tableView.set_dataSource(result); tableView.dataBind();
	      $find("<%= RadAjaxLoadingPanel1.ClientID %>").hide("<%= RadGrid1.ClientID %>");
	    }
	
````


