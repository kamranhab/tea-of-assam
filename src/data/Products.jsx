import greenTea from '../assets/greentea.webp'

const Products=[
    {   
        id: 1,
        brandName:'TATA',
        image:greenTea,
        name:'Green Tea',
        price:'$20.00',
        category: 'Tea',
        size:'10oz',
        featured: false ,
        slug:'green-tea',
        desc:'This is soluble instant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is solubleinstant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is soluble instant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is solubleinstant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water.'
    }, 

    {    
        id: 2,
        brandName:'TATA',
        image:greenTea,
        name:'Black Tea',
        price:'$10.00',
        category: 'Tea',
        size:'10oz',
        featured: false ,
        slug:'black-tea',
        desc:'This is soluble instant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is solubleinstant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is soluble instant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is solubleinstant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water.'
    },

    {   
        id: 3,
        brandName:'TATA',
        image:greenTea,
        name:'Blue Tea',
        price:'$30.00',
        category: 'Tea',
        size:'10oz',
        featured: false ,
        slug:'blue-tea',
        desc:'This is soluble instant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is solubleinstant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is soluble instant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is solubleinstant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water.'
    },

    {   
        id: 4,
        brandName:'TATA',
        image:greenTea,
        name:'Red Tea',
        price:'$20.00',
        category: 'Tea',
        size:'10oz',
        featured: false ,
        slug:'red-tea',
        desc:'This is soluble instant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is solubleinstant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is soluble instant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is solubleinstant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water.'
    },

    {   
        id: 5,
        brandName:'TATA',
        image:greenTea,
        name:'Orange Tea',
        price:'$20.00',
        category: 'Tea',
        size:'10oz',
        featured: false ,
        slug:'orange-tea',
        desc:'This is soluble instant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is solubleinstant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is soluble instant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is solubleinstant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water.'
    },

    {   
        id: 6,
        brandName:'TATA',
        image:greenTea,
        name:'White Tea',
        price:'$20.00',
        category:'Tea',
        size:'10oz',
        featured: false ,
        slug:'white-tea',
        desc:'This is soluble instant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is solubleinstant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is soluble instant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is solubleinstant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water.'
    },
    {   
        id: 7,
        brandName:'TATA',
        image:greenTea,
        name:'Green Tea ID 7',
        price:'$20.00',
        category: 'Tea',
        size:'10oz',
        featured: true ,
        slug:'green-tea',
        desc:'This is soluble instant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is solubleinstant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is soluble instant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is solubleinstant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water.'

    }, 

    {    
        id: 8,
        brandName:'TATA',
        image:greenTea,
        name:'Black Tea',
        price:'$10.00',
        category: 'Tea',
        size:'10oz',
        featured: true ,
        slug:'black-tea',
        desc:'This is soluble instant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is solubleinstant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is soluble instant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is solubleinstant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water.'
    },

    {   
        id: 9,
        brandName:'TATA',
        image:greenTea,
        name:'Blue Tea',
        price:'$30.00',
        category: 'Tea',
        size:'10oz',
        featured: true ,
        slug:'blue-tea',
        desc:'This is soluble instant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is solubleinstant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is soluble instant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is solubleinstant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water.'
    },

    {   
        id: 10,
        brandName:'TATA',
        image:greenTea,
        name:'Red Tea',
        price:'$20.00',
        category: 'Tea',
        size:'10oz',
        featured: true ,
        slug:'red-tea',
        desc:'This is soluble instant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is solubleinstant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is soluble instant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is solubleinstant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water.'
    },

    {   
        id: 11,
        brandName:'TATA',
        image:greenTea,
        name:'Orange Tea',
        price:'$20.00',
        category: 'Tea',
        size:'10oz',
        featured: true ,
        slug:'orange-tea',
        desc:'This is soluble instant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is solubleinstant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is soluble instant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is solubleinstant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water.'
    },

    {   
        id: 12,
        brandName:'TATA',
        image:greenTea,
        name:'White Tea ID 12',
        price:'$20.00',
        category:'Tea',
        size:'10oz',
        featured: true ,
        slug:'white-tea',
        desc:'This is soluble instant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is solubleinstant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is soluble instant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water. This is solubleinstant coffee. 1 spoon makes 1 cup of 125ml coffee. Drink hot or cold in milk or water.'
    },
    
]

export default Products
