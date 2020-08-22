const mymap1 = L.map('map1').setView([37.76, -122.45], 12);
const tiles1 = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
});
tiles1.addTo(mymap1);

$(document).ready(function () {
  $.ajax({
    url: `https://data.sfgov.org/resource/tvq9-ec9w.json?`,
    method: "GET"
  }).then(function (response) {
    let positiveTestNumber = 0;
    let deathCount = 0;
    let contact = 0;
    let community = 0;
    for (let i = 0; i < response.length; i++) {
      let count = parseInt(response[i].case_count);
      positiveTestNumber += count;
      if (response[i].case_disposition === 'Death') {
        deathCount++;
      }
      if (response[i].transmission_category === 'From Contact') {
        contact++;
      }
      if (response[i].transmission_category === 'Community') {
        community++;
      }
    }
    let $h4 = $('<h4>').text(`As of ${moment().format('LL')}`);
    let $positiveTestNumber = $('<p>').text(`Number of Confirmed Cases: ${positiveTestNumber}`);
    let $deathCount = $('<p>').text(`Number of Deaths: ${deathCount}`);

    $('#sf-description').append($h4, $positiveTestNumber, $deathCount);
  });

  let districts = {
    sunsetParkside: {
      district: 'Sunset/Parkside',
      number: 0,
      lng: -122.492907,
      lat: 37.757463
    },
    outerRichmond: {
      district: 'Outer Richmond',
      number: 0,
      lng: -122.503993,
      lat: 37.780007
    },
    fiDiSouthBeach: {
      district: 'Financial District/South Beach',
      number: 0,
      lng: -122.402275,
      lat: 37.801234
    },
    bernalHeights: {
      district: 'Bernal Heights',
      number: 0,
      lng: -122.424528,
      lat: 37.736144
    },
    missionBay: {
      district: 'Mission Bay',
      number: 0,
      lng: -122.38987,
      lat: 37.771
    },
    noeValley: {
      district: 'Noe Valley',
      number: 0,
      lng: -122.442134,
      lat: 37.746843
    },
    westernAddition: {
      district: 'Western Addition',
      number: 0,
      lng: -122.432635,
      lat: 37.783369
    },
    soMa: {
      district: 'South of Market',
      number: 0,
      lng: -122.400302,
      lat: 37.777799
    },
    wTwinPeaks: {
      district: 'West of Twin Peaks',
      number: 0,
      lng: -122.44737,
      lat: 37.731477
    },
    hayesV: {
      district: 'Hayes Valley',
      number: 0,
      lng: -122.428094,
      lat: 37.777585
    },
    tenderLoin: {
      district: 'Tenderloin',
      number: 0,
      lng: -122.414398,
      lat: 37.784058
    },
    pacHeights: {
      district: 'Pacific Heights',
      number: 0,
      lng: -122.431549,
      lat: 37.793823
    },
    presidioHeights: {
      district: 'Presidio Heights',
      number: 0,
      lng: -122.457938,
      lat: 37.78291
    },
    twinPeaks: {
      district: 'Twin Peaks',
      number: 0,
      lng: -122.449113,
      lat: 37.748637
    },
    haight: {
      district: 'Haight Ashbury',
      number: 0,
      lng: -122.443312,
      lat: 37.77047
    },
    excelsior: {
      district: 'Excelsior',
      number: 0,
      lng: -122.424627,
      lat: 37.723848
    },
    mission: {
      district: 'Mission',
      number: 0,
      lng: -122.418845,
      lat: 37.759249
    },
    presidio: {
      district: 'Presidio',
      number: 0,
      lng: -122.477379,
      lat: 37.803605
    },
    marina: {
      district: 'Marina',
      number: 0,
      lng: -122.425001,
      lat: 37.801315
    },
    lakeShore: {
      district: 'Lakeshore',
      number: 0,
      lng: -122.483306,
      lat: 37.71727
    },
    castroUMarket: {
      district: 'Castro/Upper Market',
      number: 0,
      lng: -122.435886,
      lat: 37.759354
    },
    loneMtn: {
      district: 'Lone Mountain/USF',
      number: 0,
      lng: -122.443226,
      lat: 37.782308
    },
    bayview: {
      district: 'Bayview Hunters Point',
      number: 0,
      lng: -122.391671,
      lat: 37.726851
    },
    russianHill: {
      district: 'Russian Hill',
      number: 0,
      lng: -122.41797,
      lat: 37.802202
    },
    nobHill: {
      district: 'Nob Hill',
      number: 0,
      lng: -122.415744,
      lat: 37.794801
    },
    ingleside: {
      district: 'Oceanview/Merced/Ingleside',
      number: 0,
      lng: -122.452174,
      lat: 37.714104
    },
    potreroHill: {
      district: 'Potrero Hill',
      number: 0,
      lng: -122.392453,
      lat: 37.757637
    },
    outerMission: {
      district: 'Outer Mission',
      number: 0,
      lng: -122.442837,
      lat: 37.728105
    },
    seaCliff: {
      district: 'Seacliff',
      number: 0,
      lng: -122.489415,
      lat: 37.784216
    },
    northBeach: {
      district: 'North Beach',
      number: 0,
      lng: -122.409168,
      lat: 37.800764
    },
    ggP: {
      district: 'Golden Gate Park',
      number: 0,
      lng: -122.460552,
      lat: 37.77403
    },
    innerSunset: {
      district: 'Inner Sunset',
      number: 0,
      lng: -122.46857,
      lat: 37.763867
    },
    glenPark: {
      district: 'Glen Park',
      number: 0,
      lng: -122.450906,
      lat: 37.745744
    },
    innerRichmond: {
      district: 'Inner Richmond',
      number: 0,
      lng: -122.46045,
      lat: 37.78319
    },
    japanTown: {
      district: 'Japantown',
      number: 0,
      lng: -122.426954,
      lat: 37.786819
    },
    treasureIsland: {
      district: 'Treasure Island',
      number: 0,
      lng: -122.370188,
      lat: 37.830055
    },
    portola: {
      district: 'Portola',
      number: 0,
      lng: -122.405077,
      lat: 37.732041
    },
    visValley: {
      district: 'Visitacion Valley',
      number: 0,
      lng: -122.402658,
      lat: 37.712443
    },
    chinaTown: {
      district: 'Chinatown',
      number: 0,
      lng: -122.406438,
      lat: 37.794488
    },
    mcLarenPark: {
      district: 'McLaren Park',
      number: 0,
      lng: -122.412517,
      lat: 37.718485
    },
    lincolnPark: {
      district: 'Lincoln Park',
      number: 0,
      lng: -122.499515,
      lat: 37.784911
    }
  }
  $('#sfFire').on('click', function () {  
    $.ajax({
      url: 'https://data.sfgov.org/resource/wr8u-xric.json?',
      method: "GET"
    }).then(function(response) {
      mymap1.eachLayer(function (layer) {
        mymap1.removeLayer(layer);
      });
      tiles1.addTo(mymap1);
      for (let i = 0; i < response.length; i++) {
        switch (response[i].analysis_neighborhood) {
          case 'Sunset/Parkside':
            districts.sunsetParkside.number++;
            break;
          case 'Outer Richmond':
            districts.outerRichmond.number++;
            break;
          case 'Financial District/South Beach':
            districts.fiDiSouthBeach.number++;
            break;
          case 'Bernal Heights':
            districts.bernalHeights.number++;
            break;
          case 'Mission Bay':
            districts.missionBay.number++;
            break;
          case 'Noe Valley':
            districts.noeValley.number++;
            break;
          case 'Western Addition':
            districts.westernAddition.number++;
            break;
          case 'South of Market':
            districts.soMa.number++;
            break;
          case 'West of Twin Peaks':
            districts.wTwinPeaks.number++;
            break;
          case 'Hayes Valley':
            districts.hayesV.number++;
            break;
          case 'Tenderloin':
            districts.tenderLoin.number++;
            break;
          case 'Pacific Heights':
            districts.pacHeights.number++;
            break;
          case 'Presidio Heights':
            districts.presidioHeights.number++;
            break;
          case 'Twin Peaks':
            districts.twinPeaks.number++;
            break;
          case 'Haight Ashbury':
            districts.haight.number++;
            break;
          case 'Excelsior':
            districts.excelsior.number++;
            break;
          case 'Mission':
            districts.mission.number++;
            break;
          case 'Presidio':
            districts.presidio.number++;
            break;
          case 'Marina':
            districts.marina.number++;
            break;
          case 'Lakeshore':
            districts.lakeShore.number++;
            break;
          case 'Castro/Upper Market':
            districts.castroUMarket.number++;
            break;
          case 'Lone Mountain/USF':
            districts.loneMtn.number++;
            break;
          case 'Bayview Hunters Point':
            districts.bayview.number++;
            break;
          case 'Russian Hill':
            districts.russianHill.number++;
            break;
          case 'Nob Hill':
            districts.nobHill.number++;
            break;
          case 'Oceanview/Merced/Ingleside':
            districts.ingleside.number++;
            break;
          case 'Potrero Hill':
            districts.potreroHill.number++;
            break;
          case 'Outer Mission':
            districts.outerMission.number++;
            break;
          case 'Seacliff':
            districts.seaCliff.number++;
            break;
          case 'North Beach':
            districts.northBeach.number++;
            break;
          case 'Golden Gate Park':
            districts.ggP.number++;
            break;
          case 'Inner Sunset':
            districts.innerSunset.number++;
            break;
          case 'Glen Park':
            districts.glenPark.number++;
            break;
          case 'Inner Richmond':
            districts.innerRichmond.number++;
            break;
          case 'Japantown':
            districts.japanTown.number++;
            break;
          case 'Treasure Island':
            districts.treasureIsland.number++;
            break;
          case 'Portola':
            districts.portola.number++;
            break;
          case 'Visitacion Valley':
            districts.visValley.number++;
            break;
          case 'Chinatown':
            districts.chinaTown.number++;
            break;
          case 'McLaren Park':
            districts.mcLarenPark.number++;
            break;
          case 'Lincoln Park':
            districts.lincolnPark.number++;
            break;
        }
      }
      Object.keys(districts).forEach(key => {
        let fireRadius;
        if (districts[key].number < 10) {
          fireRadius = 30;
        } else if (districts[key].number >= 10 && districts[key].number < 30) {
          fireRadius = 90;
        } else if (districts[key].number >= 30 && districts[key].number < 60) {
          fireRadius = 180;
        } else {
          fireRadius = 360;
        }
        L.circle([districts[key].lat, districts[key].lng], {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5,
          radius: fireRadius
      }).addTo(mymap1).bindPopup(`<strong>${districts[key].district}</strong><br>${districts[key].number / 10}% of fires in San Francisco occurred in this neighborhood.`);
        districts[key].number = 0;
      })
    })
  })

  $("#sf-input").bind('keypress', function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      renderSFResults();
    }
  });

  $("#search-btn").on('click', renderSFResults);

  function renderSFResults() {
    mymap1.eachLayer(function (layer) {
      mymap1.removeLayer(layer);
    });
    tiles1.addTo(mymap1);
    // let startInput = $('#start-input').val();
    let sfInput = $('#sf-input').val();
    let sfInputEnd = $('#sf-input-end').val();
    let startTime = '';
    let endTime = '';
    if ($('#sfTime').val() === 'Morning') {
      startTime = '00:00:00';
      endTime = '08:00:00';
    } else if ($('#sfTime').val() === 'Afternoon') {
      startTime = '08:00:00';
      endTime = '16:00:00';
    } else if ($('#sfTime').val() === 'Evening') {
      startTime = '16:00:00';
      endTime = '23:59:59'
    } else {
      startTime = '00:00:00';
      endTime = '23:59:59'
    }
    
    let crimeInput = '';

    if ($('#sfCrimeType').val() === 'AA') {
      crimeInput = '&incident_subcategory=Aggravated Assault';
    } else if ($('#sfCrimeType').val() === 'ARS') {
      crimeInput = '&incident_subcategory=Arson';
    } else if ($('#sfCrimeType').val() === 'BC') {
      crimeInput = '&incident_subcategory=Bad Checks';
    } else if ($('#sfCrimeType').val() === 'BURG') {
      crimeInput = '&incident_subcategory=Burglary - Other';
    } else if ($('#sfCrimeType').val() === 'DRNK') {
      crimeInput = '&incident_subcategory=Drunkenness';
    } else if ($('#sfCrimeType').val() === 'EB') {
      crimeInput = '&incident_subcategory=Extortion-Blackmail';
    } else if ($('#sfCrimeType').val() === 'FO') {
      crimeInput = '&incident_subcategory=Family Offenses';
    } else if ($('#sfCrimeType').val() === 'FRD') {
      crimeInput = '&incident_subcategory=Fraud';
    } else if ($('#sfCrimeType').val() === 'LAR-V') {
      crimeInput = '&incident_subcategory=Larceny - From Vehicle';
    } else if ($('#sfCrimeType').val() === 'LAR-O') {
      crimeInput = '&incident_subcategory=Larceny Theft - From Building';
    } else if ($('#sfCrimeType').val() === 'LAR-B') {
      crimeInput = '&incident_subcategory=Larceny Theft - Other';
    } else if ($('#sfCrimeType').val() === 'LP') {
      crimeInput = '&incident_subcategory=Lost Property';
    } else if ($('#sfCrimeType').val() === 'MP') {
      crimeInput = '&incident_subcategory=Missing Person';
    } else if ($('#sfCrimeType').val() === 'MVT') {
      crimeInput = '&incident_subcategory=Motor Vehicle Theft';
    } else if ($('#sfCrimeType').val() === 'NC') {
      crimeInput = '&incident_subcategory=Non-Criminal';
    } else if ($('#sfCrimeType').val() === 'RV') {
      crimeInput = '&incident_subcategory=Recovered Vehicle';
    } else if ($('#sfCrimeType').val() === 'ROB-O') {
      crimeInput = '&incident_subcategory=Robbery - Other';
    } else if ($('#sfCrimeType').val() === 'SA') {
      crimeInput = '&incident_subcategory=Simple Assault';
    } else if ($('#sfCrimeType').val() === 'SP') {
      crimeInput = '&incident_subcategory=Stolen Property';
    } else if ($('#sfCrimeType').val() === 'SO') {
      crimeInput = '&incident_subcategory=Suspicious Occ';
    } else if ($('#sfCrimeType').val() === 'TFV') {
      crimeInput = '&incident_subcategory=Theft From Vehicle';
    } else if ($('#sfCrimeType').val() === 'TC-HR') {
      crimeInput = '&incident_subcategory=Traffic Collision - Hit & Run';
    } else if ($('#sfCrimeType').val() === 'TRS') {
      crimeInput = '&incident_subcategory=Trespass';
    } else if ($('#sfCrimeType').val() === 'VAN') {
      crimeInput = '&incident_subcategory=Vandalism';
    } else if ($('#sfCrimeType').val() === 'OTH') {
      crimeInput = '&incident_subcategory=Other';
    } else {
      crimeInput = '';
    }


    $.ajax({
      url: `https://data.sfgov.org/resource/wg3w-h783.json?$where=incident_datetime between '${sfInput}T${startTime}' and '${sfInputEnd}T${endTime}' ${crimeInput}`,
      method: "GET"
    }).then(function (response) {
      for (let i = 0; i < response.length; i++) {
        console.log(response[i].incident_subcategory);
        if (response[i].latitude) {
          let date = moment(response[i].incident_datetime.slice(0, -13), 'YYYY-MM-DD').format('LL');
          let time = moment(response[i].incident_datetime.slice(11, -7), 'hh:mm').format('LT');
          let lat = parseFloat(response[i].latitude);
          let lon = parseFloat(response[i].longitude);

          if (response[i].resolution === 'Open or Active') {
            circleColor = 'red';
          } else {
            circleColor = 'yellow';
          }
            fireRadius = 90;
          L.circle([lat, lon], {
              color: circleColor,
              fillColor: circleColor,
              fillOpacity: 0.5,
              radius: 60
          }).addTo(mymap1).bindPopup(`
            <strong>${response[i].incident_description}</strong>
            <br>
            ${time} - ${response[i].incident_day_of_week}, ${date}
            <br>
            ${response[i].analysis_neighborhood}: ${response[i].intersection}
            <br>
            Resolution: ${response[i].resolution}
          `);          
        }
      }
    });
  }

  var policeStationArray = [
    {
      stationName: "Bayview Police Station",
      address: "201 Williams Ave, San Francisco, CA 94124",
      phone: "415-671-2300",
      abbr: "bayviewStation",
      lng: 37.729664,
      lat: -122.398086,
    },
    {
      stationName: "Central Police Station",
      address: "766 Vallejo St, San Francisco, CA 94133",
      phone: "415-315-2400",
      abbr: "centralStation",
      lng: 37.798645,
      lat: -122.409862,
    },
    {
      stationName: "Ingleside Police Station",
      address: "1 Sgt John V Young Ln, San Francisco, CA 94112",
      phone: "415-404-4000",
      abbr: "inglesideStation",
      lng: 37.72477,
      lat: -122.446225,
    },
    {
      stationName: "Mission Police Station",
      address: "630 Valencia St, San Francisco, CA 94110",
      phone: "415-558-5400",
      abbr: "missionStation",
      lng: 37.76268,
      lat: -122.421969,
    },
    {
      stationName: "Northern Police Station",
      address: "1125 Filmore St, San Francisco, CA 94110",
      phone: "415-614-3400",
      abbr: "northernStation",
      lng: 37.780161,
      lat: -122.43239,
    },
    {
      stationName: "Park Police Station",
      address: "1899 Waller St, San Francisco, CA 94158",
      phone: "415-242-3000",
      abbr: "parkStation",
      lng: 37.767848,
      lat: -122.455266,
    },
    {
      stationName: "Richmond Police Station",
      address: "461 6th Ave, San Francisco, CA 94118",
      phone: "415-666-8000",
      abbr: "richmondStation",
      lng: 37.780001,
      lat: -122.46446,
    },
    {
      stationName: "Southern Police Station",
      address: "850 Bryant St, San Francisco, CA 94116",
      phone: "415-553-1373",
      abbr: "southernStation",
      lng: 37.774988,
      lat: -122.404328,
    },
    {
      stationName: "Taraval Police Station",
      address: "2345 24th Ave, San Francisco, CA 94116",
      phone: "415-759-3100",
      abbr: "taravalStation",
      lng: 37.743733,
      lat: -122.48146,
    },
    {
      stationName: "Tenderloin Police Station",
      address: "301 Eddy St, San Francisco, CA 94102",
      phone: "415-345-7300",
      abbr: "tenderloinStation",
      lng: 37.783704,
      lat: -122.412895,
    },
  ];

  const policeColor = 'blue';

  $('#policeStationButton').on('click', function () {
    for (let i = 0; i < policeStationArray.length; i++) {
      if (policeStationArray.stationName !== '') {
        let lat = policeStationArray[i].lat;
        let lon = policeStationArray[i].lng;
        let policeStation = policeStationArray[i].stationName
        let policeAddress = policeStationArray[i].address;
        let policePhone = policeStationArray[i].phone;
        var marker = L.marker([lon, lat]).addTo(mymap1).addTo(mymap1).bindPopup(`
        <strong>${policeStation}</strong>
        <br>
        ${policeAddress}
        <br>
        ${policePhone}
      `);
      }
    }
  });

  var fireStationArray = [
    {
      stationName: "Bayview Police Station",
      address: "201 Williams Ave, San Francisco, CA 94124",
      phone: "415-671-2300",
      abbr: "bayviewStation",
      lng: 37.729664,
      lat: -122.398086,
    },
    {
      stationName: "Central Police Station",
      address: "766 Vallejo St, San Francisco, CA 94133",
      phone: "415-315-2400",
      abbr: "centralStation",
      lng: 37.798645,
      lat: -122.409862,
    },
  ];

  

});