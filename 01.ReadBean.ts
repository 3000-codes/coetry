/**
 *  相思
 * 作者：王维
 * 红豆生南国，春来发几枝。
 * 愿君多采撷，此物最相思。
 */
const ONE_DAY=1000*60*60*24
class ReadBean{
  branchCount=0
  constructor(){
    if(new Date().getMonth()===0){
    setInterval(()=>{
      this.branchCount+=Math.floor(Math.random()*10)
    },ONE_DAY)
  }
  }
  get metaphor(){
    return 'I miss you'
  }
}
class Mate{
  souvenirs:unknown[]=[]
  constructor(){}
  pike(gift:unknown){
    this.souvenirs.push(gift)
  }
}
const you=new Mate()

function miss(){
  // 红豆生南国
  const myCountry:any={
    redBean:null
  }
  
  // 春来发几枝 : 几枝是指少于十枝还是指很多枝呢？
  myCountry.redBean=new ReadBean()
  // 愿君多采撷
  if(you){
    you.pike(myCountry.redBean)
  }
  // 此物最相思
  return myCountry.redBean.metaphor
}

export default {}