const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'scatter',
    data: {
      labels: 
      // 1st day
      ['71','58','84','51','40','65',
       '46','47','36','34','45','43',
       '54','57','85','45','44','62',
       '46','74','73','45','49','39',
       '45','70','31','35','48','84',
       '43','60',
       
      // 2nd day
       '60','45','98','103','36','51',
       '65','38','35','65','51','86',
       '46','75','38','52','46','35',
       '59','33','60','57','58','25',
       '44','42','61','64','41','48',
       '41','59','58','65',

       // 3rd day
       '44','54','34','43','42','37',
       '81','44',
      ],
      datasets: [{
        label: 'radius',
        data:  
        // 1st day
        [46,33,51,29,29,37,40,31,24,24,
         35,24,38,34,55,39,41,31,32,44,
         53,30,34,24,44,37,34,35,27,57,
         41,44,

        // 2nd day
        38,37,51,73,24,36,38,28,39,42,34,
        42,33,36,24,43,33,39,33,24,36,46,
        35,25,31,33,27,41,35,48,26,29,42,
        52,

        //  3rd day
        40,33,30,30,33,37,52,27
        ],
        borderWidth: 20,
        borderColor:  'rgb(17, 168, 19)',
        backgroundColor: 'rgb(6, 41, 196)',
      }, {
    }]
    },
    options: {
      scales: {
        x: {
          beginAtZero: true
        },
        y: {
          beginAtZero: true
        }
      }
    }
  });


const currentKills = () => {
  let sum = array1.reduce((acc, e) => acc + e, 0);
  let lenght = array1.length;
  return sum / lenght;
};

const array1 = 
['71','58','84','51','40','65',
'46','47','36','34','45','43',
'54','57','85','45','44','62',
'46','74','73','45','49','39',
'45','70','31','35','48','84',
'43','60','60','45','98','103',
'36','51','65','38','35','65',
'51','86','46','75','38','52',
'46','35','59','33','60','57',
'58','25','44','42','61','64',
'41','48','41','59','58','65',
'44','54','34','43','42','37',
'81','44'
].map(i=>Number(i));

console.log(currentKills(array1)); // 53


const currentTime = () => {
  let sum = array2.reduce((acc, e) => acc + e, 0);
  let lenght = array2.length;
  return sum / lenght;
};

const array2 = 
[
  46,33,51,29,29,37,40,31,24,24,
  35,24,38,34,55,39,41,31,32,44,
  53,30,34,24,44,37,34,35,27,57,
  41,44,38,37,51,73,24,36,38,28,
  39,42,34,42,33,36,24,43,33,39,
  33,24,36,46,35,25,31,33,27,41,
  35,48,26,29,42,52, 40,33,30,30,
  33,37,52,27
];

console.log(currentTime(array2)); // 36.6