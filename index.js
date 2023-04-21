const axios = require('axios');

const myJSON = [
  {"Counter":91023,"Created At":"2023-04-20T14:40:02.532825Z","Partner":"Cellulant","Type":"TRANSFER","Meta → AccountNumber":"254794390354","Meta → Reference":"TF-384393977","Entry":"DEBIT","Updated At":"2023-04-20T14:40:04.106418Z","Source Amount":900000,"Meta → BankCode":"665","Status":"PENDING","Fee":18000,"Meta → InstitutionID":"6c4f5d40-b2ce-425f-b206-0a051dd3b354","Source Currency ID":"b900125e-d518-4397-a69d-bbfb81f25b70","Partner ID":"1705864843","Webhook Response":null,"ID":"af4b25d8-9745-4199-9006-00261a9a2f88","Destination Amount":900000,"Settled":null,"Deleted At":null,"Partner Reference":"fb991da0-2301-4242-b234-97bb24b6a402","Business ID":"57fc159b-8a6d-4de2-a017-77371e2c812a","Summary":"Transfer | kemi - 254794390354 - MPESA","Settlement ID":null,"Usd Value":70.23567969,"Destination Currency ID":"b900125e-d518-4397-a69d-bbfb81f25b70","Channel":"MOMO","Reason":"Wirepay/Oluwakemi Longe","Meta → Type":null,"Partner Fee":0,"Meta → Currency":"KES","Reference":"TF-384393977","Payment Link":null},
  ]

const arr = []
myJSON.map(x => {
    arr.push(x['ID'])
})


axios({
    method: 'post',
    url: 'https://',
    auth: {
        username: '******',
        password: '******'
      },
    data: {
        transaction: arr
    }
  });