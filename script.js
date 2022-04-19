const type = {
	"local" : localStorage,
	"session" : sessionStorage
};

class Storage{
	constructor(nameKey, typeStorage, defaultValue) {
		this.INPUTDATA = {
			name : nameKey,
			storage : type[typeStorage],
			value :defaultValue
		};
		this.INPUTDATA.storage.setItem(this.INPUTDATA.name, this.INPUTDATA.value);
	}
	get(){
		return this.INPUTDATA.storage.getItem(this.INPUTDATA.name)
	}
	set(value){
		value = JSON.stringify(value);
		this.INPUTDATA.storage.setItem(this.INPUTDATA.name, value);
	}
	clear(){
		this.INPUTDATA.storage.removeItem(this.INPUTDATA.name)
	}
	isEmpty(){
		if(this.get() == "null" || this.get() == "undefined"){
			return true;
		}
		return false;
	}
}

let moscow = new Storage("moscow", "local", null);
moscow.set('russia');
// moscow.clear();
console.log(moscow.isEmpty());
let kiev = new Storage("stambul","session", "turkish")