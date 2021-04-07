module.exports=class Account{
    constructor(owner,balance){
        this.owner=owner;
        this.balance=0;
    }
    credit(amt){
        this.balance+=amt;
    }
    describe(){
        return `Owner:${this.owner},balance:${this.balance}`;
    }
};
