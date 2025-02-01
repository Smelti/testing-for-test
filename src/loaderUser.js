import{httpGet} from './http.js';
export default function loadUser(id){
//bad practice
const data = httpGet('http://server:8080/users/1') //загружать файл по опред адресу
return JSON.parse(data) //и возвращать в качестве значения, данные
}