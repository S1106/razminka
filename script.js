'use strict';

class Floor {
    constructor(ul) {
        this.ul = document.querySelector(ul);
        this.li = this.ul.querySelectorAll('li');
    }

    putUp() {
       this.d = [];
        // console.log(Math.floor(Math.random()*this.li.length));

        let i = 0;
        while (i<this.li.length) {
            let s = Math.floor(Math.random()*this.li.length);
            
            if (this.d.indexOf(s) == -1) {
                this.d.push(s);
                i++;
            }
           
        }
        console.log(this.d)
    }

    random() {
        this.li.forEach((item,index)=> {
            item.style.order = this.d[index];
            // item.innerText = this.d[index];
            item.style.backgroundColor = this.color();          
        });
    }

    color() {
        let r1 = Math.floor(Math.random()*255);
        let r2 = Math.floor(Math.random()*255);
        let r3 = Math.floor(Math.random()*255);
        return `rgb(${r1},${r2},${r3})`;  
    }

    init() {
        console.dir(this);
        this.putUp();
        this.random();
        document.querySelector('body').addEventListener('mouseup',this.random.bind(this));
    }
}