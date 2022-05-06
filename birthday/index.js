let fimalyArray=[
  
    {
        firstname:'Aman',
        middlename:'null',
        lastname:'Jakhar',
},
    {
        firstname:'Anjali',
        middlename:'null',
        lastname:'Kumari',

},
    {
        firstname:'Aidthy',
        middlename:'null',
        lastname:'Choudhary',

},
    {
        firstname:'Aryan',
        middlename:'null',
        lastname:'Jakhar',

},
    {
        firstname:'Arun',
        middlename:'null',
        lastname:'Jakhar',

},
    {
        firstname:'Anita',
        middlename:'null',
        lastname:'Devi',

},
{
    firstname:'Dilip',
    middlename:'Kumar',
        lastname:'Jakhar',

},
    {
        firstname:'Bholu',
        middlename:'Ram',
        lastname:'Jakhar',

},
    {
        firstname:'Garyshi',
        middlename:'lal',
        lastname:'Jakhar',

},
    {
        firstname:'Gulab',
        middlename:'null',
        lastname:'Devi',

},
    {
        firstname:'Honey',
        middlename:'null',
        lastname:'Jakhar',

},
    {
        firstname:'Hardev',
        middlename:'null',
        lastname:'Jakhar',

},
    {
        firstname:'Indra',
        middlename:'null',
        lastname:'Jakhar',

},
    {
        firstname:'Jadgish',
        middlename:'null',
        lastname:'Jakhar',

},
    {
        firstname:'Joginder',
        middlename:'Sing',
        lastname:'Jakhar',

},
    {
        firstname:'Kalu',
        middlename:'Ram',
        lastname:'Jakhar',

},
    {
        firstname:'Kamla',
        middlename:'null',
        lastname:'Devi',

},
{
        firstname:'Kamla',
        middlename:'null',
        lastname:'Devi',

},
    {
        firstname:'Kuldeep',
        middlename:'sing',
        lastname:'Jakhar',

},
    {
        firstname:'Kahnia',
        middlename:'Lal',
        lastname:'Jakhar',

},

    {
        firstname:'Meena',
        middlename:'null',
        lastname:'Jakhar',

},
    {
        firstname:'Manish',
        middlename:'null',
        lastname:'Jakhar',

},
    {
        firstname:'Mamta',
        middlename:'null',
        lastname:'Devi',

},
    {
        firstname:'Mohan',
        middlename:'null',
        lastname:'Jakhar',

},
    {
        firstname:'Madhan',
        middlename:'Lal',
        lastname:'Jakhar',

},
    {
        firstname:'Mukesh',
        middlename:'null',
        lastname:'Jakhar',

},
    {
        firstname:'Manbhar',
        middlename:'null',
        lastname:'Devi',

},
    {
        firstname:'Muna',
        middlename:'null',
        lastname:'Devi',

},
{
    firstname:'Neha',
    middlename:'null',
    lastname:'Jakhar',

},
{
    firstname:'Nathu',
    middlename:'Ram',
    lastname:'Jakhar',

},
{
    firstname:'Ojash',
    middlename:'null',
    lastname:'Jakhar',

},
{
    firstname:'Pooja',
    middlename:'null',
    lastname:'Jakhar',
    
},
{
    firstname:'Pawan',
    middlename:'null',
    lastname:'Jakhar',
    
},
{
    firstname:'Panchu',
    middlename:'Ram',
    lastname:'Jakhar',
    
},
{
    firstname:'Raj',
    middlename:'Kumar',
    lastname:'Jakhar',

},
{
    firstname:'Raju',
    middlename:'null',
    lastname:'Devi',

},
{
    firstname:'Suraj',
    middlename:'null',
    lastname:'Jakhar',

},
{
    firstname:'Sita',
    middlename:'Ram',
    lastname:'Jakhar',

},
{
    firstname:'Shogi',
    middlename:'Ram',
    lastname:'Jakhar',

},
{
    firstname:'Shanker',
    middlename:'Lal',
    lastname:'Jakhar',

},
{
    firstname:'Sunita',
    middlename:'null',
    lastname:'Devi',

},
{
    firstname:'Shoni',
    middlename:'null',
    lastname:'Devi',

},
{
    firstname:'Sonu',
    middlename:'null',
    lastname:'Jakhar',

},
{
    firstname:'Santi',
    middlename:'null',
    lastname:'Devi',

},
]
let allData=[
    {
     name:"",
     
}
]
 let res;  
let data=document.getElementById("select_value");
let lists=document.getElementById("lists");

function getvalue(){
    res=data.value;
    if(res.length==0){
        console.log('length:', res.length)
        
        lists.style.display='none'
    }else{

        lists.style.display='block'
    }
    console.log(res);
    let ul=document.createElement("ul");
    
    lists.innerHTML='';
    fimalyArray.forEach((item,index)=>{
        let li=document.createElement("li");
        if((res===item.firstname[0] || res===item.firstname
            +" "+item.lastname)   
            && item.middlename==='null'){
            console.log('firstname:', item.firstname[0])
            console.log("res[0]:",res[0])
           
                li.innerText=item.firstname+" "+item.lastname;
                li.addEventListener('click',function(){
                    console.log("hi",item.firstname,index)
                    data.value=item.firstname+" "+item.lastname;
                  lists.style.display='none';
                })
                ul.append(li)
                
            
        }
        else if((res[0]===item.firstname[0] ||res===item.firstname) && item.middlename!=='null'){
            li.innerText=item.firstname+" "+item.middlename+" "+item.lastname;
            li.addEventListener('click',function(){
                console.log("hi",item.firstname,index)
                data.value=item.firstname+" "+item.middlename+" "+item.lastname;
                lists.style.display='none';
                allData.name=data.value;
            })
            ul.append(li)

        }
       
    })
    lists.append(ul)
}


let pop=document.getElementById("search_btn")
let names=document.getElementById("name")
let main=document.getElementById('main')
let bac=document.getElementById('bac')

pop.addEventListener("click",function(){
    // z.style.webkit-filter="blur(8px)";
    console.log('allData:', allData)
    console.log("data:",data.value)
    names.innerHTML=data.value
    document.getElementsByClassName('popup')[0].classList.add("active")
//    document.getElementsByClassName('lolo')[0].classList.add("as")
    main.style.display='none';
    let img=document.createElement('img');
    
    img.src='https://images.pexels.com/photos/1780357/pexels-photo-1780357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    img.style.backgroundSize="1000px";
    img.style.width='100vw';
    img.style.height='100vh';
    img.style.backgroundRepeat='no repeat';
    img.style.filter='blur(5px)'
  
    bac.append(img)
    
})
let re=document.getElementById("diss");
re.addEventListener("click",function(){
    document.getElementsByClassName('popup')[0].classList.remove("active")
    main.style.display="block"
    bac.style.display='none';
    z.style.filter="blur(0px)";
   data.value='';

})