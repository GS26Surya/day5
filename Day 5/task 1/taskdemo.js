
 const JSONresume = {
  name: "Suryaprakash",
  address: "2/40, Thoppalagunda village, Kathari post",
  city: "Nattrampalli",
  state: "Tamilnadu",
  Pincode: 635852,
  email: "gsurya124@gmail.com",
  phone: 9677312922,
  
  degree1: "SSLC",
  school1: "Brindavan Matric HR sec School - Nattrampalli",
  graduation_year1: 2014,

  degree2: "HSC",
  school2: "Brindavan Matric HR sec School - Nattrampalli",
  graduation_year2: 2016,

  degree3: "B.Tech(Genetic Engg)",
  college: "Bharath University - Chennai",
  graduation_year3: 2020,
  seminarsTitle : "Molecular testing in Genetic Disorders",
      heldon: "Bharath university at 2020"
    
};

for (let key in JSONresume) {
  console.log(`${key}: ${JSONresume[key]}`);
}
