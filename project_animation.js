/*var st_1 = "Welcome you to my restaurant";
var st_2 = "Find our hottest dish there, ...";  type your text here 
var st_3 = "Our latest menu";
var arr_1 = st_1.split("");
var arr_2 = st_2.split("");
var arr_3 = st_3.split("");


function textLooper(id, st, text, time) {
    if (text.length > 0) {
        document.getElementById(id).innerHTML += text.shift();
        // document.getElementById('search_desc').innerHTML += arr_2.shift();
        // document.getElementById('articles_desc').innerHTML += arr_3.shift();
    } else {
        document.getElementById(id).innerHTML = "";
        // document.getElementById('search_desc').innerHTML = "";
        // document.getElementById('articles_desc').innerHTML = "";
        text = st.split("");
        // arr_2 = st_2.split("");
        // arr_3 = st_3.split("");
    }


    loopTimer = setTimeout('textLooper(id,st,text,time)', time);
}

textLooper('welcome_heading', st_1, arr_1, 70);
textLooper('welcome_heading', st_2, arr_2, 70);
textLooper('welcome_heading', st_3, arr_3, 70);
*/