export default class Cl_suscriptores {
    constructor (cedula,tipoPlan){
        this.cedula = cedula;
        this.tipoPlan = tipoPlan;
    }
    set cedula(cedula){
        this._cedula = cedula
    }
    get cedula(){
        return this._cedula
    }
    set tipoPlan(tipoPlan){
        this._tipoPlan = tipoPlan
    }
    get tipoPlan(){
        return this._tipoPlan
    }
    pagoSuscriptor() {
        switch (this.tipoPlan) {
            case "A":
                return 3.3;
            case "B":
                return 5.5;
            case "C":
                return 10.0;
        }
    }
}