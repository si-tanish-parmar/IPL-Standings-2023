var myArray = [
  {
    POS: 1,
    TEAM: "GT",
    P: 14,
    W: 10,
    L: 4,
    NR: 0,
    NRR: 0.809,
    FOR: "2450/268.1",
    AGAINST: "2326/279.2",
    PTS: 20,
    RecentForm: "W	W	W	L	W",
  },
  {
    POS: 2,
    TEAM: "CSK",
    P: 14,
    W: 8,
    L: 5,
    NR: 1,
    NRR: 0.652,
    FOR: "2369/254.3",
    AGAINST: "2232/257.5",
    PTS: 17,
    RecentForm: "W	L	W	W	N",
  },
  {
    POS: 3,
    TEAM: "LSG",
    P: 14,
    W: 8,
    L: 5,
    NR: 1,
    NRR: 0.284,
    FOR: "2253/255.2",
    AGAINST: "2216/259.3",
    PTS: 17,
    RecentForm: "W	W	W	L	N",
  },
  {
    POS: 4,
    TEAM: "MI",
    P: 14,
    W: 8,
    L: 6,
    NR: 0,
    NRR: -0.044,
    FOR: "2592/270.3",
    AGAINST: "2620/272.1",
    PTS: 16,
    RecentForm: "W	L	W	W	L",
  },
  {
    POS: 5,
    TEAM: "RR",
    P: 14,
    W: 7,
    L: 7,
    NR: 0,
    NRR: 0.148,
    FOR: "2419/272.1",
    AGAINST: "2389/273.2",
    PTS: 14,
    RecentForm: "W	L	W	L	L",
  },
  {
    POS: 6,
    TEAM: "RCB",
    P: 14,
    W: 7,
    L: 7,
    NR: 0,
    NRR: 0.135,
    FOR: "2502/275.4",
    AGAINST: "2435/272.2",
    PTS: 14,
    RecentForm: "L	W	W	L	L",
  },
  {
    POS: 7,
    TEAM: "KKR",
    P: 14,
    W: 6,
    L: 8,
    NR: 0,
    NRR: -0.239,
    FOR: "2463/274.3",
    AGAINST: "2432/264.0",
    PTS: 12,
    RecentForm: "L  W L	W	W",
  },
  {
    POS: 8,
    TEAM: "PBKS",
    P: 14,
    W: 6,
    L: 8,
    NR: 0,
    NRR: -0.304,
    FOR: "2518/275.3",
    AGAINST: "2564/271.3",
    PTS: 12,
    RecentForm: "L	L	W	L	L",
  },
  {
    POS: 9,
    TEAM: "DC",
    P: 14,
    W: 5,
    L: 9,
    NR: 0,
    NRR: -0.808,
    FOR: "2182/276.0",
    AGAINST: "2424/278.1",
    PTS: 10,
    RecentForm: "L	W	L	L	W",
  },
  {
    POS: 10,
    TEAM: "SRH",
    P: 14,
    W: 4,
    L: 10,
    NR: 0,
    NRR: -0.59,
    FOR: "2376/277.1",
    AGAINST: "2486/271.2",
    PTS: 8,
    RecentForm: "L	L	L	W	L",
  },

  // Add more data here if needed...
];

buildTable(myArray);

function buildTable(data) {
  var tableBody = $("#myTable");

  for (var i = 0; i < data.length; i++) {
    var row = `
          <tr>
            <td>${data[i].POS}</td>
			<td>
			<div class="team-info">
				
                <span><img src="images/${data[i].TEAM}.png" width="25" height="25" /></span>
                <span>${data[i].TEAM}</span>
              </div>
			  </td>
            <td>${data[i].P}</td>
            <td>${data[i].W}</td>
            <td>${data[i].L}</td>
            <td>${data[i].NR}</td>
            <td>${data[i].NRR}</td>
            <td>${data[i].FOR}</td>
            <td>${data[i].AGAINST}</td>
            <td>${data[i].PTS}</td>
            <td>${data[i].RecentForm}</td>
          </tr>
        `;
    tableBody.append(row);
  }
}
