// const DOMAIN = 'http://47.94.17.117:3000/game'; 
const DOMAIN = 'https://api.punengshuo.com/api/game'; 
$(function(){

    getRankinglist();
    /* 设置用户名 */
    if(!localStorage.getItem('_userinfo')){
        console.log('a')
        $.get(DOMAIN+'/nickname', ( res, status) =>{
            if(!status === 'success') return
            let name = res.data;
            localStorage.setItem('_userinfo',name);

            $('#userName').val(localStorage.getItem('_userinfo'));
            // 访问量
            $.get(DOMAIN+'/visit?name='+localStorage.getItem('_userinfo'),(res)=>{})
        })
        
    }else{
        console.log('b')
        $('#userName').val(localStorage.getItem('_userinfo'));
        // 访问量
        $.get(DOMAIN+'/visit?name='+localStorage.getItem('_userinfo'),(res)=>{})
    }
   
    // 点击修改用户名
    $('#submit').click(res=>{

        $.ajax({
            type: "POST",
            url: DOMAIN+'/modifyUsername',
            // The key needs to match your method's input parameter (case-sensitive).
            data: JSON.stringify( {'name':$('#userName').val()}),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(res){
                if(res.code === 200 ){
                    localStorage.setItem('_userinfo',$('#userName').val())
                    _Main.userName = $('#userName').val()
                    toast('修改成功');
                }else{
                    toast('用户名已使用');
                }
            },
            error: function(errMsg) {
               console.log(errMsg);
            }
        });

    })

})
function updataRankinglist(value,name,fn){
    if(value<1)return
    // $.post(DOMAIN+'/savePlaneRank',
    // {'username':name,'coin':value}, ( res, status) =>{
    //     if(res.code === 1){
    //         getRankinglist(function(data){
    //             if(fn)fn(data);
    //         });
    //     }
    // }, "application/json; charset=utf-8")

    $.ajax({
        type: "POST",
        url: DOMAIN+'/savePlaneRank',
        // The key needs to match your method's input parameter (case-sensitive).
        data: JSON.stringify( {'username':name,'coin':value}),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(res){
            if(res.code === 200 ){
                getRankinglist(function(data){
                    if(fn)fn(data);
                });
            }
        },
        error: function(errMsg) {
           console.log(errMsg);
        }
    });
}
function getRankinglist(fn){
    /* 获取排行榜数据 */
    $.get(DOMAIN+'/queryPlaneRank', (res, status) =>{
        if(status === 'success' && res.code === 200){
            console.log(res)
            $('.ranking-list').html('');
            let wrapper_tr = '';
            res.data.forEach(( item ,index) => {
                wrapper_tr += `<tr>
                    <td class='cup'>${index>2?index+1:''}</td>
                    <td>${item.username}</td>
                    <td>${item.coin}</td>
                    <td>${item.createDt}</td>
                </tr>`;
            });
            sessionStorage.setItem('rankinglist',JSON.stringify(res.data));
            $('.ranking-list').append(wrapper_tr);
            if(fn)fn(res.data);
        }
    })
}
/* 
    game/top/rankingList  获取排行榜数据
    game/top/updata  更新排行榜数据
    game/users/set?name=34 查看用户名是否已使用
*/
