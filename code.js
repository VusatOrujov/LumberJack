var n=300;
var k=(location.hash || "").substr(1),
    k=k.replace(/[\?&].*/g,"");
function gb(a,c,b){
    var e=new XMLHttpRequest,arr=[],indf;
    for(ind in c) arr.push(encodeURIComponent(ind)+"="+encodeURIComponent(c[ind]));
    e.onreadystatechange=function(){
        4==e.readyState && 200==e.status && b(JSON.parse(e.responseText))
    };
    e.open("POST",a,!0);
    e.send(arr.join("&"))
}
gb("/api/setScore",{
    data:k,score:n || 0
},function(a){
    console.log("Success");
    console.log(a);
});
