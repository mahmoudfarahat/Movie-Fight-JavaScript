const fetchData = async () => {
const response = await axios.get('http://www.omdbapi.com/',{
    params:{
        apikey: 'db72eef7',
        s:'avengers'
    }
});

console.log(response.data)
}