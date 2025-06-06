const pairs = {
 "1": {
  "So": {
   "1": {
    "A": "1s_huf.mp3",
    "B": "1s_hum.mp3"
   },
   "2": {
    "A": "1s_huf.mp3",
    "B": "1s_vxf.mp3"
   },
   "3": {
    "A": "1s_huf.mp3",
    "B": "1s_vxm.mp3"
   },
   "4": {
    "A": "1s_hum.mp3",
    "B": "1s_vxf.mp3"
   },
   "5": {
    "A": "1s_hum.mp3",
    "B": "1s_vxm.mp3"
   },
   "6": {
    "A": "1s_vxf.mp3",
    "B": "1s_vxm.mp3"
   }
  },
  "Te": {
   "1": {
    "A": "1t_huf.mp3",
    "B": "1t_hum.mp3"
   },
   "2": {
    "A": "1t_huf.mp3",
    "B": "1t_vxf.mp3"
   },
   "3": {
    "A": "1t_huf.mp3",
    "B": "1t_vxm.mp3"
   },
   "4": {
    "A": "1t_hum.mp3",
    "B": "1t_vxf.mp3"
   },
   "5": {
    "A": "1t_hum.mp3",
    "B": "1t_vxm.mp3"
   },
   "6": {
    "A": "1t_vxf.mp3",
    "B": "1t_vxm.mp3"
   }
  }
 },
 "2": {
  "So": {
   "1": {
    "A": "2s_huf.mp3",
    "B": "2s_hum.mp3"
   },
   "2": {
    "A": "2s_huf.mp3",
    "B": "2s_vxf.mp3"
   },
   "3": {
    "A": "2s_huf.mp3",
    "B": "2s_vxm.mp3"
   },
   "4": {
    "A": "2s_hum.mp3",
    "B": "2s_vxf.mp3"
   },
   "5": {
    "A": "2s_hum.mp3",
    "B": "2s_vxm.mp3"
   },
   "6": {
    "A": "2s_vxf.mp3",
    "B": "2s_vxm.mp3"
   }
  },
  "Te": {
   "1": {
    "A": "2t_huf.mp3",
    "B": "2t_hum.mp3"
   },
   "2": {
    "A": "2t_huf.mp3",
    "B": "2t_vxf.mp3"
   },
   "3": {
    "A": "2t_huf.mp3",
    "B": "2t_vxm.mp3"
   },
   "4": {
    "A": "2t_hum.mp3",
    "B": "2t_vxf.mp3"
   },
   "5": {
    "A": "2t_hum.mp3",
    "B": "2t_vxm.mp3"
   },
   "6": {
    "A": "2t_vxf.mp3",
    "B": "2t_vxm.mp3"
   }
  }
 },
 "3": {
  "So": {
   "1": {
    "A": "3s_huf.mp3",
    "B": "3s_hum.mp3"
   },
   "2": {
    "A": "3s_huf.mp3",
    "B": "3s_vxf.mp3"
   },
   "3": {
    "A": "3s_huf.mp3",
    "B": "3s_vxm.mp3"
   },
   "4": {
    "A": "3s_hum.mp3",
    "B": "3s_vxf.mp3"
   },
   "5": {
    "A": "3s_hum.mp3",
    "B": "3s_vxm.mp3"
   },
   "6": {
    "A": "3s_vxf.mp3",
    "B": "3s_vxm.mp3"
   }
  },
  "Te": {
   "1": {
    "A": "3t_huf.mp3",
    "B": "3t_hum.mp3"
   },
   "2": {
    "A": "3t_huf.mp3",
    "B": "3t_vxf.mp3"
   },
   "3": {
    "A": "3t_huf.mp3",
    "B": "3t_vxm.mp3"
   },
   "4": {
    "A": "3t_hum.mp3",
    "B": "3t_vxf.mp3"
   },
   "5": {
    "A": "3t_hum.mp3",
    "B": "3t_vxm.mp3"
   },
   "6": {
    "A": "3t_vxf.mp3",
    "B": "3t_vxm.mp3"
   }
  }
 }
}
const listlen = 6;
const urllist = {
    "1":{"So":"https://docs.google.com/forms/d/e/1FAIpQLSdmrViutbc3WCRDROVogNmwWgPHHWNTXTJnVkT3zW7lXcn0KA/viewform?embedded=true", "Te":"https://docs.google.com/forms/d/e/1FAIpQLScnUDx58qlPpb_6YKnuHPBfsmDSIjt1iE1HBM5r5uG3hulv1A/viewform?embedded=true"},
    "2":{"So":"https://forms.gle/5Z7BtAWS7LaoD3LQ7?embedded=true", "Te":"https://forms.gle/zxMaWsHijFih8VHV8?embedded=true"},
    "3":{"So":"https://forms.gle/KvqaqGPZ4Z6xxe12A?embedded=true", "Te":"https://forms.gle/ABnHyHqL9Zzf4K6T9?embedded=true"},
}
const typeMap = {
    0: "1",
    1: "2",
    2: "3"
};
const sectorMap = {
    0:"So",
    1:"Te"
}

