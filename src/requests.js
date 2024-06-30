// const rootCats = `
//   # Запрос для получения корневых категорий
//   query categories {
//     CategoryFind(query: "[{\\"parent\\": null}]") {
//       _id
//       name
//       parent {
//         _id
//         createdAt
//         name
//       }
//     }
//   }
// `;

// const findOne = `
//   # Запрос для получения одной категории с товарами и картинками
//   query gf($q: String) {
//     CategoryFindOne(query: $q) {
//       name
//       parent {
//         name
//         _id
//       }
//       subCategories {
//         _id
//         name
//       }
//       goods {
//         _id
//         name
//         description
//         price
//         images {
//           _id
//           createdAt
//           text
//           url
//           originalFileName
//         }
//       }
//     }
//   }
// `;

// const specialOne = `
//   # Запрос для нахождения товара по айди
//   query specialOne($q2: String) {
//     GoodFindOne(query: $q2) {
//       name
//       _id
//       description
//       price
//       categories {
//         _id
//         createdAt
//         name
//       }
//       images {
//         url
//       }
//     }
//   }
// `;

// const registration = `
//   # Запрос на регистрацию
//   mutation registration($login: String, $password: String) {
//     UserUpsert(user: { login: $login, password: $password }) {
//       _id
//       createdAt
//     }
//   }
// `;



// const orderFind = `
//   # Запрос на поиск всех заказов
//   query orders {
//     OrderFind(query: "[{}]") {
//       _id
//       createdAt
//       total
//     }
//   }
// `;

// const createOrder = `
//   # Запрос на создание заказа
//   mutation createOrder($order: OrderInput) {
//     OrderUpsert(order: $order) {
//       _id
//       orderGoods {
//         _id
//         price
//         count
//         total
//         good {
//           name
//           _id
//           price
//           images {
//             url
//           }
//         }
//       }
//     }
//   }
// `;

// query login($login: String, $password: String) {
//     login(login: $login, password: $password)
//   }
  
//   query orders{
//       OrderFind(query:"[{}]") {
//         _id
//         createdAt
//         total
//       }
//   }
  
//   mutation createOrder($order: OrderInput) {
//     OrderUpsert(order: $order) {
//       _id
//       orderGoods {
//         _id
//         price
//         count
//         total
//         good {
//           name
//           _id
//           price
//           images {
//             url
//           }
//         }
//       }
//     }
//   }
  

// {
//     "login": "Chichikov",
//     "password": "SafetyPass",
//     "order": {
//       "orderGoods": [
//         {
//           "good": {
//             "_id": "62d5ca00b74e1f5f2ec1a156"
//           },
//           "count": 1
//         }
//       ]
//     }
//   }


// query users {
//     UserFind(query:"[{}]") {
//     _id,
//     createdAt,
//     login,
//     nick ,
//     avatar,
//     acl
// }}

// Запрос на логин
const loginQuery = `
  # Запрос на логин
  query login($login: String, $password: String) {
    login(login: $login, password: $password)
  }
`;


const registration=
 `mutation reg($login: String, $password: String,$nick:String){
  UserUpsert(user:{
    login:$login, password:$password, nick:$nick
  }){
    _id
  }
}`

// поиск юзеров
const userFind =`
query users {
    UserFind(query:"[{}]") {
    _id,
    createdAt,
    login,
    nick ,
    avatar {
      _id
      createdAt
      text
      url
      originalFileName
    },
    acl
}}`
//создание юзера
const userUpsert = `mutation userUpsert($user:UserInput)
{UserInput(user:$user) {
  _id,
  login,
  nick ,
  password,
  acl,
  avatar
}}`



// поиск изображений
const imageFind =`
query images{
    ImageFind(query:"[{}]") {
        _id,
        createdAt,
        text,
        url,
        originalFileName,
        userAvatar {
          _id
          createdAt
          login
          nick
        },
        good {
          _id
          createdAt
          name
          description
          price
        },
        category {
          _id
          createdAt
          name
        },
        owner {
          _id
          createdAt
          login
          nick
        }
    }}`


//изменение изображений
    const imageUpsert = 
   ` mutation ImageUpsert($image:ImageInput){
      ImageUpsert(image:$image) {
      _id,
      createdAt,
      text,
      url,
      originalFileName,
      userAvatar,
      good,
      category,
      owner
  }}`

// поиск категории
    const categoryFind = 
  `  
  query categories{CategoryFind(query:"[{}]") {
      _id,
       createdAt,
      name,
      goods {
        _id
        createdAt
        name
        description
        price
      },
      image {
        _id
        createdAt
        text
        url
        originalFileName
      }, 
      owner {
        _id
        createdAt
        login
        nick
      },
      parent {
        _id
        createdAt
        name
      },
      subCategories {
        _id
        createdAt
        name
      }
  }}`

  //поиск корневых категорий 
  const rootCategoriesFind =`
  query cats{
    CategoryFind(query: "[{\"parent\": null}]"){
      _id
      name,
      goods{
        name
      },
      parent{
        name
      }
      subCategories{
        name,
        subCategories{
          name
        }
      }
    }
  }
  `

// //создание категории
//   const categoryUpsert =
//   `mutation c{
//     CategoryUpsert(category:{
//       name:"check",
//       goods:[
//         {name:"good1"},
//         {name:"good2"},
//         {_id: "fooBAR"}
//       ]
//     }) {
//       _id
//       createdAt
//       name
//     }
//   }
  
// `
//создание категории с переменной
const categoryUpsert =
`mutation c($category:CategoryInput){
  CategoryUpsert(category:$category) {
    _id
    createdAt
    name
  }
}

`


  // поиск товаров
  const goodFind = 
  `query goods{
    GoodFind(query:"[{}]") {
    _id,
    createdAt,
    name,
    description,
    price,
    orderGoods {
      _id
      createdAt
      price
      count
      goodName
      total
    },    
    categories {
      _id
      createdAt
      name
    },
    images {
      _id
      createdAt
      text
      url
      originalFileName
    },
    owner {
      _id
      createdAt
      login
      nick
    },
}}`

//изменение товара c переменной 
const goodUpsert=`
mutation g($good:GoodInput){
  GoodUpsert(good:$good) {
    _id
    createdAt
    name
    description
    price
  }
}`


// поиск заказов я так понимаю текущих?
const orderGood = 
    `query orderGood{ OrderGoodFind(query:"[{}]") {
      _id,
      createdAt,
      price,
      count,
    goodName,
      good {
        _id
        createdAt
        name
        description
        price
      },
      order {
        _id
        createdAt
        total
      },
      owner {
        _id
        createdAt
        login
        nick
      },
      total
    }}`

//изменение текущего заказа 

const orderGoodInput= `mutation orderGoodInput($orderGood:OrderGoodInput){
OrderGoodUpsert(orderGood:$orderGood) {
  _id,
  count,
  good,
  order
}
}`


    // поиск заказов
    const orderFind = `
    query orderFind{OrderFind(query:"[{}]") {
      _id,
      createdAt,
      total,
      orderGoods,
      owner
  }}
    `


    const orderInput=`mutation orderUpsert(order$:OrderInput){ 
      OrderUpsert(order:$order) {
      _id,
      orderGoods
  }
}`

// {
//   "login": "test717",
//   "password": "test",
//   "nick": "My Nick",
//   "q2": "62d57c4db74e1f5f2ec1a14a",
//   "order": {
//     "orderGoods": [
//       {
//         "good": {
//           "_id": "62d5ca00b74e1f5f2ec1a156"
//         },
//         "count": 1
//       }
//     ]
//   }
// }