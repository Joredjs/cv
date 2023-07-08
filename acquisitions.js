var aoe ={
	"2012": [
    {
      "js": 20
    },
    {
      "html": 15
    },
    {
      "css": 17
    },
    {
      "sql": 1
    }
  ],
  "2013": [
    {
      "js": 18
    },
    {
      "c#": 2
    },
    {
      "html": 12
    },
    {
      "css": 15
    },
    {
      "bash": 1
    },
    {
      "java": 1
    },
    {
      "sql": 4
    }
  ],
  "2014": [
    {
      "js": 12
    },
    {
      "c#": 18
    },
    {
      "html": 5
    },
    {
      "css": 7
    },
    {
      "bash": 2
    },
    {
      "java": 1
    },
    {
      "sql": 8
    }
  ],
  "2015": [
    {
      "js": 11
    },
    {
      "c#": 12
    },
    {
      "html": 5
    },
    {
      "css": 7
    },
    {
      "bash": 2
    },
    {
      "java": 4
    },
    {
      "sql": 12
    }
  ],
  "2016": [
    {
      "js": 18
    },
    {
      "ts": 2
    },
    {
      "php": 2
    },
    {
      "html": 12
    },
    {
      "css": 15
    },
    {
      "tl": 4
    },
    {
      "bash": 1
    },
    {
      "java": 8
    },
    {
      "sql": 10
    },
    {
      "c#": 4
    }
  ],
  "2017": [
    {
      "js": 16
    },
    {
      "ts": 4
    },
    {
      "php": 2
    },
    {
      "html": 4
    },
    {
      "css": 6
    },
    {
      "tl": 5
    },
    {
      "bash": 4
    },
    {
      "java": 4
    },
    {
      "sql": 10
    }
  ],
  "2018": [
    {
      "js": 4
    },
    {
      "ts": 6
    },
    {
      "php": 6
    },
    {
      "html": 2
    },
    {
      "css": 3
    },
    {
      "tl": 8
    },
    {
      "mg": 1
    },
    {
      "bash": 5
    },
    {
      "java": 4
    },
    {
      "flutter": 5
    },
    {
      "scala": 5
    },
    {
      "sql": 5
    }
  ],
  "2019": [
    {
      "js": 2
    },
    {
      "ts": 9
    },
    {
      "php": 12
    },
    {
      "html": 1
    },
    {
      "css": 2
    },
    {
      "tl": 10
    },
    {
      "mg": 2
    },
    {
      "bash": 1
    },
    {
      "java": 4
    },
    {
      "flutter": 4
    },
    {
      "ml": 5
    },
    {
      "sql": 3
    }
  ],
  "2020": [
    {
      "js": 2
    },
    {
      "ts": 8
    },
    {
      "php": 15
    },
    {
      "html": 2
    },
    {
      "css": 3
    },
    {
      "tl": 11
    },
    {
      "mg": 14
    },
    {
      "bash": 3
    },
    {
      "java": 6
    },
    {
      "flutter": 3
    },
    {
      "sql": 4
    }
  ],
  "2021": [
    {
      "js": 1
    },
    {
      "ts": 4
    },
    {
      "php": 14
    },
    {
      "html": 1
    },
    {
      "css": 2
    },
    {
      "tl": 10
    },
    {
      "mg": 15
    },
    {
      "bash": 3
    },
    {
      "java": 4
    },
    {
      "flutter": 1
    }
  ],
  "2022": [
    {
      "js": 4
    },
    {
      "ts": 6
    },
    {
      "php": 12
    },
    {
      "html": 1
    },
    {
      "css": 2
    },
    {
      "tl": 6
    },
    {
      "mg": 8
    },
    {
      "bash": 2
    }
  ],
  "2023": [
    {
      "js": 14
    },
    {
      "ts": 8
    },
    {
      "php": 2
    },
    {
      "html": 2
    },
    {
      "css": 4
    },
    {
      "tl": 4
    },
    {
      "mg": 2
    },
    {
      "bash": 1
    }
  ]
}


let th = 0
let ts = 0
let td = 0
let sk ={}
for (let a in aoe){
    console.log(a)
    let ta = 0
    let tah = 0
    let tad = 0
    for(let s of aoe[a]){
        console.log(s)
        for(let w in s){
            ta+=s[w]
            tah+=(s[w])*40
            tad+=(s[w])*5

            if(!sk[w]){
                sk[w] = 0
            }

            sk[w] += s[w]
        }

    }
    //console.log(ta)
    //console.log(tah)
    //console.log(tad)
    th += tah
    ts += ta
    td += tad
}
console.log("all",th)
console.log("all s",ts)
console.log("all d",td)
console.log(sk)

for(i in sk){
    console.log(i,sk[i]*40)
}