const typenum =3;

function load(){
    if (!localStorage.getItem("Sel_type")) {
        alert("左上のボタンから、注意事項を確認してください");
        type=Math.floor( Math.random() * typenum );
        localStorage.setItem("Sel_type", String(type));//回答するアンケートの識別番号(0,1,2……)
    }
    document.getElementById("QCounter").innerText = "パート"+String(sector+1)+"回答番号"+String(i+1);
    
    const divA = document.getElementById("audioA");
    const divB = document.getElementById("audioB");
    divA.innerHTML = '';
    divB.innerHTML = '';
    const audioA = new Audio("./audio/"+typeMap[type]+"/"+sectorMap[sector]+"/"+pairs[typeMap[type]][sectorMap[sector]][String(i+1)]["A"]);
    audioA.controls = true;
    audioA.volume = 0.8;
    divA.appendChild(audioA);
    const audioB = new Audio("./audio/"+typeMap[type]+"/"+sectorMap[sector]+"/"+pairs[typeMap[type]][sectorMap[sector]][String(i+1)]["B"])
    audioB.controls = true;
    audioB.volume = 0.8;
    divB.appendChild(audioB);

    const prev = document.getElementById("prev");
    const partprev = document.getElementById("partprev");
    if(i==0){
        partprev.disabled=false;
        prev.disabled = true;
        console.log(String("a"+i))
    }else
    {
        partprev.disabled =true;
        prev.disabled =false;
    }
    
    const next = document.getElementById("next");
    const partnext = document.getElementById("partnext");
    if(i==listlen-1){
        partnext.disabled=false;
        next.disabled=true;
    }else
    {
        partnext.disabled=true;
        next.disabled =false;
    }
    console.log(String("b"+i))

    localStorage.setItem("i", String(i));
    localStorage.setItem("sector", String(sector));
}

function next(){
    if(i<listlen-1){
        i+=1;
        load()
    }
}

function prev(){
    if(i>0){
        i-=1;
        load()
    }
}

function partprev(){
    if(sector>0){
        if(confirm("本当によろしいですか？")){
            sector-=1;
            i=listlen-1;
            load()
            formchange()
        }
    }
}

function partnext(){
    if(sector<1){
        if(confirm("本当によろしいですか？")){
            sector+=1;
            i=0;
            load()
            formchange()
        }
    }
}

function openQA() {
    document.getElementById("popupModal").style.display = "block";
}

function closeQA() {
    document.getElementById("popupModal").style.display = "none";
}

function formchange(){
    console.log("I'm done!");
    const container = document.getElementById('formbox');
    container.innerHTML ="";
    const iframe = document.createElement('iframe');
    iframe.src = urllist[typeMap[type]][sectorMap[sector]]; 
    iframe.width = '100%';
    iframe.height="1106";
    iframe.style.border = 'none';
    iframe.id = 'thisform'; 

    container.appendChild(iframe);
}

window.onload = function() {
  load()
  formchange()
};


type=Number(localStorage.getItem("Sel_type"));
i=Number(localStorage.getItem("i"));
sector=Number(localStorage.getItem("sector"))

var textarea = document.querySelector('#formbox');
textarea.scrollTop = 1;

window.addEventListener('touchmove', function(event) {
  if (event.target === textarea && textarea.scrollTop !== 0 && textarea.scrollTop + textarea.clientHeight !== textarea.scrollHeight) {
    event.stopPropagation();
  }
  else {
    event.preventDefault();
  }
});

textarea.addEventListener('scroll', function(event) {
  if (textarea.scrollTop === 0) {
    textarea.scrollTop = 1;
  }
  else if (textarea.scrollTop + textarea.clientHeight === textarea.scrollHeight) {
    textarea.scrollTop = textarea.scrollTop - 1;
  }
});
