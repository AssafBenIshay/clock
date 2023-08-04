const counter = document.createElement('div');
document.body.appendChild(counter)
counter.classList.add('counter')



function numerator(unit) {

    const digit = document.createElement('div')
    counter.appendChild(digit)
    digit.classList.add('digit')

    let ct = document.createElement('div')
    let cb = document.createElement('div')

    let line1 = document.createElement('div')
    let line2 = document.createElement('div')
    let line3 = document.createElement('div')
    let line4 = document.createElement('div')
    let line5 = document.createElement('div')
    let line6 = document.createElement('div')
    let line7 = document.createElement('div')

    ct.classList.add('container-top')
    cb.classList.add('container-bottom')

    digit.appendChild(ct)
    digit.appendChild(cb)

    ct.appendChild(line1)
    ct.appendChild(line2)
    ct.appendChild(line3)
    ct.appendChild(line4)
    cb.appendChild(line5)
    cb.appendChild(line6)
    cb.appendChild(line7)

    line1.classList.add('line','top')
    line2.classList.add('line','left')
    line3.classList.add('line','right')
    line4.classList.add('line','mid')
    line5.classList.add('line','left')
    line6.classList.add('line','right')
    line7.classList.add('line','bottom')

    function timer() {
        

        if (unit === 'sec') {
            const time = new Date()
            let seconds = time.getSeconds()
            let secs = seconds % 10
            if (secs === 0) { zero() }
            if (secs === 1) { one() }
            if (secs === 2) { two() }
            if (secs === 3) { three() }
            if (secs === 4) { four() }
            if (secs === 5) { five() }
            if (secs === 6) { six() }
            if (secs === 7) { seven() }
            if (secs === 8) { eight() }
            if (secs === 9) { nine() }
        } else if(unit === 'ten') {
            
        
            const time = new Date()
            let seconds = time.getSeconds()
            let secs = seconds % 10
            let tens = (seconds - secs) / 10
            if (tens === 0) { zero() }
            if (tens === 1) { one() }
            if (tens === 2) { two() }
            if (tens === 3) { three() }
            if (tens === 4) { four() }
            if (tens === 5) { five() }
            if (tens === 6) { six() }
            if (tens === 7) { seven() }
            if (tens === 8) { eight() }
            if (tens === 9) { nine() }
        }
        else if (unit === 'min') {
            const time = new Date()
            let minutes = time.getMinutes()
            let mins = minutes % 10
            
            if (mins === 0) { zero() }
            if (mins === 1) { one() }
            if (mins === 2) { two() }
            if (mins === 3) { three() }
            if (mins === 4) { four() }
            if (mins === 5) { five() }
            if (mins === 6) { six() }
            if (mins === 7) { seven() }
            if (mins === 8) { eight() }
            if (mins === 9) { nine() }
        }
        else if (unit === 'min10') {
            const time = new Date()
            let minutes = time.getMinutes()
            let mins = minutes % 10
            let mins10 = (minutes - mins) / 10
            if (mins10 === 0) { zero() }
            if (mins10 === 1) { one() }
            if (mins10 === 2) { two() }
            if (mins10 === 3) { three() }
            if (mins10 === 4) { four() }
            if (mins10 === 5) { five() }
            if (mins10 === 6) { six() }
            if (mins10 === 7) { seven() }
            if (mins10 === 8) { eight() }
            if (mins10 === 9) { nine() }
        } else {
            const time = new Date()
            
          console.log(time.getTime);  
        }

    }

    setInterval(timer, 1000)




    function zero() {
        //console.log("zero")

        line1.classList.add('top')

        line2.classList.add('left')

        line3.classList.add('right')

        line4.classList.remove('line','mid')

        line5.classList.remove('right')
        line5.classList.add('left')

        line6.classList.remove('bottom')
        line6.classList.add('right')

        line7.classList.add('line','bottom')

    }
    function one() {
        //console.log("one");
        line1.classList.remove('top')
        line1.classList.add('right')

        line2.classList.remove('line','left')

        line3.classList.remove('line','right')

        
        line5.classList.remove('left')
        line5.classList.add('right')

        line6.classList.remove('line','right')

        line7.classList.remove('line','bottom')

        

        
    }
    function two() {
        //console.log("two"); 

        line1.classList.remove('right')
        line1.classList.add('top')

        line2.classList.add('line','right')

        line3.classList.remove('line')
        line4.classList.add('line','mid')

        line5.classList.remove('right')
        line5.classList.add('left')

        line6.classList.add('line', 'bottom')
        line7.classList.remove('line')

    }
    function three() {
        //console.log('three');
        line1.classList.add('top')
        line2.classList.add('right')
        line3.classList.remove('line')
        line4.classList.add('mid')

        line5.classList.remove('left')
        line5.classList.add('right')
        line6.classList.add('bottom')
        line7.classList.remove('line')

        
    }
    function four() {
        //console.log("four ");

        line1.classList.remove('top')
        line1.classList.add('left')
        line2.classList.add('right')
        line3.classList.remove('line')
        line4.classList.add('mid')
        line5.classList.add('right')
        line6.classList.remove('line', 'bottom')
        line7.classList.remove('line')
        

    }
    function five() {
        //console.log(" five");

        line1.classList.remove('left')
        line1.classList.add('top')

        line2.classList.remove('right')
        line2.classList.add('left')

        line3.classList.remove('line')
        line4.classList.add('mid')
        line5.classList.add('right')
        line6.classList.add('line', 'bottom')
        line7.classList.remove('line')
        
    }
    function six() {
        //console.log("six ");
        line1.classList.add('top')
        line2.classList.add('left')
        line3.classList.remove('line')
        line4.classList.add('mid')
        line5.classList.add('right')
        line6.classList.add('bottom')
        line7.classList.add('line','left')
        
    }
    function seven() {
        //console.log("seven ");

        line1.classList.remove('top')
        line1.classList.add('left')

        line2.classList.remove('left')
        line2.classList.add('top')

        line3.classList.add('line','right')

        line4.classList.remove('line')

        line5.classList.add('right')
        line6.classList.remove('line')

        line7.classList.remove('line')

        
    }
    function eight() {
        //console.log("eight "); 

        line1.classList.remove('left')
        line1.classList.add('top')

        line2.classList.remove('top')
        line2.classList.add('left')
        line3.classList.add('right')

        line4.classList.add('line','mid')

        line5.classList.remove('right')
        line5.classList.add('left')

        line6.classList.add('line','right')

        line7.classList.add('line','bottom')

    }
    function nine() {
        //console.log("nine ");
        line1.classList.add('top')
        line2.classList.add('left')
        line3.classList.add('right')
        line4.classList.add('mid')
        line5.classList.remove('left')
        line5.classList.add('right')

        line6.classList.remove('right')
        line6.classList.add('bottom')

        line7.classList.remove('line')
    }
}


numerator('min10')
numerator('min')
const digit = document.createElement('div')
counter.appendChild(digit)
digit.classList.add('dots')
digit.innerHTML = ':'
numerator('ten')
numerator('sec')

















