<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 p-2">
                <div class="card cardRounded cardShadow">
                    <div class="card-header p-0">
                        <img :src="info.photo.url" class="card-img-top">
                    </div>
                    <div class="card-body text-right ProductTitle py-2" dir="rtl">
                        <span class="card-title Product-name">{{info.name}}</span>
                    </div>
                    <div class="card-body text-right ProductSubTitle py-1" dir="rtl">
                        <span class="card-text text-muted Vendor-name">{{info.vendor.name}}</span>
                    </div>
                    <div class="card-body text-right pb-2 row flex-row-reverse ">
                        <div class="col-auto pr-1">
                            <p class="badge badgePink badge-pill p-2 takhfif">{{info.score.score/20}}</p>
                        </div>
                        <div class="col-auto pl-1">
                            <del class="primary-price">{{info.primaryPrice}}</del>
                        </div>
                    </div>
                    <div class="card-body text-right py-1 row d-flex justify-content-between" dir="rtl">
                         <div class="col-auto">
                        </div> 
                        <div class="col-auto">
                            <div class="primary-pric">
                                <h3 class="PriceForSale">{{info.price}}</h3>
                                <h4 class="currency-unit">
                                    <span class="currency">توما</span>
                                    <span class="currency2">ن</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>

export default {
  name: 'ProductContainer',
  props:['info'],
  
 
}
</script>

<style scoped>
.card-title{
  overflow: hidden;
}
.card-container{
    height: 22.2em;
    width: 13.3em;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    position: absolute;
    left: 50%;
    top: 25%;
}
.Product-name{
    direction: rtl;
    margin-right: -10px;
    font-size: 0.9em;
    margin-top: 0px;
    color: rgba(62, 62, 62, 1);
    font-weight: 500;
}
.Vendor-name{
    direction: rtl;
    margin-right: -10px;
    font-size: 0.9em;
    margin-top: -9px;
    color: rgba(125, 125, 125, 1);
    font-weight: 500;
}
.takhfif{
    width: 40px;
    height: 25px;
    border-radius: 15px;
    background-color: rgba(226, 76, 108, 1);
    color: rgba(255, 255, 255, 1);
   font-size: 1em;
    padding: 3px;
    text-align: center;
}
.primary-price{
    color: rgba(125, 125, 125, 1);
    font-size: 1em;
    padding: 6px;
}

.primary-price-takhfif{
    width: 100%;
    display: flex;
    font-weight: 500;
    
}
.takhfif span{
    margin-top: 2px;
}
.PriceForSale {
    color: rgba(83, 83, 83, 1);
    font-size:1.3em;
    
  }
  .currency {
    color: rgba(62, 62, 62, 1);
    padding-right: 5px;
  }
  .currency2 {
    color: rgba(62, 62, 62, 1);
    position: absolute;
    top: -9px;
    left: 7px;
    font-size: 0.625em;
    font-weight: 600;
  }
  img{
    border-radius: 20px 20px 0px 0px;
  }
  .currency-unit {
    font-weight: 600;
    position: relative;
    margin-left: 10px;
  }
   .primary-pric{
       direction: rtl;
       display: flex;
       justify-content: flex-end;
       margin-top: -10px;
       margin-left: -15px;
   }


   .cardRounded{
     border-radius: 25px !important;
 }

 .cardShadow {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }
  
  .cardShadow:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  .ProductTitle{
    text-overflow: ellipsis;
    overflow: hidden; 
    white-space: nowrap;
    font-weight: 600;
    font-size: 1.1em;
  }

  .ProductSubTitle{
    text-overflow: ellipsis;
    overflow: hidden; 
    white-space: nowrap;
    font-weight: 400;
    font-size: .9em;
  }
  .badge{
      line-height:0.7 !important;
  }
  .badgePink{
      background-color:#E24C6C;
    color:white
  }
  .elipseLight{
      color:lightgray;
      cursor: pointer;
  }
  .elipseLight:hover{
      color:gray
  }
  


</style>