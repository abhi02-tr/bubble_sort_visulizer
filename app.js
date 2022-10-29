let n = 10;
const arr = [];
const container = document.querySelector('.container');

const init = ()=>{
    for(let i=0; i<n; i++){
        arr[i] = Math.random()*100;
    }  
    showBars();
};

const play = ()=>{
    const copy = [...arr];
    const swaps = bubble_sort(copy);
    // showBars();
    animate(swaps);
};

const animate = (swaps)=>{
    if(swaps.length == 0) return;

    const [i,j] = swaps.shift();
    [arr[i], arr[j]] = [arr[j], arr[i]];
    showBars([i,j]);
    setTimeout(()=>{
        animate(swaps);
    },500);
    
};

for(let i=0; i<n; i++){
    arr[i] = Math.random()*100;
}


// bubble sort
const bubble_sort = (arr)=>{
    const swaps = [];
    for(let i=0; i<arr.length - 1; i++){
        for(let j=0; j<arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                swaps.push([j, j+1]);
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return swaps;
};

const showBars = (index)=>{
    container.innerHTML = '';
    for(let i=0; i<n; i++){
        const bar = document.createElement('div');
        bar.style.height = arr[i] + '%';
        // bar.style.width = '30px';
        // bar.style.backgroundColor = 'black';
        bar.classList.add('bar');

        if(index && index.includes(i)){
            bar.style.backgroundColor ='red'; 
        }

        container.appendChild(bar);
    }    
};

// showBars();
init();