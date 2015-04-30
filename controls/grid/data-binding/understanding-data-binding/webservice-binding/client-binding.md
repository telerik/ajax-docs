---
title: Client Binding
page_title: Client Binding | RadGrid for ASP.NET AJAX Documentation
description: Client Binding
slug: grid/data-binding/understanding-data-binding/webservice-binding/client-binding
tags: client,binding
published: True
position: 0
---

# Client Binding



## 

The following code snippet represents how to use RadGrid client-side data-binding to visualize live data using web service. The grid is updated after interval of 1 second passes (specified in the pageLoad handler of the page). This results in simultaneous and seamless pure client-side end-user experience.

````JavaScript
function pageLoad(sender, args) {
  setInterval("QuoteWebService.GetListOfStockQuotes(updateGrid)", 1000);
}
function updateGrid(result) {
  var tableView = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
  tableView.set_dataSource(result); tableView.dataBind();
}
````



Naturally, you can change the live feed or the custom collection of objects returned by the web service in conjunction with your own preferences and in order to conform to your visualization schema.

Below is the signature of the web service used in the sample:



````C#	
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
[ScriptService]
public class QuoteWebService : WebService
{
    private Random random;
    private string yahooFeedTemplate = "http://finance.yahoo.com/d/quotes.csv?s={0}&f=sl1d1t1c1ohgv&e=.csv";
    private string SessionQuotesData
    {
        get
        {
            return (string)HttpContext.Current.Session["TelerikAspAjaxGridApplication"];
        }
        set
        {
            HttpContext.Current.Session["TelerikAspAjaxGridApplication"] = value;
        }
    }
    public QuoteWebService()
    {
        random = new Random(DateTime.Now.Millisecond);
    }
    [WebMethod]
    public string HelloWorld()
    {
        return "Hello World";
    }
    [WebMethod(), Description("Gets DataSet of stock quote for a specific symbol")]
    public DataSet GetDSOfStockQuotes()
    {
        string stockTickers = "MSFT, YHOO, GOOG, HPQ, DELL, AAPL, NOVL";
        string[] stockTickerList = stockTickers.Split(',');
        int index;
        for (index = 0; index <= stockTickerList.Length - 1; index++)
        {
            stockTickerList[index] = stockTickerList[index].Trim();
        }
        List<Quote> quotes = new List<Quote>();
        if (SessionQuotesData != null)
        {
            quotes = GetQuotesData(SessionQuotesData);
            foreach (Quote quote in quotes)
            {
                ModifyQuote(quote);
            }
        }
        else
        {
            string url = string.Empty;
            WebRequest webRequest = null;
            WebResponse webResponse = null;
            foreach (string stockTicker in stockTickerList)
            {
                url = string.Format(yahooFeedTemplate, HttpUtility.UrlEncode(stockTicker));
                webRequest = HttpWebRequest.Create(url);
                webResponse = webRequest.GetResponse();
                Quote quote = GetQuoteData(webResponse.GetResponseStream());
                quotes.Add(quote);
            }
        }
        SerializeQuotesData(quotes);
        DataSet dataset = new DataSet("QuotesDataSet");
        XmlReader data = XmlReader.Create(new System.IO.StringReader(SessionQuotesData));
        dataset.ReadXml(data);
        return dataset;
    }
    [WebMethod(EnableSession = true), Description("Gets list of stock quote for a specific symbol")]
    public List<Quote> GetListOfStockQuotes()
    {
        string stockTickers = "MSFT, YHOO, GOOG, HPQ, DELL, AAPL, NOVL";
        string[] stockTickerList = stockTickers.Split(',');
        int index;
        for (index = 0; index <= stockTickerList.Length - 1; index++)
        {
            stockTickerList[index] = stockTickerList[index].Trim();
        }
        List<Quote> quotes = new List<Quote>();
        if (SessionQuotesData != null)
        {
            quotes = GetQuotesData(SessionQuotesData);
            foreach (Quote quote in quotes)
            {
                ModifyQuote(quote);
            }
        }
        else
        {
            string url = string.Empty;
            WebRequest webRequest = null;
            WebResponse webResponse = null;
            foreach (string stockTicker in stockTickerList)
            {
                url = string.Format(yahooFeedTemplate, HttpUtility.UrlEncode(stockTicker));
                webRequest = HttpWebRequest.Create(url);
                webResponse = webRequest.GetResponse();
                Quote quote = GetQuoteData(webResponse.GetResponseStream());
                quotes.Add(quote);
            }
        }
        SerializeQuotesData(quotes);
        return quotes;
    }
    private void ModifyQuote(Quote quote)
    {
        Decimal oldQuote = quote.StockQuote;
        Decimal change = (Decimal)random.NextDouble();
        if (change != 0)
        {
            change = Decimal.Round(change, random.Next(1, 5));
        }
        if (oldQuote > change && random.NextDouble() <= 0.5)
        {
            change = -change;
        }
        quote.Change = change;
        quote.StockQuote += change;
        quote.LastUpdated = DateTime.Now;
        if (quote.StockQuote < quote.DailyMinRange)
        {
            quote.DailyMinRange = quote.StockQuote;
        }
        else if (quote.StockQuote > quote.DailyMaxRange)
        {
            quote.DailyMaxRange = quote.StockQuote;
        }
        if (quote.DailyMinRange == 0)
        {
            quote.DailyMinRange = quote.StockQuote;
        }
    }
    private Quote GetQuote(string[] bufferList)
    {
        string stockTicker = bufferList[0];
        Decimal stockQuote = Decimal.Parse(bufferList[1], CultureInfo.InvariantCulture);
        DateTime lastUpdated = DateTime.Parse((bufferList[2] + " " + bufferList[3]), CultureInfo.InvariantCulture);
        Decimal change = Decimal.Parse(bufferList[4], CultureInfo.InvariantCulture);
        Decimal dailyMaxRange = 0m;
        if ((bufferList[6] != "N/A"))
        {
            dailyMaxRange = Decimal.Parse(bufferList[6], CultureInfo.InvariantCulture);
        }
        Decimal dailyMinRange = 0m;
        if ((bufferList[7] != "N/A"))
        {
            dailyMinRange = Decimal.Parse(bufferList[7], CultureInfo.InvariantCulture);
        }
        return new Quote(stockTicker, stockQuote, lastUpdated, change, dailyMinRange, dailyMaxRange);
    }
    private Quote GetQuote(XmlNode quoteNode)
    {
        string stockTicker = quoteNode.Attributes["stockTicker"].Value;
        Decimal stockQuote = Decimal.Parse(quoteNode.Attributes["lastTrade"].Value, CultureInfo.InvariantCulture);
        DateTime lastUpdated = DateTime.Parse(quoteNode.Attributes["lastUpdated"].Value, CultureInfo.InvariantCulture);
        Decimal change = Decimal.Parse(quoteNode.Attributes["change"].Value, CultureInfo.InvariantCulture);
        Decimal dailyMaxRange = quoteNode.Attributes["dailyMaxRange"].Value == "N/A" ? 0m : Decimal.Parse(quoteNode.Attributes["dailyMaxRange"].Value, CultureInfo.InvariantCulture);
        Decimal dailyMinRange = quoteNode.Attributes["dailyMinRange"].Value == "N/A" ? 0m : Decimal.Parse(quoteNode.Attributes["dailyMinRange"].Value, CultureInfo.InvariantCulture);
        return new Quote(stockTicker, stockQuote, lastUpdated, change, dailyMinRange, dailyMaxRange);
    }
    private Quote GetQuoteData(Stream dataStream)
    {
        string buffer = null;
        StreamReader sr = new StreamReader(dataStream);
        try
        {
            buffer = sr.ReadToEnd();
        }
        finally
        {
            sr.Dispose();
        }
        buffer = buffer.Replace("\"", "");
        string[] bufferList = buffer.Split(new char[] { ',' });
        Quote quote = GetQuote(bufferList);
        return quote;
    }
    private List<Quote> GetQuotesData(string xmlData)
    {
        XmlDocument xmlDocument = new XmlDocument();
        xmlDocument.LoadXml(xmlData);
        List<Quote> quotes = new List<Quote>();
        Quote quote = null;
        foreach (XmlNode quoteNode in xmlDocument.DocumentElement.ChildNodes)
        {
            quote = GetQuote(quoteNode);
            quotes.Add(quote);
        }
        return quotes;
    }
    private void SerializeQuotesData(List<Quote> quotes)
    {
        StringBuilder str = new StringBuilder("<quotes>");
        try
        {
            foreach (Quote quote in quotes)
            {
                str.Append("<quote ");
                str.Append("stockTicker=\"" + quote.StockTicker + "\" ");
                str.Append("lastTrade=\"" + quote.StockQuote.ToString(CultureInfo.InvariantCulture) + "\" ");
                str.Append("change=\"" + quote.Change.ToString(CultureInfo.InvariantCulture) + "\" ");
                str.Append("lastUpdated=\"" + quote.LastUpdated.ToString("MM/dd/yyyy HH:mm:ss") + "\" ");
                str.Append("dailyMaxRange=\"" + quote.DailyMaxRange.ToString(CultureInfo.InvariantCulture) + "\" ");
                str.Append("dailyMinRange=\"" + quote.DailyMinRange.ToString(CultureInfo.InvariantCulture) + "\" ");
                str.Append(" />");
            }
        }
        catch (Exception e)
        {
        }
        str.Append("</quotes>");
        SessionQuotesData = str.ToString();
    }
}

