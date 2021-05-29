export const getOffer=(offer)=>{
    return fetch('http://localhost:4000/get',{
        method:"POST",
        headers:{
            Accept:"application/json",
            "content-Type":"application/json"
        },
        body:JSON.stringify(offer)
    }).then((res)=>{
        console.log(res);
        return res.json()
    }).catch((err)=>console.log(err))
}

export const addOffer=(offer)=>{
    return fetch('http://localhost:4000/coupon/add',{
        method:"POST",
        headers:{
            Accept:"application/json",
            "content-Type":"application/json"
        },
        body:JSON.stringify(offer)
    }).then((res)=>res.json()).catch((err)=>console.log(err))
}