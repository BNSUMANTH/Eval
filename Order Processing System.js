function createOrderManager(){
    let arr=[]
    return{
    addOrder : function(order){
       arr.push(order);
    },
    updateOrder: function(id,newStatus){
      let ans=arr.map((el,i)=>{
        if(el.id==id){
            return (el.status=newStatus)
        }
      })
        arr=ans;
    },
    filterOrders:function(status){
        arr.filter((el,i)=>{
            if(el.status==status){
                console.log(el);
            }
        })
    },
    sortOrders:function(by){
        if(by=="date"){
            let ans1=arr;
            let ans=ans1.sort((a,b)=>(a.status.localeCompare(b.status)))
            console.log(ans)
        }
    },
    getTotalRevenue: function(){
        let temp=[];
        let ans=arr.filter((el,i)=>{
            temp.push(el.items);
        })
        price=[]
        qua=[]
        for(let i=0;i<temp.length;i++){
            price.push(temp[i][0].price);
            qua.push(temp[i][0].qua);
        }
        let sum=0;
        for(let i=0;i<price.length;i++){
            sum+=(price[i]*qua[i]);
        }
        return sum;
    },
    exportOrders: function(privateorderlist){
        let exported=JSON.stringify(arr);
        return exported;
    }
    }
}
const manager = createOrderManager();
manager.addOrder({ id: 1, customerName: "Alice", items: [{ name: "Laptop", price: 1000, quantity: 1 }], status: "pending", createdAt: new Date("2024-03-01") });
manager.addOrder({ id: 2, customerName: "Bob", items: [{ name: "Phone", price: 500, quantity: 2 }], status: "shipped", createdAt: new Date("2024-03-02") });
console.log(manager.filterOrders("pending"));

console.log(manager.getTotalRevenue());

