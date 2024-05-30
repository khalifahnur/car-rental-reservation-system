const cars = [
    {
      id: 1,
      make: "Toyota",
      model: [
        { id: 100, name: "Toyota V8", imgUrl: "/cars/toyota/v8.jpg", price: 1000,year:2021,rate:4.7 },
        { id: 101, name: "Toyota Hyrder", imgUrl: "/cars/toyota/hyryder.jpg", price: 1000,year:2021,rate:4.7 },
        { id: 102, name: "Toyota V8 (new)", imgUrl: "/cars/toyota/v8 new.jpg", price: 1500,year:2024,rate:4.5 },
        { id: 103, name: "Toyota Tx", imgUrl: "/cars/toyota/tx prado black.jpeg", price: 1000,year:2021,rate:4.4},
        { id: 104, name: "Toyota Tx (new)", imgUrl: "/cars/toyota/tx prado.jpeg", price: 1000,year:2024,rate:4.5 },
        { id: 105, name: "Toyota Camry", imgUrl: "/cars/toyota/camry.jpg", price: 900,year:2022,rate:4.6 },
        { id: 106, name: "Toyota Hilux", imgUrl: "/cars/toyota/hilux.jpg", price: 700,year:2021,rate:4.7 },
        { id: 107, name: "Toyota Hycross", imgUrl: "/cars/toyota/Hycross.jpg", price: 800,year:2023,rate:4.7 },
        { id: 108, name: "Toyota Fotuner", imgUrl: "/cars/toyota/fortuner.jpg", price: 1000,year:2021,rate:4.7 },
        { id: 109, name: "Toyota Vellfire", imgUrl: "/cars/toyota/vellfire.jpg", price: 1000,year:2023,rate:4.7 },
        { id: 110, name: "Toyota Glanza", imgUrl: "/cars/toyota/glanza.jpg", price: 1000,year:2021,rate:4.7 },
      ],
    },
    {
        id: 2,
        make: "Audi",
        model: [
          { id: 111, name: "Audi Q3", imgUrl: "/cars/audi/q3.jpg", price: 1000,year:2021,rate:4.7 },
          { id: 112, name: "Audi A4", imgUrl: "/cars/audi/a4.jpg", price: 1500,year:2024,rate:4.5 },
          { id: 113, name: "Sportback Q3", imgUrl: "/cars/audi/sportback.jpg", price: 1000,year:2021,rate:4.4},
          { id: 114, name: "Audi Q5", imgUrl: "/cars/audi/q5.jpg", price: 1000,year:2024,rate:4.5 },
          { id: 115, name: "Audi Q7", imgUrl: "/cars/audi/Q7.jpg", price: 900,year:2022,rate:4.6 },
          { id: 116, name: "Audi Q8", imgUrl: "/cars/audi/q8.jpg", price: 1500,year:2024,rate:4.7 },
        ],
      },
      {
        id: 3,
        make: "BMW",
        model: [
          { id: 117, name: "BMW 2", imgUrl: "/cars/bmw/bmw2.jpg", price: 1000,year:2021,rate:4.7 },
          { id: 118, name: "BMW X1", imgUrl: "/cars/bmw/x1.jpg", price: 1500,year:2024,rate:4.5 },
          { id: 119, name: "BMW 3", imgUrl: "/cars/bmw/bmw 3.jpg", price: 1000,year:2021,rate:4.4},
          { id: 120, name: "BMW X3", imgUrl: "/cars/bmw/x3.jpg", price: 1000,year:2024,rate:4.5 },
          { id: 121, name: "BMW 6", imgUrl: "/cars/bmw/bmw6.jpg", price: 900,year:2022,rate:4.6 },
          { id: 122, name: "BMW X4", imgUrl: "/cars/bmw/x4.jpg", price: 1500,year:2024,rate:4.7 },
          { id: 123, name: "BMW X5", imgUrl: "/cars/bmw/x6.jpg", price: 1500,year:2024,rate:4.7 },
          { id: 124, name: "BMW M8", imgUrl: "/cars/bmw/m8.jpg", price: 1500,year:2024,rate:4.7 },
        ],
      },
      {
        id: 4,
        make: "Lexus",
        model: [
          { id: 125, name: "Lexus ES", imgUrl: "/cars/lexus/es.jpg", price: 1000,year:2021,rate:4.7 },
          { id: 126, name: "LEXUS LC", imgUrl: "/cars/lexus/lc.jpg", price: 1500,year:2024,rate:4.5 },
          { id: 127, name: "LEXUS", imgUrl: "/cars/lexus/lexus.jpg", price: 1000,year:2021,rate:4.4},
          { id: 128, name: "LEXUS LM", imgUrl: "/cars/lexus/lm.jpg", price: 1000,year:2024,rate:4.5 },
          { id: 129, name: "LEXUS LS", imgUrl: "/cars/lexus/ls.jpg", price: 900,year:2022,rate:4.6 },
          { id: 130, name: "LEXUS LX", imgUrl: "/cars/lexus/lx.jpg", price: 1500,year:2024,rate:4.7 },
          { id: 131, name: "LEXUS NX", imgUrl: "/cars/lexus/nx.jpg", price: 1500,year:2024,rate:4.7 },
          { id: 132, name: "LEXUS RX", imgUrl: "/cars/lexus/rx.jpg", price: 1500,year:2024,rate:4.7 },
        ],
      },
      {
        id: 5,
        make: "Mercedes Benz",
        model: [
          { id: 133, name: "Mercedes AMG A35", imgUrl: "/cars/mercedes/a35.jpg", price: 1000,year:2021,rate:4.7 },
          { id: 134, name: "Mercedes AMG A45", imgUrl: "/cars/mercedes/a45.jpg", price: 1500,year:2024,rate:4.5 },
          { id: 135, name: "Mercedes AMG SL55", imgUrl: "/cars/mercedes/sl55.jpg", price: 1000,year:2021,rate:4.4},
          { id: 136, name: "Mercedes E-Class", imgUrl: "/cars/mercedes/eclass.jpg", price: 1000,year:2024,rate:4.5 },
          { id: 137, name: "Mercedes C-Class", imgUrl: "/cars/mercedes/cclass.jpg", price: 900,year:2022,rate:4.6 },
          { id: 138, name: "Mercedes GLB", imgUrl: "/cars/mercedes/glb.jpg", price: 1500,year:2024,rate:4.7 },
          { id: 139, name: "Mercedes GLS", imgUrl: "/cars/mercedes/gls.jpg", price: 1500,year:2024,rate:4.7 },
          { id: 140, name: "Mercedes GLA", imgUrl: "/cars/mercedes/gla.jpg", price: 1500,year:2024,rate:4.7 },
        ],
      },
    
  ];
  
export default cars;
