let titleCount=1;
let totalPrice=0;

const cards = document.querySelectorAll('.card')

for(let i = 0; i < cards.length; i++){
    const card = cards[i];
    card.addEventListener('click', function(){
     
        // get the title
        const title = card.querySelector('h3').innerText;
        // get the price
        const priceText = card.querySelector('span').innerText;
        const price= priceText.split(' ');
        const priceNum = parseFloat(price[1]);
        
        // add to cart title

        const titleContainer=document.getElementById('title-container');
        const p = document.createElement('p');
        p.innerText= titleCount + '.' +  title;
        titleCount++
        titleContainer.appendChild(p);

        // add total price calculation
        const totalPriceSum= totalPrice+=priceNum;
        document.getElementById('totalPrice').innerText = totalPriceSum.toFixed(2);


    });
}

function addCoupon(){
    const getCoupon= document.getElementById('input-field').value;
    const coupon= getCoupon.split(' ').join('').toUpperCase();
    if(totalPrice>200){
        if(coupon==='SELL200'){
            const totalDiscount= (totalPrice*20) / 100;
            document.getElementById('discountPrice').innerText=totalDiscount.toFixed(2);

            // price with discount
            const total= totalPrice-totalDiscount;
            document.getElementById('total').innerText=total.toFixed(2);
        }
        else{
            alert('invalid coupon code')
        }
    }
    else{
        alert('Please spend upto 200 to use the coupon');
    }
}

function clearAll(){
    document.getElementById('title-container').innerText='';
    document.getElementById('total').innerText='';
    document.getElementById('discountPrice').innerText='';
    document.getElementById('totalPrice').innerText='';
    document.getElementById('input-field').value='';

    // purchase done
    document.getElementById('purchaseDone').classList.remove('hidden');
    document.getElementById('fullContent').classList.add('blur-sm')

    

}