````
````VB
<WebService([Namespace]:="http://tempuri.org/")> _
<WebServiceBinding(ConformsTo:=WsiProfiles.BasicProfile1_1)> _
<ScriptService()> _
Public Class QuoteWebService
    Inherits WebService

    Private random As Random
    Private yahooFeedTemplate As String = "http://finance.yahoo.com/d/quotes.csv?s={0}&f=sl1d1t1c1ohgv&e=.csv"
    Private Property SessionQuotesData() As String

        Get
            Return DirectCast(HttpContext.Current.Session("TelerikAspAjaxGridApplication"), String)
        End Get
        Set(ByVal value As String)
            HttpContext.Current.Session("TelerikAspAjaxGridApplication") = value
        End Set
    End Property

    Public Sub New()

        random = New Random(DateTime.Now.Millisecond)
    End Sub

    <WebMethod()> _
    Public Function HelloWorld() As String

        Return "Hello World"
    End Function

    <WebMethod(), Description("Gets DataSet of stock quote for a specific symbol")> _
    Public Function GetDSOfStockQuotes() As DataSet

        Dim stockTickers As String = "MSFT, YHOO, GOOG, HPQ, DELL, AAPL, NOVL"
        Dim stockTickerList As String() = stockTickers.Split(","c)
        Dim index As Integer
        index = 0
        While index <= stockTickerList.Length - 1

            stockTickerList(index) = stockTickerList(index).Trim()
            System.Math.Max(System.Threading.Interlocked.Increment(index), index - 1)
        End While
        Dim quotes As New List(Of Quote)()
        If SessionQuotesData <> Nothing Then

            quotes = GetQuotesData(SessionQuotesData)
            For Each quote As Quote In quotes

                ModifyQuote(quote)
            Next
        Else

            Dim url As String = String.Empty
            Dim webRequest As WebRequest = Nothing
            Dim webResponse As WebResponse = Nothing
            For Each stockTicker As String In stockTickerList

                url = String.Format(yahooFeedTemplate, HttpUtility.UrlEncode(stockTicker))
                webRequest = HttpWebRequest.Create(url)
                webResponse = webRequest.GetResponse()
                Dim quote As Quote = GetQuoteData(webResponse.GetResponseStream())

                quotes.Add(quote)
            Next
        End If
        SerializeQuotesData(quotes)
        Dim dataset As New DataSet("QuotesDataSet")
        Dim data As XmlReader = XmlReader.Create(New System.IO.StringReader(SessionQuotesData))
        dataset.ReadXml(data)
        Return dataset
    End Function

    <WebMethod(EnableSession:=True), Description("Gets list of stock quote for a specific symbol")> _
    Public Function GetListOfStockQuotes() As List(Of Quote)

        Dim stockTickers As String = "MSFT, YHOO, GOOG, HPQ, DELL, AAPL, NOVL"
        Dim stockTickerList As String() = stockTickers.Split(","c)
        Dim index As Integer
        index = 0
        While index <= stockTickerList.Length - 1

            stockTickerList(index) = stockTickerList(index).Trim()
            System.Math.Max(System.Threading.Interlocked.Increment(index), index - 1)
        End While
        Dim quotes As New List(Of Quote)()
        If SessionQuotesData <> Nothing Then

            quotes = GetQuotesData(SessionQuotesData)
            For Each quote As Quote In quotes

                ModifyQuote(quote)
            Next
        Else

            Dim url As String = String.Empty
            Dim webRequest As WebRequest = Nothing
            Dim webResponse As WebResponse = Nothing
            For Each stockTicker As String In stockTickerList

                url = String.Format(yahooFeedTemplate, HttpUtility.UrlEncode(stockTicker))
                webRequest = HttpWebRequest.Create(url)
                webResponse = webRequest.GetResponse()
                Dim quote As Quote = GetQuoteData(webResponse.GetResponseStream())

                quotes.Add(quote)
            Next
        End If
        SerializeQuotesData(quotes)
        Return quotes
    End Function
    Private Sub ModifyQuote(ByVal quote As Quote)

        Dim oldQuote As [Decimal] = quote.StockQuote
        Dim change As [Decimal] = DirectCast(random.NextDouble(), [Decimal])
        If change <> 0 Then

            change = [Decimal].Round(change, random.[Next](1, 5))
        End If
        If oldQuote > change AndAlso random.NextDouble() <= 0.5 Then

            change = -change
        End If
        quote.Change = change
        quote.StockQuote += change
        quote.LastUpdated = DateTime.Now
        If quote.StockQuote < quote.DailyMinRange Then

            quote.DailyMinRange = quote.StockQuote
        ElseIf quote.StockQuote > quote.DailyMaxRange Then

            quote.DailyMaxRange = quote.StockQuote
        End If
        If quote.DailyMinRange = 0 Then

            quote.DailyMinRange = quote.StockQuote
        End If
    End Sub
    Private Function GetQuote(ByVal bufferList As String()) As Quote

        Dim stockTicker As String = bufferList(0)
        Dim stockQuote As [Decimal] = [Decimal].Parse(bufferList(1), CultureInfo.InvariantCulture)
        Dim lastUpdated As DateTime = DateTime.Parse((bufferList(2) + " " + bufferList(3)), CultureInfo.InvariantCulture)
        Dim change As [Decimal] = [Decimal].Parse(bufferList(4), CultureInfo.InvariantCulture)
        Dim dailyMaxRange As [Decimal] = 0D
        If (bufferList(6) <> "N/A") Then

            dailyMaxRange = [Decimal].Parse(bufferList(6), CultureInfo.InvariantCulture)
        End If
        Dim dailyMinRange As [Decimal] = 0D
        If (bufferList(7) <> "N/A") Then

            dailyMinRange = [Decimal].Parse(bufferList(7), CultureInfo.InvariantCulture)
        End If
        Return New Quote(stockTicker, stockQuote, lastUpdated, change, dailyMinRange, dailyMaxRange)
    End Function
    Private Function GetQuote(ByVal quoteNode As XmlNode) As Quote

        Dim stockTicker As String = quoteNode.Attributes("stockTicker").Value
        Dim stockQuote As [Decimal] = [Decimal].Parse(quoteNode.Attributes("lastTrade").Value, CultureInfo.InvariantCulture)
        Dim lastUpdated As DateTime = DateTime.Parse(quoteNode.Attributes("lastUpdated").Value, CultureInfo.InvariantCulture)
        Dim change As [Decimal] = [Decimal].Parse(quoteNode.Attributes("change").Value, CultureInfo.InvariantCulture)
        Dim dailyMaxRange As [Decimal] = If(quoteNode.Attributes("dailyMaxRange").Value = "N/A", 0D, [Decimal].Parse(quoteNode.Attributes("dailyMaxRange").Value, CultureInfo.InvariantCulture))
        Dim dailyMinRange As [Decimal] = If(quoteNode.Attributes("dailyMinRange").Value = "N/A", 0D, [Decimal].Parse(quoteNode.Attributes("dailyMinRange").Value, CultureInfo.InvariantCulture))
        Return New Quote(stockTicker, stockQuote, lastUpdated, change, dailyMinRange, dailyMaxRange)
    End Function
    Private Function GetQuoteData(ByVal dataStream As Stream) As Quote

        Dim buffer As String = Nothing
        Dim sr As New StreamReader(dataStream)
        Try

            buffer = sr.ReadToEnd()
        Finally


            sr.Dispose()
        End Try
        buffer = buffer.Replace("""", "")
        Dim bufferList As String() = buffer.Split(New Char() {","c})
        Dim quote As Quote = GetQuote(bufferList)
        Return quote
    End Function
    Private Function GetQuotesData(ByVal xmlData As String) As List(Of Quote)

        Dim xmlDocument As New XmlDocument()
        xmlDocument.LoadXml(xmlData)
        Dim quotes As New List(Of Quote)()
        Dim quote As Quote = Nothing
        For Each quoteNode As XmlNode In xmlDocument.DocumentElement.ChildNodes

            quote = GetQuote(quoteNode)

            quotes.Add(quote)
        Next
        Return quotes
    End Function
    Private Sub SerializeQuotesData(ByVal quotes As List(Of Quote))

        Dim str As New StringBuilder("<quotes>")
        Try

            For Each quote As Quote In quotes

                str.Append("<quote ")
                str.Append("stockTicker=""" + quote.StockTicker + """ ")
                str.Append("lastTrade=""" + quote.StockQuote.ToString(CultureInfo.InvariantCulture) + """ ")
                str.Append("change=""" + quote.Change.ToString(CultureInfo.InvariantCulture) + """ ")
                str.Append("lastUpdated=""" + quote.LastUpdated.ToString("MM/dd/yyyy HH:mm:ss") + """ ")
                str.Append("dailyMaxRange=""" + quote.DailyMaxRange.ToString(CultureInfo.InvariantCulture) + """ ")
                str.Append("dailyMinRange=""" + quote.DailyMinRange.ToString(CultureInfo.InvariantCulture) + """ ")

                str.Append(" />")
            Next
        Catch e As Exception

        End Try
        str.Append("</quotes>")
        SessionQuotesData = str.ToString()
    End Sub
End Class

````


and the source code of the page holding the grid instance populated through a web service on the client:

````ASP.NET
<head runat="server">
  <telerik:HeadTag runat="server" ID="Headtag1">
  </telerik:HeadTag>
  <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
    <script type="text/javascript">   
      function pageLoad(sender, args) {
        setInterval("QuoteWebService.GetListOfStockQuotes(updateGrid)", 1000);
      }
      function updateGrid(result) {
        var tableView = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
        tableView.set_dataSource(result); tableView.dataBind();
      }
      function OnRowDataBound(sender, args) {
        var spanControl = args.get_item().get_cell("Change").getElementsByTagName('span')[0];
        var image = args.get_item().get_cell("Change").getElementsByTagName('img')[0];
        if (args.get_dataItem().Change > 0) {
          image.style.display = "";
          image.src = "Images/up.gif"; spanControl.style.color = "green";
        }
        else if (args.get_dataItem().Change < 0) {
          image.style.display = "";
          image.src = "Images/down.gif";
          spanControl.style.color = "red";
        }
        else {
          image.style.display = "none";
          spanControl.style.color = "";
        }
      }                                                                                                                          
    </script>
  </telerik:RadCodeBlock>
</head>
<body class="BODY">
  <form runat="server" id="mainForm" method="post" style="width: 100%;">
  <telerik:RadScriptManager ID="RadScriptManager" runat="server">
    <Services>
      <asp:ServiceReference Path="~/Grid/Examples/Client/LiveData/QuoteWebService.asmx" />
    </Services>
  </telerik:RadScriptManager>
  <!-- content start -->
  <h3>
    RadGrid bound to live data:</h3>
  <telerik:RadGrid ID="RadGrid1" AutoGenerateColumns="false" runat="server">
    <MasterTableView TableLayout="Fixed">
      <Columns>
        <telerik:GridHyperLinkColumn DataTextField="StockTicker" DataNavigateUrlFields="StockTicker"
          UniqueName="StockTicker" HeaderText="Stock Ticker" DataNavigateUrlFormatString="http://finance.yahoo.com/q?s={0}&amp;d=t" />
        <telerik:GridTemplateColumn UniqueName="Change" HeaderText="Change" DataField="Change">
          <ItemTemplate>
            <asp:Image ID="DirectionImage" runat="server" AlternateText="up" Style="display: none" />&nbsp;
            <asp:Label ID="Change" runat="server" Style="font-weight: bold;" />
          </ItemTemplate>
          <ItemStyle Width="150px" />
        </telerik:GridTemplateColumn>
        <telerik:GridTemplateColumn UniqueName="DailyRange" DataField="DailyRange" HeaderText="Daily Range">
          <ItemTemplate>
            <asp:Label ID="DailyMinRange" runat="server" />&nbsp;-&nbsp;
            <asp:Label ID="DailyMaxRange" runat="server" />
          </ItemTemplate>
        </telerik:GridTemplateColumn>
        <telerik:GridBoundColumn DataField="DailyMinRange" UniqueName="DailyMinRange" HeaderText="DailyMinRange">
        </telerik:GridBoundColumn>
        <telerik:GridBoundColumn DataField="DailyMaxRange" UniqueName="DailyMaxRange" HeaderText="DailyMaxRange">
        </telerik:GridBoundColumn>
        <telerik:GridBoundColumn DataField="LastUpdated" UniqueName="LastUpdated" HeaderText="Last Updated"
          DataFormatString="{0:dd/MM/yyyy' 'HH':'mm':'ss}" />
      </Columns>
    </MasterTableView>
    <ClientSettings>
      <ClientEvents OnCommand="function(){}" OnRowDataBound="OnRowDataBound" />
    </ClientSettings>
  </telerik:RadGrid>
  </form>
</body>
````




