const setTheme=async(types)=> await localStorage.setItem('theme',types);
const getTheme=()=>localStorage.getItem('theme')??'dark';
const deleteTheme=()=>localStorage.removeItem('theme');


module.exports = {setTheme,getTheme,deleteTheme};