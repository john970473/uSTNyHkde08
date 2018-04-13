var transcript = {
  "data":[
    {
      "t": "7235",
      "d": "3950",
      "ts": "Somewhere near you, an animal is defecating.  <br>"
    },
    {
      "t": "11185",
      "d": "4391",
      "ts": "	In fact, each day, the animal kingdom produces roughly enough dung  <br>"
    },
    {
      "t": "15576",
      "d": "5990",
      "ts": "to match the volume of water pouring over the Victoria Falls.  <br>"
    },
    {
      "t": "21566",
      "d": "3368",
      "ts": "So why isn't the planet covered in the stuff?  <br>"
    },
    {
      "t": "24934",
      "d": "4310",
      "ts": "You can thank the humble dung beetle for eating up the excess.  <br> "
    },
    {
      "t": "29244",
      "d": "5324",
      "ts": "Capable of burying 250 times their body weight in a single night,  <br> "
    },
    {
      "t": "34568",
      "d": "5685",
      "ts": "these valiant insects make quick work of an endless stream of feces.  <br> "
    },
    {
      "t": "40253",
      "d": "5812",
      "ts": "Over 7,000 known species of dung beetle run clean-up duty across six continents   <br> "
    },
    {
      "t": "46065",
      "d": "2720",
      "ts": "	—everywhere except Antarctica.   <br> "
    },
    {
      "t": "48785",
      "d": "3139",
      "ts": "	A dung beetle's first task is to locate dung.  <br> "
    }
  ]
};

// out.innerHTML = transcript.ts;
// var ts = JSON.parse(data);
for (var i=0 ; i<10 ; i++){
  document.getElementById('ts'+(i+1)).innerHTML = transcript.data[i].ts;
}
