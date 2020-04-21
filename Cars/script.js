const cars = [
    {
        model: 'MERCEDES BENZ',
        year: 2020,
        owner: 0,
        service: 1,
    },
    {
        model: 'BMW',
        year: 2015,
        owner: 1,
        service: 1,
    },
    {
        model: 'AUDI',
        year: 2001,
        owner: 1,
        service: 0,
    },
    {
        model: 'LEXUS',
        year: 2000,
        owner: 2,
        service: 0,
    }
]
const owner = [
    {
        name: 'Armen',
        index: 0,
    },
    {
        name: 'Narek',
        index: 1,
    },
    {
        name: 'Hayk',
        index: 2,
    }
]
const service = [
    {
        serviceName: 'Mec Aniv',
        index: 0,
    },
    {
        serviceName: 'Poqr Aniv',
        index: 1,
    },
];

//  let carServices = service.map((item) => {     //Task 1
//     let carList = cars.filter((index) => {
//         return index.service === item.index;
//     });
//     return carList;
// });
// console.log(carServices)

// let narek = cars.filter((item) => item.owner === 1);  //Task 2 filter em arel, qani vor kara 1ic aveli owner lini   //Task 2 
// console.log(narek);

// let carAge = cars.filter ((item) => 2020 - item.year > 10)  //Task 3
// console.log(carAge);

// let changeYear = cars.map ((item) => item.year + 1)    //Task4
// console.log(changeYear);
// console.log(cars);  // vonca anem vor poxeluc heto amboxjakan objectnery cuyc tam poxvac property-ov?


// let newCar = [];
// let addNewCar = document.querySelector('.addCar');
// let newModel = document.querySelector('#model');
// let newYear = document.querySelector('#year');
// let newOwner = document.querySelector('.owner');
// let addService = document.querySelector('.service');
// addNewCar.addEventListener ('click', function () {
//     newCar.push( {
//         model:newModel.value,
//         year:newYear.value,
//         owner:newOwner.value,
//         service:addService.value,     
//   }); 
//   console.log(newCar)
// });