const JSONresume ={
     name: "Suryaprakash",
    contact: {
        address: "2/40,Thoppalagunda village,Kathari post",
        city: "Nattrampalli",
        state: "Tamilnadu",
        Pincode : 635852,
        email: "gsurya124@gmail.com",
        phone: 9677312922
    },

    education: [ 
         {
            degree: "B.Tech(Genetic Engg)",
        College: "Bharath University - Chennai",
        graduation_year: 2020
        },

        {
         degree: "HSC",
        school: "Brindavan Materic HR sec School - Nattrampalli",
        graduation_year: 2016
        },

        {degree: "SSLC",
        school: "Brindavan Materic HR sec School - Nattrampalli",
        graduation_year: 2014

        }
        ]
      
    ,

    Seminar: [
        {
            title : "Molecular testing in Genetic Disorders",
            heldon  : "Bharath university at 2020"
        }
    ]
}


for (key in JSONresume) {
    console.log(` ${key} : ${JSONresume[key]}`)
          
        }
    