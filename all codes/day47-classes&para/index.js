// classes are the blue print from that we make a house with it that blueprint

//class inclue two things state/properties and behaviour/functionality

class human{
    //properties
    #age=13;//public
    wt=16;
    ht=16;
    loc;
    constructor(newloc,newht,newage){
        this.ht=newht;
        this.loc=newloc;
        this.#age=newage;

    }

    //behaviour
    walking(){
        console.log("walk faster",this.#age)
    }
    running(){
        console.log("run faster")
    }

    #gender="male";//private
    get genderfetch(){
        return this.#gender;
    }
    get agefetch(){
        return this.#age;
    }

    set modifygender(val){
        this.#gender=val;
    }
}

let obj=new human(50,60,80);
console.log(obj.age);
console.log(obj.ht);
console.log(obj.loc);
obj.walking();
console.log(obj.agefetch);

//getter && setters



