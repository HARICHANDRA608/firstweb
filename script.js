const backPack ={
    name:"Every day backpack",
    volume:30,
    color:"gray",
    pocketNum: 15,
    starpLength :{
        left:26,
        right:26,
    },
    lidOpen:false,
    toggleLed:function(lidStatus){
        this.lidOpen=lidStatus;
    },
    newStrapLength:function(lenghtLeft,LengthRight){
        this.starpLength.left=lenghtLeft;
        this.starpLength.right=LengthRight;
    },
}