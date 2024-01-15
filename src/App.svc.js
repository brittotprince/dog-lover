export const getData = async () =>{
    const promiseComplete = await fetch("https://dog.ceo/api/breeds/image/random")
    const data = await promiseComplete.json()
    console.log(data)
    return data
}