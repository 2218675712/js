/**
 * 获取指定的时间
 * @param dt 日期的对象
 * @returns {string} 返回的是字符串的时间
 */
function getDate(dt) {
    //获取年
    var year=dt.getFullYear();
    //获取月
    var month=dt.getMonth()+1;
    //获取日
    var day=dt.getDate();
    //获取小时
    var hour=dt.getHours();
    //获取分钟
    var minutes=dt.getMinutes();
    //获取秒
    var seconds=dt.getSeconds();
    month=month<10?"0"+month:month;
    day=day<10?"0"+day:day;
    hour=hour<10?"0"+hour:hour;
    minutes=minutes<10?"0"+minutes:minutes;
    seconds=seconds<10?"0"+seconds:seconds;
    return year+"年"+month+"月"+day+"日 "+hour+":"+minutes+":"+seconds;
}