/**
 *  相思
 * 作者：王维
 * 红豆生南国，春来发几枝。
 * 愿君多采撷，此物最相思。
 */

class ReadBean{
  branchCount=0
  constructor(){}
  get metaphor(){
    return 'I miss you'
  }
}
class Mate{
  tem=0
  constructor(){}
  pike(beans:ReadBean){
    this.tem=beans.branchCount
  }
}
const you=new Mate()

function temp(){
  // 红豆生南国
  const myCountry={
    redBean:new ReadBean()
  }
  
  // 春来发几枝 : 几枝是指少于十枝还是指很多枝呢？
  if(new Date().getMonth()===0){
    myCountry.redBean.branchCount=Math.floor(Math.random()*10)
    // myCountry.redBean=Math.floor(Math.random()*3000)
  }
  // 愿君多采撷
  if(you){
    you.pike(myCountry.redBean)
  }
  // 此物最相思
  return myCountry.redBean.metaphor
}