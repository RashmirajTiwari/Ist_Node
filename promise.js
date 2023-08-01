

    // let promise1 = new Promise((resolve, reject) => {
    //     resolve("a");
    // });
     
    // let promise2 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve("b");
    //     }, 1000);
    // });
    // let promise3 = new Promise((resolve, reject) => {
    //     resolve("c");
    // });
     
    // let promise4 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve("d");
    //     }, 1000);
    // });
    // let promise5 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve("e");
    //     }, 1000);
    // });
     
    // Promise.all([promise1, promise2,promise3,promise4,promise5])
    //     .then((result)=>{
    //         result.forEach(element => {
    //         console.log(element)
    //     })})

   async function fetchData(){

    let promise1 = new Promise((resolve, reject) => {
        resolve("b");
    });
     
    let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("c");
        }, 1000);
    });
    let promise3 = new Promise((resolve, reject) => {
        resolve("d");
    });

    console.log('a')
    await Promise.all([promise1, promise2,promise3])
    .then((result)=>{
        result.forEach(element => {
        console.log(element)
    })})

    console.log('e')
}
fetchData();