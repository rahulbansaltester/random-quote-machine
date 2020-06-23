
new Vue({
  el:"#app",
  data:{
    name:"Random Quotes",
    currentQuote:quotes[0]
  },
  methods:{
    newQuote(){
      let num = Math.floor(Math.random() * quotes.length);
      this.currentQuote = quotes[num];
    }
 }
})
