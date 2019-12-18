const templeInformationLocation = 'https://artyom14.github.io/final/json/templeinfo.json';

fetch(templeInformationLocation)

  .then(function (response)
  {

    return response.json();
    
  })
  
  .then(function (jsonObject)
  {
    // console.table(jsonObject);

    for (i = 0; i < jsonObject['temples'].length; i++)
    {
        document.getElementById("temple-name-" + i).innerHTML = jsonObject['temples'][i]['temple-full-name'];

        document.getElementById("temple-address-" + i).innerHTML = jsonObject['temples'][i]['temple-address-1'] + ", " + jsonObject['temples'][i]['temple-address-2'];

        document.getElementById("temple-phone-" + i).innerHTML = jsonObject['temples'][i]['temple-phone'];

        document.getElementById("temple-email-" + i).innerHTML = jsonObject['temples'][i]['temple-email'];



        for (j = 0; j < jsonObject['temples'][i]['temple-history'].length; j++)
        {
            let templeHistoryListItem = document.createElement('li');

            templeHistoryListItem.innerHTML = "• " + jsonObject['temples'][i]['temple-history'][j]["milestone"];

            document.getElementById("temple-history-" + i).appendChild(templeHistoryListItem);
        }



        for (j = 0; j < jsonObject['temples'][i]['temple-ordinance-schedule']['baptism-schedule'].length; j++)
        {
            let templeHistoryListItem = document.createElement('div');

            templeHistoryListItem.innerHTML = jsonObject['temples'][i]['temple-ordinance-schedule']['baptism-schedule'][j]["time-and-type"];

            document.getElementById("temple-baptistry-schedule-" + i).appendChild(templeHistoryListItem);
        }



        for (j = 0; j < jsonObject['temples'][i]['temple-ordinance-schedule']['initiatory-schedule'].length; j++)
        {
            let templeHistoryListItem = document.createElement('div');

            templeHistoryListItem.innerHTML = jsonObject['temples'][i]['temple-ordinance-schedule']['initiatory-schedule'][j]["time-and-type"];

            document.getElementById("temple-initiatory-schedule-" + i).appendChild(templeHistoryListItem);
        }



        for (j = 0; j < jsonObject['temples'][i]['temple-ordinance-schedule']['sealing-schedule'].length; j++)
        {
            let templeHistoryListItem = document.createElement('div');

            templeHistoryListItem.innerHTML = jsonObject['temples'][i]['temple-ordinance-schedule']['sealing-schedule'][j]["time-and-type"];

            document.getElementById("temple-sealing-schedule-" + i).appendChild(templeHistoryListItem);
        }


        
        for (j = 0; j < jsonObject['temples'][i]['temple-ordinance-schedule']['endowment-schedule'].length; j++)
        {
            let templeHistoryListItem = document.createElement('li');

            templeHistoryListItem.innerHTML = "• " +jsonObject['temples'][i]['temple-ordinance-schedule']['endowment-schedule'][j]["time-and-type"];

            document.getElementById("temple-endowment-schedule-" + i).appendChild(templeHistoryListItem);
        }



        for (j = 0; j < jsonObject['temples'][i]['temple-services'].length; j++)
        {
            let templeHistoryListItem = document.createElement('li');

            templeHistoryListItem.innerHTML = "• " + jsonObject['temples'][i]['temple-services'][j]["service-name"];

            document.getElementById("temple-services-" + i).appendChild(templeHistoryListItem);
        }



        for (j = 0; j < jsonObject['temples'][i]['temple-closure-schedule'].length; j++)
        {
            let templeHistoryListItem = document.createElement('li');

            templeHistoryListItem.innerHTML = "• " + jsonObject['temples'][i]['temple-closure-schedule'][j]["closure"];

            document.getElementById("temple-closure-schedule-" + i).appendChild(templeHistoryListItem);
        }
    }    

  });