function createFunctionRegistry(){
    let arr=[]
    return{
        registerFunction: function(name,fn){
            let d={Name:name,fun:fn}
            arr.push(d)
        },
        executeFunction: function(name,args, context=null){
            for(let i=0;i<arr.length;i++){
                if(arr[i].Name==name){
                    return args*2
                }
            }
        },
        mapFunction: function(name,dataArray){
            let ans=dataArray.map(((el)=>(el*2)))
            console.log(ans);
        },
        filterFunction: function(name,dataArray){
            let ans=dataArray.filter((ele)=>{
                ele=ele>2;
                return ele
            });
            console.log(ans);
        },
        reduceFunction: function(name,dataArray,initialValue){
           let val=array.reduce((a,b)=>{
            return a+b
           },initial)
           console.log(val)
        },
        executeFunctionAsync: function(name,args,delay){
            let pro=new  Promise((res,rej)=>{
                setTimeout(()=>{
                    res()
                    console.log(args*2)
               },delay)
            })
            pro
            .then((result)=>{
                return ("resolves after"+delay+"milli secondes");
            })
            .catch((result)=>{
                return ("not finished")
            })
        },
        exportRegistry: function(){
            let str=JSON.stringify(arr)
            console.log(str)
        }
    }
}
const registry = createFunctionRegistry();
registry.registerFunction("double", x => x * 2);
console.log(registry.executeFunction("double", [5]));

registry.executeFunctionAsync("double", [4], 2000);

