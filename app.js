const { default: axios } = require('axios');

// Create vue app instance
var app = new Vue({
  el: '#app',
  data: {
      step: 1,
      totalSteps: 6, 
      device: {
        outsideFootprint:null,
        IMEI:null,
        imeiValid: null, 
        phoneNumber:null
      },
      account: {
        zipCode:null,
        phoneNumber:null, 
        email:null,
        phone:null,
        message:null
      },

  },
methods: {
    nextStep: function()
    {
        this.step++;
    },
    
    prevStep: function()
    {
        this.step--;
    },

    imeiCheck: function()
    {
       return this.device.imeiValid = true; 
    }
},

mounted: function(){
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => console.log(response));

    }

})
