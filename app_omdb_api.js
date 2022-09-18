const get_api_res_btn = document.getElementById('get_api_res_btn')
const api_result1 = document.getElementById('api_result1');
const api_result2 = document.getElementById('api_result2');
const api_result3 = document.getElementById('api_result3');
const api_result4 = document.getElementById('api_result4');
const userinput = document.getElementById('userinput');

get_api_res_btn.addEventListener('click', getAPI);
    function getAPI(){
        let endPoint = "http://www.omdbapi.com/?i=tt3896198&apikey=e6eaa636&t=" + userinput.value;
        fetch(endPoint, {
		method: 'GET'
	})
    .then(res => res.json())
    .then(data=> {
        api_result1.innerHTML="Title: " + data.Title;
        api_result2.innerHTML="Year: " + data.Year;
        api_result3.innerHTML="Director: " + data.Director;
        api_result4.innerHTML="Poster: <br>" + "<img src=" + data.Poster + ">";
    });
};
