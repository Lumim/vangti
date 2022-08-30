let Data={};
Data.url='http://127.0.0.1:8000/';
Data.api_header={
    'X-RapidAPI-Key': '1eaf6ab47amsh32e99661943e618p106a60jsn4e3ca995a56d',
    'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
  }
Data.api_url1='https://currency-exchange.p.rapidapi.com/listquotes';
 Data.optionOne = {
    method: 'GET',
    url: 'https://currency-exchange.p.rapidapi.com/listquotes',
    headers: {
      'X-RapidAPI-Key': '1eaf6ab47amsh32e99661943e618p106a60jsn4e3ca995a56d',
      'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
    }
  };
export default Data;