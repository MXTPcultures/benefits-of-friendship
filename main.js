var img = [];
var h = 50, s = 50, b = 50, a = [];
var capture; 
var video_1;
var W = 1080, H = 720;

function setup(){

    //money.setVolume(0.5);
    //money.play();

    createCanvas(W, H);
    colorMode(HSB, 100);

    midiController("korg");
    midiLog(true);

    capture = createCapture(VIDEO);
    capture.size(W, H);
    //capture.hide();

    for(i = 1; i <= 8; i++){
        file = "assets/" + i + ".jpg"
        img[i-1] = loadImage(file);  
        console.log(file);
    }
}

function draw(){
    clear();
    background(255);

    h = knob.one.value*100;
    s = knob.two.value*100;
    b = knob.thr.value*100;

    if(pad.one.pressed){
        a[0] = slider.one.value*100;
        tint(h, s, b, a[0]);
        image(capture, 0, 0, W, H); 
    }

    if(pad.two.pressed){
        a[1] = slider.two.value*100;
        tint(h, s, b, a[1]);
        image(img[0], 0, 0, W, H);
    }

    if(pad.thr.pressed){
        a[2] = slider.thr.value*100;
        tint(h, s, b, a[2]);
        image(img[1], 0, 0, W, H);
    }

    if(pad.fur.pressed){
        a[3] = slider.fur.value*100;
        tint(h, s, b, a[3]);
        image(img[2], 0, 0, W, H);
    }

    if(pad.fve.pressed){
        a[4] = slider.fve.value*100;
        tint(h, s, b, a[4]);
        image(img[3], 0, 0, W, H);
    }

    if(pad.six.pressed){
        a[5] = slider.six.value*100;
        tint(h, s, b, a[5]);
        image(img[4], 0, 0, W, H);
    }

    if(pad.svn.pressed){
        a[6] = slider.svn.value*100;
        tint(h, s, b, a[6]);
        image(img[5], 0, 0, W, H);
    }

    if(pad.eht.pressed){
        a[7] = slider.eht.value*100;
        tint(h, s, b, a[7]);
        image(img[6], 0, 0, W, H);
    }

    if(pad.nne.pressed){
        a[8] = slider.nne.value*100;
        tint(h, s, b, a[8]);
        image(img[7], 0, 0, W, H);
    }
}

