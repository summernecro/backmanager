var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

var example1 = new Vue({
    el: '#example-1',
    data: {
        message: 'Hello Vue!',
        itemss:[
            {
                items : [
                    {path:'http://222.186.36.75:8888/records/20180704/hdImg_8b438633165b0ade05acd6eea9c5b0ce1530701932157.jpg'},
                    {path:'http://222.186.36.75:8888/records/20180704/hdImg_8b438633165b0ade05acd6eea9c5b0ce1530701932157.jpg'},
                    {path:'http://222.186.36.75:8888/records/20180704/hdImg_8b438633165b0ade05acd6eea9c5b0ce1530701932157.jpg'},
                    {path:'http://222.186.36.75:8888/records/20180704/hdImg_8b438633165b0ade05acd6eea9c5b0ce1530701932157.jpg'},
                    {path:'http://222.186.36.75:8888/records/20180704/hdImg_8b438633165b0ade05acd6eea9c5b0ce1530701932157.jpg'}
                ],
            }
        ],
        index:0
    },
    methods:{

        getImags:function (num) {
            $.ajax({
                url:'http://222.186.36.75:8888/record/record/getAllRecordsStepwithLimit?atype=image&limit=25&pageindex='+num,
                type:'get',
                dataType:'json',
                success:function (data) {
                    example1.itemss= [];
                    for(i=0;i<data.data.length/5;i++){
                        var p0 = 'http://222.186.36.75:8888/records'+data.data[i*5].netpath.substring("E:\\record".length,data.data[i*5].netpath.length).replace("\\","/");
                        var p1 = 'http://222.186.36.75:8888/records'+data.data[i*5+1].netpath.substring("E:\\record".length,data.data[i*5+1].netpath.length).replace("\\","/");
                        var p2 = 'http://222.186.36.75:8888/records'+data.data[i*5+2].netpath.substring("E:\\record".length,data.data[i*5+2].netpath.length).replace("\\","/");
                        var p3 = 'http://222.186.36.75:8888/records'+data.data[i*5+3].netpath.substring("E:\\record".length,data.data[i*5+3].netpath.length).replace("\\","/");
                        var p4 = 'http://222.186.36.75:8888/records'+data.data[i*5+4].netpath.substring("E:\\record".length,data.data[i*5+4].netpath.length).replace("\\","/");
                        //$("#p11").append(p0+p1+p2+p3);
                        example1.itemss.push({
                            items : [
                                {path:p0},
                                {path:p1},
                                {path:p2},
                                {path:p3},
                                {path:p4}
                            ],
                        });
                    }
                },
                error : function(){
                    var v = '错误';

                }
            });
        },
        gotoImg:function (event) {
            //alert(event.target.src);
            window.open(event.target.src)
        }

    }
});

var example2 = new Vue({
    el: '.d1',
    data: {
        name: 'Vue.js'
    },
    // 在 `methods` 对象中定义方法
    methods: {
        leftClick:function () {
            example1.index= example1.index-1;
            app.message = example1.index;
            example1.getImags(example1.index);
        },
        rightClick:function () {
            example1.index= example1.index+1;
            app.message = example1.index;
            example1.getImags(example1.index);
        }
    }
})
example1.getImags(0);
app.message = example1.index;

window.onload = function () {
    // x = document.getElementById("title").getElementsByTagName("ul")[0].getElementsByTagName("li");
    // y = document.getElementById("content").children;
    // for(var i =0;i<x.length;i++){
    //     x[i].index = i;
    //     x[i].onclick = function () {
    //         for(var j=0;j<y.length;j++){
    //             y[j].className = "hide";
    //             x[j].className = "off";
    //         }
    //         this.className = "on";
    //         y[this.index].className = "show";
    //     };
    // }
}